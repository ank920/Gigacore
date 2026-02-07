"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Globe, TrendingUp, BarChart3, Anchor, ShieldCheck, Target, Zap, Building2, Briefcase } from "lucide-react";

export default function MarketPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/market/hero%20section.jpg')] bg-cover bg-center" />
                </div>
            </section>

            {/* 2. Intro Section (Text + Buttons Moved Here) */}
            <section className="py-12 bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900"
                        >
                            Hydrogen Demand Is <span className="text-brand-blue">Structural</span>, Not Speculative
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Hydrogen is already embedded in global industrial systems. Demand is driven by essential sectors—fertilizers, refining, chemicals, and metals—where hydrogen is a core input rather than an optional fuel.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            As decarbonization mandates accelerate, these sectors face a clear constraint: <span className="text-brand-green font-bold">hydrogen must become cost-competitive</span> at scale to enable meaningful transition.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className="px-8 py-3 bg-brand-blue text-white hover:bg-sky-600 rounded-full font-bold transition-all duration-300 shadow-xl text-base w-full md:w-auto min-w-[200px]">
                                    Discuss Market Fit
                                </button>
                            </Link>
                            <Link href="/partnership" className="w-full md:w-auto">
                                <button className="px-8 py-3 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full font-bold transition-all duration-300 text-base w-full md:w-auto min-w-[200px] shadow-sm">
                                    Explore Deployment Opportunities
                                </button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. What Is Changing */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/market/What%20Is%20Changing%20in%20the%20Market.png"
                                    alt="Market Changing"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp className="w-6 h-6 text-brand-blue" />
                                <span className="text-brand-blue font-bold uppercase tracking-wider text-sm">Market Dynamics</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Is Changing in the Market</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Three forces are reshaping the hydrogen market:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue font-bold">1</div>
                                    <span className="text-gray-700 font-medium my-auto">Policy pressure to decarbonize hard-to-abate industries</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue font-bold">2</div>
                                    <span className="text-gray-700 font-medium my-auto">Industrial demand for reliable, continuous hydrogen supply</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue font-bold">3</div>
                                    <span className="text-gray-700 font-medium my-auto">Economic reality that limits adoption above certain cost thresholds</span>
                                </li>
                            </ul>
                            <p className="text-gray-500 italic">
                                While incentives and subsidies can accelerate early projects, long-term deployment depends on structural cost reduction.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Cost Threshold (Visualized) */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="/market/Green%20Hydrogen%20category%20photo.jpg"
                                    alt="Green Hydrogen Cost"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <BarChart3 className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Economic Inflection Point</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Cost Threshold That Unlocks Scale</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Across downstream applications, a consistent economic signal has emerged:
                            </p>

                            <div className="bg-white p-8 rounded-xl shadow-md border-l-8 border-brand-green mb-8">
                                <div className="text-5xl font-bold text-gray-900 mb-2">~$2<span className="text-xl text-gray-500">/kg</span></div>
                                <p className="text-gray-600 font-medium">The inflection point for large-scale industrial adoption.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2"><ArrowRight className="rotate-[-45deg]" /> Above this level</h4>
                                    <p className="text-sm text-gray-600">Green hydrogen remains confined to pilots and subsidized projects.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-green mb-2 flex items-center gap-2"><ArrowRight className="rotate-45" /> Below this level</h4>
                                    <p className="text-sm text-gray-600">Hydrogen becomes a viable replacement for incumbent fossil-derived supply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. India Market Context */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-4">
                            <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-10 rounded shadow-sm" />
                            India: A First-Principles Hydrogen Market
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Unlike markets driven primarily by subsidies, India’s hydrogen transition must succeed on economics and scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            "Large, concentrated industrial hydrogen demand",
                            "High sensitivity to input costs",
                            "Rapidly expanding energy infrastructure",
                            "Strong policy momentum for domestic production"
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-brand-blue/5 rounded-xl border border-brand-blue/20 text-center shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="w-3 h-3 bg-brand-blue rounded-full mx-auto mb-4 shadow-sm" />
                                <span className="font-bold text-gray-900">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-blue/5 rounded-2xl p-12 border border-brand-blue/10">
                        <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">Priority Demand Centers in India</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Immediate Opportunities</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Fertilizer and ammonia production</li>
                                    <li>• Public-sector and private refineries</li>
                                    <li>• Steel and metals processing</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Strategic Advantage</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Existing hydrogen handling infrastructure</li>
                                    <li>• Continuous offtake requirements</li>
                                    <li>• Clear pathways to scale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Export Strategy */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                                <img
                                    src="/market/Export-Linked%20Market%20Opportunities.jpg"
                                    alt="Export Market"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Export-Linked Market Opportunities</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Beyond domestic consumption, hydrogen enables export-oriented value chains—particularly through ammonia. Markets that can produce hydrogen at structurally lower cost gain a durable advantage in these global flows.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4">Export dynamics are shaped by:</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-center">
                                    <Anchor className="w-5 h-5 text-brand-blue" />
                                    <span className="text-gray-700">Global demand for low-carbon ammonia</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <Anchor className="w-5 h-5 text-brand-blue" />
                                    <span className="text-gray-700">Cost competitiveness at the point of production</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <Anchor className="w-5 h-5 text-brand-blue" />
                                    <span className="text-gray-700">Access to ports and logistics infrastructure</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Global Relevance */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/market/Global%20Relevance%20Beyond%20India.jpg"
                                    alt="Global Relevance"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Scalable Impact</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Global Relevance Beyond India</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                While India is a primary focus, the same economic logic applies globally. As subsidies normalize and projects mature, cost-led hydrogen platforms are expected to outperform subsidy-dependent models.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4">Relevant Markets:</h4>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 border border-gray-200">Industrial decarbonization zones</span>
                                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 border border-gray-200">Energy-intensive manufacturing regions</span>
                                <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 border border-gray-200">Export hubs linked to shipping</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Market Philosophy & Participants */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-2"><Target className="w-6 h-6" /> Market Entry Philosophy</h3>
                            <p className="text-gray-600 mb-6">
                                Rather than spreading across many small pilots, entry is structured around few, scalable, high-impact deployments.
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Industrial demand over consumer use cases</li>
                                <li>• Anchor customers with continuous offtake</li>
                                <li>• Phased deployment aligned with real consumption</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-brand-green mb-6 flex items-center gap-2"><Briefcase className="w-6 h-6" /> Who the Market Is For</h3>
                            <p className="text-gray-600 mb-6">
                                The platform is designed for stakeholders who operate at infrastructure scale and evaluate hydrogen as a core input.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded text-sm font-semibold">Industrial Consumers</span>
                                <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded text-sm font-semibold">Public-Sector/Utilities</span>
                                <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded text-sm font-semibold">EPCs</span>
                                <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded text-sm font-semibold">Capital Providers</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. Policy to Reality */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/market/From%20Policy%20Alignment%20to%20Commercial%20Realit.jpg"
                                    alt="Policy to Reality"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">From Policy Alignment to Commercial Reality</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Policy frameworks can accelerate adoption, but commercial viability determines longevity. The market opportunity is defined by the ability to deliver:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                <div className="p-4 bg-gray-50 rounded border border-gray-200 hover:border-brand-blue transition-colors">
                                    <h4 className="font-bold text-gray-900">Predictable Cost</h4>
                                </div>
                                <div className="p-4 bg-gray-50 rounded border border-gray-200 hover:border-brand-blue transition-colors">
                                    <h4 className="font-bold text-gray-900">Scalable Supply</h4>
                                </div>
                                <div className="p-4 bg-gray-50 rounded border border-gray-200 hover:border-brand-blue transition-colors">
                                    <h4 className="font-bold text-gray-900">Industrial Reliability</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 9. CTA Section */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="relative rounded-2xl overflow-hidden bg-brand-blue shadow-2xl text-center py-24 px-8">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/market/hero%20section.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Engage on the Market</h2>
                            <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                Engagement is focused on stakeholders evaluating hydrogen as a commercial input, not a trial technology.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact" className="w-full md:w-auto">
                                    <button className="px-10 py-5 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px]">
                                        Discuss Market Fit
                                    </button>
                                </Link>
                                <Link href="/partnership" className="w-full md:w-auto">
                                    <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px] flex items-center justify-center gap-2">
                                        Explore Deployment <ArrowRight className="w-6 h-6" />
                                    </button>
                                </Link>
                            </div>

                            <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90 uppercase tracking-wider">
                                <span>Market-specific feasibility</span>
                                <span className="opacity-50">•</span>
                                <span>Anchor offtake</span>
                                <span className="opacity-50">•</span>
                                <span>Public-sector partnerships</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
