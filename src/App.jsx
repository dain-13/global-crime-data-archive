import { useMemo, useState } from 'react'
import { features, quickFilters } from './data'
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
  'Developmental cohort': '발달코호트',
  'Neuroimaging data': '신경영상 자료',
  'School survey': '학교기반 조사',
  'Data archive': '데이터 아카이브',
  Dashboard: '웹 대시보드',
  API: 'API',
  'Victimization survey': '범죄피해조사',
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

function Chip({ label, className }) {
  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${className}`}>
      {label}
    </span>
  )
}

function ChipGroup({ values, language, className, maxItems = 2, translate = true }) {
  const normalizedValues = Array.isArray(values) ? values.filter(Boolean) : values ? [values] : []
  if (normalizedValues.length === 0) return null

  const visibleValues = normalizedValues.slice(0, maxItems)
  const hiddenCount = Math.max(0, normalizedValues.length - maxItems)

  return (
    <>
      {visibleValues.map((value) => (
        <Chip
          key={`${value}-${className}`}
          label={translate ? optionLabel(value, language) : value}
          className={className}
        />
      ))}
      {hiddenCount > 0 && (
        <Chip
          label={`+${hiddenCount}`}
          className="border-black/10 bg-white/60 text-neutral-500"
        />
      )}
    </>
  )
}

function DatasetCard({ dataset, language }) {
  const name = language === 'ko' ? dataset.name_ko || dataset.name_en : dataset.name_en || dataset.name_ko
  const institution = language === 'ko'
    ? dataset.institution_ko || dataset.institution_en
    : dataset.institution_en || dataset.institution_ko
  const country = language === 'ko' ? dataset.country_ko || dataset.country_en : dataset.country_en || dataset.country_ko
  const researchLabels = language === 'ko'
    ? dataset.researchLabels_ko || dataset.domains_ko || dataset.researchLabels_en || dataset.domains_en
    : dataset.researchLabels_en || dataset.domains_en || dataset.researchLabels_ko || dataset.domains_ko

  const designSummary = (Array.isArray(dataset.design) ? dataset.design : dataset.design ? [dataset.design] : [])
    .slice(0, 2)
    .map((value) => optionLabel(value, language))
    .join(' · ')

  const dataTypeSummary = (Array.isArray(dataset.dataType) ? dataset.dataType : dataset.dataType ? [dataset.dataType] : [])
    .slice(0, 3)
    .map((value) => optionLabel(value, language))
    .join(' · ')

  return (
    <a
      href={dataset.link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    >
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

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950 group-hover:underline">
        {name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{institution}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <ChipGroup
          values={researchLabels}
          language={language}
          translate={false}
          maxItems={3}
          className="border-[#b89c4f]/25 bg-[#f7f0e3] text-[#0f2f24]"
        />
        <ChipGroup
          values={dataset.population}
          language={language}
          maxItems={2}
          className="border-[#0f2f24]/15 bg-[#edf3ed] text-[#234f3d]"
        />
      </div>

      {(designSummary || dataTypeSummary) && (
        <div className="mt-4 text-xs leading-5 text-neutral-500">
          {[designSummary, dataTypeSummary].filter(Boolean).join(' · ')}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
        <span className="text-sm text-neutral-500">{optionLabel(dataset.access?.[0] || 'Link', language)}</span>
        <span className="text-sm font-medium text-neutral-900">
          {language === 'en' ? 'View source →' : '출처 보기 →'}
        </span>
      </div>
    </a>
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

function DonutChart({ items, total, language }) {
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
              {language === 'en' ? 'sources' : '출처'}
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            {language === 'en' ? 'Source mix by country' : '국가별 출처 구성'}
          </h3>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {language === 'en'
              ? 'A compact overview of the countries and regions currently most represented in the archive.'
              : '현재 아카이브에서 많이 등록된 국가와 지역을 간단히 보여줍니다.'}
          </p>

          <div className="mt-5 grid gap-2">
            {items.slice(0, 4).map((item, index) => (
              <div key={item.name} className="flex items-center justify-between gap-3 text-sm">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: palette[index % palette.length] }} />
                  <span className="truncate font-medium text-neutral-700">{item.name}</span>
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

function ArchiveSnapshot({ language, countryStats, typeStats, totalDatasets, totalCountries, publicCount, longitudinalCount }) {
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
                ? 'A quick visual summary of the crime, criminal justice, and related behavioral research sources currently collected in this archive.'
                : '현재 아카이브에 수집된 범죄, 행동, 건강, 발달위험요인 관련 데이터 출처를 한눈에 볼 수 있도록 요약했습니다.'}
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
            <DonutChart items={countryStats} total={totalDatasets} language={language} />
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

      return queryMatch && countryMatch && populationMatch && designMatch && dataTypeMatch && accessMatch
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
    document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' })
  }

  const clearFilters = () => {
    setDraftFilters(INITIAL_FILTERS)
    setFilters(INITIAL_FILTERS)
    setShowAll(false)
  }

  const handleCountryBrowse = (countryValue) => {
    const nextFilters = {
      ...INITIAL_FILTERS,
      country: countryValue,
    }

    setDraftFilters(nextFilters)
    setFilters(nextFilters)
    setShowAll(false)
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
                      세계 각국의 데이터를 모아둔
                      <br />
                      <br />
                      범죄 관련 데이터 아카이브
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
                      정신건강, 문제행동 연구에 활용할 수 있는 데이터 출처를 제공합니다.
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
                        ? 'Search crime-related datasets and related sources for criminal justice, addiction, mental health, and problem behavior research.'
                        : '범죄 관련 데이터를 중심으로, 형사사법, 중독·물질사용, 정신건강, 문제행동 연구에 활용할 수 있는 자료를 함께 검색할 수 있습니다.'}
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
                      {quickFilters.map((filter) => (
                        <span key={typeof filter === 'string' ? filter : filter.label_en} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                          {filterChipLabel(filter, language)}
                        </span>
                      ))}
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

            <ArchiveSnapshot
              language={language}
              countryStats={countryStats}
              typeStats={typeStats}
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
                        <DatasetCard key={dataset.id} dataset={dataset} language={language} />
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
