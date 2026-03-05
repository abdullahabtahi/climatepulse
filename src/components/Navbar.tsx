import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isImpact = location.pathname === '/impact'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isImpact
                    ? 'bg-white/90 backdrop-blur-md border-b border-pulse-mist shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-7 h-7 rounded-lg bg-pulse-teal flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 10 Q7 2 12 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            <circle cx="7" cy="7" r="1.5" fill="white" />
                        </svg>
                    </div>
                    <span
                        className={`font-display font-semibold text-base transition-colors ${scrolled || isImpact ? 'text-pulse-deep' : 'text-white'
                            }`}
                    >
                        ClimatePulse
                    </span>
                </Link>

                {/* Nav link */}
                <Link
                    to="/impact"
                    className={`font-display text-sm font-medium transition-colors flex items-center gap-1 ${scrolled || isImpact
                            ? 'text-pulse-teal hover:text-pulse-deep'
                            : 'text-white/80 hover:text-white'
                        }`}
                >
                    For Partners
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2.5 9.5l7-7M3.5 2.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </header>
    )
}
