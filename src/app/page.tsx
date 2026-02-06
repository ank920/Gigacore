import Hero from "@/components/home/Hero";
import Credibility from "@/components/home/Credibility";
import Differentiators from "@/components/home/Differentiators";
import PlatformOverview from "@/components/home/PlatformOverview";
import Economics from "@/components/home/Economics";
import Applications from "@/components/home/Applications";
import IndiaFirst from "@/components/home/IndiaFirst";
import Partnerships from "@/components/home/Partnerships";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Credibility />
            <Differentiators />
            <PlatformOverview />
            <Economics />
            <Applications />
            <IndiaFirst />
            <Partnerships />
            <CallToAction />
        </main>
    );
}
