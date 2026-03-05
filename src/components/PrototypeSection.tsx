import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PhoneMockup from './PhoneMockup'

export default function PrototypeSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'center center']
    })

    const phoneY = useTransform(scrollYProgress, [0, 1], [100, 0])

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,168,126,0.06)_0%,transparent_70%)]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-pulse-teal/10 border border-pulse-teal/20 rounded-full px-4 py-1.5 mb-6">
                            <span className="text-pulse-teal text-sm">⚡</span>
                            <span className="text-pulse-teal text-sm font-medium">Interactive demo</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl font-bold text-pulse-deep mb-6 leading-tight">
                            Try the prototype.{' '}
                            <span className="text-pulse-teal">Right now.</span>
                            <br />
                            No download.
                        </h2>

                        <p className="font-sans text-lg text-pulse-text/70 leading-relaxed mb-8 max-w-lg">
                            This is what reporting looks like in ClimatePulse. Tap through the screens —
                            select a flood severity, submit your report, and watch the feedback loop close in real time.
                        </p>

                        {/* How it works mini-steps */}
                        <div className="space-y-3">
                            {[
                                { step: '1', text: 'Open the app and see your local risk level' },
                                { step: '2', text: 'Tap the + button and select flood severity' },
                                { step: '3', text: 'Hit submit — watch the timer count your speed' },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-pulse-deep text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        {item.step}
                                    </div>
                                    <p className="text-sm text-pulse-text/80">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* 18-second claim */}
                        <div className="mt-8 p-4 bg-pulse-mist rounded-xl border border-pulse-teal/10">
                            <p className="text-sm text-pulse-text">
                                <span className="font-display font-bold text-pulse-teal text-lg">Under 18 seconds.</span>
                                <br />
                                That's all it takes to turn a street-level observation into a verified, actionable climate report.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: phone mockup */}
                    <motion.div
                        style={{ y: phoneY }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <PhoneMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
