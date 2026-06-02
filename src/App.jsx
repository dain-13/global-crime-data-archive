import { useMemo, useState } from 'react'
import { features } from './data'
import datasets from './datasets'

const FILTERS = {
  population: ['Adults', 'Youth', 'Children', 'Women', 'Young adults', 'Parents', 'Mixed population'],
  design: ['Longitudinal', 'Cross-sectional', 'Repeated cross-sectional', 'Administrative data', 'Panel', 'Birth cohort', 'Developmental cohort', 'Mixed'],
  dataType: [
    'Official statistics',
    'Survey',
    'Panel data',
    'Administrative records',
    'Microdata',
    'Risk behavior survey',
    'Substance use survey',
    'Mental health survey',
    'Developmental cohort',
    'Neuroimaging data',
    'School survey',
    'Data archive',
    'Dashboard',
    'API',
    'Victimization survey',
    'Criminal justice statistics',
    'Police-recorded crime',
    'Statistics portal',
    'Data portal',
    'Open data',
    'Report',
    'Web table',
    'Web analysis tool',
    'Research data',
    'Health survey',
    'International statistics',
  ],
  access: ['Public', 'Application required', 'Registration required', 'View-only', 'Restricted versions available', 'Public tables', 'Data use application', 'Check source'],
}


const FILTER_OPTION_LABELS_KO = {
  Adults: '성인',
  Youth: '청소년',
  Children: '아동',
  Women: '여성',
  'Young adults': '청년',
  Parents: '부모',
  'Mixed population': '혼합 대상',
  Longitudinal: '종단자료',
  'Cross-sectional': '횡단자료',
  'Repeated cross-sectional': '반복횡단자료',
  'Administrative data': '행정자료',
  Panel: '패널자료',
  'Birth cohort': '출생코호트',
  'Developmental cohort': '발달코호트',
  Mixed: '혼합설계',
  'Official statistics': '공식통계',
  Survey: '조사자료',
  'Panel data': '패널데이터',
  'Administrative records': '행정기록자료',
  Microdata: '마이크로데이터',
  'Risk behavior survey': '위험행동 조사',
  'Substance use survey': '물질사용 조사',
  'Mental health survey': '정신건강 조사',
  'Neuroimaging data': '신경영상 자료',
  'School survey': '학교기반 조사',
  'Data archive': '데이터 아카이브',
  Dashboard: '웹 대시보드',
  API: 'API',
  'Victimization survey': '범죄피해조사',
  'Criminal justice statistics': '형사사법통계',
  'Police-recorded crime': '경찰기록범죄',
  'Statistics portal': '통계포털',
  'Data portal': '데이터 포털',
  'Open data': '오픈데이터',
  Report: '보고서',
  'Web table': '웹 통계표',
  'Web analysis tool': '웹 분석도구',
  'Research data': '연구자료',
  'Health survey': '건강조사',
  'International statistics': '국제통계',
  Public: '공개',
  'Application required': '신청 필요',
  'Registration required': '회원가입 필요',
  'View-only': '조회만 가능',
  'Restricted versions available': '제한자료 있음',
  'Public tables': '공개 통계표',
  'Data use application': '자료 이용신청',
  'Check source': '출처 확인 필요',
}

const COUNTRY_LABELS_KO = {
  'South Korea': '대한민국',
  'United States': '미국',
  'United Kingdom': '영국',
  Germany: '독일',
  Canada: '캐나다',
  Japan: '일본',
  Australia: '호주',
  International: '국제',
  'European Union': '유럽연합',
  Scotland: '스코틀랜드',
  'Northern Ireland': '북아일랜드',
  France: '프랑스',
  Sweden: '스웨덴',
  Netherlands: '네덜란드',
  Spain: '스페인',
  'New Zealand': '뉴질랜드',
}

function optionLabel(value, language) {
  if (language === 'en') return value
  return FILTER_OPTION_LABELS_KO[value] || COUNTRY_LABELS_KO[value] || value
}

function filterChipLabel(chip, language) {
  if (typeof chip === 'string') return optionLabel(chip, language)
  return language === 'en' ? chip.label_en : chip.label_ko
}

const INITIAL_FILTERS = {
  query: '',
  country: 'All',
  population: 'All',
  design: 'All',
  dataType: 'All',
  access: 'All',
  researchLabel: 'All',
}

const FEATURED_COUNTRY_LIST = [
  { code: 'KR', name_en: 'South Korea', name_ko: '대한민국', value: 'South Korea' },
  { code: 'US', name_en: 'United States', name_ko: '미국', value: 'United States' },
  { code: 'UK', name_en: 'United Kingdom', name_ko: '영국', value: 'United Kingdom' },
  { code: 'INT', name_en: 'International', name_ko: '국제', value: '__INTERNATIONAL__' },
]

const MAP_PIN_COUNTRY_LIST = [
  { code: 'KR', name_en: 'South Korea', name_ko: '대한민국', value: 'South Korea' },
  { code: 'US', name_en: 'United States', name_ko: '미국', value: 'United States' },
  { code: 'UK', name_en: 'United Kingdom', name_ko: '영국', value: 'United Kingdom' },
  { code: 'DE', name_en: 'Germany', name_ko: '독일', value: 'Germany' },
  { code: 'CA', name_en: 'Canada', name_ko: '캐나다', value: 'Canada' },
  { code: 'JP', name_en: 'Japan', name_ko: '일본', value: 'Japan' },
  { code: 'AU', name_en: 'Australia', name_ko: '호주', value: 'Australia' },
  { code: 'INT', name_en: 'International', name_ko: '국제', value: '__INTERNATIONAL__' },
]

const RESEARCH_LABEL_EXAMPLES = [
  { en: 'Crime & delinquency', ko: '범죄·비행' },
  { en: 'Criminal justice', ko: '형사사법' },
  { en: 'Addiction & substance use', ko: '중독·물질사용' },
  { en: 'Mental health', ko: '정신건강' },
  { en: 'Problem behavior', ko: '문제행동' },
]


const RESEARCH_LABEL_KO_TO_EN = Object.fromEntries(
  RESEARCH_LABEL_EXAMPLES.map((label) => [label.ko, label.en]),
)

const RESEARCH_LABEL_EN_TO_KO = Object.fromEntries(
  RESEARCH_LABEL_EXAMPLES.map((label) => [label.en, label.ko]),
)

function normalizeResearchLabel(label) {
  if (!label) return null
  return RESEARCH_LABEL_KO_TO_EN[label] || label
}

function researchLabelDisplay(label, language) {
  const normalized = normalizeResearchLabel(label)
  if (!normalized) return ''
  return language === 'en' ? normalized : RESEARCH_LABEL_EN_TO_KO[normalized] || normalized
}

function getDatasetResearchLabels(dataset) {
  const labels = [
    ...(dataset.researchLabels_en || []),
    ...(dataset.domains_en || []),
    ...(dataset.researchLabels_ko || []),
    ...(dataset.domains_ko || []),
  ]
    .map(normalizeResearchLabel)
    .filter(Boolean)

  return Array.from(new Set(labels))
}


const LANDSCAPE_COUNTRIES = [
  { value: 'South Korea', code: 'KR', name_en: 'South Korea', name_ko: '대한민국' },
  { value: 'United States', code: 'US', name_en: 'United States', name_ko: '미국' },
  { value: 'United Kingdom', code: 'UK', name_en: 'United Kingdom', name_ko: '영국' },
]

