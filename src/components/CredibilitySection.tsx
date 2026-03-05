import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import CompareChart from './CompareChart'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card'
import { Badge } from './ui/badge'

function useCountUp(target: number, duration = 1500, start = false) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        if (!start) return
        const startTime = Date.now()
        const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(parseFloat((eased * target).toFixed(1)))
            if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
    }, [start, target, duration])
    return value
}

export default function CredibilitySection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const visible = useInView(sectionRef, { once: true, amount: 0.2 })
    const trustPercent = useCountUp(95.4, 2000, visible)
    const userCount = useCountUp(123, 2000, visible)

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-pulse-mist">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-6 font-mono text-pulse-slate border-pulse-slate/30">BUILT FOR ASEAN</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-pulse-deep mb-4 tracking-tight">
                            Powered by Ground Truth
                        </h2>
                        <p className="font-sans text-xl text-pulse-slate leading-relaxed">
                            A climate survival platform doesn't work without trust. We rely on the most credible source in any disaster: the community itself.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Chart Card */}
                    <Card className={`lg:col-span-8 border-white/40 shadow-xl shadow-pulse-charcoal/5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <CardHeader>
                            <CardTitle className="text-xl text-pulse-deep">Capability Analysis</CardTitle>
                            <CardDescription className="font-mono text-xs">RESEARCH SYNTHESIS, 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <CompareChart />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Trust Stats Vertical Stack */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <Card className={`border-white/40 shadow-lg shadow-pulse-charcoal/5 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <CardContent className="pt-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-pulse-teal/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-mono text-4xl font-bold text-pulse-deep">
                                            {Math.floor(userCount)}k+
                                        </div>
                                        <p className="text-sm font-medium text-pulse-slate">Target Network</p>
                                    </div>
                                </div>
                                <p className="text-sm text-pulse-slate leading-relaxed border-t border-pulse-mist pt-4">
                                    Projected community leaders driving validation across ASEAN pilot zones.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className={`border-white/40 shadow-lg shadow-pulse-charcoal/5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <CardContent className="pt-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="font-mono text-5xl font-bold text-pulse-teal">
                                        {trustPercent.toFixed(1)}%
                                    </div>
                                    {/* SVG Donut Mini */}
                                    <div className="relative w-12 h-12">
                                        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                                            <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="15" />
                                            <circle
                                                cx="60" cy="60" r="50" fill="none" stroke="#0FA87E" strokeWidth="15" strokeLinecap="round"
                                                strokeDasharray={`${visible ? 95.4 * 3.14 : 0} ${100 * 3.14}`}
                                                className="transition-all duration-[2s] ease-out"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm text-pulse-slate leading-relaxed border-t border-pulse-mist pt-4">
                                    <span className="font-semibold text-pulse-deep">Trust Factor:</span> Residents overwhelmingly trust local leaders as the most credible form of emergency information.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
