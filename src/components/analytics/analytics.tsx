'use client'

import { useState, useEffect } from 'react'

interface CountryData {
  country: string
  countryCode: string
  users: number
}

interface AnalyticsData {
  realtimeActiveUsers: number
  activeUsers: number
  newUsers: number
  avgSessionDuration: number
  byCountry: CountryData[]
  byPage: Array<{ title: string; views: number }>
  byEvent: Array<{ event: string; count: number }>
  loading: boolean
  error: string | null
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData>({
    realtimeActiveUsers: 0,
    activeUsers: 0,
    newUsers: 0,
    avgSessionDuration: 0,
    byCountry: [],
    byPage: [],
    byEvent: [],
    loading: true,
    error: null,
  })

  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    fetchAnalyticsData()
    const interval = setInterval(fetchAnalyticsData, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchAnalyticsData = async () => {
    try {
      setData((prev) => ({ ...prev, loading: true, error: null }))
      const res = await fetch('/api/analytics')
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? `Request failed with status ${res.status}`)
      }
      const json = await res.json()
      setData({ ...json, loading: false, error: null })
      setLastUpdated(new Date())
    } catch (error: any) {
      setData((prev) => ({
        ...prev,
        loading: false,
        error: error.message ?? 'Failed to fetch analytics data.',
      }))
    }
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs.toString().padStart(2, '0')}s`
  }

  const Skeleton = ({ w, h }: { w: string; h: string }) => (
    <div
      style={{ width: w, height: h }}
      className=" bg-neutral-100 animate-pulse"
    />
  )

  const maxUsers = Math.max(...data.byCountry.map((c) => c.users), 1)
  const maxViews = Math.max(...data.byPage.map((p) => p.views), 1)
  const maxEvents = Math.max(...data.byEvent.map((e) => e.count), 1)

  return (
    <main id="swup" className="transition-fade bg-white min-h-screen">
      <div id="content">
        <div className="c-grid-container pt-8 pb-5">

          {/* ── Header ── */}
          <div className="col-span-4 xl:col-span-12 flex items-end justify-between mt-8 mb-12">
            <div>

              <h1
                className="c-heading-h1 js-splitted"
              >
                Analytics
              </h1>
            </div>
            <div className="text-right flex flex-col gap-1 pb-1">
              <div className="flex items-center gap-1.5 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-600 tracking-wide">Live</span>
              </div>
              <p className="text-[11px] font-mono text-neutral-400">Last 30 days</p>
              <p className="text-[11px] font-mono text-neutral-400">
                {lastUpdated.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </p>
            </div>
          </div>

          {/* ── Error ── */}
          {data.error && (
            <div className="col-span-4 xl:col-span-12 mb-10 border border-red-200 bg-red-50  px-5 py-4">
              <p className="text-[11px] font-mono text-red-500">{data.error}</p>
            </div>
          )}

          {/* ── KPI Grid ── */}
          <div className="col-span-4 xl:col-span-12 grid grid-cols-4 border border-[#141415]  overflow-hidden mb-12">
            {[
              {
                label: 'Active now',
                value: data.realtimeActiveUsers,
                sub: 'Last 5 min',
                dot: 'bg-emerald-400 animate-pulse',
              },
              {
                label: 'Active users',
                value: data.activeUsers.toLocaleString(),
                sub: '30 days',
                dot: 'bg-blue-400',
              },
              {
                label: 'New users',
                value: data.newUsers.toLocaleString(),
                sub: '30 days',
                dot: 'bg-violet-400',
              },
              {
                label: 'Avg session',
                value: formatDuration(data.avgSessionDuration),
                sub: 'Per session',
                dot: 'bg-amber-400',
              },
            ].map((kpi, i) => (
              <div
                key={i}
                className="px-7 py-7 border-r border-[#141415] last:border-r-0 hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="c-text-body">
                    {kpi.label}
                  </p>
                  <span className={`w-1.5 h-1.5 rounded-full ${kpi.dot}`} />
                </div>
                {data.loading ? (
                  <Skeleton w="72px" h="32px" />
                ) : (
                  <p className="text-[28px] leading-none font-semibold tracking-[-0.04em] text-neutral-900">
                    {kpi.value}
                  </p>
                )}
                <p className="text-[10px] font-mono text-neutral-400 mt-3">{kpi.sub}</p>
              </div>
            ))}
          </div>

          {/* ── Country Section ── */}
          <div className="col-span-4 xl:col-span-12 mb-12">
            <p className="c-text-body mb-5">
              Users by country
            </p>
            <div className="border-t border-l border-r border-[#141415] overflow-hidden">
              <div className="grid grid-cols-3">
                {data.loading
                  ? Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="px-6 py-5 border-r border-b border-[#141415] [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0"
                    >
                      <div className="flex justify-between mb-4">
                        <Skeleton w="80px" h="14px" />
                        <Skeleton w="40px" h="20px" />
                      </div>
                      <Skeleton w="100%" h="1px" />
                    </div>
                  ))
                  : (() => {
                    const cols = 3;
                    const total = data.byCountry.length;
                    const lastRowStart = Math.floor((total - 1) / cols) * cols;

                    return data.byCountry.map((c, i) => {
                      const isLastRow = i >= lastRowStart;
                      const isLastCol = (i + 1) % cols === 0;

                      return (
                        <div
                          key={i}
                          className={[
                            'px-6 py-5 border-r border-b border-[#141415] hover:bg-neutral-50 transition-colors',
                            isLastCol ? 'border-r-0' : '',
                            isLastRow ? 'border-b-0' : '',
                          ].join(' ')}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <p className="text-[13px] text-neutral-600 leading-snug">{c.country}</p>
                              <p className="text-[9px] font-mono tracking-[0.12em] text-neutral-400 mt-0.5">
                                {c.countryCode}
                              </p>
                            </div>
                            <p className="text-[20px] font-semibold tracking-tight text-neutral-900 leading-none">
                              {c.users.toLocaleString()}
                            </p>
                          </div>
                          <div className="w-full h-px bg-neutral-200">
                            <div
                              className="h-px bg-neutral-400 transition-all duration-700"
                              style={{ width: `${(c.users / maxUsers) * 100}%` }}
                            />
                          </div>
                        </div>
                      );
                    });
                  })()}
              </div>
            </div>
          </div>

          {/* ── Pages + Events ── */}
          <div className="col-span-4 xl:col-span-12 grid grid-cols-2 border border-[#141415]  overflow-hidden mb-12">
            {/* Pages */}
            <div className="px-5 py-5 border-r border-[#141415]">
              <p className="c-text-body mb-6">
                Views by page
              </p>
              <div>
                {data.loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-neutral-100 last:border-b-0">
                      <Skeleton w="12px" h="11px" />
                      <Skeleton w="120px" h="13px" />
                      <div className="flex-1" />
                      <Skeleton w="64px" h="1px" />
                      <Skeleton w="40px" h="11px" />
                    </div>
                  ))
                  : data.byPage.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-[11px] border-b border-neutral-100 last:border-b-0"
                    >
                      <span className="text-[10px] font-mono text-neutral-600 w-3 shrink-0 text-right">
                        {i + 1}
                      </span>
                      <span
                        className="text-[13px] text-neutral-600 flex-1 min-w-0 truncate"
                        title={p.title}
                      >
                        {p.title}
                      </span>
                      <div className="w-16 h-px bg-neutral-200 shrink-0 relative">
                        <div
                          className="absolute inset-y-0 left-0 h-px bg-neutral-500 transition-all duration-700"
                          style={{ width: `${(p.views / maxViews) * 100}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 w-12 text-right shrink-0">
                        {p.views.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Events */}
            <div className="px-5 py-5">
              <p className="c-text-body mb-6">
                Events
              </p>
              <div>
                {data.loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-neutral-100 last:border-b-0">
                      <Skeleton w="12px" h="11px" />
                      <Skeleton w="120px" h="13px" />
                      <div className="flex-1" />
                      <Skeleton w="64px" h="1px" />
                      <Skeleton w="40px" h="11px" />
                    </div>
                  ))
                  : data.byEvent.map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-[11px] border-b border-neutral-100 last:border-b-0"
                    >
                      <span className="text-[10px] font-mono text-neutral-600 w-3 shrink-0 text-right">
                        {i + 1}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500 flex-1 min-w-0 truncate">
                        {e.event}
                      </span>
                      <div className="w-16 h-px bg-neutral-200 shrink-0 relative">
                        <div
                          className="absolute inset-y-0 left-0 h-px bg-neutral-500 transition-all duration-700"
                          style={{ width: `${(e.count / maxEvents) * 100}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 w-12 text-right shrink-0">
                        {e.count.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}