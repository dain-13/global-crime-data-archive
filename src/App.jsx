import { useMemo, useState } from 'react'
import { features, quickFilters } from './data'
import datasets from './datasets'

const FILTERS = {
  population: ['Adults', 'Youth', 'Children', 'Women', 'Mixed population'],
  design: ['Longitudinal', 'Cross-sectional', 'Repeated cross-sectional', 'Administrative data', 'Panel'],
  dataType: ['Official statistics', 'Survey', 'Panel data', 'Administrative records', 'Microdata', 'Dashboard', 'API', 'Victimization survey'],
  access: ['Public', 'Application required', 'Registration required', 'View-only', 'Restricted versions available'],
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

function DatasetCard({ dataset, language }) {
  const name = language === 'ko' ? dataset.name_ko || dataset.name_en : dataset.name_en || dataset.name_ko
  const institution = language === 'ko'
    ? dataset.institution_ko || dataset.institution_en
    : dataset.institution_en || dataset.institution_ko
  const country = language === 'ko' ? dataset.country_ko || dataset.country_en : dataset.country_en || dataset.country_ko
  const topics = language === 'ko' ? dataset.topics_ko || dataset.topics_en : dataset.topics_en || dataset.topics_ko

  return (
    <a
      href={dataset.link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{dataset.countryCode || country}</div>
          <div className="mt-1 text-sm font-medium text-neutral-500">{country}</div>
        </div>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          {dataset.design?.[0] || 'Dataset'}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950 group-hover:underline">
        {name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">{institution}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {dataset.population?.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-neutral-600">
            {tag}
          </span>
        ))}
        {dataset.dataType?.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-neutral-600">
            {tag}
          </span>
        ))}
      </div>

      {topics?.length > 0 && (
        <p className="mt-4 line-clamp-2 text-xs leading-5 text-neutral-500">
          {topics.slice(0, 5).join(' · ')}
        </p>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
        <span className="text-sm text-neutral-500">{dataset.access?.[0] || 'Link'}</span>
        <span className="text-sm font-medium text-neutral-900">View source →</span>
      </div>
    </a>
  )
}

