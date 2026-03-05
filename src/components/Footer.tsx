import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-pulse-deep border-t border-white/10 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-6 h-6 rounded-md bg-pulse-teal flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 10 Q7 2 12 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                                    <circle cx="7" cy="7" r="1.5" fill="white" />
                                </svg>
                            </div>
                            <span className="font-display font-semibold text-sm text-white/80">
                                ClimatePulse
                            </span>
                        </Link>
                        <p className="font-display text-white/30 text-sm italic">
                            Ground truth starts here.
                        </p>
                    </div>

                    {/* Center: tagline */}
                    <p className="text-white/40 text-sm font-sans text-center">
                        Designed for ASEAN 🌊
                    </p>

                    {/* Right: links */}
                    <div className="flex items-center gap-4">
                        {[
                            { label: 'GitHub', href: '#' },
                            { label: 'X', href: '#' },
                            { label: 'LinkedIn', href: '#' },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/30 hover:text-white/60 text-sm font-sans transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-white/20 text-xs font-sans">
                        © 2026 ClimatePulse · Social Impact Catalyst Fellowship
                    </p>
                    <Link
                        to="/impact"
                        className="text-white/30 hover:text-white/50 text-xs font-sans transition-colors"
                    >
                        For Partners →
                    </Link>
                </div>
            </div>
        </footer>
    )
}
