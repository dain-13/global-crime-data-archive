import { exampleSources, featuredCountries, features, quickFilters } from './data'
import datasets from './datasets'

function App() {
  const previewDatasets = datasets.slice(0, 6)

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
                <button className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black">
                  KR / EN
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
                  Researcher-focused archive
                </div>

                <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                  Find open crime and delinquency data across countries.
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                  A bilingual directory designed for researchers, policymakers, and public-sector professionals who need fast access to adult and youth crime-related datasets.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#browse" className="min-w-[150px] rounded-md bg-black px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90">
                    Browse countries
                  </a>
                  <a href="#filters" className="min-w-[150px] rounded-md border border-black/10 bg-white px-5 py-3 text-center text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black">
                    View filters
                  </a>
                </div>
              </div>
            </section>

            <section id="browse" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Browse by country</h2>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                    Start with a country page and explore official statistics, survey datasets, panel studies, and justice-related sources in one place.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {featuredCountries.map((country) => (
                    <div
                      key={country.code}
                      className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/20"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{country.code}</div>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight">{country.name}</h3>
                        </div>
                        <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                          {country.count}
                        </div>
                      </div>
                      <p className="mt-6 text-sm leading-6 text-neutral-600">
                        Explore curated data portals, official sources, and research-use datasets for {country.name}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="filters" className="border-b border-black/10 px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Where data discovery meets research workflow</h2>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                      This homepage is designed as a clean entry point for finding the right dataset quickly, without comparing countries or overwhelming users with unnecessary complexity.
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
                        <div className="text-sm text-white/60">Quick filter preview</div>
                        <h3 className="mt-1 text-xl font-semibold">Find datasets by structure</h3>
                      </div>
                      <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                        Preview
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {quickFilters.map((filter) => (
                        <span
                          key={filter}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
                        >
                          {filter}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-medium">Suggested query</div>
                      <div className="mt-2 text-sm leading-6 text-white/70">
                        Youth + Longitudinal + Publicly accessible + South Korea
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="sources" className="px-6 py-16 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Example source cards</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                      The full site can expand this section into searchable cards connected to official links and metadata notes.
                    </p>
                  </div>
                  <button className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-black/20 hover:text-black">
                    Suggest a dataset
                  </button>
                </div>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                  {previewDatasets.map((dataset) => (
                    <a
                      key={dataset.id}
                      href={dataset.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                          {dataset.country_en}
                        </span>
                        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                          {dataset.design?.[0] || 'Dataset'}
                        </span>
                      </div>
                  
                      <h3 className="mt-5 text-xl font-semibold tracking-tight">
                        {dataset.name_en}
                      </h3>
                  
                      <p className="mt-3 text-sm leading-6 text-neutral-600">
                        {dataset.institution_en}
                      </p>
                  
                      <div className="mt-4 flex flex-wrap gap-2">
                        {dataset.population?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                        {dataset.dataType?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                  
                      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                        <span className="text-sm text-neutral-500">
                          {dataset.access?.[0] || 'Link'}
                        </span>
                        <span className="text-sm font-medium text-neutral-900">
                          View source →
                        </span>
                      </div>
                    </a>
                  ))}
                                    {exampleSources.map((source) => (
                                      <a key={source.title} href={source.href} className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20">
                                        <div className="flex items-center justify-between gap-4">
                                          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{source.country}</span>
                                          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                                            {source.type}
                                          </span>
                                        </div>
                                        <h3 className="mt-5 text-xl font-semibold tracking-tight">{source.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-neutral-600">{source.desc}</p>
                                        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                                          <span className="text-sm text-neutral-500">Official link</span>
                                          <span className="text-sm font-medium text-neutral-900">View source →</span>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </section>
                            </main>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
