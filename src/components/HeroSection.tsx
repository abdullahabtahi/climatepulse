import { useEffect, useRef } from 'react'
import StatusStrip from './StatusStrip'

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        // Staggered fade-in for headline words
        if (!headlineRef.current) return
        const words = headlineRef.current.querySelectorAll('.word')
        words.forEach((word, i) => {
            ; (word as HTMLElement).style.animationDelay = `${i * 0.08}s`
        })
    }, [])

    return (
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
            {/* Background image — hero scene */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-scene.webp"
                    alt="A young person stands in a Southeast Asian urban alley beside rising floodwater"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                {/* Dark gradient overlay — bottom-heavy */}
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-deep via-pulse-deep/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-deep/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-32 w-full">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="w-2 h-2 rounded-full bg-pulse-ochre animate-pulse-glow" />
                    <span className="text-white/90 text-sm font-medium font-sans">
                        Social Impact Catalyst Fellowship
                    </span>
                </div>

                {/* Headline — emotional hook, no product claim */}
                <h1
                    ref={headlineRef}
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mb-6"
                >
                    {`When the flood came, nobody told Mae which street to evacuate.`.split(' ').map((word, i) => (
                        <span
                            key={i}
                            className="word inline-block opacity-0 translate-y-4 animate-[fadeUp_0.5s_ease_forwards]"
                            style={{ marginRight: '0.3em' }}
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                {/* Sub-text — ASEAN scope */}
                <p className="font-sans text-white/70 text-xl md:text-2xl max-w-2xl leading-relaxed">
                    Every year, 150 million people across Southeast Asia face climate events with warnings that never reach their street.
                </p>
            </div>

            {/* Live pilot status strip — heartbeat monitor */}
            <div className="relative z-10">
                <StatusStrip />
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-36 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
                <span className="text-xs font-sans rotate-90 tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-white/20" />
            </div>
        </section>
    )
}
