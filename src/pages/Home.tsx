import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import PrototypeSection from '@/components/PrototypeSection'
import CredibilitySection from '@/components/CredibilitySection'
import WaitlistSection from '@/components/WaitlistSection'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <ProblemSection />
            <PrototypeSection />
            <CredibilitySection />
            <WaitlistSection />
            <TeamSection />
            <Footer />
        </main>
    )
}
