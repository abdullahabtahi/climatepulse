import { useState } from 'react'
import SurveyModal from './SurveyModal'

export default function WaitlistSection() {
    const [surveyOpen, setSurveyOpen] = useState(false)

    return (
        <section className="py-24 md:py-32 px-6 bg-pulse-deep relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(15,168,126,0.3) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }} />
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="text-pulse-teal text-sm">🌍</span>
                    <span className="text-white/80 text-sm font-medium">ASEAN-wide pilot launching Q3 2026</span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Be the first ground-truth reporter in your community.
                </h2>

                <p className="font-sans text-xl text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
                    Join climate front-liners across Southeast Asia already on the waitlist.
                </p>

                {/* waitlister.me embed container */}
                <div className="max-w-md mx-auto mb-10">
                    {/* 
            Replace this div with the actual waitlister.me embed script/iframe.
            For now, showing a styled form placeholder that triggers the survey modal.
          */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-pulse-teal focus:border-transparent"
                            />
                            <button
                                onClick={() => setSurveyOpen(true)}
                                className="bg-pulse-teal text-white font-semibold px-6 py-3 rounded-xl hover:bg-pulse-teal-light transition-colors cursor-pointer whitespace-nowrap text-sm"
                            >
                                Join Waitlist
                            </button>
                        </div>
                        <p className="text-white/30 text-xs mt-3">
                            Free forever. No spam. We'll contact you when the pilot launches.
                        </p>
                    </div>
                </div>

                {/* Social proof */}
                <div className="flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-pulse-deep bg-pulse-teal/30 flex items-center justify-center"
                            >
                                <span className="text-[10px] text-white/60">👤</span>
                            </div>
                        ))}
                    </div>
                    <span className="text-white/50 text-sm font-sans">
                        50+ already joined
                    </span>
                </div>
            </div>

            {/* Survey modal */}
            <SurveyModal open={surveyOpen} onClose={() => setSurveyOpen(false)} />
        </section>
    )
}
