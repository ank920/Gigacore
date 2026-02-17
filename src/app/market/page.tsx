"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Globe, TrendingUp, BarChart3, Anchor, ShieldCheck, Target, Zap, Building2, Briefcase, CheckCircle, Truck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function MarketPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/market/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        Hydrogen Demand Is <span className="text-gradient-green-glow">Structural</span>, Not Speculative
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-[var(--spacing-section)] bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.p variants={fadeUp} className="text-[length:var(--font-intro)] text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Hydrogen is already embedded in global industrial systems. Demand is driven by essential sectors—fertilizers, refining, chemicals, and metals—where hydrogen is a core input rather than an optional fuel.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-[length:var(--font-intro)] text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            As decarbonization mandates accelerate, these sectors face a clear constraint: <span className="text-brand-primary font-bold">hydrogen must become cost-competitive</span> at scale to enable meaningful transition.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact">
                                <Button variant="primary" size="lg" className="min-w-[240px]">
                                    Discuss Market Fit
                                </Button>
                            </Link>
                            <Link href="/partnership">
                                <Button variant="outline" size="lg" className="min-w-[240px]">
                                    Explore Deployment
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. What Is Changing */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                                <img
                                    src="/market/What%20Is%20Changing%20in%20the%20Market.png"
                                    alt="Market Changing"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" /> Market Dynamics
                                </span>
                            </div>
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">What Is Changing in the <span className="text-gradient-green-glow">Market</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Three forces are reshaping the hydrogen market:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Policy pressure to decarbonize hard-to-abate industries",
                                    "Industrial demand for reliable, continuous hydrogen supply",
                                    "Economic reality that limits adoption above certain cost thresholds"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary font-bold">
                                            {i + 1}
                                        </div>
                                        <span className="text-gray-700 font-medium my-auto">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 bg-white rounded-lg border-l-4 border-brand-primary shadow-sm">
                                <p className="text-brand-primary font-medium italic">
                                    While incentives and subsidies can accelerate early projects, long-term deployment depends on structural cost reduction.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Cost Threshold (Visualized) */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                                <img
                                    src="/market/Green%20Hydrogen%20category%20photo.jpg"
                                    alt="Green Hydrogen Cost"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4" /> Economic Inflection Point
                                </span>
                            </div>
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">The Cost Threshold That <span className="text-gradient-green-glow">Unlocks Scale</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Across downstream applications, a consistent economic signal has emerged:
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-brand-primary/10 mb-8 hover:shadow-[0_4px_20px_rgba(0,213,99,0.1)] transition-all">
                                <div className="text-5xl font-bold text-brand-primary mb-2 flex items-baseline gap-1">~$2<span className="text-2xl text-gray-500 font-medium">/kg</span></div>
                                <p className="text-gray-600 font-medium">The inflection point for large-scale industrial adoption.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-5 bg-red-50/50 rounded-xl border border-red-100">
                                    <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2"><ArrowRight className="rotate-[-45deg]" /> Above this level</h4>
                                    <p className="text-sm text-gray-600">Green hydrogen remains confined to pilots and subsidized projects.</p>
                                </div>
                                <div className="p-5 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
                                    <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2"><ArrowRight className="rotate-45" /> Below this level</h4>
                                    <p className="text-sm text-gray-600">Hydrogen becomes a viable replacement for incumbent fossil-derived supply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. India Market Context */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 justify-center mb-4">
                            <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-8 rounded shadow-sm" />
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary">India: A <span className="text-gradient-green-glow">First-Principles</span> Hydrogen Market</h2>
                        </div>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
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
                            <div key={i} className="p-6 bg-white rounded-2xl border border-brand-primary/10 text-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all duration-300 hover:-translate-y-1">
                                <div className="w-3 h-3 bg-brand-primary rounded-full mx-auto mb-4 shadow-[0_0_10px_rgba(0,213,99,0.6)]" />
                                <span className="font-bold text-brand-secondary">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-primary/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-accent opacity-50" />
                        <h3 className="text-2xl font-bold text-brand-secondary mb-8 text-center">Priority Demand Centers in India</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-brand-primary/20 transition-colors">
                                <h4 className="font-bold text-brand-secondary mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-brand-primary" /> Immediate Opportunities</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Fertilizer and ammonia production</li>
                                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Public-sector and private refineries</li>
                                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Steel and metals processing</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-brand-primary/20 transition-colors">
                                <h4 className="font-bold text-brand-secondary mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-primary" /> Strategic Advantage</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Existing hydrogen handling infrastructure</li>
                                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Continuous offtake requirements</li>
                                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Clear pathways to scale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Export Strategy */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                                <img
                                    src="/market/Export-Linked%20Market%20Opportunities.jpg"
                                    alt="Export Market"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Anchor className="w-4 h-4" /> Global Trade
                                </span>
                            </div>
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">Export-Linked Market <span className="text-gradient-green-glow">Opportunities</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Beyond domestic consumption, hydrogen enables export-oriented value chains—particularly through ammonia. Markets that can produce hydrogen at structurally lower cost gain a durable advantage in these global flows.
                            </p>
                            <h4 className="font-bold text-brand-secondary mb-4 text-lg">Export dynamics are shaped by:</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="p-2 bg-brand-primary/10 rounded-full text-brand-primary">
                                        <Anchor className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Global demand for low-carbon ammonia</span>
                                </li>
                                <li className="flex gap-4 items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="p-2 bg-brand-primary/10 rounded-full text-brand-primary">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Cost competitiveness at the point of production</span>
                                </li>
                                <li className="flex gap-4 items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="p-2 bg-brand-primary/10 rounded-full text-brand-primary">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Access to ports and logistics infrastructure</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Global Relevance */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                                <img
                                    src="/market/Global%20Relevance%20Beyond%20India.jpg"
                                    alt="Global Relevance"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Globe className="w-4 h-4" /> Scalable Impact
                                </span>
                            </div>
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">Global Relevance <span className="text-gradient-green-glow">Beyond India</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                While India is a primary focus, the same economic logic applies globally. As subsidies normalize and projects mature, cost-led hydrogen platforms are expected to outperform subsidy-dependent models.
                            </p>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-primary/10">
                                <h4 className="font-bold text-brand-secondary mb-4 border-b border-gray-100 pb-2">Relevant Markets:</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium border border-gray-100 hover:border-brand-primary/30 transition-colors">Industrial decarbonization zones</span>
                                    <span className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium border border-gray-100 hover:border-brand-primary/30 transition-colors">Energy-intensive manufacturing regions</span>
                                    <span className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium border border-gray-100 hover:border-brand-primary/30 transition-colors">Export hubs linked to shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Market Philosophy & Participants */}
            <section className="py-[var(--spacing-section)] bg-white border-t border-gray-100">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all">
                            <h3 className="text-2xl font-bold text-brand-secondary mb-6 flex items-center gap-3"><Target className="w-6 h-6 text-brand-primary" /> Market Entry Philosophy</h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                Rather than spreading across many small pilots, entry is structured around few, scalable, high-impact deployments.
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-3 font-medium"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Industrial demand over consumer use cases</li>
                                <li className="flex items-center gap-3 font-medium"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Anchor customers with continuous offtake</li>
                                <li className="flex items-center gap-3 font-medium"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Phased deployment aligned with real consumption</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all">
                            <h3 className="text-2xl font-bold text-brand-secondary mb-6 flex items-center gap-3"><Briefcase className="w-6 h-6 text-brand-primary" /> Who the Market Is For</h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                The platform is designed for stakeholders who operate at infrastructure scale and evaluate hydrogen as a core input.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-sm font-bold border border-brand-primary/10">Industrial Consumers</span>
                                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-sm font-bold border border-brand-primary/10">Public-Sector/Utilities</span>
                                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-sm font-bold border border-brand-primary/10">EPCs</span>
                                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-sm font-bold border border-brand-primary/10">Capital Providers</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. Policy to Reality */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                                <img
                                    src="/market/From%20Policy%20Alignment%20to%20Commercial%20Realit.jpg"
                                    alt="Policy to Reality"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">From Policy Alignment to <span className="text-gradient-green-glow">Commercial Reality</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Policy frameworks can accelerate adoption, but commercial viability determines longevity. The market opportunity is defined by the ability to deliver:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/50 shadow-sm transition-all hover:-translate-y-1">
                                    <h4 className="font-bold text-brand-secondary">Predictable Cost</h4>
                                </div>
                                <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/50 shadow-sm transition-all hover:-translate-y-1">
                                    <h4 className="font-bold text-brand-secondary">Scalable Supply</h4>
                                </div>
                                <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/50 shadow-sm transition-all hover:-translate-y-1">
                                    <h4 className="font-bold text-brand-secondary">Industrial Reliability</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 9. CTA Section */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-20 px-6 md:px-12 group">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/market/hero%20section.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6 drop-shadow-md">Engage on the Market</h2>
                            <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                Engagement is focused on stakeholders evaluating hydrogen as a commercial input, not a trial technology.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact" className="w-full md:w-auto">
                                    <button className="px-10 py-5 bg-white text-brand-primary font-bold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:bg-gray-50 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px]">
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
