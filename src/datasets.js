// src/datasets.js
// Expanded and labeled catalogue for Global Crime Data Archive
// Updated: 2026-06-02
// Display policy: name_en keeps official/original English names; name_ko provides Korean display names while preserving key official acronyms.
// Research labels use the five site-wide categories shown on the first screen.

export const datasets = [
  {
    "id": "kor-kicj-microdata",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국형사법무정책연구원 마이크로데이터",
    "name_en": "KICJ Microdata Repository",
    "institution_ko": "한국형사법무정책연구원",
    "institution_en": "Korean Institute of Criminology and Justice",
    "link": "https://www.kicj.re.kr/board.es?mid=a10905000000&bid=0062",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional",
      "Administrative",
      "Mixed"
    ],
    "dataType": [
      "Microdata repository",
      "Research data"
    ],
    "access": [
      "Mixed"
    ],
    "formats": [
      "SAV",
      "PDF",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "형사정책",
      "법무정책",
      "범죄피해",
      "형사사법"
    ],
    "topics_en": [
      "Criminal policy",
      "Justice policy",
      "Victimization",
      "Criminal justice"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "연구보고서 산출자료와 마이크로데이터를 모아둔 저장소 성격의 자료원.",
    "notes_en": "Repository-style source for KICJ research-output microdata and related documentation.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "kor-nypi-digital-sex-crime-youth-2021",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "2021년 아동청소년 대상 디지털 성범죄 현황 및 대응방안 연구",
    "name_en": "2021 Study on Digital Sexual Crimes Against Children and Adolescents",
    "institution_ko": "한국청소년정책연구원",
    "institution_en": "National Youth Policy Institute",
    "link": "https://www.nypi.re.kr/archive/mps/program/examinDataCode/view?menuId=MENU00226&pageNum=3&titleId=161&schType=0&schText=&firstCategory=&secondCategory=",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Cross-sectional"
    ],
    "dataType": [
      "Research data",
      "Survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Questionnaire",
      "Codebook",
      "Data file",
      "PDF"
    ],
    "topics_ko": [
      "청소년",
      "디지털 성범죄",
      "피해",
      "횡단조사"
    ],
    "topics_en": [
      "Youth",
      "Digital sexual crime",
      "Victimization",
      "Cross-sectional survey"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "아동·청소년 대상 디지털 성범죄 피해 및 대응 관련 조사자료.",
    "notes_en": "Research data on digital sexual crime victimization and responses involving children and adolescents.",
    "researchLabels_en": [
      "Crime & delinquency"
    ],
    "researchLabels_ko": [
      "범죄·비행"
    ]
  },
  {
    "id": "kor-kcyps-2010-e1",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국아동청소년패널조사 2010 초1 코호트",
    "name_en": "Korean Children and Youth Panel Survey 2010: Grade 1 Elementary Cohort",
    "institution_ko": "한국청소년정책연구원",
    "institution_en": "National Youth Policy Institute",
    "link": "https://www.nypi.re.kr/archive/mps/program/examinDataCode/view?menuId=MENU00226&pageNum=1&titleId=17&schType=0&schText=&firstCategory=1&secondCategory=2",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data file",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "패널조사",
      "비행"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Panel survey",
      "Delinquency"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "초등학교 1학년 코호트를 추적한 패널자료. 비행·문제행동 관련 변수 탐색 가능.",
    "notes_en": "Longitudinal cohort data following first-grade elementary students; may include delinquency/problem behavior variables.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kcyps-2010-e4",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국아동청소년패널조사 2010 초4 코호트",
    "name_en": "Korean Children and Youth Panel Survey 2010: Grade 4 Elementary Cohort",
    "institution_ko": "한국청소년정책연구원",
    "institution_en": "National Youth Policy Institute",
    "link": "https://www.nypi.re.kr/archive/mps/program/examinDataCode/view?menuId=MENU00226&pageNum=1&titleId=16&schType=0&schText=&firstCategory=1&secondCategory=2",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data file",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "패널조사",
      "비행"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Panel survey",
      "Delinquency"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "초등학교 4학년 코호트를 추적한 패널자료.",
    "notes_en": "Longitudinal cohort data following fourth-grade elementary students.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kcyps-2010-m1",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국아동청소년패널조사 2010 중1 코호트",
    "name_en": "Korean Children and Youth Panel Survey 2010: Grade 1 Middle School Cohort",
    "institution_ko": "한국청소년정책연구원",
    "institution_en": "National Youth Policy Institute",
    "link": "https://www.nypi.re.kr/archive/mps/program/examinDataCode/view?menuId=MENU00226&pageNum=1&titleId=15&schType=0&schText=&firstCategory=1&secondCategory=2",
    "population": [
      "Youth"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data file",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "청소년",
      "패널조사",
      "비행"
    ],
    "topics_en": [
      "Youth",
      "Panel survey",
      "Delinquency"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "중학교 1학년 코호트를 추적한 패널자료.",
    "notes_en": "Longitudinal cohort data following first-year middle school students.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kcyps-2018-e4",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국아동청소년패널조사 2018 초4 코호트",
    "name_en": "Korean Children and Youth Panel Survey 2018: Grade 4 Elementary Cohort",
    "institution_ko": "한국청소년정책연구원",
    "institution_en": "National Youth Policy Institute",
    "link": "https://www.nypi.re.kr/archive/mps/program/examinDataCode/view?menuId=MENU00226&pageNum=1&titleId=25&schType=0&schText=&firstCategory=1&secondCategory=3",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data file",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "패널조사",
      "비행"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Panel survey",
      "Delinquency"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "2018년 초등학교 4학년 코호트 패널자료.",
    "notes_en": "2018 fourth-grade elementary school cohort panel data.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kcyps-2018-m1",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국아동청소년패널조사 2018 중1 코호트",
    "name_en": "Korean Children and Youth Panel Survey 2018: Grade 1 Middle School Cohort",
    "institution_ko": "한국청소년정책연구원",
    "institution_en": "National Youth Policy Institute",
    "link": "https://www.nypi.re.kr/archive/mps/program/examinDataCode/view?menuId=MENU00226&pageNum=1&titleId=24&schType=0&schText=&firstCategory=1&secondCategory=3",
    "population": [
      "Youth"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data file",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "청소년",
      "패널조사",
      "비행"
    ],
    "topics_en": [
      "Youth",
      "Panel survey",
      "Delinquency"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "2018년 중학교 1학년 코호트 패널자료.",
    "notes_en": "2018 first-year middle school cohort panel data.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-mdis-cyber-violence",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "사이버폭력 실태조사",
    "name_en": "Cyber Violence Survey",
    "institution_ko": "방송통신미디어위원회·한국지능정보사회진흥원",
    "institution_en": "Korea Communications / NIA",
    "link": "https://mdis.mods.go.kr/ofrData/selectOfrDataDetail.do?survId=1006261&itmDiv=2&nPage=3&itemId=2003&itemNm=%EB%B2%94%EC%A3%84%C2%B7%EC%95%88%EC%A0%84",
    "population": [
      "Adults",
      "Youth"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Survey",
      "Microdata"
    ],
    "access": [
      "Registration required"
    ],
    "formats": [
      "Microdata",
      "SAS/SPSS/Stata possible",
      "Questionnaire"
    ],
    "topics_ko": [
      "성인",
      "청소년",
      "사이버폭력",
      "횡단조사"
    ],
    "topics_en": [
      "Adults",
      "Youth",
      "Cyber violence",
      "Cross-sectional survey"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government_microdata",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "MDIS에서 제공되는 범죄·안전 분야 마이크로데이터. 로그인/이용신청이 필요할 수 있음.",
    "notes_en": "Microdata served through MDIS; login or data-use application may be required.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-mdis-women-violence",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "여성폭력 실태조사",
    "name_en": "Survey on Violence Against Women",
    "institution_ko": "성평등가족부",
    "institution_en": "Ministry of Gender Equality and Family",
    "link": "https://mdis.mods.go.kr/ofrData/selectOfrDataDetail.do?survId=1005241&itmDiv=2&nPage=3&itemId=2003&itemNm=%EB%B2%94%EC%A3%84%C2%B7%EC%95%88%EC%A0%84",
    "population": [
      "Adults",
      "Women"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Survey",
      "Microdata"
    ],
    "access": [
      "Registration required"
    ],
    "formats": [
      "Microdata",
      "Questionnaire"
    ],
    "topics_ko": [
      "여성",
      "여성폭력",
      "피해",
      "횡단조사"
    ],
    "topics_en": [
      "Women",
      "Violence against women",
      "Victimization",
      "Cross-sectional survey"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government_microdata",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "여성폭력 경험과 피해 관련 실태조사 마이크로데이터.",
    "notes_en": "Microdata on violence against women and victimization experiences.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-mdis-domestic-violence",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "가정폭력 실태조사",
    "name_en": "Domestic Violence Survey",
    "institution_ko": "성평등가족부",
    "institution_en": "Ministry of Gender Equality and Family",
    "link": "https://mdis.mods.go.kr/ofrData/selectOfrDataDetail.do?survId=15411&itmDiv=2&nPage=3&itemId=2003&itemNm=%EB%B2%94%EC%A3%84%C2%B7%EC%95%88%EC%A0%84",
    "population": [
      "Adults"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Survey",
      "Microdata"
    ],
    "access": [
      "Registration required"
    ],
    "formats": [
      "Microdata",
      "Questionnaire"
    ],
    "topics_ko": [
      "성인",
      "가정폭력",
      "피해",
      "횡단조사"
    ],
    "topics_en": [
      "Adults",
      "Domestic violence",
      "Victimization",
      "Cross-sectional survey"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government_microdata",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "가정폭력 피해 경험과 인식 관련 실태조사.",
    "notes_en": "Survey microdata on domestic violence victimization and related perceptions.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kcgp-youth-gambling",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "청소년 도박 실태조사",
    "name_en": "Youth Gambling Survey",
    "institution_ko": "한국도박문제예방치유원",
    "institution_en": "Korea Center on Gambling Problems",
    "link": "https://www.kcgp.or.kr/portal/main/contents.do?menuNo=200238",
    "population": [
      "Youth"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Survey",
      "Report"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "PDF",
      "Tables",
      "Report"
    ],
    "topics_ko": [
      "청소년",
      "도박",
      "비행",
      "횡단조사"
    ],
    "topics_en": [
      "Youth",
      "Gambling",
      "Delinquency",
      "Cross-sectional survey"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "public_institution",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "청소년 도박 경험과 위험 수준을 파악하는 실태조사.",
    "notes_en": "Survey/report source on youth gambling behavior and risk.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "문제행동"
    ]
  },
  {
    "id": "kor-pskc-child-panel",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "한국아동패널조사",
    "name_en": "Panel Study on Korean Children",
    "institution_ko": "육아정책연구소",
    "institution_en": "Korea Institute of Child Care and Education",
    "link": "https://panel.kicce.re.kr/pskc/module/rawDataManage/index.do?menu_idx=56",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Application required",
      "Registration required"
    ],
    "formats": [
      "Data file",
      "Codebook",
      "Questionnaire"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "발달",
      "패널조사"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Development",
      "Panel survey"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-01",
    "notes_ko": "범죄·비행 특화 자료는 아니지만 아동 발달·가정·학교 맥락 변수를 활용할 수 있는 패널자료.",
    "notes_en": "Not crime-specific, but useful for child development, family, school, and risk-factor research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kicj-national-crime-victimization",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "전국범죄피해조사 / 국민생활안전실태조사",
    "name_en": "Korean Crime Victim Survey / National Public Safety Survey",
    "institution_ko": "한국형사법무정책연구원",
    "institution_en": "Korean Institute of Criminology and Justice",
    "link": "https://www.kicj.re.kr/board.es?mid=a10903040000&bid=0060",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Survey",
      "Microdata",
      "Victimization survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "SAV",
      "Codebook",
      "Questionnaire",
      "API"
    ],
    "topics_ko": [
      "범죄피해",
      "피해조사",
      "신고여부",
      "숨은 범죄"
    ],
    "topics_en": [
      "Victimization",
      "Victimization survey",
      "Reporting to police",
      "Dark figure of crime"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government_open_data",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "KICJ의 국민생활안전실태조사(전국범죄피해조사) 다운로드 페이지. 연도별 조사자료와 관련 문서를 찾는 입구로 더 적합함.",
    "notes_en": "KICJ download page for the National Public Safety Survey / Korean Crime Victim Survey. Better as a gateway to year-specific survey materials and documentation.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "kor-kicj-ccjs",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "형사사법통계 CCJS",
    "name_en": "Crime and Criminal Justice Statistics Portal",
    "institution_ko": "한국형사법무정책연구원",
    "institution_en": "Korean Institute of Criminology and Justice",
    "link": "https://www.kicj.re.kr/menu.es?mid=a10901010000",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Statistics portal",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "Dashboard",
      "API possible"
    ],
    "topics_ko": [
      "범죄통계",
      "형사사법",
      "법원",
      "검찰",
      "경찰"
    ],
    "topics_en": [
      "Crime statistics",
      "Criminal justice",
      "Courts",
      "Prosecution",
      "Police"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "research_institute",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "국내 범죄와 형사사법 통계정보를 제공하는 포털.",
    "notes_en": "KICJ-operated portal for Korean crime and criminal justice statistics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "kor-police-crime-statistics",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "경찰청 범죄통계",
    "name_en": "Korean National Police Agency Crime Statistics",
    "institution_ko": "경찰청",
    "institution_en": "Korean National Police Agency",
    "link": "https://www.police.go.kr/user/bbs/BD_selectBbsList.do?estnColumn2=%EB%85%84%EB%8F%84&q_bbsCode=1115",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "PDF",
      "Tables"
    ],
    "topics_ko": [
      "범죄발생",
      "검거",
      "피의자",
      "피해자",
      "범죄유형"
    ],
    "topics_en": [
      "Recorded crime",
      "Clearance",
      "Suspects",
      "Victims",
      "Crime type"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "연도별 경찰청 범죄통계 PDF와 표를 제공.",
    "notes_en": "Annual police-recorded crime statistics in PDF/table formats.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "kor-spo-crime-analysis",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "대검찰청 범죄분석",
    "name_en": "Supreme Prosecutors’ Office Crime Analysis",
    "institution_ko": "대검찰청",
    "institution_en": "Supreme Prosecutors’ Office",
    "link": "https://www.spo.go.kr/site/spo/crimeAnalysis.do",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report",
      "Web table"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "PDF"
    ],
    "topics_ko": [
      "범죄분석",
      "검찰",
      "수사기관",
      "범죄통계원표"
    ],
    "topics_en": [
      "Crime analysis",
      "Prosecution",
      "Investigative agencies",
      "Crime statistics forms"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "검찰·경찰·특별사법경찰의 범죄통계원표 기반 범죄분석 자료.",
    "notes_en": "Crime analysis based on crime statistics forms from prosecution, police, and special judicial police agencies.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "kor-kosis-crime-safety",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "KOSIS 범죄·안전 주제별 통계",
    "name_en": "KOSIS Crime and Safety Statistics",
    "institution_ko": "통계청",
    "institution_en": "Statistics Korea",
    "link": "https://kosis.kr/statisticsList/statisticsListIndex.do?publicationYN=Y&statId=2007423",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Statistics portal",
      "Web table"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "CSV/XLS downloads"
    ],
    "topics_ko": [
      "범죄안전",
      "경찰청범죄통계",
      "가정폭력",
      "성폭력",
      "사이버폭력"
    ],
    "topics_en": [
      "Crime and safety",
      "Police crime statistics",
      "Domestic violence",
      "Sexual violence",
      "Cyber violence"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "범죄·안전 분야의 여러 국가통계표를 한 곳에서 탐색 가능.",
    "notes_en": "KOSIS topic page aggregating Korean crime and safety statistics tables.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "kor-corrections-yearbook",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "교정통계연보",
    "name_en": "Corrections Statistics Yearbook",
    "institution_ko": "법무부 교정본부",
    "institution_en": "Korea Correctional Service / Ministry of Justice",
    "link": "https://www.corrections.go.kr/corrections/1103/subview.do",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "PDF"
    ],
    "topics_ko": [
      "교정",
      "수용자",
      "출소",
      "재복역",
      "교정시설"
    ],
    "topics_en": [
      "Corrections",
      "Prisoners",
      "Release",
      "Reincarceration",
      "Correctional facilities"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "교정시설 수용, 출소, 재복역 등 교정행정 통계 연보.",
    "notes_en": "Annual corrections statistics covering prison population, releases, and related correctional administration.",
    "researchLabels_en": [
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "형사사법"
    ]
  },
  {
    "id": "kor-moj-cppb-crime-prevention-statistics",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "범죄예방정책 통계분석",
    "name_en": "Crime Prevention Statistics by the Crime Prevention Policy Bureau",
    "institution_ko": "법무부 범죄예방정책국",
    "institution_en": "Crime Prevention Policy Bureau, Ministry of Justice",
    "link": "https://www.cppb.go.kr/moj/213/subview.do",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative data",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web page",
      "Report",
      "Tables",
      "PDF"
    ],
    "topics_ko": [
      "범죄예방",
      "보호관찰",
      "소년보호",
      "전자감독",
      "사회봉사",
      "수강명령",
      "형사사법",
      "공식통계"
    ],
    "topics_en": [
      "Crime prevention",
      "Probation",
      "Juvenile protection",
      "Electronic monitoring",
      "Community service",
      "Treatment orders",
      "Criminal justice",
      "Official statistics"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "user_provided",
    "lastChecked": "2026-06-02",
    "notes_ko": "법무부 범죄예방정책국에서 제공하는 범죄예방 분야 공식 통계 자료. 보호관찰, 소년보호, 전자감독 등 성인 및 청소년 대상 범죄예방정책 관련 통계를 확인할 수 있음.",
    "notes_en": "Official crime prevention statistics provided by the Crime Prevention Policy Bureau of the Ministry of Justice. Includes crime prevention policy statistics related to probation, juvenile protection, electronic monitoring, and related justice interventions.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "usa-fbi-cde",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "FBI 범죄 데이터 탐색기 (Crime Data Explorer)",
    "name_en": "FBI Crime Data Explorer",
    "institution_ko": "미국 연방수사국",
    "institution_en": "Federal Bureau of Investigation",
    "link": "https://cde.ucr.cjis.gov/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Dashboard",
      "Data portal"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "CSV downloads",
      "API related"
    ],
    "topics_ko": [
      "범죄발생",
      "UCR",
      "NIBRS",
      "체포",
      "증오범죄"
    ],
    "topics_en": [
      "Recorded crime",
      "UCR",
      "NIBRS",
      "Arrests",
      "Hate crime"
    ],
    "language": [
      "English"
    ],
    "scope": "National, state, local",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "FBI의 UCR/NIBRS 계열 범죄자료 탐색 포털.",
    "notes_en": "FBI public portal for UCR/NIBRS-related crime data.",
    "researchLabels_en": [
      "Crime & delinquency"
    ],
    "researchLabels_ko": [
      "범죄·비행"
    ]
  },
  {
    "id": "usa-fbi-crime-data-api",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "FBI 범죄 데이터 API",
    "name_en": "FBI Crime Data API",
    "institution_ko": "미국 법무부 / FBI",
    "institution_en": "U.S. Department of Justice / FBI",
    "link": "https://www.justice.gov/developer",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Open API",
      "Official statistics"
    ],
    "access": [
      "Public API",
      "API key may be required"
    ],
    "formats": [
      "JSON",
      "CSV",
      "API"
    ],
    "topics_ko": [
      "UCR",
      "NIBRS",
      "API",
      "범죄통계"
    ],
    "topics_en": [
      "UCR",
      "NIBRS",
      "API",
      "Crime statistics"
    ],
    "language": [
      "English"
    ],
    "scope": "National, state, local",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "FBI UCR 보고체계 기반 데이터를 JSON/CSV로 조회할 수 있는 API 안내.",
    "notes_en": "Read-only web service for FBI UCR/NIBRS-related crime data.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "usa-bjs-ncvs",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 전국범죄피해조사 (NCVS)",
    "name_en": "National Crime Victimization Survey (NCVS)",
    "institution_ko": "미국 사법통계국",
    "institution_en": "Bureau of Justice Statistics",
    "link": "https://bjs.ojp.gov/data-collection/ncvs",
    "population": [
      "Adults",
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Panel-like rotating panel"
    ],
    "dataType": [
      "Victimization survey",
      "Survey",
      "Microdata"
    ],
    "access": [
      "Public",
      "Restricted versions available"
    ],
    "formats": [
      "Dashboard",
      "Public-use files",
      "Restricted-use files"
    ],
    "topics_ko": [
      "범죄피해",
      "피해조사",
      "미신고범죄",
      "가구조사"
    ],
    "topics_en": [
      "Victimization",
      "Victimization survey",
      "Unreported crime",
      "Household survey"
    ],
    "language": [
      "English"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "미국 범죄피해의 핵심 공식 조사. 일반적으로 12세 이상 비치명 범죄피해를 다룸.",
    "notes_en": "Primary U.S. source for criminal victimization data, typically covering nonfatal victimization among persons age 12 or older.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "usa-ncvs-dashboard",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "NCVS 대시보드 / N-DASH",
    "name_en": "NCVS Dashboard / N-DASH",
    "institution_ko": "미국 사법통계국",
    "institution_en": "Bureau of Justice Statistics",
    "link": "https://ncvs.bjs.ojp.gov/",
    "population": [
      "Adults",
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Dashboard",
      "Victimization survey"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Interactive dashboard",
      "Charts",
      "Tables"
    ],
    "topics_ko": [
      "범죄피해",
      "폭력범죄",
      "재산범죄",
      "피해자특성"
    ],
    "topics_en": [
      "Victimization",
      "Violent crime",
      "Property crime",
      "Victim characteristics"
    ],
    "language": [
      "English"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "NCVS 데이터를 웹에서 대화형으로 분석할 수 있는 도구.",
    "notes_en": "Interactive tool for analyzing NCVS personal and property victimization data.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "usa-nacjd",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "전국 형사사법 데이터 아카이브 (NACJD)",
    "name_en": "National Archive of Criminal Justice Data (NACJD)",
    "institution_ko": "ICPSR / 미시간대학교",
    "institution_en": "ICPSR, University of Michigan",
    "link": "https://www.icpsr.umich.edu/sites/nacjd/home",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Cross-sectional",
      "Longitudinal",
      "Administrative",
      "Mixed"
    ],
    "dataType": [
      "Data archive",
      "Microdata repository"
    ],
    "access": [
      "Public",
      "Registration required",
      "Restricted versions available"
    ],
    "formats": [
      "SPSS",
      "SAS",
      "Stata",
      "CSV",
      "Documentation"
    ],
    "topics_ko": [
      "범죄학",
      "형사사법",
      "마이크로데이터",
      "자료아카이브"
    ],
    "topics_en": [
      "Criminology",
      "Criminal justice",
      "Microdata",
      "Data archive"
    ],
    "language": [
      "English"
    ],
    "scope": "United States and international studies",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "범죄·형사사법 연구자료를 보존·제공하는 대표 아카이브.",
    "notes_en": "Major archive providing access to criminal justice datasets for research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "usa-nibrs-series",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 국가사건기반보고시스템(NIBRS) 자료 시리즈",
    "name_en": "National Incident-Based Reporting System (NIBRS) Series",
    "institution_ko": "FBI / NACJD",
    "institution_en": "FBI / NACJD",
    "link": "https://www.icpsr.umich.edu/web/NACJD/series/128",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Incident-level administrative data",
      "Microdata"
    ],
    "access": [
      "Public",
      "Registration required"
    ],
    "formats": [
      "Fixed-width",
      "SAS/SPSS/Stata",
      "Documentation"
    ],
    "topics_ko": [
      "NIBRS",
      "사건단위자료",
      "체포",
      "피해자",
      "가해자"
    ],
    "topics_en": [
      "NIBRS",
      "Incident-level data",
      "Arrests",
      "Victims",
      "Offenders"
    ],
    "language": [
      "English"
    ],
    "scope": "National, agency-level coverage varies",
    "sourceCategory": "government_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "FBI UCR 체계의 구성요소인 NIBRS 사건단위 자료 시리즈. 범죄, 피해자, 가해자, 체포자 등 사건의 여러 분석 단위를 포함하며, 참여기관 범위와 연도별 커버리지 확인이 필요함.",
    "notes_en": "FBI NIBRS incident-level data series; coverage varies by year and agency participation.",
    "researchLabels_en": [
      "Crime & delinquency"
    ],
    "researchLabels_ko": [
      "범죄·비행"
    ]
  },
  {
    "id": "usa-ojjdp-ezajcs",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 소년법원 비행사건 통계 분석도구(EZAJCS)",
    "name_en": "Easy Access to Juvenile Court Statistics (EZAJCS)",
    "institution_ko": "미국 청소년사법·비행예방국",
    "institution_en": "Office of Juvenile Justice and Delinquency Prevention",
    "link": "https://ojjdp.ojp.gov/statistical-briefing-book/data-analysis-tools/ezajcs",
    "population": [
      "Youth"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Juvenile justice statistics",
      "Web analysis tool"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Interactive tables",
      "Web tool"
    ],
    "topics_ko": [
      "청소년비행",
      "소년법원",
      "비행사건",
      "사건처리",
      "구금",
      "심판",
      "처분"
    ],
    "topics_en": [
      "Juvenile delinquency",
      "Juvenile courts",
      "Delinquency cases",
      "Case processing",
      "Detention",
      "Adjudication",
      "Disposition"
    ],
    "language": [
      "English"
    ],
    "scope": "National estimates",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "미국 소년법원이 처리한 비행사건의 전국 추정치를 바탕으로, 청소년의 연령, 성별, 인종, 의뢰된 범죄유형, 구금 여부, 심판 및 처분 결과 등을 조건별로 분석할 수 있는 통계 분석도구.",
    "notes_en": "Tool for analyzing national estimates of delinquency cases processed by juvenile courts, including youth demographics, referral offense, detention, adjudication, and disposition.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "usa-ojjdp-ezapop",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 청소년 인구 통계 분석도구(EZAPOP)",
    "name_en": "Easy Access to Juvenile Populations (EZAPOP)",
    "institution_ko": "미국 청소년사법·비행예방국",
    "institution_en": "Office of Juvenile Justice and Delinquency Prevention",
    "link": "https://www.ojjdp.gov/ojstatbb/ezapop/",
    "population": [
      "Youth",
      "Children"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Population denominator",
      "Web analysis tool"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Interactive tables"
    ],
    "topics_ko": [
      "청소년인구",
      "분모자료",
      "지역",
      "성별",
      "인종"
    ],
    "topics_en": [
      "Youth population",
      "Denominator data",
      "Geography",
      "Sex",
      "Race/ethnicity"
    ],
    "language": [
      "English"
    ],
    "scope": "National, state, county",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "청소년 범죄율·소년사법 분석에 필요한 연령, 성별, 인종, 지역별 인구 분모자료를 조회할 수 있는 통계 분석도구.",
    "notes_en": "Population denominator source for juvenile justice and youth crime analyses.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "usa-njcda",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "전국 소년법원 데이터 아카이브",
    "name_en": "National Juvenile Court Data Archive",
    "institution_ko": "OJJDP / NACJD",
    "institution_en": "OJJDP / NACJD",
    "link": "https://www.icpsr.umich.edu/web/NACJD/studies/38418",
    "population": [
      "Youth"
    ],
    "design": [
      "Administrative",
      "Longitudinal administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Juvenile court records",
      "Microdata"
    ],
    "access": [
      "Public",
      "Restricted versions may exist"
    ],
    "formats": [
      "Data files",
      "Documentation"
    ],
    "topics_ko": [
      "소년법원",
      "비행",
      "지위비행",
      "사건기록"
    ],
    "topics_en": [
      "Juvenile courts",
      "Delinquency",
      "Status offense",
      "Case records"
    ],
    "language": [
      "English"
    ],
    "scope": "United States",
    "sourceCategory": "government_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "소년법원 사건기록 기반의 장기 아카이브.",
    "notes_en": "Archive of juvenile court case records.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "usa-pathways-desistance",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "탈범죄 경로 연구 (Pathways to Desistance)",
    "name_en": "Pathways to Desistance Study",
    "institution_ko": "피츠버그대학 / ICPSR",
    "institution_en": "University of Pittsburgh / ICPSR",
    "link": "https://www.icpsr.umich.edu/web/ICPSR/series/260",
    "population": [
      "Youth",
      "Young adults"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey",
      "Justice-involved sample"
    ],
    "access": [
      "Public",
      "Registration required",
      "Restricted versions may exist"
    ],
    "formats": [
      "Data files",
      "Documentation"
    ],
    "topics_ko": [
      "청소년범죄자",
      "탈범죄",
      "재범",
      "종단연구"
    ],
    "topics_en": [
      "Adolescent offenders",
      "Desistance",
      "Recidivism",
      "Longitudinal study"
    ],
    "language": [
      "English"
    ],
    "scope": "Arizona and Pennsylvania sample",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "중대 청소년 범죄자의 성인기 이행과 탈범죄 과정을 추적한 종단연구.",
    "notes_en": "Longitudinal study of serious adolescent offenders transitioning into adulthood.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "usa-add-health",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "청소년-성인 건강 종단연구 (Add Health)",
    "name_en": "National Longitudinal Study of Adolescent to Adult Health",
    "institution_ko": "노스캐롤라이나대학 / ICPSR",
    "institution_en": "UNC Carolina Population Center / ICPSR",
    "link": "https://www.icpsr.umich.edu/web/ICPSR/series/1006",
    "population": [
      "Youth",
      "Adults"
    ],
    "design": [
      "Longitudinal"
    ],
    "dataType": [
      "Panel data",
      "Survey"
    ],
    "access": [
      "Public",
      "Restricted versions available",
      "Registration required"
    ],
    "formats": [
      "Data files",
      "Documentation"
    ],
    "topics_ko": [
      "청소년",
      "성인기 이행",
      "비행",
      "폭력",
      "건강"
    ],
    "topics_en": [
      "Adolescence",
      "Transition to adulthood",
      "Delinquency",
      "Violence",
      "Health"
    ],
    "language": [
      "English"
    ],
    "scope": "Nationally representative U.S. cohort",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "범죄 특화 자료는 아니지만 청소년 비행·폭력·위험행동 변수를 포함하는 대표 종단자료.",
    "notes_en": "Not crime-specific, but includes delinquency, violence, and risk behavior variables in a longitudinal cohort.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "uk-data-police",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 경찰 오픈데이터 (data.police.uk)",
    "name_en": "data.police.uk",
    "institution_ko": "영국 경찰 오픈데이터",
    "institution_en": "UK Police Open Data",
    "link": "https://data.police.uk/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Open data portal"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "CSV",
      "API",
      "Dashboard"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "거리단위범죄",
      "검문검색",
      "결과"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Street-level crime",
      "Stop and search",
      "Outcomes"
    ],
    "language": [
      "English"
    ],
    "scope": "England, Wales, Northern Ireland",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "England, Wales, Northern Ireland의 경찰 오픈데이터 포털. Scotland는 별도 자료원을 확인해야 함.",
    "notes_en": "Police open data portal for England, Wales, and Northern Ireland; Scotland should be checked separately.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "uk-police-api",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 경찰 API 문서",
    "name_en": "Police API Documentation",
    "institution_ko": "영국 경찰 오픈데이터",
    "institution_en": "UK Police Open Data",
    "link": "https://data.police.uk/docs/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Open API"
    ],
    "access": [
      "Public API"
    ],
    "formats": [
      "JSON",
      "API"
    ],
    "topics_ko": [
      "API",
      "거리단위범죄",
      "경찰서",
      "지역"
    ],
    "topics_en": [
      "API",
      "Street-level crime",
      "Police stations",
      "Neighbourhoods"
    ],
    "language": [
      "English"
    ],
    "scope": "England, Wales, Northern Ireland",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "data.police.uk API 문서. 월별 갱신 여부와 호출 제한 확인 가능.",
    "notes_en": "Documentation for the data.police.uk API.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "uk-ons-crime-justice",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "ONS 범죄와 사법 통계",
    "name_en": "ONS Crime and Justice",
    "institution_ko": "영국 통계청",
    "institution_en": "Office for National Statistics",
    "link": "https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Survey",
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Reports",
      "Tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "CSV/XLS downloads",
      "Reports"
    ],
    "topics_ko": [
      "범죄피해조사",
      "경찰기록범죄",
      "아동학대",
      "범죄와 사법"
    ],
    "topics_en": [
      "Crime Survey",
      "Police-recorded crime",
      "Child abuse",
      "Crime and justice"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales mainly",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "CSEW와 경찰기록범죄를 함께 제공하는 영국 공식 범죄·사법 통계 허브.",
    "notes_en": "ONS hub for crime and justice statistics, including CSEW and police-recorded crime.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "uk-csew-ukds",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "잉글랜드·웨일스 범죄피해조사(CSEW) 자료 시리즈",
    "name_en": "Crime Survey for England and Wales (CSEW) Series",
    "institution_ko": "UK Data Service / ONS",
    "institution_en": "UK Data Service / ONS",
    "link": "https://datacatalogue.ukdataservice.ac.uk/series/series/200009",
    "population": [
      "Adults",
      "Children",
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Victimization survey",
      "Microdata"
    ],
    "access": [
      "Registration required",
      "Safeguarded",
      "Secure access for some files"
    ],
    "formats": [
      "SPSS",
      "Stata",
      "Documentation"
    ],
    "topics_ko": [
      "범죄피해",
      "미신고범죄",
      "성인",
      "아동",
      "피해조사"
    ],
    "topics_en": [
      "Victimization",
      "Unreported crime",
      "Adults",
      "Children",
      "Victimization survey"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales",
    "sourceCategory": "data_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "CSEW 연구용 마이크로데이터 시리즈. 접근 등급은 연도·파일별로 다를 수 있음.",
    "notes_en": "Research microdata series for CSEW; access conditions vary by file/year.",
    "researchLabels_en": [
      "Crime & delinquency"
    ],
    "researchLabels_ko": [
      "범죄·비행"
    ]
  },
  {
    "id": "uk-youth-justice-stats",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 청소년사법 통계 자료 모음",
    "name_en": "Youth Justice Statistics Collection",
    "institution_ko": "영국 법무부 / Youth Justice Board",
    "institution_en": "UK Ministry of Justice / Youth Justice Board",
    "link": "https://www.gov.uk/government/collections/youth-justice-statistics",
    "population": [
      "Youth",
      "Children"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Juvenile justice statistics",
      "Report",
      "Tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "HTML",
      "XLS/ODS",
      "CSV possible",
      "PDF"
    ],
    "topics_ko": [
      "청소년사법",
      "소년범죄",
      "구금",
      "재범",
      "처분"
    ],
    "topics_en": [
      "Youth justice",
      "Juvenile offending",
      "Custody",
      "Reoffending",
      "Disposals"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "영국 청소년사법 연례통계 컬렉션 페이지. 특정 연도 보고서보다 장기적으로 안정적인 진입점.",
    "notes_en": "Collection page for youth justice annual statistics; more durable than linking to a single year release.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "uk-yjb-data",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "청소년사법위원회(YJB) 데이터 허브",
    "name_en": "Youth Justice Board Data Hub",
    "institution_ko": "Youth Justice Board",
    "institution_en": "Youth Justice Board",
    "link": "https://yjresourcehub.uk/yjb-data/",
    "population": [
      "Youth",
      "Children"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Dashboard",
      "Juvenile justice statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "Tables"
    ],
    "topics_ko": [
      "청소년사법",
      "검문검색",
      "구금",
      "지역자료"
    ],
    "topics_en": [
      "Youth justice",
      "Stop and search",
      "Custody",
      "Local data"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "YJB의 청소년사법 관련 대시보드와 자료 모음.",
    "notes_en": "Youth Justice Board dashboards and data resources.",
    "researchLabels_en": [
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "형사사법"
    ]
  },
  {
    "id": "uk-yjb-caseload",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "청소년사법위원회(YJB) 사건처리 통계",
    "name_en": "Youth Justice Board Caseload Statistics",
    "institution_ko": "Youth Justice Board / data.gov.uk",
    "institution_en": "Youth Justice Board / data.gov.uk",
    "link": "https://www.data.gov.uk/dataset/b1c3a4e3-c385-4c94-973c-e4047aea12ee/youth_justice_board_caseload_statistics",
    "population": [
      "Youth",
      "Children"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Juvenile justice statistics",
      "Open data"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "CSV",
      "ODS",
      "XLS"
    ],
    "topics_ko": [
      "청소년사법",
      "사건처리",
      "비행",
      "처분"
    ],
    "topics_en": [
      "Youth justice",
      "Caseload",
      "Delinquency",
      "Disposals"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales",
    "sourceCategory": "government_open_data",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "Youth Offending Teams 업무량 및 입증범죄 등 관련 자료.",
    "notes_en": "Youth Offending Team workload data including proven offences and related measures.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "uk-scotland-recorded-crime",
    "countryCode": "UK-SCT",
    "country_ko": "스코틀랜드",
    "country_en": "Scotland",
    "name_ko": "스코틀랜드 경찰기록범죄 통계",
    "name_en": "Recorded Crime in Scotland",
    "institution_ko": "스코틀랜드 정부",
    "institution_en": "Scottish Government",
    "link": "https://www.gov.scot/collections/recorded-crime-in-scotland/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report",
      "Tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "HTML",
      "Excel/CSV possible",
      "PDF"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "범죄유형",
      "지역",
      "검거율"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Crime type",
      "Local authority",
      "Clear-up rates"
    ],
    "language": [
      "English"
    ],
    "scope": "Scotland",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "스코틀랜드의 연례·분기 경찰기록범죄 공식통계.",
    "notes_en": "Annual and quarterly official statistics on police-recorded crime in Scotland.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "uk-psni-recorded-crime",
    "countryCode": "UK-NIR",
    "country_ko": "북아일랜드",
    "country_en": "Northern Ireland",
    "name_ko": "북아일랜드 경찰기록범죄 통계",
    "name_en": "Police Recorded Crime Statistics, Northern Ireland",
    "institution_ko": "북아일랜드 경찰청",
    "institution_en": "Police Service of Northern Ireland",
    "link": "https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics/police-recorded-crime-statistics",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report",
      "Tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "CSV",
      "PDF",
      "ODS"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "가정폭력",
      "증오동기",
      "검문검색"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Domestic abuse",
      "Hate motivation",
      "Stop and search"
    ],
    "language": [
      "English"
    ],
    "scope": "Northern Ireland",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "PSNI의 경찰기록범죄 및 관련 공식통계 자료.",
    "notes_en": "PSNI official statistics on recorded crime and related topics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "uk-moj-justice-data",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 법무부 Justice Data",
    "name_en": "Justice Data",
    "institution_ko": "영국 법무부",
    "institution_en": "UK Ministry of Justice",
    "link": "https://data.justice.gov.uk/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Criminal justice statistics",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "Tables",
      "CSV possible"
    ],
    "topics_ko": [
      "법원",
      "형사사법",
      "사법처리",
      "재판"
    ],
    "topics_en": [
      "Courts",
      "Criminal justice",
      "Case processing",
      "Tribunals"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales mainly",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "영국 법무부의 형사·민사 사법 운영 관련 공식통계 포털.",
    "notes_en": "UK Ministry of Justice portal for official criminal and civil justice statistics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "can-statcan-crime-justice",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "캐나다 범죄·사법 통계 허브",
    "name_en": "Crime and Justice Statistics Hub",
    "institution_ko": "캐나다 통계청",
    "institution_en": "Statistics Canada",
    "link": "https://www.statcan.gc.ca/en/subjects-start/crime_and_justice",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Statistics portal",
      "Reports",
      "Tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "CSV",
      "Reports"
    ],
    "topics_ko": [
      "범죄와 사법",
      "경찰기록범죄",
      "피해조사",
      "청소년범죄"
    ],
    "topics_en": [
      "Crime and justice",
      "Police-reported crime",
      "Victimization",
      "Youth crime"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "National, provinces, territories",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "캐나다 범죄·피해·사법 관련 자료와 분석을 모은 공식 허브.",
    "notes_en": "Statistics Canada hub for crime, victimization, and justice data.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "can-ucr",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "캐나다 통일범죄보고조사(UCR)",
    "name_en": "Uniform Crime Reporting Survey (UCR)",
    "institution_ko": "캐나다 통계청",
    "institution_en": "Statistics Canada",
    "link": "https://www23.statcan.gc.ca/imdb-bmdi/pub/3302-eng.htm",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-reported crime",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Tables",
      "Microdata/restricted possible",
      "Documentation"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "UCR",
      "범죄특성",
      "청소년범죄"
    ],
    "topics_en": [
      "Police-reported crime",
      "UCR",
      "Crime characteristics",
      "Youth crime"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "National, provincial, municipal",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "캐나다 경찰기록범죄의 핵심 공식 조사·통계 프로그램.",
    "notes_en": "Core Canadian police-reported crime statistical program.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "can-incident-based-table",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "사건기반 범죄통계 표",
    "name_en": "Incident-based crime statistics by detailed violations",
    "institution_ko": "캐나다 통계청",
    "institution_en": "Statistics Canada",
    "link": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510017701",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Web table"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "CSV",
      "Web table"
    ],
    "topics_ko": [
      "사건기반범죄통계",
      "상세죄명",
      "지역",
      "경찰기록범죄"
    ],
    "topics_en": [
      "Incident-based crime statistics",
      "Detailed violations",
      "Geography",
      "Police-reported crime"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "Canada, provinces, territories, CMAs",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "상세 범죄유형별 사건기반 범죄통계 표.",
    "notes_en": "Detailed incident-based crime statistics table with download options.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "can-gss-victimization",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "캐나다 일반사회조사: 안전과 범죄피해",
    "name_en": "General Social Survey: Canadians’ Safety / Victimization",
    "institution_ko": "캐나다 통계청",
    "institution_en": "Statistics Canada",
    "link": "https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&Id=148641",
    "population": [
      "Adults"
    ],
    "design": [
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Victimization survey",
      "Survey"
    ],
    "access": [
      "Public tables",
      "Microdata via data services"
    ],
    "formats": [
      "Tables",
      "Microdata",
      "Documentation"
    ],
    "topics_ko": [
      "범죄피해",
      "안전인식",
      "미신고범죄",
      "피해조사"
    ],
    "topics_en": [
      "Victimization",
      "Perceptions of safety",
      "Unreported crime",
      "Victimization survey"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "National, provinces/territories",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "캐나다인의 범죄피해 경험과 안전·사법 인식을 조사하는 GSS.",
    "notes_en": "Survey on Canadians’ experiences of victimization and perceptions of crime and justice.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "can-youth-open-data",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "아동·청소년 경찰기록범죄 통계",
    "name_en": "Police-reported Crime Statistics on Children and Youth",
    "institution_ko": "캐나다 정부 오픈데이터",
    "institution_en": "Government of Canada Open Data",
    "link": "https://open.canada.ca/data/en/dataset/c954a481-2fce-47ad-bceb-a825e7bedaf4",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Open data",
      "Youth crime statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "CSV",
      "Open data"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "경찰기록범죄",
      "소년사법"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Police-reported crime",
      "Youth justice"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "Canada, regions",
    "sourceCategory": "government_open_data",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "아동·청소년 관련 경찰기록범죄 지표를 제공하는 캐나다 오픈데이터 자료.",
    "notes_en": "Open data source for police-reported crime statistics on children and youth.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "aus-abs-crime-justice",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "ABS 범죄와 사법 통계",
    "name_en": "ABS Crime and Justice",
    "institution_ko": "호주 통계청",
    "institution_en": "Australian Bureau of Statistics",
    "link": "https://www.abs.gov.au/statistics/people/crime-and-justice",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Statistics portal",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "Excel/CSV",
      "Reports"
    ],
    "topics_ko": [
      "범죄와 사법",
      "피해자",
      "가해자",
      "교정"
    ],
    "topics_en": [
      "Crime and justice",
      "Victims",
      "Offenders",
      "Corrections"
    ],
    "language": [
      "English"
    ],
    "scope": "National, states/territories",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "호주 범죄·사법 통계 주제 허브.",
    "notes_en": "ABS topic hub for Australian crime and justice statistics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "aus-recorded-crime-victims",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "호주 경찰기록범죄: 피해자 통계",
    "name_en": "Recorded Crime - Victims",
    "institution_ko": "호주 통계청",
    "institution_en": "Australian Bureau of Statistics",
    "link": "https://www.abs.gov.au/statistics/people/crime-and-justice/recorded-crime-victims/latest-release",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-recorded crime",
      "Victim statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Excel",
      "CSV",
      "Data downloads",
      "Report"
    ],
    "topics_ko": [
      "범죄피해자",
      "경찰기록범죄",
      "폭력",
      "성범죄",
      "가정폭력"
    ],
    "topics_en": [
      "Victims",
      "Police-recorded crime",
      "Violence",
      "Sexual offences",
      "Family and domestic violence"
    ],
    "language": [
      "English"
    ],
    "scope": "States/territories",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "호주 경찰기록 기반 피해자 통계.",
    "notes_en": "Police-recorded victim statistics in Australia.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "aus-recorded-crime-offenders",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "호주 경찰기록범죄: 가해자 통계",
    "name_en": "Recorded Crime - Offenders",
    "institution_ko": "호주 통계청",
    "institution_en": "Australian Bureau of Statistics",
    "link": "https://www.abs.gov.au/statistics/people/crime-and-justice/recorded-crime-offenders/latest-release",
    "population": [
      "Adults",
      "Youth"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-recorded crime",
      "Offender statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Excel",
      "CSV",
      "Data downloads",
      "Report"
    ],
    "topics_ko": [
      "가해자",
      "청소년범죄",
      "경찰처리",
      "가정폭력"
    ],
    "topics_en": [
      "Offenders",
      "Youth offenders",
      "Police proceedings",
      "Family and domestic violence"
    ],
    "language": [
      "English"
    ],
    "scope": "States/territories",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "경찰에 의해 처리된 가해자 통계. 청소년 가해자 지표 포함.",
    "notes_en": "Statistics on offenders proceeded against by police, including youth offender measures.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "aus-aic-statistics",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "호주 범죄학연구소 통계",
    "name_en": "Australian Institute of Criminology Statistics",
    "institution_ko": "호주 범죄학연구소",
    "institution_en": "Australian Institute of Criminology",
    "link": "https://www.aic.gov.au/statistics",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Research statistics",
      "Data portal"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Reports",
      "Tables",
      "Dashboards"
    ],
    "topics_ko": [
      "성범죄",
      "가정폭력",
      "살인",
      "청소년",
      "범죄동향"
    ],
    "topics_en": [
      "Sexual offending",
      "Domestic violence",
      "Homicide",
      "Youth",
      "Crime trends"
    ],
    "language": [
      "English"
    ],
    "scope": "Australia",
    "sourceCategory": "research_institute",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "AIC의 범죄·사법 통계 및 연구자료 모음. 성범죄 관련 ASOS 컬렉션 포함.",
    "notes_en": "AIC statistics page including sexual offending, homicide, and related crime data collections.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "nzl-police-data",
    "countryCode": "NZ",
    "country_ko": "뉴질랜드",
    "country_en": "New Zealand",
    "name_ko": "뉴질랜드 경찰 데이터와 통계",
    "name_en": "New Zealand Police Data and Statistics",
    "institution_ko": "뉴질랜드 경찰",
    "institution_en": "New Zealand Police",
    "link": "https://www.police.govt.nz/about-us/publications-statistics/data-and-statistics",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-recorded crime",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Interactive reports",
      "PDF",
      "CSV possible"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "피해자",
      "가해자",
      "월별통계"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Victims",
      "Offenders",
      "Monthly statistics"
    ],
    "language": [
      "English"
    ],
    "scope": "National, regions",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "policedata.nz를 통해 월별 경찰통계를 공개.",
    "notes_en": "Monthly police data released through policedata.nz.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "nzl-stats-crime-justice",
    "countryCode": "NZ",
    "country_ko": "뉴질랜드",
    "country_en": "New Zealand",
    "name_ko": "뉴질랜드 통계청 범죄와 사법",
    "name_en": "Stats NZ Crime and Justice",
    "institution_ko": "뉴질랜드 통계청",
    "institution_en": "Stats NZ",
    "link": "https://www.stats.govt.nz/topics/crime-and-justice/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Data portal"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Tables",
      "CSV",
      "Reports"
    ],
    "topics_ko": [
      "법원",
      "기소",
      "유죄",
      "형벌",
      "사법통계"
    ],
    "topics_en": [
      "Courts",
      "Prosecutions",
      "Convictions",
      "Sentences",
      "Justice statistics"
    ],
    "language": [
      "English"
    ],
    "scope": "New Zealand",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "기소·유죄·형벌 등 사법통계를 제공.",
    "notes_en": "Crime and justice statistics covering court charges, outcomes, and sentences.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "nzl-moj-data-tables",
    "countryCode": "NZ",
    "country_ko": "뉴질랜드",
    "country_en": "New Zealand",
    "name_ko": "뉴질랜드 법무부 사법통계 데이터표",
    "name_en": "New Zealand Ministry of Justice Data Tables",
    "institution_ko": "뉴질랜드 법무부",
    "institution_en": "New Zealand Ministry of Justice",
    "link": "https://www.justice.govt.nz/justice-sector-policy/research-data/justice-statistics/data-tables/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Justice statistics",
      "Data tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Excel",
      "CSV possible",
      "Tables"
    ],
    "topics_ko": [
      "범죄유형",
      "기소",
      "처분",
      "법원결과"
    ],
    "topics_en": [
      "Offence type",
      "Charges",
      "Outcomes",
      "Court statistics"
    ],
    "language": [
      "English"
    ],
    "scope": "New Zealand",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "구체적 죄명과 기소·처리 결과 확인에 유용한 법무부 데이터표.",
    "notes_en": "Ministry of Justice tables useful for specific offences and charge outcomes.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "jpn-npa-statistics",
    "countryCode": "JP",
    "country_ko": "일본",
    "country_en": "Japan",
    "name_ko": "일본 경찰청 범죄통계",
    "name_en": "National Police Agency Crime Statistics",
    "institution_ko": "일본 경찰청",
    "institution_en": "National Police Agency of Japan",
    "link": "https://www.npa.go.jp/english/Statistics.html",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "PDF",
      "Tables"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "일본범죄상황",
      "소년범죄"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Crime situation in Japan",
      "Juvenile delinquency"
    ],
    "language": [
      "English",
      "Japanese"
    ],
    "scope": "Japan",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "일본 경찰청의 범죄상황 연례자료. 상세자료는 일본어 페이지 확인 필요.",
    "notes_en": "NPA annual crime situation reports; more detailed data may be available in Japanese.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "jpn-estat-crime",
    "countryCode": "JP",
    "country_ko": "일본",
    "country_en": "Japan",
    "name_ko": "e-Stat 범죄 관련 정부통계",
    "name_en": "e-Stat Crime-related Government Statistics",
    "institution_ko": "일본 정부통계 포털",
    "institution_en": "Portal Site of Official Statistics of Japan",
    "link": "https://www.e-stat.go.jp/en/stat-search?layout=dataset&page=1&query=crime",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Statistics portal",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "CSV",
      "API"
    ],
    "topics_ko": [
      "범죄통계",
      "사법통계",
      "소년비행",
      "정부통계"
    ],
    "topics_en": [
      "Crime statistics",
      "Justice statistics",
      "Juvenile delinquency",
      "Government statistics"
    ],
    "language": [
      "English",
      "Japanese"
    ],
    "scope": "Japan",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "일본 정부통계 통합 포털에서 범죄·사법 관련 통계 검색 가능.",
    "notes_en": "Japan’s official statistics portal for crime and justice-related datasets.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "jpn-white-paper-crime",
    "countryCode": "JP",
    "country_ko": "일본",
    "country_en": "Japan",
    "name_ko": "일본 범죄백서",
    "name_en": "White Paper on Crime",
    "institution_ko": "일본 법무성",
    "institution_en": "Ministry of Justice, Japan",
    "link": "https://data.e-gov.go.jp/data/en/dataset/moj_20230119_0013",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Report",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "HTML",
      "PDF",
      "Downloads"
    ],
    "topics_ko": [
      "범죄동향",
      "소년비행",
      "교정",
      "보호관찰"
    ],
    "topics_en": [
      "Crime trends",
      "Juvenile delinquency",
      "Corrections",
      "Probation"
    ],
    "language": [
      "English",
      "Japanese"
    ],
    "scope": "Japan",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "소년비행 동향과 형사사법 처리 관련 통계를 포함한 범죄백서 자료.",
    "notes_en": "White Paper materials including trends in juvenile delinquency and criminal justice processing.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "deu-bka-pks",
    "countryCode": "DE",
    "country_ko": "독일",
    "country_en": "Germany",
    "name_ko": "독일 경찰범죄통계",
    "name_en": "Police Crime Statistics of Germany",
    "institution_ko": "독일 연방범죄수사청",
    "institution_en": "Federal Criminal Police Office (BKA)",
    "link": "https://www.bka.de/EN/CurrentInformation/Statistics/PoliceCrimeStatistics/policecrimestatistics_node.html",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-recorded crime",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Reports",
      "Tables",
      "Downloads"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "범죄유형",
      "피의자",
      "지역"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Crime type",
      "Suspects",
      "Geography"
    ],
    "language": [
      "English",
      "German"
    ],
    "scope": "Germany",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "독일의 경찰범죄통계 공식 페이지.",
    "notes_en": "Official page for Germany’s Police Crime Statistics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "deu-destatis-justice",
    "countryCode": "DE",
    "country_ko": "독일",
    "country_en": "Germany",
    "name_ko": "독일 연방통계청 사법통계",
    "name_en": "Destatis Justice Statistics",
    "institution_ko": "독일 연방통계청",
    "institution_en": "Federal Statistical Office of Germany",
    "link": "https://www.destatis.de/EN/Themes/Government/Justice/_node.html",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Justice statistics",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "GENESIS database",
      "Downloads"
    ],
    "topics_ko": [
      "형사소추",
      "교정",
      "법원",
      "사법통계"
    ],
    "topics_en": [
      "Criminal prosecution",
      "Prison statistics",
      "Courts",
      "Justice statistics"
    ],
    "language": [
      "English",
      "German"
    ],
    "scope": "Germany",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "형사소추·교정·법원 관련 통계를 포함하는 독일 연방통계청 사법 주제 페이지.",
    "notes_en": "Destatis justice topic page including criminal prosecution, prison, and court statistics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "fra-ssmsi-visualisation",
    "countryCode": "FR",
    "country_ko": "프랑스",
    "country_en": "France",
    "name_ko": "프랑스 범죄 지역·지자체 기록범죄 시각화",
    "name_en": "Crime Recorded at Regional and Municipal Levels",
    "institution_ko": "프랑스 내무부 SSMSI",
    "institution_en": "French Ministry of Interior, SSMSI",
    "link": "https://mobile.interieur.gouv.fr/Interstats/Datavisualisation/ENGLISH-Welcome-to-the-SSMSI-Data-Visualisation-Space/Crime-Recorded-at-Regional-and-Municipal-Levels",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-recorded crime",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "Downloads possible"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "지역통계",
      "지자체",
      "국가경찰",
      "헌병대"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Regional statistics",
      "Municipal data",
      "Police",
      "Gendarmerie"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "France, regional, municipal",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "프랑스 경찰·헌병 기록범죄의 지역·지자체 단위 시각화 자료.",
    "notes_en": "Visualizes French police and gendarmerie recorded crime data at regional and municipal levels.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "fra-ssmsi-office",
    "countryCode": "FR",
    "country_ko": "프랑스",
    "country_en": "France",
    "name_ko": "프랑스 내무부 통계부서 SSMSI",
    "name_en": "Internal Security Ministerial Statistical Office",
    "institution_ko": "프랑스 내무부 / INSEE 소개",
    "institution_en": "French Ministry of Interior / INSEE",
    "link": "https://www.insee.fr/en/information/2413152",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Mixed"
    ],
    "dataType": [
      "Statistics office",
      "Reports"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Reports",
      "Tables",
      "Dashboards"
    ],
    "topics_ko": [
      "내부안전",
      "범죄통계",
      "행정자료",
      "조사자료"
    ],
    "topics_en": [
      "Internal security",
      "Crime statistics",
      "Administrative data",
      "Survey data"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "France",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "프랑스 내부안전 통계 생산·공표 조직. 관련 SSMSI 자료로 연결하기 위한 기관 항목.",
    "notes_en": "Institutional source for French internal security statistics and SSMSI outputs.",
    "researchLabels_en": [
      "Crime & delinquency"
    ],
    "researchLabels_ko": [
      "범죄·비행"
    ]
  },
  {
    "id": "swe-bra-statistics",
    "countryCode": "SE",
    "country_ko": "스웨덴",
    "country_en": "Sweden",
    "name_ko": "Brå 범죄통계",
    "name_en": "Brå Crime Statistics",
    "institution_ko": "스웨덴 범죄예방위원회",
    "institution_en": "Swedish National Council for Crime Prevention",
    "link": "https://bra.se/english/statistics",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Survey",
      "Reports"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "Reports",
      "Downloads"
    ],
    "topics_ko": [
      "범죄동향",
      "신고범죄",
      "피해조사",
      "사법통계"
    ],
    "topics_en": [
      "Crime trends",
      "Reported offences",
      "Victimization survey",
      "Justice system statistics"
    ],
    "language": [
      "English",
      "Swedish"
    ],
    "scope": "Sweden",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "스웨덴의 신고범죄와 피해·안전 조사 등 범죄통계 허브.",
    "notes_en": "Swedish crime statistics hub covering reported offences and national victimization/safety surveys.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "swe-crime-safety-survey",
    "countryCode": "SE",
    "country_ko": "스웨덴",
    "country_en": "Sweden",
    "name_ko": "스웨덴 범죄와 안전 조사",
    "name_en": "Swedish Crime Survey",
    "institution_ko": "스웨덴 범죄예방위원회",
    "institution_en": "Swedish National Council for Crime Prevention",
    "link": "https://www.scb.se/en/data-collection/surveys/crime-and-safety/",
    "population": [
      "Adults"
    ],
    "design": [
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Victimization survey",
      "Survey"
    ],
    "access": [
      "Public tables",
      "Microdata access may vary"
    ],
    "formats": [
      "Reports",
      "Tables",
      "Questionnaire"
    ],
    "topics_ko": [
      "범죄피해",
      "안전인식",
      "피해조사",
      "신뢰"
    ],
    "topics_en": [
      "Victimization",
      "Perceived safety",
      "Victimization survey",
      "Trust"
    ],
    "language": [
      "English",
      "Swedish"
    ],
    "scope": "Sweden",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "2006년부터 매년 실시되는 스웨덴 범죄피해·안전 조사.",
    "notes_en": "Annual Swedish survey on victimization and safety conducted since 2006.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "nld-cbs-crime",
    "countryCode": "NL",
    "country_ko": "네덜란드",
    "country_en": "Netherlands",
    "name_ko": "네덜란드 통계청 보안·사법 통계",
    "name_en": "CBS Security and Justice Statistics",
    "institution_ko": "네덜란드 통계청",
    "institution_en": "Statistics Netherlands (CBS)",
    "link": "https://www.cbs.nl/en-gb/society/security-and-justice",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Web tables"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "Open data"
    ],
    "topics_ko": [
      "범죄",
      "피의자",
      "경찰기록",
      "네덜란드"
    ],
    "topics_en": [
      "Crime",
      "Suspects",
      "Police records",
      "Netherlands"
    ],
    "language": [
      "English",
      "Dutch"
    ],
    "scope": "Netherlands",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "기존 2018년 배경기사보다 CBS의 보안·사법 주제 허브가 데이터 탐색 입구로 더 적합함.",
    "notes_en": "Updated from a 2018 background article to the CBS Security and Justice topic hub, which is a better discovery entry point.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "nld-wodc-juvenile-monitor",
    "countryCode": "NL",
    "country_ko": "네덜란드",
    "country_en": "Netherlands",
    "name_ko": "네덜란드 청소년범죄 모니터",
    "name_en": "Juvenile Crime Monitor",
    "institution_ko": "네덜란드 WODC / CBS",
    "institution_en": "WODC / Statistics Netherlands",
    "link": "https://english.wodc.nl/research-in-progress/statistics-and-monitoring",
    "population": [
      "Youth",
      "Young adults"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Juvenile crime monitor",
      "Reports"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Reports",
      "Tables"
    ],
    "topics_ko": [
      "청소년범죄",
      "자기보고비행",
      "경찰·검찰·법원자료"
    ],
    "topics_en": [
      "Juvenile crime",
      "Self-report delinquency",
      "Police/prosecution/judicial data"
    ],
    "language": [
      "English",
      "Dutch"
    ],
    "scope": "Netherlands",
    "sourceCategory": "government_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "12~23세 청소년·청년 범죄 동향을 등록자료와 자기보고조사로 설명하는 모니터.",
    "notes_en": "Monitor of juvenile/young adult crime using registered data and self-report Youth Delinquency Survey.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "esp-crime-portal",
    "countryCode": "ES",
    "country_ko": "스페인",
    "country_en": "Spain",
    "name_ko": "스페인 범죄통계 포털",
    "name_en": "Crime Statistics Portal",
    "institution_ko": "스페인 내무부",
    "institution_en": "Spanish Ministry of the Interior",
    "link": "https://estadisticasdecriminalidad.ses.mir.es/publico/portalestadistico/en/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Police-recorded crime",
      "Data portal",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "Tables",
      "Downloads"
    ],
    "topics_ko": [
      "범죄통계",
      "사이버범죄",
      "증오범죄",
      "여성폭력"
    ],
    "topics_en": [
      "Crime statistics",
      "Cybercrime",
      "Hate crime",
      "Violence against women"
    ],
    "language": [
      "English",
      "Spanish"
    ],
    "scope": "Spain, regions, municipalities",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "스페인 내무부의 공식 범죄통계 포털.",
    "notes_en": "Official crime statistics portal of the Spanish Ministry of the Interior.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "esp-crime-publications",
    "countryCode": "ES",
    "country_ko": "스페인",
    "country_en": "Spain",
    "name_ko": "스페인 범죄통계 발간자료",
    "name_en": "Crime Statistics Portal Publications",
    "institution_ko": "스페인 내무부",
    "institution_en": "Spanish Ministry of the Interior",
    "link": "https://estadisticasdecriminalidad.ses.mir.es/publico/portalestadistico/en/publicaciones.html",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Reports",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "PDF",
      "Reports",
      "Downloads"
    ],
    "topics_ko": [
      "범죄동향",
      "분기범죄보고서",
      "사이버범죄",
      "증오범죄"
    ],
    "topics_en": [
      "Crime trends",
      "Quarterly reports",
      "Cybercrime",
      "Hate crime"
    ],
    "language": [
      "English",
      "Spanish"
    ],
    "scope": "Spain",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "스페인 범죄통계 문서와 다운로드 자료.",
    "notes_en": "Downloadable reports and documentation from Spain’s crime statistics portal.",
    "researchLabels_en": [
      "Crime & delinquency"
    ],
    "researchLabels_ko": [
      "범죄·비행"
    ]
  },
  {
    "id": "intl-unodc-data-portal",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "UNODC 데이터 포털",
    "name_en": "UNODC Data Portal",
    "institution_ko": "유엔마약범죄사무소",
    "institution_en": "United Nations Office on Drugs and Crime",
    "link": "https://data.unodc.org/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "International statistics portal",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "CSV downloads",
      "Metadata"
    ],
    "topics_ko": [
      "살인",
      "폭력범죄",
      "성범죄",
      "교정",
      "마약범죄"
    ],
    "topics_en": [
      "Homicide",
      "Violent crime",
      "Sexual crime",
      "Prisons",
      "Drug crime"
    ],
    "language": [
      "English"
    ],
    "scope": "International",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "국가별 범죄·형사사법·마약 관련 국제통계 포털. 비교보다는 자료 위치 확인용으로 유용.",
    "notes_en": "International crime, criminal justice, and drug statistics portal. Useful as a data discovery source.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Addiction & substance use",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "중독·물질사용",
      "문제행동"
    ]
  },
  {
    "id": "intl-unodc-violent-sexual",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "UNODC 폭력범죄·성폭력 데이터",
    "name_en": "UNODC Violent Crime and Sexual Violence Data",
    "institution_ko": "유엔마약범죄사무소",
    "institution_en": "United Nations Office on Drugs and Crime",
    "link": "https://data.unodc.org/datareport/violent-offences",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "International statistics",
      "Dashboard"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboard",
      "Download data",
      "Metadata"
    ],
    "topics_ko": [
      "폭력범죄",
      "성폭력",
      "가정폭력",
      "재산범죄",
      "사이버범죄"
    ],
    "topics_en": [
      "Violent crime",
      "Sexual violence",
      "Domestic violence",
      "Property crime",
      "Cybercrime"
    ],
    "language": [
      "English"
    ],
    "scope": "International",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "UNODC의 폭력범죄·성폭력 관련 데이터 리포트 페이지.",
    "notes_en": "UNODC data report page for violent crime and sexual violence.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "문제행동"
    ]
  },
  {
    "id": "eu-eurostat-crime-db",
    "countryCode": "EU",
    "country_ko": "유럽연합",
    "country_en": "European Union",
    "name_ko": "Eurostat 범죄·형사사법 데이터베이스",
    "name_en": "Eurostat Crime and Criminal Justice Database",
    "institution_ko": "유럽통계청",
    "institution_en": "Eurostat",
    "link": "https://ec.europa.eu/eurostat/web/crime/database",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "International statistics portal",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data browser",
      "Bulk download",
      "API"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "살인",
      "성범죄",
      "교정",
      "형사사법"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Homicide",
      "Sexual offences",
      "Prisons",
      "Criminal justice"
    ],
    "language": [
      "English",
      "EU languages"
    ],
    "scope": "EU, EFTA, candidate countries",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "EU 회원국 등 유럽 국가의 범죄·형사사법 공식통계 데이터베이스.",
    "notes_en": "Eurostat database for crime and criminal justice statistics in EU/EFTA/candidate countries.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법"
    ]
  },
  {
    "id": "eu-fra-vaw-survey",
    "countryCode": "EU",
    "country_ko": "유럽연합",
    "country_en": "European Union",
    "name_ko": "FRA 여성폭력 EU 조사 데이터 탐색기",
    "name_en": "FRA Violence Against Women Survey Data Explorer",
    "institution_ko": "유럽연합 기본권청",
    "institution_en": "European Union Agency for Fundamental Rights",
    "link": "https://fra.europa.eu/en/publications-and-resources/data-and-maps/survey-data-explorer-violence-against-women-survey",
    "population": [
      "Women",
      "Adults"
    ],
    "design": [
      "Cross-sectional"
    ],
    "dataType": [
      "Victimization survey",
      "Survey data explorer"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data explorer",
      "Reports"
    ],
    "topics_ko": [
      "여성폭력",
      "성폭력",
      "가정폭력",
      "스토킹",
      "성희롱"
    ],
    "topics_en": [
      "Violence against women",
      "Sexual violence",
      "Domestic violence",
      "Stalking",
      "Sexual harassment"
    ],
    "language": [
      "English"
    ],
    "scope": "European Union",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "EU 전역 여성폭력 조사 결과 탐색기. 원자료 접근은 별도 확인 필요.",
    "notes_en": "Data explorer for the EU-wide violence against women survey; microdata access should be checked separately.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "eu-eige-gender-statistics",
    "countryCode": "EU",
    "country_ko": "유럽연합",
    "country_en": "European Union",
    "name_ko": "EIGE 젠더통계 데이터베이스: 젠더기반폭력",
    "name_en": "EIGE Gender Statistics Database: Gender-based Violence",
    "institution_ko": "유럽성평등연구소",
    "institution_en": "European Institute for Gender Equality",
    "link": "https://eige.europa.eu/gender-statistics/dgs",
    "population": [
      "Women",
      "Adults",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Survey",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Statistics database",
      "Gender-based violence"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data browser",
      "Tables",
      "Downloads"
    ],
    "topics_ko": [
      "젠더기반폭력",
      "친밀한 파트너 폭력",
      "가정폭력",
      "여성살해",
      "사이버폭력"
    ],
    "topics_en": [
      "Gender-based violence",
      "Intimate partner violence",
      "Domestic violence",
      "Femicide",
      "Cyber violence"
    ],
    "language": [
      "English"
    ],
    "scope": "European Union",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "젠더기반폭력 관련 행정·조사 통계를 제공하는 EU 데이터베이스.",
    "notes_en": "EU database providing administrative and survey statistics on gender-based violence.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "intl-oecd-vaw",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "OECD 여성폭력 지표",
    "name_en": "OECD Violence Against Women Indicator",
    "institution_ko": "경제협력개발기구",
    "institution_en": "Organisation for Economic Co-operation and Development",
    "link": "https://www.oecd.org/en/data/indicators/violence-against-women.html",
    "population": [
      "Women",
      "Adults"
    ],
    "design": [
      "Repeated cross-sectional",
      "Indicator"
    ],
    "dataType": [
      "Indicator database",
      "International statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Data portal",
      "CSV/API possible"
    ],
    "topics_ko": [
      "여성폭력",
      "친밀한 파트너 폭력",
      "태도",
      "법제도"
    ],
    "topics_en": [
      "Violence against women",
      "Intimate partner violence",
      "Attitudes",
      "Legal framework"
    ],
    "language": [
      "English"
    ],
    "scope": "OECD and partner countries",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-01",
    "notes_ko": "OECD의 여성폭력 관련 지표 페이지. 범죄자료라기보다 정책지표로 활용.",
    "notes_en": "OECD indicator page on violence against women; best used as policy indicator source rather than raw crime data.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "kor-kdca-youth-risk-behavior-survey",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "청소년건강행태조사",
    "name_en": "Korea Youth Risk Behavior Survey (KYRBS)",
    "institution_ko": "질병관리청·교육부",
    "institution_en": "Korea Disease Control and Prevention Agency / Ministry of Education",
    "link": "https://www.kdca.go.kr/yhs/home.jsp?id=m03_01",
    "population": [
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Health survey",
      "Substance use survey",
      "Mental health survey",
      "Microdata"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Raw data",
      "Questionnaire",
      "Codebook",
      "Reports",
      "Tables"
    ],
    "topics_ko": [
      "청소년",
      "건강행태",
      "흡연",
      "음주",
      "약물",
      "정신건강",
      "자살생각",
      "폭력",
      "문제행동"
    ],
    "topics_en": [
      "Youth",
      "Health behavior",
      "Smoking",
      "Alcohol",
      "Drug use",
      "Mental health",
      "Suicidal ideation",
      "Violence",
      "Problem behavior"
    ],
    "domains_ko": [
      "청소년",
      "중독",
      "정신건강",
      "문제행동",
      "폭력"
    ],
    "domains_en": [
      "Youth",
      "Addiction",
      "Mental health",
      "Problem behavior",
      "Violence"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "중·고등학생의 흡연, 음주, 약물, 정신건강, 폭력 등 건강위험행태를 조사하는 반복 횡단자료. 범죄·비행 연구에서 위험요인 또는 문제행동 변수로 활용 가능.",
    "notes_en": "Repeated cross-sectional survey of Korean adolescents covering smoking, alcohol, drug use, mental health, violence, and other health-risk behaviors. Useful for risk-factor and problem-behavior research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "kor-kdca-youth-health-panel-survey",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "청소년건강패널조사",
    "name_en": "Korea Youth Health Panel Survey",
    "institution_ko": "질병관리청",
    "institution_en": "Korea Disease Control and Prevention Agency",
    "link": "https://www.kdca.go.kr/kdca/5462/subview.do",
    "population": [
      "Youth"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Health survey",
      "Microdata"
    ],
    "access": [
      "Application required",
      "Public documentation"
    ],
    "formats": [
      "CSV",
      "Text",
      "User guide"
    ],
    "topics_ko": [
      "청소년",
      "건강행태",
      "패널조사",
      "흡연",
      "음주",
      "정신건강",
      "학교",
      "가정"
    ],
    "topics_en": [
      "Youth",
      "Health behavior",
      "Panel survey",
      "Smoking",
      "Alcohol",
      "Mental health",
      "School",
      "Family"
    ],
    "domains_ko": [
      "청소년",
      "중독",
      "정신건강",
      "발달",
      "문제행동"
    ],
    "domains_en": [
      "Youth",
      "Addiction",
      "Mental health",
      "Development",
      "Problem behavior"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "청소년 건강행태와 관련 요인을 추적하는 패널자료. 신청 절차를 거쳐 원시자료와 이용지침서를 받을 수 있음.",
    "notes_en": "Panel survey tracking youth health behaviors and related factors. Raw data and user guides are available through an application process.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Mental health"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "정신건강"
    ]
  },
  {
    "id": "kor-ncmh-national-mental-health-survey-adult",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "정신건강실태조사(성인) 마이크로데이터",
    "name_en": "National Mental Health Survey of Korea: Adult Microdata",
    "institution_ko": "국립정신건강센터",
    "institution_en": "National Center for Mental Health",
    "link": "https://mhs.ncmh.go.kr/menu.es?mid=a10401010000",
    "population": [
      "Adults"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Mental health survey",
      "Microdata",
      "Research data"
    ],
    "access": [
      "Application required"
    ],
    "formats": [
      "SAS",
      "SPSS",
      "CSV",
      "Codebook",
      "Guidelines"
    ],
    "topics_ko": [
      "정신건강",
      "정신질환",
      "우울",
      "불안",
      "물질사용",
      "위험요인",
      "성인"
    ],
    "topics_en": [
      "Mental health",
      "Mental disorders",
      "Depression",
      "Anxiety",
      "Substance use",
      "Risk factors",
      "Adults"
    ],
    "domains_ko": [
      "정신건강",
      "중독",
      "위험요인"
    ],
    "domains_en": [
      "Mental health",
      "Addiction",
      "Risk factors"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "성인 정신건강실태조사의 마이크로데이터 신청 안내. 범죄·비행 연구에서 정신건강 및 물질사용 관련 위험요인 분석에 활용 가능.",
    "notes_en": "Microdata application page for Korea's adult national mental health survey. Useful for studying mental health and substance-use risk factors.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "kor-ncmh-national-mental-health-survey-child-youth",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "정신건강실태조사(소아·청소년) 마이크로데이터",
    "name_en": "National Mental Health Survey of Korea: Child and Adolescent Microdata",
    "institution_ko": "국립정신건강센터",
    "institution_en": "National Center for Mental Health",
    "link": "https://mhs.ncmh.go.kr/menu.es?mid=a10401020000",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Cross-sectional"
    ],
    "dataType": [
      "Mental health survey",
      "Microdata",
      "Research data"
    ],
    "access": [
      "Application required"
    ],
    "formats": [
      "SAS",
      "SPSS",
      "CSV",
      "Codebook",
      "Guidelines"
    ],
    "topics_ko": [
      "소아청소년",
      "정신건강",
      "문제행동",
      "정서문제",
      "가정",
      "학교",
      "위험요인"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Mental health",
      "Problem behavior",
      "Emotional problems",
      "Family",
      "School",
      "Risk factors"
    ],
    "domains_ko": [
      "정신건강",
      "문제행동",
      "청소년",
      "발달"
    ],
    "domains_en": [
      "Mental health",
      "Problem behavior",
      "Youth",
      "Development"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "소아·청소년 정신건강실태조사 마이크로데이터 신청 안내. 비행·문제행동 연구에서 정서·행동 문제와 환경 요인을 함께 살펴볼 수 있음.",
    "notes_en": "Microdata application page for Korea's child and adolescent mental health survey. Useful for linking emotional/behavioral problems with environmental factors.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "kor-kdca-knhanes",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "국민건강영양조사(KNHANES)",
    "name_en": "Korea National Health and Nutrition Examination Survey (KNHANES)",
    "institution_ko": "질병관리청",
    "institution_en": "Korea Disease Control and Prevention Agency",
    "link": "https://knhanes.kdca.go.kr/knhanes/main.do",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Repeated cross-sectional",
      "Survey"
    ],
    "dataType": [
      "Health survey",
      "Microdata",
      "Official statistics"
    ],
    "access": [
      "Public",
      "Registration required",
      "Check source"
    ],
    "formats": [
      "SAS",
      "SPSS",
      "CSV",
      "Questionnaire",
      "Codebook"
    ],
    "topics_ko": [
      "건강행태",
      "흡연",
      "음주",
      "정신건강",
      "영양",
      "만성질환",
      "위험요인"
    ],
    "topics_en": [
      "Health behavior",
      "Smoking",
      "Alcohol",
      "Mental health",
      "Nutrition",
      "Chronic disease",
      "Risk factors"
    ],
    "domains_ko": [
      "건강행태",
      "중독",
      "정신건강",
      "위험요인"
    ],
    "domains_en": [
      "Health behavior",
      "Addiction",
      "Mental health",
      "Risk factors"
    ],
    "language": [
      "Korean",
      "English"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "흡연, 음주, 정신건강, 신체활동 등 건강행태와 사회인구학적 요인을 포함하는 대표 보건조사. 범죄·문제행동 연구의 배경요인 분석에 활용 가능.",
    "notes_en": "National health survey including smoking, alcohol, mental health, physical activity, and sociodemographic variables. Useful for risk-factor research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "kor-kdca-community-health-survey",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "지역사회건강조사",
    "name_en": "Korea Community Health Survey (KCHS)",
    "institution_ko": "질병관리청",
    "institution_en": "Korea Disease Control and Prevention Agency",
    "link": "https://chs.kdca.go.kr/",
    "population": [
      "Adults"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Health survey",
      "Microdata",
      "Official statistics"
    ],
    "access": [
      "Application required",
      "Public tables"
    ],
    "formats": [
      "Microdata",
      "Questionnaire",
      "Reports",
      "Tables"
    ],
    "topics_ko": [
      "지역사회",
      "건강행태",
      "흡연",
      "음주",
      "정신건강",
      "안전의식",
      "사고",
      "삶의 질"
    ],
    "topics_en": [
      "Community health",
      "Health behavior",
      "Smoking",
      "Alcohol",
      "Mental health",
      "Safety awareness",
      "Accidents",
      "Quality of life"
    ],
    "domains_ko": [
      "건강행태",
      "정신건강",
      "지역사회",
      "위험요인"
    ],
    "domains_en": [
      "Health behavior",
      "Mental health",
      "Community",
      "Risk factors"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National, local",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "시·군·구 단위 건강행태와 지역사회 요인을 포함하는 반복 횡단조사. 지역 범죄·안전 지표와 결합한 연구에 활용 가능.",
    "notes_en": "Repeated cross-sectional survey with local health behavior and community indicators. Useful for linkage with area-level crime/safety indicators.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강"
    ]
  },
  {
    "id": "usa-cdc-yrbss",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 청소년 위험행동감시체계(YRBSS)",
    "name_en": "Youth Risk Behavior Surveillance System (YRBSS)",
    "institution_ko": "미국 질병통제예방센터",
    "institution_en": "Centers for Disease Control and Prevention",
    "link": "https://www.cdc.gov/yrbs/data/index.html",
    "population": [
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Health survey",
      "Substance use survey",
      "Mental health survey",
      "Microdata"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Access",
      "ASCII",
      "SAS",
      "SPSS",
      "Documentation"
    ],
    "topics_ko": [
      "청소년",
      "위험행동",
      "폭력",
      "정신건강",
      "자살생각",
      "흡연",
      "음주",
      "약물",
      "성행동"
    ],
    "topics_en": [
      "Youth",
      "Risk behavior",
      "Violence",
      "Mental health",
      "Suicidal ideation",
      "Smoking",
      "Alcohol",
      "Drug use",
      "Sexual behavior"
    ],
    "domains_ko": [
      "청소년",
      "문제행동",
      "정신건강",
      "중독",
      "폭력"
    ],
    "domains_en": [
      "Youth",
      "Problem behavior",
      "Mental health",
      "Addiction",
      "Violence"
    ],
    "language": [
      "English"
    ],
    "scope": "National, state, district",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "미국 고등학생의 건강위험행동, 폭력 경험, 정신건강, 물질사용 등을 조사하는 대표 반복 횡단자료.",
    "notes_en": "Repeated cross-sectional survey of U.S. high school students covering risk behaviors, violence, mental health, and substance use.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "usa-samhsa-nsduh",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 약물사용과 건강조사(NSDUH)",
    "name_en": "National Survey on Drug Use and Health (NSDUH)",
    "institution_ko": "미국 약물남용정신건강서비스청",
    "institution_en": "Substance Abuse and Mental Health Services Administration",
    "link": "https://www.samhsa.gov/data/data-we-collect/nsduh-national-survey-drug-use-and-health",
    "population": [
      "Adults",
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Substance use survey",
      "Mental health survey",
      "Microdata"
    ],
    "access": [
      "Public",
      "Restricted versions available"
    ],
    "formats": [
      "Public-use files",
      "Restricted-use files",
      "Codebook",
      "Reports"
    ],
    "topics_ko": [
      "약물사용",
      "알코올",
      "담배",
      "물질사용장애",
      "우울",
      "정신건강",
      "치료이용"
    ],
    "topics_en": [
      "Drug use",
      "Alcohol",
      "Tobacco",
      "Substance use disorder",
      "Depression",
      "Mental health",
      "Treatment"
    ],
    "domains_ko": [
      "중독",
      "정신건강",
      "위험요인"
    ],
    "domains_en": [
      "Addiction",
      "Mental health",
      "Risk factors"
    ],
    "language": [
      "English"
    ],
    "scope": "National, state estimates",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "12세 이상 민간 비시설 인구의 물질사용, 정신건강, 치료이용 등을 조사하는 미국 대표 자료. 범죄·비행 연구의 중독 및 정신건강 요인 분석에 유용.",
    "notes_en": "Major U.S. survey of substance use, mental health, and treatment among the civilian noninstitutionalized population aged 12+.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "usa-monitoring-the-future",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 청소년 약물사용 추적조사(Monitoring the Future)",
    "name_en": "Monitoring the Future (MTF)",
    "institution_ko": "미시간대학교 / NIDA",
    "institution_en": "University of Michigan / National Institute on Drug Abuse",
    "link": "https://monitoringthefuture.org/results/data-access/",
    "population": [
      "Youth",
      "Adults"
    ],
    "design": [
      "Repeated cross-sectional",
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Substance use survey",
      "Panel data",
      "Microdata"
    ],
    "access": [
      "Public",
      "Restricted versions available",
      "Registration required"
    ],
    "formats": [
      "Data files",
      "Documentation",
      "Reports"
    ],
    "topics_ko": [
      "청소년",
      "약물사용",
      "음주",
      "흡연",
      "대마",
      "가치관",
      "문제행동",
      "성인기 이행"
    ],
    "topics_en": [
      "Youth",
      "Drug use",
      "Alcohol",
      "Smoking",
      "Cannabis",
      "Values",
      "Problem behavior",
      "Transition to adulthood"
    ],
    "domains_ko": [
      "중독",
      "청소년",
      "문제행동",
      "종단자료"
    ],
    "domains_en": [
      "Addiction",
      "Youth",
      "Problem behavior",
      "Longitudinal"
    ],
    "language": [
      "English"
    ],
    "scope": "United States",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "청소년과 성인의 약물사용, 태도, 생활양식 변화를 장기적으로 추적하는 대표 조사. NAHDAP/ICPSR를 통해 자료 접근 가능.",
    "notes_en": "Long-running study of substance use, attitudes, and lifestyles from adolescence into adulthood; data are hosted through NAHDAP/ICPSR.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "문제행동"
    ]
  },
  {
    "id": "usa-abcd-study",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "청소년 뇌인지발달 연구(ABCD Study)",
    "name_en": "Adolescent Brain Cognitive Development (ABCD) Study",
    "institution_ko": "미국 국립보건원 / NIMH Data Archive",
    "institution_en": "National Institutes of Health / NIMH Data Archive",
    "link": "https://nda.nih.gov/abcd",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Neurodevelopmental data",
      "Neuroimaging data",
      "Survey",
      "Biomarker data"
    ],
    "access": [
      "Application required",
      "Restricted versions available"
    ],
    "formats": [
      "NDA repository",
      "Imaging",
      "Questionnaires",
      "Cognitive tasks",
      "Biospecimens"
    ],
    "topics_ko": [
      "청소년",
      "뇌발달",
      "인지",
      "정신건강",
      "물질사용",
      "충동성",
      "환경요인",
      "신경생리"
    ],
    "topics_en": [
      "Youth",
      "Brain development",
      "Cognition",
      "Mental health",
      "Substance use",
      "Impulsivity",
      "Environment",
      "Neurophysiology"
    ],
    "domains_ko": [
      "신경생리",
      "정신건강",
      "발달",
      "중독",
      "문제행동"
    ],
    "domains_en": [
      "Neurophysiology",
      "Mental health",
      "Development",
      "Addiction",
      "Problem behavior"
    ],
    "language": [
      "English"
    ],
    "scope": "United States",
    "sourceCategory": "government_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "아동·청소년의 뇌, 인지, 정신건강, 물질사용, 환경요인을 장기적으로 추적하는 대규모 멀티모달 연구. 신청 기반 접근.",
    "notes_en": "Large longitudinal multimodal study of adolescent brain, cognition, mental health, substance use, and environmental factors. Access requires approval.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Mental health"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "정신건강"
    ]
  },
  {
    "id": "usa-nlsy97",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 청소년 종단조사 1997 코호트(NLSY97)",
    "name_en": "National Longitudinal Survey of Youth 1997 (NLSY97)",
    "institution_ko": "미국 노동통계국",
    "institution_en": "U.S. Bureau of Labor Statistics",
    "link": "https://www.bls.gov/nls/nlsy97.htm",
    "population": [
      "Youth",
      "Adults"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Survey",
      "Microdata"
    ],
    "access": [
      "Public",
      "Restricted versions available"
    ],
    "formats": [
      "NLS Investigator",
      "Data files",
      "Questionnaires",
      "Documentation"
    ],
    "topics_ko": [
      "청소년",
      "성인기 이행",
      "노동시장",
      "범죄",
      "체포",
      "약물사용",
      "교육",
      "가족"
    ],
    "topics_en": [
      "Youth",
      "Transition to adulthood",
      "Labor market",
      "Crime",
      "Arrest",
      "Drug use",
      "Education",
      "Family"
    ],
    "domains_ko": [
      "청소년",
      "중독",
      "범죄",
      "문제행동",
      "종단자료"
    ],
    "domains_en": [
      "Youth",
      "Addiction",
      "Crime",
      "Problem behavior",
      "Longitudinal"
    ],
    "language": [
      "English"
    ],
    "scope": "United States",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "1997년 청소년 코호트를 성인기까지 추적한 대표 종단자료. 범죄, 체포, 약물사용, 교육·노동시장 변수를 함께 분석할 수 있음.",
    "notes_en": "Longitudinal cohort following U.S. youth into adulthood, with variables on crime, arrests, substance use, education, and labor-market outcomes.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용"
    ]
  },
  {
    "id": "usa-ffcws",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "미국 가족과 아동복지 종단연구(FFCWS)",
    "name_en": "Future of Families and Child Wellbeing Study (FFCWS)",
    "institution_ko": "프린스턴대학교 / 컬럼비아대학교",
    "institution_en": "Princeton University / Columbia University",
    "link": "https://ffcws.princeton.edu/documentation",
    "population": [
      "Children",
      "Youth",
      "Adults"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Survey",
      "Family data"
    ],
    "access": [
      "Public",
      "Restricted versions available",
      "Registration required"
    ],
    "formats": [
      "Data files",
      "Documentation",
      "Questionnaires",
      "Metadata explorer"
    ],
    "topics_ko": [
      "가족",
      "아동발달",
      "부모",
      "정신건강",
      "문제행동",
      "도시",
      "사회경제적 요인"
    ],
    "topics_en": [
      "Family",
      "Child development",
      "Parenting",
      "Mental health",
      "Problem behavior",
      "Urban",
      "Socioeconomic factors"
    ],
    "domains_ko": [
      "아동",
      "발달",
      "정신건강",
      "문제행동",
      "위험요인"
    ],
    "domains_en": [
      "Children",
      "Development",
      "Mental health",
      "Problem behavior",
      "Risk factors"
    ],
    "language": [
      "English"
    ],
    "scope": "United States, urban sample",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "도시 출생아동과 가족을 장기 추적한 자료. 가족환경, 정신건강, 문제행동, 사회경제적 위험요인 분석에 활용 가능.",
    "notes_en": "Longitudinal study of urban children and families, useful for family environment, mental health, problem behavior, and socioeconomic risk-factor research.",
    "researchLabels_en": [
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "uk-millennium-cohort-study",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 밀레니엄 코호트 연구(MCS)",
    "name_en": "Millennium Cohort Study (MCS)",
    "institution_ko": "UCL Centre for Longitudinal Studies / UK Data Service",
    "institution_en": "UCL Centre for Longitudinal Studies / UK Data Service",
    "link": "https://cls.ucl.ac.uk/cls-studies/millennium-cohort-study/",
    "population": [
      "Children",
      "Youth",
      "Young adults"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Survey",
      "Developmental cohort"
    ],
    "access": [
      "Public",
      "Registration required",
      "Secure access for some files"
    ],
    "formats": [
      "UK Data Service",
      "Data files",
      "Questionnaires",
      "Documentation"
    ],
    "topics_ko": [
      "아동발달",
      "청소년",
      "정신건강",
      "물질사용",
      "반사회적 행동",
      "위험행동",
      "가족",
      "학교"
    ],
    "topics_en": [
      "Child development",
      "Youth",
      "Mental health",
      "Substance use",
      "Antisocial behavior",
      "Risk behavior",
      "Family",
      "School"
    ],
    "domains_ko": [
      "청소년",
      "정신건강",
      "중독",
      "문제행동",
      "발달"
    ],
    "domains_en": [
      "Youth",
      "Mental health",
      "Addiction",
      "Problem behavior",
      "Development"
    ],
    "language": [
      "English"
    ],
    "scope": "United Kingdom",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "2000~2002년 영국 출생 코호트를 추적하는 대표 종단자료. 청소년기 물질사용, 반사회적 행동, 정신건강, 가족·학교 요인 연구에 적합.",
    "notes_en": "UK birth cohort following children born in 2000–2002; useful for research on adolescent substance use, antisocial behavior, mental health, family, and school factors.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "uk-understanding-society",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 가구 종단연구 Understanding Society(UKHLS)",
    "name_en": "Understanding Society: UK Household Longitudinal Study (UKHLS)",
    "institution_ko": "University of Essex / UK Data Service",
    "institution_en": "University of Essex / UK Data Service",
    "link": "https://www.understandingsociety.ac.uk/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Survey",
      "Household survey"
    ],
    "access": [
      "Registration required",
      "Secure access for some files",
      "Public documentation"
    ],
    "formats": [
      "UK Data Service",
      "Data files",
      "User guide",
      "Questionnaires"
    ],
    "topics_ko": [
      "가구",
      "정신건강",
      "행동",
      "건강",
      "사회경제",
      "가족",
      "청소년"
    ],
    "topics_en": [
      "Household",
      "Mental health",
      "Behavior",
      "Health",
      "Socioeconomic factors",
      "Family",
      "Youth"
    ],
    "domains_ko": [
      "정신건강",
      "가족",
      "사회경제",
      "종단자료"
    ],
    "domains_en": [
      "Mental health",
      "Family",
      "Socioeconomic factors",
      "Longitudinal"
    ],
    "language": [
      "English"
    ],
    "scope": "United Kingdom",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "영국 가구와 개인을 장기 추적하는 대규모 패널. 정신건강, 사회경제적 요인, 가족환경 등 범죄·문제행동 연구의 배경요인으로 활용 가능.",
    "notes_en": "Large UK household panel study useful for mental health, socioeconomic, and family-context risk-factor research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "uk-alspac",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "에이본 부모·아동 종단연구(ALSPAC)",
    "name_en": "Avon Longitudinal Study of Parents and Children (ALSPAC)",
    "institution_ko": "브리스톨대학교",
    "institution_en": "University of Bristol",
    "link": "https://www.bristol.ac.uk/alspac/researchers/access/",
    "population": [
      "Children",
      "Youth",
      "Adults"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Developmental cohort",
      "Panel data",
      "Biomarker data",
      "Genetic data"
    ],
    "access": [
      "Application required",
      "Restricted versions available"
    ],
    "formats": [
      "Data files",
      "Questionnaires",
      "Biological samples",
      "Documentation"
    ],
    "topics_ko": [
      "아동발달",
      "정신건강",
      "문제행동",
      "물질사용",
      "범죄행동",
      "유전",
      "바이오마커",
      "가족"
    ],
    "topics_en": [
      "Child development",
      "Mental health",
      "Problem behavior",
      "Substance use",
      "Crime behavior",
      "Genetics",
      "Biomarkers",
      "Family"
    ],
    "domains_ko": [
      "발달",
      "정신건강",
      "문제행동",
      "중독",
      "신경생리"
    ],
    "domains_en": [
      "Development",
      "Mental health",
      "Problem behavior",
      "Addiction",
      "Neurophysiology"
    ],
    "language": [
      "English"
    ],
    "scope": "United Kingdom, Avon cohort",
    "sourceCategory": "academic_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "건강, 행동, 발달, 생물학적 자료를 포함하는 대표 출생 코호트. 반사회적 행동, 물질사용, 정신건강, 신경생리적 요인을 함께 연구할 수 있음.",
    "notes_en": "Birth cohort with health, behavior, development, biological, and genetic data; useful for antisocial behavior, substance use, mental health, and biological risk-factor research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "uk-biobank",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 바이오뱅크(UK Biobank)",
    "name_en": "UK Biobank",
    "institution_ko": "UK Biobank",
    "institution_en": "UK Biobank",
    "link": "https://www.ukbiobank.ac.uk/",
    "population": [
      "Adults"
    ],
    "design": [
      "Longitudinal",
      "Cohort"
    ],
    "dataType": [
      "Biobank",
      "Neuroimaging data",
      "Biomarker data",
      "Health records"
    ],
    "access": [
      "Application required",
      "Restricted versions available"
    ],
    "formats": [
      "Research Analysis Platform",
      "Imaging",
      "Genetics",
      "Health records",
      "Questionnaires"
    ],
    "topics_ko": [
      "정신건강",
      "신경영상",
      "유전",
      "바이오마커",
      "건강기록",
      "중독",
      "위험요인"
    ],
    "topics_en": [
      "Mental health",
      "Neuroimaging",
      "Genetics",
      "Biomarkers",
      "Health records",
      "Addiction",
      "Risk factors"
    ],
    "domains_ko": [
      "정신건강",
      "신경생리",
      "바이오마커",
      "건강"
    ],
    "domains_en": [
      "Mental health",
      "Neurophysiology",
      "Biomarkers",
      "Health"
    ],
    "language": [
      "English"
    ],
    "scope": "United Kingdom",
    "sourceCategory": "biobank",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "유전, 신체·인지 측정, 건강기록, 뇌영상 등을 포함하는 대규모 성인 코호트. 범죄자료는 아니지만 정신건강·중독·신경생리 요인 연구에 활용 가능.",
    "notes_en": "Large adult cohort with genetics, health records, cognitive measures, and imaging; not crime-specific, but useful for mental health, addiction, and neurobiological risk-factor research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강"
    ]
  },
  {
    "id": "intl-who-gshs",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "WHO 세계 학교기반 학생건강조사(GSHS)",
    "name_en": "WHO Global School-based Student Health Survey (GSHS)",
    "institution_ko": "세계보건기구",
    "institution_en": "World Health Organization",
    "link": "https://extranet.who.int/ncdsmicrodata/index.php/catalog/GSHS",
    "population": [
      "Youth"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Health survey",
      "Substance use survey",
      "Mental health survey",
      "Microdata"
    ],
    "access": [
      "Public",
      "Direct data access",
      "Check source"
    ],
    "formats": [
      "Microdata",
      "Questionnaire",
      "Reports",
      "Documentation"
    ],
    "topics_ko": [
      "청소년",
      "건강위험행동",
      "음주",
      "약물",
      "정신건강",
      "폭력",
      "상해",
      "학교"
    ],
    "topics_en": [
      "Youth",
      "Health risk behavior",
      "Alcohol",
      "Drug use",
      "Mental health",
      "Violence",
      "Injury",
      "School"
    ],
    "domains_ko": [
      "청소년",
      "중독",
      "정신건강",
      "문제행동",
      "폭력"
    ],
    "domains_en": [
      "Youth",
      "Addiction",
      "Mental health",
      "Problem behavior",
      "Violence"
    ],
    "language": [
      "English",
      "Multiple languages"
    ],
    "scope": "International, country surveys",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "13~17세 청소년의 건강위험 및 보호요인을 국가별로 조사하는 WHO 자료. 정신건강, 물질사용, 폭력·상해 항목을 포함할 수 있음.",
    "notes_en": "WHO school-based survey of behavioral risk and protective factors among youth aged 13–17 across countries.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "intl-hbsc",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "학령기 아동 건강행태 연구(HBSC)",
    "name_en": "Health Behaviour in School-aged Children (HBSC)",
    "institution_ko": "HBSC 국제 네트워크 / WHO Europe",
    "institution_en": "HBSC International Network / WHO Europe",
    "link": "https://www.hbsc.org/",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Health survey",
      "Mental health survey",
      "Microdata",
      "Data browser"
    ],
    "access": [
      "Public microdata available",
      "Check source"
    ],
    "formats": [
      "Microdata",
      "Data browser",
      "Reports",
      "Questionnaire"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "건강행태",
      "정신건강",
      "웰빙",
      "또래관계",
      "학교",
      "괴롭힘"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Health behavior",
      "Mental health",
      "Well-being",
      "Peers",
      "School",
      "Bullying"
    ],
    "domains_ko": [
      "청소년",
      "정신건강",
      "문제행동",
      "학교",
      "괴롭힘"
    ],
    "domains_en": [
      "Youth",
      "Mental health",
      "Problem behavior",
      "School",
      "Bullying"
    ],
    "language": [
      "English",
      "Multiple languages"
    ],
    "scope": "International, mainly Europe and North America",
    "sourceCategory": "international_research_network",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "학령기 아동·청소년의 건강, 웰빙, 사회적 맥락을 국가 간 비교 가능한 방식으로 조사. 괴롭힘, 정신건강, 학교생활 관련 연구에 유용.",
    "notes_en": "Cross-national study of young people's health, well-being, and social contexts, including bullying, mental health, and school-related variables.",
    "researchLabels_en": [
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "eu-espad",
    "countryCode": "EU",
    "country_ko": "유럽연합",
    "country_en": "European Union",
    "name_ko": "유럽 청소년 음주·약물조사(ESPAD)",
    "name_en": "European School Survey Project on Alcohol and Other Drugs (ESPAD)",
    "institution_ko": "ESPAD 네트워크 / EUDA",
    "institution_en": "ESPAD Network / European Union Drugs Agency",
    "link": "https://data.espad.org/",
    "population": [
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Substance use survey",
      "Data portal",
      "Web analysis tool"
    ],
    "access": [
      "Public",
      "Check source"
    ],
    "formats": [
      "Data portal",
      "Visualisation",
      "Tables",
      "Reports"
    ],
    "topics_ko": [
      "청소년",
      "음주",
      "약물",
      "흡연",
      "대마",
      "위험행동",
      "정신건강",
      "예방"
    ],
    "topics_en": [
      "Youth",
      "Alcohol",
      "Drugs",
      "Smoking",
      "Cannabis",
      "Risk behavior",
      "Mental health",
      "Prevention"
    ],
    "domains_ko": [
      "중독",
      "청소년",
      "문제행동",
      "정신건강"
    ],
    "domains_en": [
      "Addiction",
      "Youth",
      "Problem behavior",
      "Mental health"
    ],
    "language": [
      "English"
    ],
    "scope": "Europe",
    "sourceCategory": "international_research_network",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "유럽 15~16세 학생의 물질사용과 위험행동을 반복적으로 조사하는 대표 국제 자료. 데이터 포털에서 시각화와 탐색 가능.",
    "notes_en": "Cross-national survey of substance use and other risk behaviors among 15–16-year-old students in Europe.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "intl-unicef-mics",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "유니세프 다중지표군집조사(MICS)",
    "name_en": "UNICEF Multiple Indicator Cluster Surveys (MICS)",
    "institution_ko": "유니세프",
    "institution_en": "UNICEF",
    "link": "https://mics.unicef.org/",
    "population": [
      "Children",
      "Youth",
      "Women",
      "Mixed population"
    ],
    "design": [
      "Cross-sectional",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Household survey",
      "Child protection data",
      "Microdata"
    ],
    "access": [
      "Public",
      "Registration required",
      "Check source"
    ],
    "formats": [
      "Microdata",
      "Questionnaires",
      "Reports",
      "Indicators"
    ],
    "topics_ko": [
      "아동",
      "가구조사",
      "아동훈육",
      "폭력적 훈육",
      "아동보호",
      "발달",
      "교육",
      "건강"
    ],
    "topics_en": [
      "Children",
      "Household survey",
      "Child discipline",
      "Violent discipline",
      "Child protection",
      "Development",
      "Education",
      "Health"
    ],
    "domains_ko": [
      "아동",
      "폭력",
      "문제행동",
      "발달",
      "가족"
    ],
    "domains_en": [
      "Children",
      "Violence",
      "Problem behavior",
      "Development",
      "Family"
    ],
    "language": [
      "English",
      "Multiple languages"
    ],
    "scope": "International, country surveys",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "아동·가구 복지 지표를 다루는 국제 가구조사. 폭력적 훈육, 아동보호, 발달·가족환경 변수를 포함할 수 있음.",
    "notes_en": "International household survey programme with child welfare, child protection, violent discipline, development, and family-context indicators.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "문제행동"
    ]
  },
  {
    "id": "can-chscy",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "캐나다 아동·청소년 건강조사(CHSCY)",
    "name_en": "Canadian Health Survey on Children and Youth (CHSCY)",
    "institution_ko": "캐나다 통계청",
    "institution_en": "Statistics Canada",
    "link": "https://www.statcan.gc.ca/imdb-bmdi/5233-eng.htm",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Cross-sectional",
      "Longitudinal",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Health survey",
      "Mental health survey",
      "Microdata"
    ],
    "access": [
      "Public tables",
      "Microdata via data services",
      "Restricted versions available"
    ],
    "formats": [
      "Tables",
      "Microdata",
      "Documentation"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "정신건강",
      "신체건강",
      "스크린타임",
      "학교",
      "가족",
      "보건서비스"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Mental health",
      "Physical health",
      "Screen time",
      "School",
      "Family",
      "Health services"
    ],
    "domains_ko": [
      "청소년",
      "정신건강",
      "발달",
      "가족",
      "건강"
    ],
    "domains_en": [
      "Youth",
      "Mental health",
      "Development",
      "Family",
      "Health"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "Canada",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "아동·청소년의 신체·정신건강과 환경 요인을 다루는 캐나다 조사. 비행·문제행동의 건강·가족·학교 요인 분석에 활용 가능.",
    "notes_en": "Canadian survey on physical and mental health of children and youth, useful for health, family, and school risk-factor research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "can-csads",
    "countryCode": "CA",
    "country_ko": "캐나다",
    "country_en": "Canada",
    "name_ko": "캐나다 학생 음주·약물조사(CSADS/CSTADS)",
    "name_en": "Canadian Student Alcohol and Drugs Survey (CSADS/CSTADS)",
    "institution_ko": "캐나다 보건부",
    "institution_en": "Health Canada",
    "link": "https://www.canada.ca/en/health-canada/services/canadian-student-tobacco-alcohol-drugs-survey.html",
    "population": [
      "Youth"
    ],
    "design": [
      "Repeated cross-sectional",
      "Cross-sectional"
    ],
    "dataType": [
      "Substance use survey",
      "Health survey",
      "Web analysis tool"
    ],
    "access": [
      "Public",
      "Check source"
    ],
    "formats": [
      "Interactive tool",
      "Reports",
      "Tables",
      "Microdata possible"
    ],
    "topics_ko": [
      "청소년",
      "음주",
      "약물",
      "흡연",
      "대마",
      "괴롭힘",
      "정신건강",
      "학교연결감"
    ],
    "topics_en": [
      "Youth",
      "Alcohol",
      "Drugs",
      "Smoking",
      "Cannabis",
      "Bullying",
      "Mental health",
      "School connectedness"
    ],
    "domains_ko": [
      "중독",
      "청소년",
      "정신건강",
      "문제행동",
      "괴롭힘"
    ],
    "domains_en": [
      "Addiction",
      "Youth",
      "Mental health",
      "Problem behavior",
      "Bullying"
    ],
    "language": [
      "English",
      "French"
    ],
    "scope": "Canada",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "캐나다 학생의 음주·약물·흡연 관련 추세와 일부 학교·정신건강 관련 요인을 확인할 수 있는 자료.",
    "notes_en": "Canadian student survey and interactive tool on alcohol, drug, tobacco use and related school/mental-health factors.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "aus-lsac",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "호주 아동 종단연구(LSAC)",
    "name_en": "Longitudinal Study of Australian Children (LSAC)",
    "institution_ko": "호주 가족연구소 / 사회서비스부",
    "institution_en": "Australian Institute of Family Studies / Department of Social Services",
    "link": "https://aifs.gov.au/growing-australia",
    "population": [
      "Children",
      "Youth",
      "Young adults"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Developmental cohort",
      "Health survey"
    ],
    "access": [
      "Application required",
      "Restricted versions available",
      "Public documentation"
    ],
    "formats": [
      "Data files",
      "Documentation",
      "Questionnaires",
      "Reports"
    ],
    "topics_ko": [
      "아동발달",
      "청소년",
      "정신건강",
      "정서행동문제",
      "가족",
      "학교",
      "건강"
    ],
    "topics_en": [
      "Child development",
      "Youth",
      "Mental health",
      "Emotional and behavioral difficulties",
      "Family",
      "School",
      "Health"
    ],
    "domains_ko": [
      "아동",
      "청소년",
      "발달",
      "정신건강",
      "문제행동"
    ],
    "domains_en": [
      "Children",
      "Youth",
      "Development",
      "Mental health",
      "Problem behavior"
    ],
    "language": [
      "English"
    ],
    "scope": "Australia",
    "sourceCategory": "government_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "호주 아동의 발달과 웰빙을 장기 추적하는 자료. 정서·행동문제, 가족·학교·건강 요인을 함께 분석할 수 있음.",
    "notes_en": "Longitudinal study of Australian children and young people's development and wellbeing, useful for emotional/behavioral and family/school risk-factor research.",
    "researchLabels_en": [
      "Mental health"
    ],
    "researchLabels_ko": [
      "정신건강"
    ]
  },
  {
    "id": "aus-young-minds-matter",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "호주 아동·청소년 정신건강과 웰빙 조사(Young Minds Matter)",
    "name_en": "Young Minds Matter: Australian Child and Adolescent Survey of Mental Health and Wellbeing",
    "institution_ko": "호주 보건부 / Telethon Kids Institute",
    "institution_en": "Australian Government Department of Health / Telethon Kids Institute",
    "link": "https://youngmindsmatter.thekids.org.au/",
    "population": [
      "Children",
      "Youth"
    ],
    "design": [
      "Cross-sectional"
    ],
    "dataType": [
      "Mental health survey",
      "Survey",
      "Research data"
    ],
    "access": [
      "Check source",
      "Application required"
    ],
    "formats": [
      "Reports",
      "Questionnaires",
      "Research data"
    ],
    "topics_ko": [
      "아동",
      "청소년",
      "정신건강",
      "정신질환",
      "서비스이용",
      "학교",
      "가족",
      "위험요인"
    ],
    "topics_en": [
      "Children",
      "Youth",
      "Mental health",
      "Mental disorders",
      "Service use",
      "School",
      "Family",
      "Risk factors"
    ],
    "domains_ko": [
      "정신건강",
      "청소년",
      "아동",
      "위험요인"
    ],
    "domains_en": [
      "Mental health",
      "Youth",
      "Children",
      "Risk factors"
    ],
    "language": [
      "English"
    ],
    "scope": "Australia",
    "sourceCategory": "government_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "호주 아동·청소년 정신건강과 서비스 이용을 조사한 대표 자료. 범죄·비행과 정신건강의 관련성을 탐색하는 배경자료로 활용 가능.",
    "notes_en": "Australian child and adolescent mental health survey covering mental disorders, service use, school, and family factors.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "aus-hilda",
    "countryCode": "AU",
    "country_ko": "호주",
    "country_en": "Australia",
    "name_ko": "호주 가구·소득·노동 종단조사(HILDA)",
    "name_en": "Household, Income and Labour Dynamics in Australia (HILDA) Survey",
    "institution_ko": "멜버른대학교 Melbourne Institute",
    "institution_en": "Melbourne Institute, University of Melbourne",
    "link": "https://melbourneinstitute.unimelb.edu.au/hilda",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Panel data",
      "Household survey",
      "Survey"
    ],
    "access": [
      "Application required",
      "Restricted versions available"
    ],
    "formats": [
      "Data files",
      "Questionnaires",
      "User guide",
      "Reports"
    ],
    "topics_ko": [
      "가구",
      "소득",
      "노동",
      "심리적 고통",
      "정신건강",
      "가족",
      "주관적 웰빙",
      "위험요인"
    ],
    "topics_en": [
      "Household",
      "Income",
      "Labour",
      "Psychological distress",
      "Mental health",
      "Family",
      "Subjective wellbeing",
      "Risk factors"
    ],
    "domains_ko": [
      "정신건강",
      "사회경제",
      "가족",
      "종단자료"
    ],
    "domains_en": [
      "Mental health",
      "Socioeconomic factors",
      "Family",
      "Longitudinal"
    ],
    "language": [
      "English"
    ],
    "scope": "Australia",
    "sourceCategory": "academic_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "호주 가구와 개인의 경제·가족·웰빙을 장기 추적하는 패널자료. 심리적 고통과 사회경제적 위험요인 분석에 활용 가능.",
    "notes_en": "Australian household panel tracking economic, family, and wellbeing outcomes; useful for mental health and socioeconomic risk-factor research.",
    "researchLabels_en": [
      "Mental health"
    ],
    "researchLabels_ko": [
      "정신건강"
    ]
  },
  {
    "id": "intl-openneuro",
    "countryCode": "INTL",
    "country_ko": "국제",
    "country_en": "International",
    "name_ko": "OpenNeuro 신경영상 데이터 아카이브",
    "name_en": "OpenNeuro",
    "institution_ko": "OpenNeuro / BRAIN Initiative",
    "institution_en": "OpenNeuro / BRAIN Initiative",
    "link": "https://openneuro.org/",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Mixed"
    ],
    "dataType": [
      "Neuroimaging data",
      "Data archive",
      "Open data"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "BIDS",
      "MRI",
      "PET",
      "MEG",
      "EEG",
      "iEEG",
      "DataLad"
    ],
    "topics_ko": [
      "신경영상",
      "뇌",
      "MRI",
      "EEG",
      "MEG",
      "신경생리",
      "공개데이터"
    ],
    "topics_en": [
      "Neuroimaging",
      "Brain",
      "MRI",
      "EEG",
      "MEG",
      "Neurophysiology",
      "Open data"
    ],
    "domains_ko": [
      "신경생리",
      "뇌영상",
      "바이오마커"
    ],
    "domains_en": [
      "Neurophysiology",
      "Neuroimaging",
      "Biomarkers"
    ],
    "language": [
      "English"
    ],
    "scope": "International",
    "sourceCategory": "data_archive",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "BIDS 형식의 MRI, PET, MEG, EEG, iEEG 자료를 공유하는 공개 신경영상 플랫폼. 범죄 전용은 아니지만 신경생리·정신건강 연구의 보조 자료원으로 유용.",
    "notes_en": "Open platform for sharing BIDS-compliant MRI, PET, MEG, EEG, and iEEG data; useful for neurophysiology and mental-health research.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Mental health"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "정신건강"
    ]
  },
  {
    "id": "eu-imagen-study",
    "countryCode": "EU",
    "country_ko": "유럽연합",
    "country_en": "European Union",
    "name_ko": "IMAGEN 청소년 뇌·행동·정신건강 연구",
    "name_en": "IMAGEN Study",
    "institution_ko": "IMAGEN Consortium",
    "institution_en": "IMAGEN Consortium",
    "link": "https://www.imagen-project.org/",
    "population": [
      "Youth",
      "Young adults"
    ],
    "design": [
      "Longitudinal",
      "Panel"
    ],
    "dataType": [
      "Neuroimaging data",
      "Genetic data",
      "Mental health survey",
      "Panel data"
    ],
    "access": [
      "Application required",
      "Check source"
    ],
    "formats": [
      "Imaging",
      "Genetics",
      "Questionnaires",
      "Cognitive tasks"
    ],
    "topics_ko": [
      "청소년",
      "뇌영상",
      "유전",
      "정신건강",
      "충동성",
      "보상민감성",
      "중독",
      "행동"
    ],
    "topics_en": [
      "Youth",
      "Brain imaging",
      "Genetics",
      "Mental health",
      "Impulsivity",
      "Reward sensitivity",
      "Addiction",
      "Behavior"
    ],
    "domains_ko": [
      "신경생리",
      "정신건강",
      "중독",
      "청소년",
      "문제행동"
    ],
    "domains_en": [
      "Neurophysiology",
      "Mental health",
      "Addiction",
      "Youth",
      "Problem behavior"
    ],
    "language": [
      "English"
    ],
    "scope": "Europe, multi-site cohort",
    "sourceCategory": "academic_research",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "청소년의 뇌영상, 유전, 정신건강, 보상민감성, 충동성 등을 추적하는 유럽 다기관 연구. 중독·문제행동과 신경생물학적 요인 연구에 적합.",
    "notes_en": "European multi-site longitudinal imaging-genetics study of adolescent brain development, mental health, reward sensitivity, and impulsivity.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Mental health",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "정신건강",
      "문제행동"
    ]
  },
  {
    "id": "kor-scourt-judicial-yearbook",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "사법연감",
    "name_en": "Judicial Yearbook of Korea",
    "institution_ko": "대한민국 법원 / 법원행정처",
    "institution_en": "Supreme Court of Korea / National Court Administration",
    "link": "https://www.scourt.go.kr/portal/news/NewsListAction.work?gubun=719",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Report",
      "Criminal justice statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "PDF",
      "E-book",
      "Tables"
    ],
    "topics_ko": [
      "법원",
      "사법연감",
      "형사사건",
      "소년보호",
      "가정보호",
      "재판통계",
      "사법행정"
    ],
    "topics_en": [
      "Courts",
      "Judicial yearbook",
      "Criminal cases",
      "Juvenile protection",
      "Family protection",
      "Court statistics",
      "Judicial administration"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "법원행정처가 발간하는 사법연감 목록. 형사사건, 소년보호, 가정보호 등 법원 사건 처리와 사법행정 관련 공식 통계를 확인할 수 있음.",
    "notes_en": "Annual publication by the National Court Administration covering court caseloads, criminal cases, juvenile/family protection matters, and judicial administration statistics.",
    "researchLabels_en": [
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "형사사법"
    ]
  },
  {
    "id": "kor-scourt-monthly-court-statistics",
    "countryCode": "KR",
    "country_ko": "대한민국",
    "country_en": "South Korea",
    "name_ko": "법원통계월보",
    "name_en": "Monthly Court Statistics of Korea",
    "institution_ko": "대한민국 법원 / 법원행정처",
    "institution_en": "Supreme Court of Korea / National Court Administration",
    "link": "https://portal.scourt.go.kr/pgp/index.on?c=900&l=N&m=PGP441M01",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional"
    ],
    "dataType": [
      "Official statistics",
      "Web table",
      "Criminal justice statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Web tables",
      "PDF",
      "Downloads"
    ],
    "topics_ko": [
      "법원통계월보",
      "법원",
      "형사사건",
      "소년보호",
      "가정보호",
      "월별통계"
    ],
    "topics_en": [
      "Monthly court statistics",
      "Courts",
      "Criminal cases",
      "Juvenile protection",
      "Family protection",
      "Monthly statistics"
    ],
    "language": [
      "Korean"
    ],
    "scope": "National",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "사법정보공개포털에서 제공하는 법원통계월보. 형사·민사·가사·소년보호 등 법원 사건 통계를 월별로 확인하는 입구로 활용 가능.",
    "notes_en": "Monthly court-statistics portal from the Korean judiciary, useful for tracking court caseload and case-processing statistics over time.",
    "researchLabels_en": [
      "Criminal justice"
    ],
    "researchLabels_ko": [
      "형사사법"
    ]
  },
  {
    "id": "usa-ojjdp-statistical-briefing-book",
    "countryCode": "US",
    "country_ko": "미국",
    "country_en": "United States",
    "name_ko": "OJJDP 청소년사법 통계 브리핑북",
    "name_en": "OJJDP Statistical Briefing Book",
    "institution_ko": "미국 청소년사법·비행예방국",
    "institution_en": "Office of Juvenile Justice and Delinquency Prevention",
    "link": "https://ojjdp.ojp.gov/statistical-briefing-book",
    "population": [
      "Youth",
      "Children"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional",
      "Mixed"
    ],
    "dataType": [
      "Juvenile justice statistics",
      "Statistics portal",
      "Web analysis tool"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Interactive tools",
      "Tables",
      "Reports",
      "Data analysis tools"
    ],
    "topics_ko": [
      "청소년비행",
      "소년사법",
      "소년법원",
      "구금",
      "사건처리",
      "통계도구"
    ],
    "topics_en": [
      "Juvenile delinquency",
      "Juvenile justice",
      "Juvenile courts",
      "Custody",
      "Case processing",
      "Statistical tools"
    ],
    "language": [
      "English"
    ],
    "scope": "United States",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "OJJDP가 제공하는 청소년 비행·소년사법 통계 허브. EZAJCS, EZAPOP 등 청소년사법 관련 분석 도구로 연결되는 입구.",
    "notes_en": "OJJDP hub for statistical information on youth offending and juvenile justice, including tools such as EZAJCS and EZAPOP.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "uk-home-office-crime-statistics",
    "countryCode": "UK",
    "country_ko": "영국",
    "country_en": "United Kingdom",
    "name_ko": "영국 내무부 범죄통계 자료 모음",
    "name_en": "Home Office Crime Statistics Collection",
    "institution_ko": "영국 내무부",
    "institution_en": "UK Home Office",
    "link": "https://www.gov.uk/government/collections/crime-statistics",
    "population": [
      "Adults",
      "Youth",
      "Children",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional",
      "Survey"
    ],
    "dataType": [
      "Official statistics",
      "Police-recorded crime",
      "Report",
      "Open data"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "HTML",
      "CSV/XLS downloads",
      "Reports",
      "Open data tables"
    ],
    "topics_ko": [
      "경찰기록범죄",
      "범죄결과",
      "증오범죄",
      "약물압수",
      "경찰권한",
      "상업범죄피해"
    ],
    "topics_en": [
      "Police-recorded crime",
      "Crime outcomes",
      "Hate crime",
      "Drug seizures",
      "Police powers",
      "Commercial victimization"
    ],
    "language": [
      "English"
    ],
    "scope": "England and Wales; some UK-wide series",
    "sourceCategory": "government",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "영국 내무부의 범죄통계 컬렉션. 경찰기록범죄, 범죄처리 결과, 증오범죄, 약물압수, 경찰권한 등 여러 공식통계와 보조표로 연결됨.",
    "notes_en": "Home Office collection page linking to police-recorded crime, crime outcomes, hate crime, drug seizures, police powers, and related official statistics.",
    "researchLabels_en": [
      "Crime & delinquency",
      "Criminal justice",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "범죄·비행",
      "형사사법",
      "문제행동"
    ]
  },
  {
    "id": "eu-euda-statistical-bulletin",
    "countryCode": "EU",
    "country_ko": "유럽연합",
    "country_en": "European Union",
    "name_ko": "EUDA 유럽 약물상황 통계 게시판",
    "name_en": "EUDA Statistical Bulletin: Drug Situation in Europe",
    "institution_ko": "유럽연합 마약청",
    "institution_en": "European Union Drugs Agency",
    "link": "https://www.euda.europa.eu/data/stats2025_en",
    "population": [
      "Adults",
      "Youth",
      "Mixed population"
    ],
    "design": [
      "Administrative",
      "Repeated cross-sectional",
      "Survey",
      "Mixed"
    ],
    "dataType": [
      "Substance use survey",
      "International statistics",
      "Dashboard",
      "Official statistics"
    ],
    "access": [
      "Public"
    ],
    "formats": [
      "Dashboards",
      "Excel downloads",
      "Data visualisations",
      "Reports"
    ],
    "topics_ko": [
      "약물사용",
      "약물범죄",
      "약물압수",
      "치료수요",
      "약물관련 사망",
      "교도소 약물사용",
      "유럽"
    ],
    "topics_en": [
      "Drug use",
      "Drug law offences",
      "Drug seizures",
      "Treatment demand",
      "Drug-induced deaths",
      "Drug use and prison",
      "Europe"
    ],
    "language": [
      "English"
    ],
    "scope": "European Union and partner countries",
    "sourceCategory": "international_organization",
    "sourceStatus": "verified_official",
    "lastChecked": "2026-06-02",
    "notes_ko": "EUDA가 유럽 국가 파트너로부터 제출받은 약물상황 관련 핵심 데이터를 제공하는 연례 통계 게시판. 약물사용, 치료수요, 약물범죄, 압수, 약물 관련 사망 등을 포함함.",
    "notes_en": "EUDA annual statistical bulletin with core datasets on the European drug situation, including prevalence, treatment demand, drug-law offences, seizures, drug-induced deaths, and prison-related indicators.",
    "researchLabels_en": [
      "Addiction & substance use",
      "Crime & delinquency",
      "Problem behavior"
    ],
    "researchLabels_ko": [
      "중독·물질사용",
      "범죄·비행",
      "문제행동"
    ]
  }
];

export default datasets;
