export default function StatusStrip() {
    return (
        <div className="bg-pulse-deep/95 backdrop-blur-sm border-t border-white/10 py-3 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                {/* Left: status */}
                <div className="flex items-center gap-3 min-w-0">
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pulse-teal opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pulse-teal" />
                    </span>
                    <span className="text-white font-sans text-sm font-medium truncate">
                        ASEAN Pilot — Launching Q3 2026
                    </span>
                </div>

                {/* SVG heartbeat line */}
                <div className="flex-1 hidden md:block h-8 max-w-xs overflow-hidden">
                    <svg viewBox="0 0 300 32" className="w-full h-full" preserveAspectRatio="none">
                        <path
                            d="M0,16 L40,16 L55,16 L65,4 L75,28 L85,4 L95,28 L105,16 L140,16 L155,16 L165,2 L175,30 L185,2 L195,30 L205,16 L240,16 L255,16 L265,6 L272,26 L280,6 L288,26 L295,16 L300,16"
                            stroke="#0FA87E"
                            strokeWidth="1.5"
                            fill="none"
                            className="heartbeat-path"
                        />
                    </svg>
                </div>

                {/* Right: next nodes */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-white/40 text-xs font-sans hidden sm:block">Next:</span>
                    {['Jakarta', 'Ho Chi Minh City', 'Dhaka'].map((city, i) => (
                        <span key={city} className="flex items-center gap-1">
                            {i > 0 && <span className="text-white/20">·</span>}
                            <span className="text-white/50 text-xs font-sans">{city}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
