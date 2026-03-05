import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

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
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl rounded-2xl border ${scrolled || isImpact
                ? 'bg-pulse-charcoal/80 backdrop-blur-xl border-white/10 shadow-2xl'
                : 'bg-white/5 backdrop-blur-md border-white/10'
                }`}
        >
            <div className="px-6 h-14 md:h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pulse-teal to-pulse-teal-light flex items-center justify-center shadow-inner shadow-white/20">
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                            <path d="M2 10 Q7 2 12 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            <circle cx="7" cy="7" r="1.5" fill="white" />
                        </svg>
                    </div>
                    <span
                        className={`font-display font-semibold text-xl tracking-tight transition-colors text-white`}
                    >
                        ClimatePulse
                    </span>
                </Link>

                {/* Right Nav */}
                <div className="flex items-center gap-6">
                    <Link
                        to="/impact"
                        className={`hidden md:flex font-sans text-sm font-medium transition-colors items-center gap-1 text-white/80 hover:text-white`}
                    >
                        For Partners
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2.5 9.5l7-7M3.5 2.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <Button variant={scrolled || isImpact ? 'default' : 'secondary'} className="rounded-full shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-300">
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </header>
    )
}
