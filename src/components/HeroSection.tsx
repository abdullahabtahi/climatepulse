import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import StatusStrip from './StatusStrip'

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start']
    })

    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 }
        }
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 200 } }
    }

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
            {/* Background image — hero scene */}
            <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-scene.png"
                    alt="A young person stands in a Southeast Asian urban alley beside rising floodwater"
                    className="w-full h-full object-cover object-center scale-105"
                    loading="eager"
                />
                {/* Dark gradient overlay — bottom-heavy */}
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-deep via-pulse-deep/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-deep/30 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div style={{ y: contentY }} className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-32 w-full">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-pulse-ochre animate-pulse-glow" />
                    <span className="text-white/90 text-sm font-medium font-sans">
                        Social Impact Catalyst Fellowship
                    </span>
                </motion.div>

                {/* Headline — emotional hook, no product claim */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mb-6"
                >
                    {`When the flood came, nobody told Mae which street to evacuate.`.split(' ').map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordVariants}
                            className="inline-block mr-[0.3em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Sub-text — ASEAN scope */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="font-sans text-white/70 text-xl md:text-2xl max-w-2xl leading-relaxed"
                >
                    Every year, 150 million people across Southeast Asia face climate events with warnings that never reach their street.
                </motion.p>
            </motion.div>

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
