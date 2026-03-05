import { teamMembers } from '@/data/team'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Country flag SVG paths (simplified)
const flags: Record<string, string> = {
    PH: '🇵🇭',
    ID: '🇮🇩',
    TH: '🇹🇭',
    VN: '🇻🇳',
    MY: '🇲🇾',
    SG: '🇸🇬',
    KH: '🇰🇭',
    MM: '🇲🇲',
}

export default function TeamSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const visible = useInView(sectionRef, { once: true, amount: 0.15 })

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className={`font-display text-4xl md:text-5xl font-bold text-pulse-deep mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Built by volunteers who've been on the ground.
                    </h2>
                    <p
                        className={`font-sans text-lg text-pulse-slate transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Social Impact Catalyst Fellowship
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => (
                        <div
                            key={member.id}
                            className={`bg-pulse-mist/50 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${i * 100 + 200}ms` }}
                        >
                            {/* Avatar circle */}
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mx-auto mb-4 shadow-sm"
                                style={{
                                    backgroundColor: member.accentColor,
                                    border: `3px solid ${member.accentColor}20`,
                                }}
                            >
                                {member.initials}
                            </div>

                            {/* Name + flag */}
                            <h3 className="font-display font-semibold text-pulse-deep mb-1 flex items-center justify-center gap-1.5">
                                {member.name}
                                <span className="text-sm" title={member.countryName}>
                                    {flags[member.countryCode] || '🌏'}
                                </span>
                            </h3>

                            {/* Role */}
                            <p className="text-sm text-pulse-teal font-medium mb-1">{member.role}</p>

                            {/* Country */}
                            <p className="text-xs text-pulse-slate mb-3">{member.countryName}</p>

                            {/* Field contribution */}
                            <div className="bg-white rounded-lg p-3">
                                <p className="text-xs text-pulse-text/70 italic leading-relaxed">
                                    "{member.contribution}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fellowship badge */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center gap-2 bg-pulse-mist border border-pulse-teal/10 rounded-full px-5 py-2.5">
                        <div className="w-5 h-5 rounded-full bg-pulse-teal flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                                <path d="M5 0l1.55 3.14L10 3.64 7.5 6.09l.59 3.41L5 7.88 1.91 9.5l.59-3.41L0 3.64l3.45-.5z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-pulse-deep">Social Impact Catalyst Fellowship</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