const DATA_LANDSCAPES = {
  'South Korea': {
    title_en: 'South Korea data landscape',
    title_ko: '대한민국 데이터 제공 구조',
    summary_en: 'Korean crime-related data are distributed across official administrative statistics, court and correctional statistics, research-institute microdata, and health or behavioral surveys useful for crime-related research.',
    summary_ko: '한국의 범죄 관련 데이터는 경찰·검찰·법원·법무부의 공식 행정통계, 연구기관 마이크로데이터, 청소년·건강·문제행동 조사자료로 나뉘어 제공됩니다.',
    groups: [
      {
        title_en: 'Official and administrative statistics',
        title_ko: '행정·공식통계',
        description_en: 'Core national statistics produced through police, prosecution, court, corrections, and justice administration systems.',
        description_ko: '경찰, 검찰, 법원, 교정, 범죄예방 행정체계에서 생산되는 핵심 공식통계입니다.',
        institutions: [
          {
            name_en: 'Korean National Police Agency',
            name_ko: '경찰청',
            sources_en: ['Crime Statistics'],
            sources_ko: ['범죄통계'],
          },
          {
            name_en: 'Supreme Prosecutors’ Office',
            name_ko: '대검찰청',
            sources_en: ['Crime Analysis'],
            sources_ko: ['범죄분석'],
          },
          {
            name_en: 'Supreme Court / National Court Administration',
            name_ko: '대한민국 법원 / 법원행정처',
            sources_en: ['Judicial Yearbook', 'Monthly Court Statistics'],
            sources_ko: ['사법연감', '법원통계월보'],
          },
          {
            name_en: 'Ministry of Justice',
            name_ko: '법무부',
            sources_en: ['Corrections Statistics Yearbook', 'Crime Prevention Statistics'],
            sources_ko: ['교정통계연보', '범죄예방정책 통계분석'],
          },
        ],
      },
      {
        title_en: 'Research microdata and survey archives',
        title_ko: '연구기관·마이크로데이터',
        description_en: 'Survey and microdata sources curated through research institutes, government microdata services, and policy research organizations.',
        description_ko: '연구기관, 공공 마이크로데이터 서비스, 정책연구기관을 통해 제공되는 조사자료와 연구용 데이터입니다.',
        institutions: [
          {
            name_en: 'Korean Institute of Criminology and Justice',
            name_ko: '한국형사·법무정책연구원',
            sources_en: ['KICJ Microdata', 'Korean Crime Victim Survey', 'CCJS'],
            sources_ko: ['KICJ 마이크로데이터', '전국범죄피해조사', '형사사법통계 CCJS'],
          },
          {
            name_en: 'National Youth Policy Institute',
            name_ko: '한국청소년정책연구원',
            sources_en: ['KCYPS', 'Youth digital sexual crime research data'],
            sources_ko: ['한국아동청소년패널조사', '아동청소년 디지털 성범죄 연구자료'],
          },
          {
            name_en: 'MDIS / Statistics Korea and ministries',
            name_ko: 'MDIS / 통계청 및 관계부처',
            sources_en: ['Cyber Violence Survey', 'Violence Against Women Survey', 'Domestic Violence Survey'],
            sources_ko: ['사이버폭력 실태조사', '여성폭력 실태조사', '가정폭력 실태조사'],
          },
          {
            name_en: 'Korea Institute of Child Care and Education',
            name_ko: '육아정책연구소',
            sources_en: ['Panel Study on Korean Children'],
            sources_ko: ['한국아동패널조사'],
          },
        ],
      },
      {
        title_en: 'Health, addiction, and behavioral-risk sources',
        title_ko: '건강·중독·문제행동 자료',
        description_en: 'Adjacent datasets that can be used to study risk factors, mental health, substance use, and problem behavior linked to crime and delinquency.',
        description_ko: '범죄·비행 연구에서 위험요인, 정신건강, 물질사용, 문제행동을 함께 분석할 때 활용할 수 있는 인접 자료입니다.',
        institutions: [
          {
            name_en: 'Korea Disease Control and Prevention Agency',
            name_ko: '질병관리청',
            sources_en: ['Youth Risk Behavior Survey', 'Youth Health Panel Survey', 'KNHANES', 'Community Health Survey'],
            sources_ko: ['청소년건강행태조사', '청소년건강패널조사', '국민건강영양조사', '지역사회건강조사'],
          },
          {
            name_en: 'National Center for Mental Health',
            name_ko: '국립정신건강센터',
            sources_en: ['Adult Mental Health Survey', 'Child and Adolescent Mental Health Survey'],
            sources_ko: ['성인 정신건강실태조사', '소아·청소년 정신건강실태조사'],
          },
        ],
      },
    ],
  },
  'United States': {
    title_en: 'United States data landscape',
    title_ko: '미국 데이터 제공 구조',
    summary_en: 'U.S. crime-related data are organized around federal law-enforcement reporting, BJS victimization surveys, juvenile justice tools, research archives, and health or behavioral cohorts.',
    summary_ko: '미국의 범죄 관련 데이터는 연방 법집행 보고체계, 사법통계국 피해조사, 청소년사법 통계도구, 연구용 데이터 아카이브, 건강·행동 코호트 자료로 구성됩니다.',
    groups: [
      {
        title_en: 'Law-enforcement and recorded-crime systems',
        title_ko: '법집행·기록범죄 자료',
        description_en: 'Incident, offense, arrest, and agency-level data from federal crime reporting systems.',
        description_ko: '연방 범죄보고체계를 통해 수집되는 사건, 범죄, 체포, 기관 단위의 기록범죄 자료입니다.',
        institutions: [
          {
            name_en: 'Federal Bureau of Investigation',
            name_ko: '연방수사국(FBI)',
            sources_en: ['Crime Data Explorer', 'UCR Program', 'NIBRS Series', 'Crime Data API'],
            sources_ko: ['Crime Data Explorer', 'UCR 프로그램', 'NIBRS 자료 시리즈', '범죄 데이터 API'],
          },
        ],
      },
      {
        title_en: 'Victimization and justice statistics',
        title_ko: '피해조사·사법통계',
        description_en: 'Survey and statistical sources that capture victimization, unreported crime, and justice-system indicators.',
        description_ko: '범죄피해, 미신고범죄, 형사사법 지표를 파악하기 위한 조사자료와 통계자료입니다.',
        institutions: [
          {
            name_en: 'Bureau of Justice Statistics',
            name_ko: '미국 사법통계국(BJS)',
            sources_en: ['National Crime Victimization Survey', 'NCVS Dashboard'],
            sources_ko: ['전국범죄피해조사(NCVS)', 'NCVS 대시보드'],
          },
          {
            name_en: 'Office of Juvenile Justice and Delinquency Prevention',
            name_ko: '청소년사법·비행예방국(OJJDP)',
            sources_en: ['Statistical Briefing Book', 'EZAJCS', 'EZAPOP'],
            sources_ko: ['통계 브리핑북', 'EZAJCS', 'EZAPOP'],
          },
        ],
      },
      {
        title_en: 'Research archives and longitudinal sources',
        title_ko: '연구 아카이브·종단자료',
        description_en: 'Research-use microdata and longitudinal studies that support crime, delinquency, health, and behavioral-risk analysis.',
        description_ko: '범죄·비행, 건강, 행동위험 요인 연구에 활용할 수 있는 연구용 마이크로데이터와 종단자료입니다.',
        institutions: [
          {
            name_en: 'ICPSR / NACJD',
            name_ko: 'ICPSR / NACJD',
            sources_en: ['NACJD', 'NIBRS Series', 'NCVS Series', 'Pathways to Desistance'],
            sources_ko: ['형사사법 데이터 아카이브', 'NIBRS 자료 시리즈', 'NCVS 시리즈', '탈범죄 경로 연구'],
          },
          {
            name_en: 'CDC, SAMHSA, NIH and BLS',
            name_ko: 'CDC, SAMHSA, NIH, 노동통계국',
            sources_en: ['YRBSS', 'NSDUH', 'ABCD Study', 'NLSY97'],
            sources_ko: ['YRBSS', 'NSDUH', 'ABCD Study', 'NLSY97'],
          },
        ],
      },
    ],
  },
  'United Kingdom': {
    title_en: 'United Kingdom data landscape',
    title_ko: '영국 데이터 제공 구조',
    summary_en: 'UK data are split across statistical authorities, police open data, Home Office administrative releases, Ministry of Justice and Youth Justice Board data, and research data services.',
    summary_ko: '영국의 범죄 관련 데이터는 통계청과 경찰 오픈데이터, 내무부 행정통계, 법무부·청소년사법위원회 자료, 연구용 데이터 서비스로 나뉘어 제공됩니다.',
    groups: [
      {
        title_en: 'Crime statistics and police open data',
        title_ko: '범죄통계·경찰 오픈데이터',
        description_en: 'Official crime estimates, police-recorded crime, outcomes, stop and search, and open-data releases.',
        description_ko: '공식 범죄추정치, 경찰기록범죄, 처리결과, 검문검색, 오픈데이터 자료가 포함됩니다.',
        institutions: [
          {
            name_en: 'Office for National Statistics',
            name_ko: '영국 통계청(ONS)',
            sources_en: ['Crime and Justice', 'Crime Survey for England and Wales'],
            sources_ko: ['Crime and Justice', '잉글랜드·웨일스 범죄피해조사(CSEW)'],
          },
          {
            name_en: 'Home Office',
            name_ko: '영국 내무부',
            sources_en: ['Crime Statistics Collection', 'Crime outcomes', 'Hate crime', 'Drug seizures'],
            sources_ko: ['범죄통계 자료 모음', '범죄처리 결과', '증오범죄', '약물압수'],
          },
          {
            name_en: 'data.police.uk',
            name_ko: 'data.police.uk',
            sources_en: ['Street-level crime', 'Outcomes', 'Stop and search', 'Police API'],
            sources_ko: ['거리단위 범죄', '처리결과', '검문검색', '경찰 API'],
          },
        ],
      },
      {
        title_en: 'Justice administration and youth justice',
        title_ko: '사법행정·청소년사법',
        description_en: 'Administrative data on courts, case processing, youth justice, caseloads, custody, and disposals.',
        description_ko: '법원, 사건처리, 청소년사법, 업무량, 구금, 처분 등 사법행정 관련 자료입니다.',
        institutions: [
          {
            name_en: 'Ministry of Justice',
            name_ko: '영국 법무부',
            sources_en: ['Justice Data', 'Criminal justice system statistics'],
            sources_ko: ['Justice Data', '형사사법체계 통계'],
          },
          {
            name_en: 'Youth Justice Board',
            name_ko: '청소년사법위원회(YJB)',
            sources_en: ['Youth Justice Statistics', 'YJB Data Hub', 'Caseload statistics'],
            sources_ko: ['청소년사법 통계', 'YJB Data Hub', '사건처리 통계'],
          },
        ],
      },
      {
        title_en: 'Research data and longitudinal cohorts',
        title_ko: '연구자료·종단 코호트',
        description_en: 'Research-access microdata and cohort studies that support crime, mental-health, addiction, and problem-behavior research.',
        description_ko: '범죄, 정신건강, 중독, 문제행동 연구에 활용할 수 있는 연구용 마이크로데이터와 종단 코호트 자료입니다.',
        institutions: [
          {
            name_en: 'UK Data Service',
            name_ko: 'UK Data Service',
            sources_en: ['CSEW microdata series', 'Other safeguarded and secure-access files'],
            sources_ko: ['CSEW 마이크로데이터 시리즈', '보호자료·보안접근 자료'],
          },
          {
            name_en: 'UCL, University of Bristol and research consortia',
            name_ko: 'UCL, 브리스톨대학교 등 연구기관',
            sources_en: ['Millennium Cohort Study', 'Understanding Society', 'ALSPAC'],
            sources_ko: ['밀레니엄 코호트 연구', 'Understanding Society', 'ALSPAC'],
          },
          {
            name_en: 'Devolved and regional sources',
            name_ko: '지역·자치정부 자료원',
            sources_en: ['Recorded Crime in Scotland', 'PSNI recorded crime statistics'],
            sources_ko: ['스코틀랜드 경찰기록범죄', '북아일랜드 경찰기록범죄'],
          },
        ],
      },
    ],
  },
}

