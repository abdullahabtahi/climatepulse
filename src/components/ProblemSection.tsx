import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
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
        source: 'ASEAN Disaster Report, 2024',
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
        <div className="bg-pulse-charcoal/50 border-l-4 border-pulse-teal rounded-r-2xl p-6 md:p-8 hover:bg-pulse-charcoal transition-colors">
            <div className="font-mono text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.number.includes('.') ? count.toFixed(1) : Math.floor(count)}
                <span className="text-2xl md:text-3xl text-pulse-teal/80 ml-1">{stat.suffix}</span>
            </div>
            <p className="font-sans text-white/80 text-base md:text-lg leading-snug mb-4">{stat.label}</p>
            <p className="text-xs text-pulse-slate font-medium uppercase tracking-widest">{stat.source}</p>
        </div>
    )
}

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section ref={sectionRef} className="py-24 md:py-40 px-6 bg-pulse-deep border-t border-white/5 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pulse-deep-dark via-pulse-deep to-pulse-deep z-0" />
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section intro */}
                <div className="max-w-3xl mb-24">
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8">
                        The Last-Mile <br /><span className="text-pulse-ochre">Climate Blindspot.</span>
                    </h2>
                    <p className="font-sans text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
                        Across Southeast Asia, the distance between a satellite forecast and the water on your street is called{' '}
                        <em className="text-pulse-teal not-italic font-semibold px-1 rounded bg-pulse-teal/10">"the last mile."</em>{' '}
                        In that gap, people make life-or-death decisions with zero context.
                    </p>
                </div>

                {/* Gap diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 bg-pulse-charcoal/30 p-8 rounded-3xl border border-white/10"
                >
                    <GapDiagram visible={isInView} />
                </motion.div>

                {/* Stat cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <StatCard stat={stat} active={isInView} />
                        </motion.div>
                    ))}
                </div>

                {/* Research citation strip */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-xs text-pulse-slate uppercase tracking-widest font-medium mb-6">
                        Verified By Research
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {citations.map((c) => (
                            <div
                                key={c.id}
                                className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2.5 border border-white/10"
                            >
                                <svg
                                    className="w-4 h-4 text-pulse-teal flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                <span className="text-sm text-white/90 font-medium tracking-tight">{c.organization}</span>
                                <span className="text-sm text-pulse-slate">{c.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
