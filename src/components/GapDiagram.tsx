interface GapDiagramProps {
    visible: boolean
}

const nodes = [
    { label: 'Satellite', sub: 'Real-time data', color: '#00C896' },
    { label: 'National Agency', sub: 'Scientific forecast', color: '#00C896' },
    { label: 'Regional Office', sub: 'Province-level alert', color: '#00C896' },
    { label: 'City', sub: 'Municipal broadcast', color: '#E8A030' },
    { label: 'Wait list', sub: 'The last mile', color: '#ef4444', highlight: true },
    { label: 'Your street', sub: 'Where you live', color: '#6B8F8A' },
]

export default function GapDiagram({ visible }: GapDiagramProps) {
    return (
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-full overflow-x-auto pb-4">
                <p className="text-xs text-white/50 uppercase tracking-widest font-medium mb-8 text-center md:text-left">
                    How climate data travels — and where it stops
                </p>

                {/* Desktop: horizontal flow */}
                <div className="hidden md:flex items-center justify-between min-w-max mx-auto px-4">
                    {nodes.map((node, i) => (
                        <div key={node.label} className="flex items-center">
                            {/* Node */}
                            <div className="flex flex-col items-center gap-3">
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ${node.highlight
                                        ? 'ring-2 ring-pulse-red bg-pulse-red/10 animate-pulse'
                                        : 'bg-pulse-charcoal/80 border border-white/10'
                                        }`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    {node.highlight ? (
                                        <span className="text-pulse-red font-bold text-xl">?</span>
                                    ) : (
                                        <div className="w-4 h-4 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: node.color, color: node.color }} />
                                    )}
                                </div>
                                <div className="text-center w-28">
                                    <p
                                        className={`font-display text-sm font-semibold tracking-wide ${node.highlight ? 'text-pulse-red' : 'text-white'}`}
                                    >
                                        {node.label}
                                    </p>
                                    <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{node.sub}</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            {i < nodes.length - 1 && (
                                <div className="flex items-center w-8 lg:w-16 -mt-10 mx-2">
                                    <div
                                        className={`h-[2px] flex-1 ${i >= 3 ? 'border-t-2 border-dashed border-pulse-red/50 bg-transparent' : 'bg-pulse-teal/40'
                                            }`}
                                    />
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 8 8"
                                        className={i >= 3 ? 'text-pulse-red/50' : 'text-pulse-teal/40'}
                                    >
                                        <path d="M0 0 L8 4 L0 8" fill="currentColor" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* "This is where ClimatePulse lives" callout */}
                {visible && (
                    <div className="hidden md:flex mt-12 items-center justify-center">
                        <div className="inline-flex items-center gap-3 bg-pulse-teal/10 border border-pulse-teal/30 rounded-full px-6 py-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pulse-teal opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pulse-teal"></span>
                            </span>
                            <span className="font-mono text-sm font-bold tracking-widest text-pulse-teal uppercase">
                                This is where ClimatePulse acts
                            </span>
                        </div>
                    </div>
                )}

                {/* Mobile: vertical stack */}
                <div className="md:hidden space-y-4 px-2">
                    {nodes.map((node) => (
                        <div
                            key={node.label}
                            className={`flex items-center gap-4 p-4 rounded-2xl ${node.highlight ? 'bg-pulse-red/5 border border-pulse-red/30' : 'bg-pulse-charcoal/50 border border-white/5'
                                }`}
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: node.highlight ? 'rgba(239, 68, 68, 0.1)' : node.color + '20' }}
                            >
                                {node.highlight ? (
                                    <span className="text-pulse-red font-bold text-lg">?</span>
                                ) : (
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}` }} />
                                )}
                            </div>
                            <div>
                                <p className={`font-display text-sm font-semibold ${node.highlight ? 'text-pulse-red' : 'text-white'}`}>
                                    {node.label}
                                </p>
                                <p className="text-xs text-white/50">{node.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