function DataLandscape({ language, onCountrySelect }) {
  const [selectedCountry, setSelectedCountry] = useState('South Korea')
  const landscape = DATA_LANDSCAPES[selectedCountry]
  const selectedCountryMeta = LANDSCAPE_COUNTRIES.find((country) => country.value === selectedCountry)

  return (
    <section id="landscape" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
              {language === 'en' ? 'Data landscape' : '데이터 구조도'}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {language === 'en' ? 'Data landscape by country' : '국가별 데이터 제공 구조'}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              {language === 'en'
                ? 'A structured view of how crime-related data are produced and released across institutions. It helps you understand where to look before choosing a dataset.'
                : '국가마다 범죄 관련 데이터가 어떤 기관과 체계를 통해 생산·공개되는지 보여주는 구조도입니다. 데이터셋을 고르기 전에 어디서 무엇을 찾아야 하는지 파악할 수 있습니다.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {LANDSCAPE_COUNTRIES.map((country) => {
              const isActive = country.value === selectedCountry
              return (
                <button
                  key={country.value}
                  type="button"
                  onClick={() => setSelectedCountry(country.value)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${isActive
                    ? 'border-[#0f2f24] bg-[#0f2f24] text-white'
                    : 'border-black/10 bg-white/70 text-neutral-600 hover:border-black/20 hover:bg-white hover:text-black'}`}
                >
                  {country.code} · {language === 'en' ? country.name_en : country.name_ko}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-4 border-b border-black/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                {selectedCountryMeta?.code || ''}
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
                {language === 'en' ? landscape.title_en : landscape.title_ko}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
                {language === 'en' ? landscape.summary_en : landscape.summary_ko}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onCountrySelect(selectedCountry)}
              className="rounded-xl bg-[#0f2f24] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#143d2f]"
            >
              {language === 'en' ? 'View matching datasets' : '해당 국가 데이터 보기'}
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {landscape.groups.map((group) => (
              <div key={group.title_en} className="rounded-3xl border border-black/10 bg-[#f7f0e3] p-5">
                <h4 className="text-lg font-semibold tracking-tight text-neutral-950">
                  {language === 'en' ? group.title_en : group.title_ko}
                </h4>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {language === 'en' ? group.description_en : group.description_ko}
                </p>

                <div className="mt-5 space-y-4">
                  {group.institutions.map((institution) => (
                    <div key={institution.name_en} className="rounded-2xl border border-black/5 bg-white/75 p-4">
                      <div className="text-sm font-semibold tracking-tight text-neutral-900">
                        {language === 'en' ? institution.name_en : institution.name_ko}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(language === 'en' ? institution.sources_en : institution.sources_ko).map((source) => (
                          <span key={source} className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs text-neutral-600">
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function uniqueValues(items, key) {
  return Array.from(
    new Set(
      items.flatMap((item) => {
        const value = item[key]
        if (!value) return []
        return Array.isArray(value) ? value : [value]
      }),
    ),
  ).filter(Boolean)
}

function matchesArrayFilter(itemValue, selectedValue) {
  if (!selectedValue || selectedValue === 'All') return true
  if (!itemValue) return false
  const values = Array.isArray(itemValue) ? itemValue : [itemValue]
  return values.some((value) => String(value).toLowerCase() === selectedValue.toLowerCase())
}

function matchesCountry(dataset, selectedCountry) {
  if (!selectedCountry || selectedCountry === 'All') return true

  if (selectedCountry === '__INTERNATIONAL__') {
    return (
      dataset.country_en === 'International' ||
      dataset.country_en === 'European Union' ||
      dataset.countryCode === 'INTL' ||
      dataset.countryCode === 'EU'
    )
  }

  return dataset.country_en === selectedCountry
}

function countBy(items, getter) {
  const counts = new Map()

  items.forEach((item) => {
    const values = getter(item)
    const normalizedValues = Array.isArray(values) ? values : [values]

    normalizedValues.filter(Boolean).forEach((value) => {
      counts.set(value, (counts.get(value) || 0) + 1)
    })
  })

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

function Chip({ label, className, onClick, active = false }) {
  const baseClass = `rounded-full border px-2.5 py-1 text-xs font-medium transition ${className}`

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseClass} ${active ? 'ring-2 ring-[#0f2f24]/25' : ''}`}
      >
        {label}
      </button>
    )
  }

  return <span className={baseClass}>{label}</span>
}

function ChipGroup({ values, language, className, maxItems = 2, translate = true, onChipClick, activeValue }) {
  const normalizedValues = Array.isArray(values) ? values.filter(Boolean) : values ? [values] : []
  if (normalizedValues.length === 0) return null

  const visibleValues = normalizedValues.slice(0, maxItems)
  const hiddenCount = Math.max(0, normalizedValues.length - maxItems)

  return (
    <>
      {visibleValues.map((value) => {
        const label = translate ? optionLabel(value, language) : value
        return (
          <Chip
            key={`${value}-${className}`}
            label={label}
            className={className}
            onClick={onChipClick ? () => onChipClick(value) : undefined}
            active={activeValue === value}
          />
        )
      })}
      {hiddenCount > 0 && (
        <Chip
          label={`+${hiddenCount}`}
          className="border-black/10 bg-white/60 text-neutral-500"
        />
      )}
    </>
  )
}

function DetailRow({ label, values }) {
  const normalizedValues = Array.isArray(values) ? values.filter(Boolean) : values ? [values] : []
  if (normalizedValues.length === 0) return null

  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">{label}</div>
      <div className="mt-1 text-sm leading-6 text-neutral-600">{normalizedValues.join(' · ')}</div>
    </div>
  )
}

