import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import StatusStrip from './StatusStrip'
import { AceternityGlobe } from './AceternityGlobe'
import { Button } from './ui/button'

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start']
    })

    const yGlobe = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
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
        <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-pulse-deep">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pulse-deep via-pulse-deep-dark to-pulse-deep z-0" />

            {/* Globe - positioned to the right on large screens */}
            <motion.div style={{ y: yGlobe }} className="absolute -right-[40%] md:-right-[10%] top-[10%] md:top-[15%] w-[180%] md:w-[85%] opacity-70 z-0 mix-blend-screen pointer-events-auto">
                <AceternityGlobe />
            </motion.div>

            {/* Content */}
            <motion.div style={{ y: contentY }} className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-32 md:pt-40 w-full">
                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8"
                    >
                        <span className="text-pulse-teal">🌏</span>
                        <span className="text-white/90 text-xs md:text-sm font-medium font-sans uppercase tracking-widest">
                            ASEAN · Pilot Q3 2026
                        </span>
                    </motion.div>

                    {/* Headline — emotional hook, no product claim */}
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8"
                    >
                        {`When the flood came, nobody told Mae which street to evacuate.`.split(' ').map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordVariants}
                                className="inline-block mr-[0.25em]"
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
                        className="font-sans text-white/70 text-lg md:text-2xl max-w-2xl leading-relaxed mb-10"
                    >
                        Every year, 150 million people across Southeast Asia face climate events with warnings that never reach their street. We are building the ground-truth intelligence layer to fix the last-mile gap.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" className="rounded-full text-base font-semibold px-8 h-14 bg-pulse-teal text-white hover:bg-white hover:text-pulse-deep transition-colors shadow-lg shadow-pulse-teal/20">
                            Request Early Access
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-base font-semibold px-8 h-14 text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-md">
                            Explore Solutions
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Live pilot status strip */}
            <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-pulse-deep/50 backdrop-blur-md">
                <StatusStrip />
            </div>
        </section>
    )
}
