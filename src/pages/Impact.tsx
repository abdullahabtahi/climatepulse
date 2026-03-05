import TheoryOfChange from '@/components/TheoryOfChange'
import { citations } from '@/data/citations'
import { teamMembers } from '@/data/team'
import Footer from '@/components/Footer'

export default function Impact() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="min-h-[60vh] bg-pulse-deep flex items-center justify-center px-6 py-24">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="inline-block px-3 py-1 rounded-full bg-pulse-teal/20 text-pulse-teal text-sm font-medium mb-6 border border-pulse-teal/30">
                        For Funders, Investors & CSR Partners
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
                        The case for closing the last-mile climate gap in Southeast Asia.
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        ClimatePulse converts informal ground-truth observations into structured, verifiable climate data — creating value for governments, funders, and enterprise partners.
                    </p>
                </div>
            </section>

            {/* Theory of Change */}
            <TheoryOfChange />

            {/* Why Fund */}
            <section className="py-24 px-6 bg-pulse-mist">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-pulse-deep mb-4">
                        Why fund ClimatePulse?
                    </h2>
                    <p className="text-pulse-slate text-lg mb-12 max-w-2xl">
                        Three converging forces create a rare window for impact and return.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '⚖️',
                                title: 'Regulatory tailwind',
                                body: 'ASEAN governments are enacting anticipatory action frameworks and digital inclusion legislation, creating funded mandates for local climate data tools.',
                            },
                            {
                                icon: '🏛️',
                                title: 'B2G SaaS model',
                                body: 'Local governments have climate adaptation funds they lack the digital infrastructure to deploy. ClimatePulse is the compliance and workflow tool they need.',
                            },
                            {
                                icon: '📊',
                                title: 'Data monetization',
                                body: 'Ground-truth climate data has direct commercial value: parametric insurance calibration, logistics rerouting, and urban planning — all underserved in ASEAN.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pulse-mist">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="font-display text-xl font-semibold text-pulse-deep mb-2">{item.title}</h3>
                                <p className="text-pulse-slate text-base">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-pulse-deep mb-12">
                        Research foundation
                    </h2>
                    <div className="space-y-4">
                        {citations.map((c) => (
                            <div key={c.id} className="border border-pulse-mist rounded-xl p-6 hover:border-pulse-teal/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-1 h-12 bg-pulse-teal rounded-full flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-xs text-pulse-slate font-medium uppercase tracking-wider mb-1">
                                            {c.organization} · {c.year}
                                        </p>
                                        <h4 className="font-display text-lg font-semibold text-pulse-deep mb-2">{c.title}</h4>
                                        <p className="text-pulse-text text-base leading-relaxed">"{c.excerpt}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 px-6 bg-pulse-mist">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-pulse-deep mb-4">
                        The volunteers behind ClimatePulse
                    </h2>
                    <p className="text-pulse-slate text-lg mb-12">Social Impact Catalyst Fellowship</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                                    style={{ backgroundColor: member.accentColor }}
                                >
                                    {member.initials}
                                </div>
                                <h3 className="font-display font-semibold text-pulse-deep mb-1">{member.name}</h3>
                                <p className="text-sm text-pulse-teal font-medium mb-1">{member.role}</p>
                                <p className="text-xs text-pulse-slate">{member.countryName}</p>
                                <p className="text-xs text-pulse-text/70 mt-3 italic">"{member.contribution}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-24 px-6 bg-pulse-deep text-white text-center">
                <h2 className="font-display text-4xl font-bold mb-4">Let's talk about impact.</h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                    We're actively seeking grant partners, impact investors, and CSR collaborators across Southeast Asia.
                </p>
                <a
                    href="mailto:hello@climatepulse.app"
                    className="inline-flex items-center gap-2 bg-pulse-teal text-white font-semibold px-8 py-4 rounded-full hover:bg-pulse-teal-light transition-colors"
                >
                    Get in touch →
                </a>
            </section>

            <Footer />
        </main>
    )
}
