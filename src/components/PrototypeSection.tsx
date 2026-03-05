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
        <section ref={sectionRef} className="py-24 md:py-40 px-6 bg-pulse-mist relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pulse-charcoal/5 overflow-hidden border border-pulse-charcoal/5 grid lg:grid-cols-5 items-stretch relative">

                    {/* Background decoration inside card */}
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-pulse-mist/50 to-transparent pointer-events-none" />

                    {/* Left: copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:col-span-3 p-10 md:p-16 lg:p-20 z-10"
                    >
                        <div className="inline-flex items-center gap-2 bg-pulse-teal/10 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-pulse-teal animate-pulse-glow" />
                            <span className="text-pulse-teal text-sm font-medium tracking-wide uppercase">Interactive demo</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pulse-deep mb-6 leading-[1.1] tracking-tight">
                            Try the prototype.<br />
                            <span className="text-pulse-teal">Right now.</span>
                        </h2>

                        <p className="font-sans text-lg text-pulse-slate leading-relaxed mb-10 max-w-lg">
                            This is what reporting looks like in ClimatePulse. Tap through the screens —
                            select a flood severity, submit your report, and watch the feedback loop close in real time.
                        </p>

                        {/* How it works mini-steps */}
                        <div className="space-y-6">
                            {[
                                { step: '1', text: 'Open the app and see your local risk level immediately' },
                                { step: '2', text: 'Tap the + button and select flood severity visually' },
                                { step: '3', text: 'Hit submit — watch the timer count your speed' },
                            ].map((item) => (
                                <div key={item.step} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full border border-pulse-teal/30 text-pulse-teal flex items-center justify-center font-bold font-mono text-sm flex-shrink-0 shadow-sm shadow-pulse-teal/10">
                                        {item.step}
                                    </div>
                                    <p className="text-base text-pulse-text font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* 18-second claim */}
                        <div className="mt-12 p-6 bg-pulse-charcoal rounded-2xl border border-pulse-deep-dark shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-pulse-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <p className="text-sm text-white/80 relative z-10 leading-relaxed">
                                <span className="font-mono font-bold text-pulse-teal text-xl tracking-tight block mb-1">{"< 18 SECONDS"}</span>
                                That's all it takes to turn a street-level observation into a verified, actionable climate report that alerts the region.
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
                        className="lg:col-span-2 flex justify-center items-center p-10 pb-0 lg:p-0 lg:pr-10 h-full relative z-10"
                    >
                        <PhoneMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
