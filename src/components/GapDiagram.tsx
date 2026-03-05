interface GapDiagramProps {
    visible: boolean
}

const nodes = [
    { label: 'Satellite', sub: 'Real-time data', color: '#0FA87E' },
    { label: 'National Agency', sub: 'Scientific forecast', color: '#0FA87E' },
    { label: 'Regional Office', sub: 'Province-level alert', color: '#0FA87E' },
    { label: 'City', sub: 'Municipal broadcast', color: '#E8A030' },
    { label: '???', sub: 'The last mile', color: '#dc2626', highlight: true },
    { label: 'Your street', sub: 'Where you live', color: '#6B8F8A' },
]

export default function GapDiagram({ visible }: GapDiagramProps) {
    return (
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-pulse-mist overflow-x-auto">
                <p className="text-xs text-pulse-slate uppercase tracking-widest font-medium mb-8">
                    How climate data travels — and where it stops
                </p>

                {/* Desktop: horizontal flow */}
                <div className="hidden md:flex items-center gap-0 min-w-max mx-auto justify-center">
                    {nodes.map((node, i) => (
                        <div key={node.label} className="flex items-center">
                            {/* Node */}
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-all duration-700 ${node.highlight
                                            ? 'ring-2 ring-red-500 bg-red-50 animate-pulse'
                                            : 'bg-pulse-mist'
                                        }`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    {node.highlight ? (
                                        <span className="text-red-500 font-bold text-lg">?</span>
                                    ) : (
                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: node.color }} />
                                    )}
                                </div>
                                <div className="text-center">
                                    <p
                                        className={`font-display text-sm font-semibold ${node.highlight ? 'text-red-500' : 'text-pulse-deep'}`}
                                    >
                                        {node.label}
                                    </p>
                                    <p className="text-xs text-pulse-slate">{node.sub}</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            {i < nodes.length - 1 && (
                                <div className="flex items-center w-16 -mt-7">
                                    <div
                                        className={`h-px flex-1 ${i >= 3 ? 'border-t-2 border-dashed border-red-300' : 'bg-pulse-teal/30'
                                            }`}
                                    />
                                    <svg
                                        width="8"
                                        height="8"
                                        viewBox="0 0 8 8"
                                        className={i >= 3 ? 'text-red-300' : 'text-pulse-teal/40'}
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
                    <div className="mt-8 flex items-center justify-center">
                        <div className="inline-flex items-center gap-2 bg-pulse-teal/10 border border-pulse-teal/30 rounded-full px-5 py-2">
                            <div className="w-2 h-2 rounded-full bg-pulse-teal" />
                            <span className="font-display text-sm font-semibold text-pulse-teal">
                                This is where ClimatePulse lives.
                            </span>
                        </div>
                    </div>
                )}

                {/* Mobile: vertical stack */}
                <div className="md:hidden space-y-3">
                    {nodes.map((node) => (
                        <div
                            key={node.label}
                            className={`flex items-center gap-3 p-3 rounded-xl ${node.highlight ? 'bg-red-50 border border-red-200' : 'bg-pulse-mist'
                                }`}
                        >
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: node.highlight ? '#fee2e2' : node.color + '20' }}
                            >
                                {node.highlight ? (
                                    <span className="text-red-500 font-bold text-sm">?</span>
                                ) : (
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: node.color }} />
                                )}
                            </div>
                            <div>
                                <p className={`font-display text-sm font-semibold ${node.highlight ? 'text-red-500' : 'text-pulse-deep'}`}>
                                    {node.label}
                                </p>
                                <p className="text-xs text-pulse-slate">{node.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
