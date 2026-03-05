import { useEffect, useRef, useState } from 'react'
import GapDiagram from './GapDiagram'
import { citations } from '@/data/citations'

const stats = [
    {
        number: '19.2',
        suffix: '/50',
        label: 'Regional disaster preparedness score',
        source: 'Harvard HHI, 2024',
        id: 'hhi',
    },
    {
        number: '0',
        suffix: ' platforms',
        label: 'in ASEAN that close the citizen → authority feedback loop',
        source: 'Research synthesis, 2024',
        id: 'platforms',
    },
    {
        number: '150',
        suffix: '%',
        label: 'growth in crowdsourced disaster reports — with no individual feedback returned',
        source: 'Peta Bencana, 2024',
        id: 'growth',
    },
]

function useCountUp(target: number, duration = 1500, start = false) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        if (!start) return
        const startTime = Date.now()
        const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setValue(parseFloat((eased * target).toFixed(1)))
            if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
    }, [start, target, duration])
    return value
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
    const target = parseFloat(stat.number)
    const count = useCountUp(target, 1500, active)

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-pulse-mist hover:shadow-md transition-shadow">
            <div className="font-display text-5xl md:text-6xl font-bold text-pulse-teal mb-1">
                {stat.number.includes('.') ? count.toFixed(1) : Math.floor(count)}
                <span className="text-3xl md:text-4xl text-pulse-teal/60">{stat.suffix}</span>
            </div>
            <p className="font-sans text-pulse-text text-base md:text-lg leading-snug mb-3">{stat.label}</p>
            <p className="text-xs text-pulse-slate font-medium uppercase tracking-wider">{stat.source}</p>
        </div>
    )
}

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-pulse-mist">
            <div className="max-w-6xl mx-auto">
                {/* Section intro */}
                <div className="max-w-3xl mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-pulse-deep mb-6">
                        The Last-Mile Climate Blindspot
                    </h2>
                    <p className="font-sans text-xl text-pulse-text/80 leading-relaxed">
                        Across Southeast Asia, the distance between a satellite forecast and the water on your street is called{' '}
                        <em className="text-pulse-teal not-italic font-semibold">"the last mile."</em>{' '}
                        In that gap, people make life-or-death decisions with no information.
                    </p>
                </div>

                {/* Gap diagram */}
                <div className="mb-20">
                    <GapDiagram visible={visible} />
                </div>

                {/* Stat cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {stats.map((stat) => (
                        <StatCard key={stat.id} stat={stat} active={visible} />
                    ))}
                </div>

                {/* Research citation strip */}
                <div className="border-t border-pulse-mist pt-8">
                    <p className="text-xs text-pulse-slate uppercase tracking-widest font-medium mb-6">
                        Research backing
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {citations.map((c) => (
                            <div
                                key={c.id}
                                className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-pulse-mist shadow-sm"
                            >
                                <svg
                                    className="w-4 h-4 text-pulse-teal flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                    />
                                </svg>
                                <span className="text-xs text-pulse-text font-medium">{c.organization}</span>
                                <span className="text-xs text-pulse-slate">{c.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
