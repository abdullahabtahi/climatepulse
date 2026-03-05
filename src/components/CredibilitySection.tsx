import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CompareChart from './CompareChart'

export default function CredibilitySection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const visible = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-pulse-mist">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-pulse-deep mb-6">
                        Why current approaches fall short
                    </h2>
                    <p className="font-sans text-lg text-pulse-text/70 leading-relaxed">
                        National early warning systems broadcast downward. Crowdsource platforms collect upward.
                        Neither closes the loop — the citizen never hears back.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Chart — takes 3 columns */}
                    <div
                        className={`lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-pulse-mist transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <p className="text-xs text-pulse-slate uppercase tracking-widest font-medium mb-6">
                            Capability comparison
                        </p>
                        <CompareChart />
                        <p className="text-[10px] text-pulse-slate mt-4">
                            Source: ClimatePulse research synthesis, 2024. Scores based on feature analysis across 12 platforms in ASEAN.
                        </p>
                    </div>

                    {/* Trust stat — takes 2 columns */}
                    <div
                        className={`lg:col-span-2 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        {/* Trust donut */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-pulse-mist text-center">
                            <p className="text-xs text-pulse-slate uppercase tracking-widest font-medium mb-6">
                                Community trust factor
                            </p>

                            {/* SVG Donut */}
                            <div className="relative w-40 h-40 mx-auto mb-4">
                                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                                    {/* Background circle */}
                                    <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                                    {/* Progress circle */}
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        fill="none"
                                        stroke="#0FA87E"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        strokeDasharray={`${visible ? 95.4 * 3.14 : 0} ${100 * 3.14}`}
                                        className="transition-all duration-[2s] ease-out"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="font-display text-4xl font-bold text-pulse-deep">
                                        {visible ? '95.4' : '0'}
                                    </span>
                                    <span className="text-xs text-pulse-slate">percent</span>
                                </div>
                            </div>

                            <p className="font-sans text-sm text-pulse-text leading-relaxed">
                                of disaster-affected residents trust their{' '}
                                <span className="font-semibold text-pulse-deep">local community leaders</span>{' '}
                                as the most credible source of actionable information.
                            </p>
                            <p className="text-[10px] text-pulse-slate mt-3">
                                Source: ASEAN disaster trust survey, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