function SelectFilter({ label, value, options, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-black/30"
      >
        <option value="All">All</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('All')
  const [population, setPopulation] = useState('All')
  const [design, setDesign] = useState('All')
  const [dataType, setDataType] = useState('All')
  const [access, setAccess] = useState('All')

  const countries = useMemo(() => {
    return uniqueValues(datasets, 'country_en').sort((a, b) => a.localeCompare(b))
  }, [])

  const featuredCountries = useMemo(() => {
    return countries.slice(0, 6).map((countryName) => {
      const countryDatasets = datasets.filter((dataset) => dataset.country_en === countryName)
      return {
        code: countryDatasets[0]?.countryCode || countryName.slice(0, 2).toUpperCase(),
        name: countryName,
        count: `${countryDatasets.length} sources`,
      }
    })
  }, [countries])

  const filteredDatasets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

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
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const queryMatch = !normalizedQuery || searchableText.includes(normalizedQuery)
      const countryMatch = country === 'All' || dataset.country_en === country
      const populationMatch = matchesArrayFilter(dataset.population, population)
      const designMatch = matchesArrayFilter(dataset.design, design)
      const dataTypeMatch = matchesArrayFilter(dataset.dataType, dataType)
      const accessMatch = matchesArrayFilter(dataset.access, access)

      return queryMatch && countryMatch && populationMatch && designMatch && dataTypeMatch && accessMatch
    })
  }, [query, country, population, design, dataType, access])

  const clearFilters = () => {
    setQuery('')
    setCountry('All')
    setPopulation('All')
    setDesign('All')
    setDataType('All')
    setAccess('All')
  }

  return (
    <div className="min-h-screen bg-[#d9d9d9] text-neutral-900">
      <div className="mx-auto max-w-[1240px] px-6 py-6 lg:px-10 lg:py-10">
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#f6f6f4] shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <header className="border-b border-black/10 px-6 py-5 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rotate-45 bg-black" />
                <div>
                  <div className="text-[15px] font-semibold tracking-tight">Global Crime Data Archive</div>
                  <div className="text-xs text-neutral-500">Open crime and delinquency data discovery</div>
                </div>
              </div>

              <nav className="flex flex-wrap items-center gap-5 text-sm text-neutral-600">
                <a href="#about" className="transition hover:text-black">About</a>
                <a href="#browse" className="transition hover:text-black">Browse</a>
                <a href="#filters" className="transition hover:text-black">Filters</a>
                <a href="#sources" className="transition hover:text-black">Sources</a>
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
            <section id="about" className="relative overflow-hidden border-b border-black/10 px-6 py-20 lg:px-8 lg:py-28">
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
                  {language === 'en' ? 'Researcher-focused archive' : '연구자 중심 데이터 아카이브'}
                </div>

                <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                  {language === 'en'
                    ? 'Find open crime and delinquency data across countries.'
                    : '세계 각국의 범죄·비행 데이터를 한 곳에 모아둔 범죄 데이터 아카이브'}
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                  {language === 'en'
                    ? 'A bilingual directory designed for researchers, policymakers, and public-sector professionals who need fast access to adult and youth crime-related datasets.'
                    : '전세계의 범죄, 청소년 비행, 형사사법 관련 공개 데이터를 빠르게 찾아볼 수 있도록 모아둔 데이터 아카이브입니다.'}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#sources" className="min-w-[150px] rounded-md bg-black px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90">
                    {language === 'en' ? 'Browse datasets' : '데이터 둘러보기'}
                  </a>
                  <a href="#filters" className="min-w-[150px] rounded-md border border-black/10 bg-white px-5 py-3 text-center text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black">
                    {language === 'en' ? 'Use filters' : '필터 사용하기'}
                  </a>
                </div>
              </div>
            </section>

            <section id="browse" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {language === 'en' ? 'Browse by country' : '국가별 탐색'}
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                    {language === 'en'
                      ? 'Start with a country page and explore official statistics, survey datasets, panel studies, and justice-related sources in one place.'
                      : '국가별로 공식통계, 조사자료, 패널자료, 형사사법 관련 데이터 출처를 탐색할 수 있습니다.'}
                  </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {featuredCountries.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setCountry(item.name)
                        document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="rounded-2xl border border-black/10 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-black/20"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{item.code}</div>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.name}</h3>
                        </div>
                        <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">{item.count}</div>
                      </div>
                      <p className="mt-6 text-sm leading-6 text-neutral-600">
                        {language === 'en' ? `Explore curated sources for ${item.name}.` : `${item.name} 관련 데이터 출처 보기`}
                      </p>
                    </button>
                  ))}
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
                        ? 'Filter the archive by country, population, research design, data type, and access level.'
                        : '국가, 대상, 자료설계, 데이터 유형 등을 기준으로 검색할 수 있습니다.'}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {features.map((feature) => (
                        <div key={feature.title} className="rounded-2xl border border-black/10 bg-white p-5">
                          <h3 className="text-base font-semibold tracking-tight">{feature.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-neutral-600">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-black/10 bg-[#111111] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="text-sm text-white/60">Filter panel</div>
                        <h3 className="mt-1 text-xl font-semibold">
                          {filteredDatasets.length} / {datasets.length} sources
                        </h3>
                      </div>
                      <button onClick={clearFilters} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:text-white">
                        Clear
                      </button>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">Search</span>
                        <input
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}
                          placeholder="crime, youth, victimization, Korea..."
                          className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">Country</span>
                        <select value={country} onChange={(event) => setCountry(event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">All</option>
                          {countries.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">Population</span>
                        <select value={population} onChange={(event) => setPopulation(event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">All</option>
                          {FILTERS.population.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">Design</span>
                        <select value={design} onChange={(event) => setDesign(event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">All</option>
                          {FILTERS.design.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">Data type</span>
                        <select value={dataType} onChange={(event) => setDataType(event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">All</option>
                          {FILTERS.dataType.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                      </label>

                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/60">Access</span>
                        <select value={access} onChange={(event) => setAccess(event.target.value)} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none">
                          <option value="All">All</option>
                          {FILTERS.access.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                      </label>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {quickFilters.slice(0, 6).map((filter) => (
                        <span key={filter} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                          {filter}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="sources" className="px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      {language === 'en' ? 'Dataset sources' : '데이터 출처'}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                      {language === 'en'
                        ? `${filteredDatasets.length} sources found. Click a card to open the official source.`
                        : `${filteredDatasets.length}개의 출처가 검색되었습니다. 카드를 클릭하면 공식 출처로 이동합니다.`}
                    </p>
                  </div>
                  <button className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black">
                    Suggest a dataset
                  </button>
                </div>

                {filteredDatasets.length === 0 ? (
                  <div className="mt-10 rounded-2xl border border-black/10 bg-white p-8 text-center text-neutral-600">
                    No datasets found. Try clearing filters or using a broader keyword.
                  </div>
                ) : (
                  <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {filteredDatasets.map((dataset) => (
                      <DatasetCard key={dataset.id} dataset={dataset} language={language} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </main>
          <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-neutral-500 lg:px-8">
            <p>
              Curated by <span className="font-medium text-neutral-700">Dain Jo</span> · Crime Psychology / Criminology Researcher
            </p>
            <p className="mt-2">
              Global Crime Data Archive is a research-based side project for improving access to open crime and delinquency data.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