function DatasetCard({ dataset, language, onLabelClick, activeResearchLabel, isExpanded, onToggleDetails }) {
  const name = language === 'ko' ? dataset.name_ko || dataset.name_en : dataset.name_en || dataset.name_ko
  const institution = language === 'ko'
    ? dataset.institution_ko || dataset.institution_en
    : dataset.institution_en || dataset.institution_ko
  const country = language === 'ko' ? dataset.country_ko || dataset.country_en : dataset.country_en || dataset.country_ko
  const researchLabels = getDatasetResearchLabels(dataset)
  const note = language === 'ko' ? dataset.notes_ko || dataset.notes_en : dataset.notes_en || dataset.notes_ko
  const topics = language === 'ko' ? dataset.topics_ko || dataset.topics_en : dataset.topics_en || dataset.topics_ko

  const designValues = (Array.isArray(dataset.design) ? dataset.design : dataset.design ? [dataset.design] : [])
    .slice(0, 1)
    .map((value) => optionLabel(value, language))

  const dataTypeValues = (Array.isArray(dataset.dataType) ? dataset.dataType : dataset.dataType ? [dataset.dataType] : [])
    .slice(0, 2)
    .map((value) => optionLabel(value, language))

  const metaSummary = [...designValues, ...dataTypeValues].filter(Boolean).join(' · ')
  const accessValues = (Array.isArray(dataset.access) ? dataset.access : dataset.access ? [dataset.access] : [])
    .map((value) => optionLabel(value, language))
  const formatValues = Array.isArray(dataset.formats) ? dataset.formats : dataset.formats ? [dataset.formats] : []
  const topicValues = Array.isArray(topics) ? topics : topics ? [topics] : []
  const languageValues = Array.isArray(dataset.language) ? dataset.language : dataset.language ? [dataset.language] : []

  return (
    <article className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            {dataset.countryCode ? dataset.countryCode : country}
          </div>
          <div className="mt-1 text-sm font-medium text-neutral-500">
            {country}
          </div>
        </div>

        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          {dataset.design?.[0] ? optionLabel(dataset.design[0], language) : 'Dataset'}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">
        <a
          href={dataset.link}
          target="_blank"
          rel="noreferrer"
          className="transition hover:underline"
        >
          {name}
        </a>
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{institution}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <ChipGroup
          values={researchLabels}
          language={language}
          translate={false}
          maxItems={3}
          activeValue={activeResearchLabel}
          onChipClick={onLabelClick}
          className="border-[#b89c4f]/25 bg-[#f7f0e3] text-[#0f2f24] hover:border-[#0f2f24]/30 hover:bg-[#efe5cf]"
        />
        <ChipGroup
          values={dataset.population}
          language={language}
          maxItems={2}
          className="border-[#0f2f24]/15 bg-[#edf3ed] text-[#234f3d]"
        />
      </div>

      {metaSummary && (
        <div className="mt-4 text-xs leading-5 text-neutral-500">
          {metaSummary}
        </div>
      )}

      {isExpanded && (
        <div className="mt-5 space-y-4 rounded-2xl border border-black/10 bg-[#f7f0e3]/80 p-4">
          {note && (
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                {language === 'en' ? 'About this source' : '자료 설명'}
              </div>
              <p className="mt-1 text-sm leading-6 text-neutral-700">{note}</p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <DetailRow label={language === 'en' ? 'Access' : '접근 방식'} values={accessValues} />
            <DetailRow label={language === 'en' ? 'Formats' : '제공 형식'} values={formatValues} />
            <DetailRow label={language === 'en' ? 'Topics' : '주요 키워드'} values={topicValues.slice(0, 8)} />
            <DetailRow label={language === 'en' ? 'Language' : '자료 언어'} values={languageValues} />
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/10 pt-4">
        <button
          type="button"
          onClick={onToggleDetails}
          className="rounded-xl border border-black/10 px-3 py-2 text-sm font-medium text-neutral-600 transition hover:border-black/20 hover:text-neutral-950"
        >
          {isExpanded
            ? language === 'en' ? 'Hide details' : '상세정보 접기'
            : language === 'en' ? 'Details' : '상세정보'}
        </button>
        <a
          href={dataset.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-neutral-900 transition hover:underline"
        >
          {language === 'en' ? 'View source →' : '출처 보기 →'}
        </a>
      </div>
    </article>
  )
}

const PIN_POSITIONS = {
  KR: { left: '73%', top: '47%' },
  US: { left: '23%', top: '45%' },
  UK: { left: '48%', top: '36%' },
  DE: { left: '53%', top: '39%' },
  CA: { left: '21%', top: '29%' },
  JP: { left: '80%', top: '42%' },
  AU: { left: '78%', top: '72%' },
  INT: { left: '51%', top: '70%' },
}

function GlobeVisual({ language, mapCountries, onCountrySelect }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#0f2f24] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-white/10" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm text-white/60">
            {language === 'en' ? 'Interactive country pins' : '데이터 지도'}
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {language === 'en' ? 'Explore the archive from the map.' : '지도에서 데이터 출처를 탐색해보세요.'}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            {language === 'en'
              ? 'Click a pin to filter the catalogue by country or region. The archive now includes crime-related sources plus broader behavioral, health, and developmental datasets.'
              : '핀을 클릭하면 해당 국가나 지역 데이터로 이동합니다. 범죄·형사사법 자료를 중심으로 관련 행동·건강·발달 연구 자료도 함께 포함됩니다.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {mapCountries.map((country) => (
            <button
              key={country.value}
              type="button"
              onClick={() => onCountrySelect(country.value)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75 transition hover:bg-white hover:text-[#0f2f24]"
            >
              {country.code} · {country.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-8 h-[360px] rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-inner lg:h-[430px]">
        <div className="absolute inset-4 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_42%,transparent_70%)]" />
        <svg viewBox="0 0 720 360" className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] text-white/55" role="img" aria-label="Stylized world map">
          <path d="M82 135c38-43 111-45 141-12 14 15 8 34-17 40-24 6-22 25-6 41 24 24 3 52-33 44-48-11-96-43-107-76-6-14 2-27 22-37Z" fill="currentColor" opacity="0.22" />
          <path d="M156 70c37-24 88-21 119 6 19 16 17 37-1 47-28 15-89 3-126-18-20-11-17-25 8-35Z" fill="currentColor" opacity="0.16" />
          <path d="M318 122c31-19 70-23 101-10 22 9 26 28 10 44-17 17-53 20-79 10-27-10-54-29-32-44Z" fill="currentColor" opacity="0.24" />
          <path d="M413 146c44-28 134-18 170 28 28 36 7 78-48 96-48 16-109 4-136-30-27-35-22-73 14-94Z" fill="currentColor" opacity="0.18" />
          <path d="M468 80c40-15 89-8 116 17 16 14 13 32-7 41-28 13-75 3-108-18-22-14-21-31-1-40Z" fill="currentColor" opacity="0.18" />
          <path d="M340 225c32 13 44 50 27 86-13 26-37 31-58 9-21-23-31-72-13-91 9-11 25-10 44-4Z" fill="currentColor" opacity="0.14" />
          <path d="M78 292c145 38 411 38 562 0" stroke="currentColor" strokeWidth="1" opacity="0.17" fill="none" />
          <path d="M78 68c145-38 411-38 562 0" stroke="currentColor" strokeWidth="1" opacity="0.12" fill="none" />
          <path d="M65 180h590" stroke="currentColor" strokeWidth="1" opacity="0.12" />
          <path d="M360 35v290" stroke="currentColor" strokeWidth="1" opacity="0.08" />
          <path d="M214 45c-34 77-34 198 0 270" stroke="currentColor" strokeWidth="1" opacity="0.08" fill="none" />
          <path d="M506 45c34 77 34 198 0 270" stroke="currentColor" strokeWidth="1" opacity="0.08" fill="none" />
        </svg>

        {mapCountries.map((country) => {
          const position = PIN_POSITIONS[country.code] || { left: '50%', top: '50%' }
          return (
            <button
              key={country.value}
              type="button"
              onClick={() => onCountrySelect(country.value)}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={position}
              aria-label={`Filter by ${country.name}`}
            >
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 opacity-0 transition group-hover:scale-125 group-hover:opacity-100" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#f7f0e3] text-xs font-bold text-[#0f2f24] shadow-[0_8px_22px_rgba(0,0,0,0.22)] transition group-hover:-translate-y-1 group-hover:bg-white">
                {country.code}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-12 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0f2f24] shadow-lg group-hover:block">
                {country.name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function StatCard({ label, value, helper, featured = false }) {
  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f2f24] p-6 text-white shadow-[0_12px_35px_rgba(15,47,36,0.22)]">
        <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full border border-white/10" />
        <div className="absolute -right-3 -top-5 h-20 w-20 rounded-full bg-white/5" />
        <div className="relative text-sm text-white/65">{label}</div>
        <div className="relative mt-3 text-5xl font-semibold tracking-tight">{value}</div>
        {helper && <div className="relative mt-4 max-w-[240px] text-xs leading-5 text-white/65">{helper}</div>}
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-black/10 bg-white/75 p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">{value}</div>
      {helper && <div className="mt-2 text-xs leading-5 text-neutral-500">{helper}</div>}
    </div>
  )
}

function DonutChart({ items, total, language, title, description, centerLabel }) {
  const palette = ['#0f2f24', '#426b4e', '#8b8a52', '#c5a85a', '#efe1b4', '#ffffff']
  let current = 0

  const segments = items.map((item, index) => {
    const start = current
    const value = total > 0 ? (item.count / total) * 100 : 0
    current += value
    return `${palette[index % palette.length]} ${start}% ${current}%`
  })

  if (current < 100) {
    segments.push(`#e8deca ${current}% 100%`)
  }

  const background = `conic-gradient(${segments.join(', ')})`

  return (
    <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative mx-auto h-40 w-40 shrink-0 rounded-full shadow-inner" style={{ background }}>
          <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-[#f7f0e3] text-center shadow-inner">
            <div className="text-3xl font-semibold tracking-tight text-[#0f2f24]">{total}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              {centerLabel}
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {description}
          </p>

          <div className="mt-5 grid gap-2">
            {items.slice(0, 5).map((item, index) => (
              <div key={item.name} className="flex items-center justify-between gap-3 text-sm">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: palette[index % palette.length] }} />
                  <span className="truncate font-medium text-neutral-700">{researchLabelDisplay(item.name, language)}</span>
                </div>
                <span className="font-semibold text-neutral-950">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MetadataBar({ item, maxCount, index, accent = 'green' }) {
  const width = maxCount > 0 ? Math.max(7, (item.count / maxCount) * 100) : 0
  const colors = accent === 'gold'
    ? ['bg-[#8b6f2f]', 'bg-[#a8873b]', 'bg-[#c5a85a]', 'bg-[#d6bd74]', 'bg-[#e5d39b]', 'bg-[#efe1b4]']
    : ['bg-[#0f2f24]', 'bg-[#28543f]', 'bg-[#426b4e]', 'bg-[#5f7e5a]', 'bg-[#7f946b]', 'bg-[#9eaa7c]']
  const barColor = colors[index % colors.length]

  return (
    <div className="rounded-2xl border border-black/5 bg-[#f7f0e3] px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-neutral-500 shadow-sm">
            {index + 1}
          </span>
          <span className="truncate text-sm font-medium text-neutral-850">{item.name}</span>
        </div>
        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
          {item.count}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white shadow-inner">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-500`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

function SnapshotPanel({ title, description, items, maxCount, accent }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="border-b border-black/10 pb-5">
        <h3 className="text-lg font-semibold tracking-tight text-neutral-950">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-500">{description}</p>
      </div>
      <div className="mt-5 space-y-3">
        {items.slice(0, 4).map((item, index) => (
          <MetadataBar key={item.name} item={item} maxCount={maxCount} index={index} accent={accent} />
        ))}
      </div>
    </div>
  )
}

function ArchiveSnapshot({ language, countryStats, typeStats, labelStats, labelTotal, totalDatasets, totalCountries, publicCount, longitudinalCount }) {
  const topCountryMax = Math.max(...countryStats.map((item) => item.count), 1)
  const topTypeMax = Math.max(...typeStats.map((item) => item.count), 1)

  const coverageItems = [
    {
      label: language === 'en' ? 'Countries / regions' : '국가·지역',
      value: totalCountries,
      helper: language === 'en' ? 'Catalogue coverage' : '카탈로그 기준',
    },
    {
      label: language === 'en' ? 'Public access' : '공개 접근',
      value: publicCount,
      helper: language === 'en' ? 'Public links and portals' : '공개 링크·포털',
    },
    {
      label: language === 'en' ? 'Longitudinal' : '종단자료',
      value: longitudinalCount,
      helper: language === 'en' ? 'Panel or longitudinal entries' : '패널·종단 항목',
    },
  ]

  return (
    <section id="snapshot" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
              {language === 'en' ? 'Metadata overview' : '메타데이터 요약'}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {language === 'en' ? 'Archive snapshot' : '아카이브 현황'}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              {language === 'en'
                ? 'A quick visual summary of the crime-related research sources currently collected in this archive.'
                : '현재 아카이브에 수집된 범죄 관련 연구 데이터 출처를 한눈에 볼 수 있도록 요약했습니다.'}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {coverageItems.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <StatCard
              featured
              label={language === 'en' ? 'Dataset sources' : '데이터 출처'}
              value={totalDatasets}
              helper={language === 'en' ? 'Curated entries currently included in the archive.' : '현재 아카이브에 선별해 등록한 데이터 출처 수입니다.'}
            />
            <DonutChart
              items={labelStats}
              total={labelTotal}
              language={language}
              centerLabel={language === 'en' ? 'label tags' : '라벨'}
              title={language === 'en' ? 'Source mix by research label' : '연구 라벨별 출처 구성'}
              description={language === 'en'
                ? 'How the archive is currently distributed across research labels. One source may have multiple labels.'
                : '현재 아카이브가 연구 라벨별로 어떻게 구성되어 있는지 보여줍니다. 하나의 출처에 여러 라벨이 붙을 수 있습니다.'}
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <SnapshotPanel
              title={language === 'en' ? 'Sources by country' : '국가별 출처 수'}
              description={language === 'en' ? 'Top catalogue coverage by country or region.' : '국가·지역별로 등록된 출처 수입니다.'}
              items={countryStats}
              maxCount={topCountryMax}
              accent="green"
            />
            <SnapshotPanel
              title={language === 'en' ? 'Top data types' : '주요 데이터 유형'}
              description={language === 'en' ? 'Frequently used metadata tags in the archive.' : '아카이브에서 많이 등장하는 데이터 유형입니다.'}
              items={typeStats}
              maxCount={topTypeMax}
              accent="gold"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const [draftFilters, setDraftFilters] = useState(INITIAL_FILTERS)
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [showAll, setShowAll] = useState(false)
  const [expandedDatasetId, setExpandedDatasetId] = useState(null)
  const INITIAL_VISIBLE_COUNT = 12

  const countries = useMemo(() => {
    return uniqueValues(datasets, 'country_en').sort((a, b) => a.localeCompare(b))
  }, [])

  const featuredCountries = useMemo(() => {
    return FEATURED_COUNTRY_LIST.map((countryItem) => {
      const countryDatasets = datasets.filter((dataset) => matchesCountry(dataset, countryItem.value))

      return {
        code: countryItem.code,
        name: language === 'en' ? countryItem.name_en : countryItem.name_ko,
        value: countryItem.value,
        count: `${countryDatasets.length} sources`,
      }
    })
  }, [language])

  const mapCountries = useMemo(() => {
    return MAP_PIN_COUNTRY_LIST.map((countryItem) => ({
      code: countryItem.code,
      name: language === 'en' ? countryItem.name_en : countryItem.name_ko,
      value: countryItem.value,
    }))
  }, [language])

  const filteredDatasets = useMemo(() => {
    const normalizedQuery = filters.query.trim().toLowerCase()

    return datasets.filter((dataset) => {
      const searchableText = [
        dataset.name_en,
        dataset.name_ko,
        dataset.institution_en,
        dataset.institution_ko,
        dataset.country_en,
        dataset.country_ko,
        ...(dataset.topics_en || []),
        ...(dataset.topics_ko || []),
        ...(dataset.population || []),
        ...(dataset.design || []),
        ...(dataset.dataType || []),
        ...(dataset.formats || []),
        ...(dataset.researchLabels_en || []),
        ...(dataset.researchLabels_ko || []),
        ...(dataset.domains_en || []),
        ...(dataset.domains_ko || []),
        dataset.notes_en,
        dataset.notes_ko,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const queryMatch = !normalizedQuery || searchableText.includes(normalizedQuery)
      const countryMatch = matchesCountry(dataset, filters.country)
      const populationMatch = matchesArrayFilter(dataset.population, filters.population)
      const designMatch = matchesArrayFilter(dataset.design, filters.design)
      const dataTypeMatch = matchesArrayFilter(dataset.dataType, filters.dataType)
      const accessMatch = matchesArrayFilter(dataset.access, filters.access)
      const labelMatch = filters.researchLabel === 'All' || getDatasetResearchLabels(dataset).includes(filters.researchLabel)

      return queryMatch && countryMatch && populationMatch && designMatch && dataTypeMatch && accessMatch && labelMatch
    })
  }, [filters])

  const visibleDatasets = showAll
    ? filteredDatasets
    : filteredDatasets.slice(0, INITIAL_VISIBLE_COUNT)

  const hasMoreDatasets = filteredDatasets.length > INITIAL_VISIBLE_COUNT

  const countryStats = useMemo(() => {
    return countBy(datasets, (dataset) => {
      if (dataset.country_en === 'European Union' || dataset.country_en === 'International') {
        return 'International'
      }
      return dataset.country_en
    }).slice(0, 8)
  }, [])

  const typeStats = useMemo(() => {
    return countBy(datasets, (dataset) => dataset.dataType || []).slice(0, 8)
  }, [])


  const labelStats = useMemo(() => {
    return countBy(datasets, (dataset) => getDatasetResearchLabels(dataset)).slice(0, 8)
  }, [])

  const labelTotal = useMemo(() => {
    return labelStats.reduce((sum, item) => sum + item.count, 0)
  }, [labelStats])

  const totalCountries = useMemo(() => {
    return uniqueValues(datasets, 'country_en').length
  }, [])

  const publicCount = useMemo(() => {
    return datasets.filter((dataset) => matchesArrayFilter(dataset.access, 'Public')).length
  }, [])

  const longitudinalCount = useMemo(() => {
    return datasets.filter((dataset) => matchesArrayFilter(dataset.design, 'Longitudinal')).length
  }, [])

  const activeCountryLabel = useMemo(() => {
    if (filters.country === 'All') return null
    if (filters.country === '__INTERNATIONAL__') {
      return language === 'en' ? 'International' : '국제'
    }

    const matchedCountry = MAP_PIN_COUNTRY_LIST.find((item) => item.value === filters.country)
    if (matchedCountry) {
      return language === 'en' ? matchedCountry.name_en : matchedCountry.name_ko
    }

    return filters.country
  }, [filters.country, language])

  const activeResearchLabelLabel = useMemo(() => {
    if (filters.researchLabel === 'All') return null
    return researchLabelDisplay(filters.researchLabel, language)
  }, [filters.researchLabel, language])

  const hasActiveFilters = useMemo(() => {
    return Object.keys(INITIAL_FILTERS).some((key) => filters[key] !== INITIAL_FILTERS[key])
  }, [filters])

  const updateDraftFilter = (key, value) => {
    setDraftFilters((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const applyFilters = () => {
    setFilters(draftFilters)
    setShowAll(false)
    setExpandedDatasetId(null)
    document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' })
  }

  const clearFilters = () => {
    setDraftFilters(INITIAL_FILTERS)
    setFilters(INITIAL_FILTERS)
    setShowAll(false)
    setExpandedDatasetId(null)
  }

  const handleResearchLabelFilter = (labelValue) => {
    const nextFilters = {
      ...draftFilters,
      researchLabel: normalizeResearchLabel(labelValue) || 'All',
    }

    setDraftFilters(nextFilters)
    setFilters(nextFilters)
    setShowAll(false)
    setExpandedDatasetId(null)
    document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCountryBrowse = (countryValue) => {
    const nextFilters = {
      ...INITIAL_FILTERS,
      country: countryValue,
    }

    setDraftFilters(nextFilters)
    setFilters(nextFilters)
    setShowAll(false)
    setExpandedDatasetId(null)
    document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0f2f24] text-neutral-900">
      <div className="mx-auto max-w-[1240px] px-6 py-6 lg:px-10 lg:py-10">
        <div className="overflow-visible rounded-[28px] border border-black/10 bg-[#f7f0e3] shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <header className="sticky top-0 z-50 rounded-t-[28px] border-b border-black/10 bg-[#f7f0e3]/95 px-6 py-5 backdrop-blur lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rotate-45 bg-black" />
                <div>
                  <div className="text-[15px] font-semibold tracking-tight">Global Crime Data Archive</div>
                  <div className="text-xs text-neutral-500">Crime, justice, and related research data discovery</div>
                </div>
              </div>

              <nav className="flex flex-wrap items-center gap-5 text-sm text-neutral-600">
                <a href="#about" className="transition hover:text-black">
                  {language === 'en' ? 'About' : '소개'}
                </a>
                <a href="#filters" className="transition hover:text-black">
                  {language === 'en' ? 'Search' : '검색'}
                </a>
                <a href="#browse" className="transition hover:text-black">
                  {language === 'en' ? 'Countries' : '국가별 탐색'}
                </a>
                <a href="#landscape" className="transition hover:text-black">
                  {language === 'en' ? 'Landscape' : '구조도'}
                </a>
                <a href="#snapshot" className="transition hover:text-black">
                  {language === 'en' ? 'Snapshot' : '현황'}
                </a>
                <a href="#sources" className="transition hover:text-black">
                  {language === 'en' ? 'Sources' : '데이터 출처'}
                </a>
                <button
                  onClick={() => setLanguage((current) => (current === 'en' ? 'ko' : 'en'))}
                  className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black"
                >
                  {language === 'en' ? 'KR' : 'EN'}
                </button>
              </nav>
            </div>
          </header>

          <main>
            <section
              id="about"
              className="relative overflow-hidden border-b border-black/10 px-6 py-20 lg:px-8 lg:py-28"
            >
              <div className="absolute inset-0 opacity-50" aria-hidden="true">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              <div className="relative mx-auto max-w-4xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-sm text-neutral-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {language === 'en'
                    ? 'Researcher-focused archive'
                    : '연구자 중심 데이터 아카이브'}
                </div>

                <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                  {language === 'en' ? (
                    <>
                      Find crime-related data
                      <br />
                      across countries.
                    </>
                  ) : (
                    <>
                      세계 각국의 범죄 관련 데이터를 모아둔
                      <br />
                      범죄 데이터 아카이브
                    </>
                  )}
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                  {language === 'en' ? (
                    <>
                      A bilingual directory for crime, delinquency, criminal justice, addiction,
                      <br />
                      mental health, and problem-behavior datasets useful for crime-related research.
                    </>
                  ) : (
                    <>
                      범죄·비행과 형사사법 데이터를 중심으로, 중독·물질사용,
                      <br />
                      정신건강, 문제행동 연구에 활용할 수 있는 데이터 출처를 함께 정리합니다.
                    </>
                  )}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {RESEARCH_LABEL_EXAMPLES.map((label) => (
                    <span key={label.en} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
                      {language === 'en' ? label.en : label.ko}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#filters"
                    className="min-w-[150px] rounded-md bg-black px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
                  >
                    {language === 'en' ? 'Search datasets' : '데이터 검색하기'}
                  </a>

                  <a
                    href="#browse"
                    className="min-w-[150px] rounded-md border border-black/10 bg-white px-5 py-3 text-center text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black"
                  >
                    {language === 'en' ? 'Browse by country' : '국가별로 보기'}
                  </a>

                  <a
                    href="#sources"
                    className="min-w-[150px] rounded-md border border-black/10 bg-white/70 px-5 py-3 text-center text-sm font-medium text-neutral-600 transition hover:border-black/20 hover:bg-white hover:text-black"
                  >
                    {language === 'en' ? 'View all sources' : '전체 출처 보기'}
                  </a>
                </div>
              </div>
            </section>



            <section id="filters" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      {language === 'en' ? 'Search and filter datasets' : '데이터 검색 및 필터'}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                      {language === 'en'
                        ? 'Search crime and criminal justice datasets first, while also exploring related sources for addiction, mental health, developmental criminology, problem behavior, and neurophysiology research.'
                        : '범죄·형사사법 자료를 중심으로, 중독, 정신건강, 발달범죄학, 문제행동, 신경생리 연구에 활용할 수 있는 관련 자료까지 함께 검색할 수 있습니다.'}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {features.map((feature) => (
                        <div
                          key={feature.title_en}
                          className="rounded-2xl border border-black/5 bg-[#f7f0e3] p-5"
                        >
                          <h3 className="text-base font-semibold tracking-tight">
                            {language === 'en' ? feature.title_en : feature.title_ko}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-neutral-600">
                            {language === 'en' ? feature.desc_en : feature.desc_ko}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-[#0f2f24] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="text-sm text-white/60">{language === 'en' ? 'Filter panel' : '필터 패널'}</div>
                        <h3 className="mt-1 text-xl font-semibold">
                          {filteredDatasets.length} / {datasets.length} sources
                        </h3>
                      </div>
                      <button onClick={clearFilters} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:text-white">
                        {language === 'en' ? 'Clear' : '초기화'}
                      </button>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">{language === 'en' ? 'Search' : '검색어'}</span>
                        <input
                          value={draftFilters.query}
                          onChange={(event) => updateDraftFilter('query', event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') applyFilters()
                          }}
                          placeholder="crime, youth, panel, criminal justice ..."
                          className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">{language === 'en' ? 'Country' : '국가'}</span>
                        <select value={draftFilters.country} onChange={(event) => updateDraftFilter('country', event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">{language === 'en' ? 'All' : '전체'}</option>
                          <option value="__INTERNATIONAL__">{language === 'en' ? 'International' : '국제'}</option>
                          {countries.map((item) => <option key={item} value={item}>{optionLabel(item, language)}</option>)}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">{language === 'en' ? 'Population' : '대상'}</span>
                        <select value={draftFilters.population} onChange={(event) => updateDraftFilter('population', event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">{language === 'en' ? 'All' : '전체'}</option>
                          {FILTERS.population.map((item) => <option key={item} value={item}>{optionLabel(item, language)}</option>)}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">{language === 'en' ? 'Design' : '자료설계'}</span>
                        <select value={draftFilters.design} onChange={(event) => updateDraftFilter('design', event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">{language === 'en' ? 'All' : '전체'}</option>
                          {FILTERS.design.map((item) => <option key={item} value={item}>{optionLabel(item, language)}</option>)}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">{language === 'en' ? 'Data type' : '데이터 유형'}</span>
                        <select value={draftFilters.dataType} onChange={(event) => updateDraftFilter('dataType', event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">{language === 'en' ? 'All' : '전체'}</option>
                          {FILTERS.dataType.map((item) => <option key={item} value={item}>{optionLabel(item, language)}</option>)}
                        </select>
                      </label>

                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">{language === 'en' ? 'Access' : '접근방식'}</span>
                        <select value={draftFilters.access} onChange={(event) => updateDraftFilter('access', event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">{language === 'en' ? 'All' : '전체'}</option>
                          {FILTERS.access.map((item) => <option key={item} value={item}>{optionLabel(item, language)}</option>)}
                        </select>
                      </label>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {RESEARCH_LABEL_EXAMPLES.map((label) => {
                        const isActive = filters.researchLabel === label.en
                        return (
                          <button
                            key={label.en}
                            type="button"
                            onClick={() => handleResearchLabelFilter(label.en)}
                            className={`rounded-full border px-3 py-2 text-xs transition ${isActive
                              ? 'border-white bg-white text-[#0f2f24]'
                              : 'border-white/10 bg-white/5 text-white/80 hover:bg-white hover:text-[#0f2f24]'}`}
                          >
                            {language === 'en' ? label.en : label.ko}
                          </button>
                        )
                      })}
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <button
                        onClick={applyFilters}
                        className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0f2f24] transition hover:bg-white/90"
                      >
                        {language === 'en' ? 'Search datasets' : '데이터 검색'}
                      </button>
                      <button
                        onClick={clearFilters}
                        className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
                      >
                        {language === 'en' ? 'Clear filters' : '필터 초기화'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>            <section id="browse" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {language === 'en' ? 'Browse by country' : '국가별 탐색'}
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                    {language === 'en'
                      ? 'Start with a featured country, or use the map pins to jump into additional regions.'
                      : '대표 국가 카드를 선택하거나, 지도 위 핀을 눌러 더 많은 국가의 데이터 출처를 탐색할 수 있습니다.'}
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {featuredCountries.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleCountryBrowse(item.value)}
                      className="rounded-2xl border border-black/10 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{item.code}</div>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.name}</h3>
                        </div>
                        <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">{item.count}</div>
                      </div>
                      <p className="mt-6 text-sm leading-6 text-neutral-600">
                       {language === 'en'
                        ? item.value === '__INTERNATIONAL__'
                          ? 'Explore curated international sources.'
                          : `Explore curated sources for ${item.name}.`
                        : `${item.name} 관련 데이터 출처 보기`}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <GlobeVisual language={language} mapCountries={mapCountries} onCountrySelect={handleCountryBrowse} />
                </div>
              </div>
            </section>

            <DataLandscape language={language} onCountrySelect={handleCountryBrowse} />

            <ArchiveSnapshot
              language={language}
              countryStats={countryStats}
              typeStats={typeStats}
              labelStats={labelStats}
              labelTotal={labelTotal}
              totalDatasets={datasets.length}
              totalCountries={totalCountries}
              publicCount={publicCount}
              longitudinalCount={longitudinalCount}
            />

            <section id="sources" className="px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      {language === 'en' ? 'Dataset sources' : '데이터 출처'}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                      {language === 'en'
                        ? `${filteredDatasets.length} sources found. Click a card to open the official source or research archive.`
                        : `${filteredDatasets.length}개의 출처가 검색되었습니다. 카드를 클릭하면 공식 출처 또는 연구 아카이브로 이동합니다.`}
                    </p>
                  </div>
                  <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-500">
                    {language === 'en' ? 'Dataset suggestions coming later' : '데이터 제안 기능은 추후 추가'}
                  </span>
                </div>

                {hasActiveFilters && (
                  <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/75 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
                        {language === 'en' ? 'Current view' : '현재 보기'}
                      </div>
                      <p className="mt-1 text-sm text-neutral-700">
                        {activeCountryLabel
                          ? language === 'en'
                            ? `Viewing ${activeCountryLabel} datasets. Other filters may also be applied.`
                            : `${activeCountryLabel} 데이터가 선택되어 있습니다. 다른 필터도 함께 적용되었을 수 있습니다.`
                          : activeResearchLabelLabel
                            ? language === 'en'
                              ? `Viewing datasets labeled ${activeResearchLabelLabel}.`
                              : `${activeResearchLabelLabel} 라벨이 선택되어 있습니다.`
                            : language === 'en'
                              ? 'Filters are currently applied.'
                              : '필터가 적용되어 있습니다.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="rounded-xl bg-[#0f2f24] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#143d2f]"
                    >
                      {language === 'en' ? 'View all datasets' : '전체 데이터 보기'}
                    </button>
                  </div>
                )}

                {filteredDatasets.length === 0 ? (
                  <div className="mt-10 rounded-2xl border border-black/10 bg-white p-8 text-center text-neutral-600">
                    No datasets found. Try clearing filters or using a broader keyword.
                  </div>
                ) : (
                  <>
                    <div className="mt-10 grid gap-4 lg:grid-cols-3">
                      {visibleDatasets.map((dataset) => (
                        <DatasetCard
                          key={dataset.id}
                          dataset={dataset}
                          language={language}
                          onLabelClick={handleResearchLabelFilter}
                          activeResearchLabel={filters.researchLabel}
                          isExpanded={expandedDatasetId === dataset.id}
                          onToggleDetails={() =>
                            setExpandedDatasetId((current) => (current === dataset.id ? null : dataset.id))
                          }
                        />
                      ))}
                    </div>

                    {hasMoreDatasets && (
                      <div className="mt-8 flex justify-center">
                        <button
                          onClick={() => setShowAll((current) => !current)}
                          className="rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black"
                        >
                          {showAll
                            ? language === 'en'
                              ? 'Show less'
                              : '접기'
                            : language === 'en'
                              ? `More datasets (${filteredDatasets.length - INITIAL_VISIBLE_COUNT} more)`
                              : `더 보기 (${filteredDatasets.length - INITIAL_VISIBLE_COUNT}개 더)`}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          </main>

          <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-neutral-500 lg:px-8">
            <p>
              Curated by <span className="font-medium text-neutral-700">Dain Cho</span> · Forensic Psychology / Criminology Researcher
            </p>
            <p className="mt-2">
              Global Crime Data Archive is a research-based side project for improving access to crime and criminal justice datasets, plus related behavioral, health, and developmental research data.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
