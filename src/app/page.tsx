import Hero from "@/components/home/Hero";
import SimpleMetrics from "@/components/home/SimpleMetrics";
import Credibility from "@/components/home/Credibility";
import Differentiators from "@/components/home/Differentiators";
import PlatformOverview from "@/components/home/PlatformOverview";
import Economics from "@/components/home/Economics";
import Applications from "@/components/home/Applications";
import Partnerships from "@/components/home/Partnerships";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <SimpleMetrics />
            <Credibility />
            <PlatformOverview />
            <Differentiators />
            <Applications />
            <Economics />
            <Partnerships />
            <HomeBlogSection />
            <CallToAction />
        </main>
    );
}
