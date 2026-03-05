export default function TheoryOfChange() {
    const columns = [
        {
            title: 'INPUTS',
            color: '#0FA87E',
            items: ['Youth reporters', 'Weather data feeds', 'Community leaders'],
        },
        {
            title: 'ACTIVITIES',
            color: '#2E8B57',
            items: ['Street-level reporting', 'Real-time translation', 'Feedback loop closure'],
        },
        {
            title: 'OUTPUTS',
            color: '#E8A030',
            items: ['Verified hazard reports', 'Automated situation reports', 'Community dashboard'],
        },
        {
            title: 'OUTCOMES',
            color: '#6B8F8A',
            items: ['Faster local gov response', 'Data-driven fund release', '95%+ reporter retention'],
        },
        {
            title: 'IMPACT',
            color: '#062B21',
            items: ['Reduced climate casualties', 'Community resilience', 'Scalable gov-tech model'],
        },
    ]

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-display text-4xl font-bold text-pulse-deep mb-4">
                    Theory of Change
                </h2>
                <p className="text-pulse-slate text-lg mb-12 max-w-2xl">
                    How ground-truth data from youth reporters creates measurable impact across Southeast Asia.
                </p>

                {/* Desktop: horizontal flow */}
                <div className="hidden lg:grid grid-cols-5 gap-0">
                    {columns.map((col, ci) => (
                        <div key={col.title} className="flex items-stretch">
                            <div className="flex-1 relative">
                                {/* Header */}
                                <div
                                    className="text-center py-3 rounded-t-xl"
                                    style={{ backgroundColor: col.color + '15' }}
                                >
                                    <p
                                        className="text-xs font-bold uppercase tracking-wider"
                                        style={{ color: col.color }}
                                    >
                                        {col.title}
                                    </p>
                                </div>

                                {/* Items */}
                                <div
                                    className="p-4 space-y-3 border-l border-r border-b rounded-b-xl min-h-[160px]"
                                    style={{ borderColor: col.color + '20' }}
                                >
                                    {col.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-2"
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                                style={{ backgroundColor: col.color }}
                                            />
                                            <p className="text-sm text-pulse-text leading-snug">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow between columns */}
                            {ci < columns.length - 1 && (
                                <div className="flex items-center w-6 -mx-1 z-10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#D1D5DB">
                                        <path d="M8 4l8 8-8 8" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile: vertical stack */}
                <div className="lg:hidden space-y-4">
                    {columns.map((col, ci) => (
                        <div key={col.title}>
                            <div className="rounded-xl overflow-hidden">
                                <div className="py-2 px-4" style={{ backgroundColor: col.color + '15' }}>
                                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: col.color }}>
                                        {col.title}
                                    </p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-b-xl space-y-2">
                                    {col.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: col.color }} />
                                            <p className="text-sm text-pulse-text">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {ci < columns.length - 1 && (
                                <div className="flex justify-center py-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#D1D5DB">
                                        <path d="M4 4l4 8 4-8" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
