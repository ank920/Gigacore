"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { ArrowRight, Globe, TrendingUp, BarChart3, Anchor, ShieldCheck, Target, Zap, Building2, Briefcase, CheckCircle, Truck } from "lucide-react";

export default function MarketPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/market/view-green-forest-trees-with-co2.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Hydrogen Demand Is <span className="text-brand-primary">Structural</span>, Not Speculative
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
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            Hydrogen is already embedded in global industrial systems, driven by essential sectors like fertilizers, refining, and chemicals.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            As decarbonization mandates accelerate, these sectors face a clear constraint: <span className="text-brand-primary font-bold">hydrogen must become cost-competitive</span> at scale to enable meaningful transition.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. What Is Changing */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/market/Hydrogen-supply-chain.png"
                imageAlt="Market Dynamics"
                subtitle="Market Shift"
                title="What Is Changing in the Market"
                content={
                    <>
                        <p className="mb-6">
                            Three forces are reshaping the hydrogen market:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Policy pressure to decarbonize hard-to-abate industries",
                                "Industrial demand for reliable, continuous hydrogen supply",
                                "Economic reality that limits adoption above certain cost thresholds"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-brand-primary">
                            <p className="text-brand-primary font-medium italic">
                                While incentives help, long-term deployment depends on structural cost reduction.
                            </p>
                        </div>
                    </>
                }
            />

            {/* 4. Cost Threshold */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/market/Green%20Hydrogen%20category%20photo.jpg"
                imageAlt="Cost Threshold"
                subtitle="Economic Viability"
                title="The Cost Threshold That Unlocks Scale"
                content={
                    <>
                        <p className="mb-8">
                            Across downstream applications, a consistent economic signal has emerged:
                        </p>
                        <div className="mb-8">
                            <div className="text-5xl font-bold text-brand-primary mb-2 flex items-baseline gap-1">~$2<span className="text-2xl text-gray-500 font-medium">/kg</span></div>
                            <p className="text-gray-600 font-medium">The inflection point for large-scale industrial adoption.</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <ArrowRight className="w-5 h-5 text-red-500 rotate-[-45deg] mt-1" />
                                <div>
                                    <strong className="block text-gray-900">Above this level</strong>
                                    <span className="text-gray-600 text-sm">Green hydrogen remains confined to pilots and subsidized projects.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="w-5 h-5 text-brand-primary rotate-45 mt-1" />
                                <div>
                                    <strong className="block text-gray-900">Below this level</strong>
                                    <span className="text-gray-600 text-sm">Hydrogen becomes a viable replacement for incumbent fossil-derived supply.</span>
                                </div>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 5. India Market Context (Feature Section) */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 justify-center mb-4">
                            <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-8 rounded shadow-sm" />
                            <h2 className="text-[length:var(--font-h1)] font-bold text-brand-secondary">India: A <span className="text-gradient-green-glow">First-Principles</span> Hydrogen Market</h2>
                        </div>
                        <p className="text-[length:var(--font-intro)] text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            Unlike markets driven primarily by subsidies, India’s hydrogen transition must succeed on economics and scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            "Large, concentrated industrial hydrogen demand",
                            "High sensitivity to input costs",
                            "Rapidly expanding energy infrastructure",
                            "Strong policy momentum "
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl border border-brand-primary/10 text-center shadow-sm">
                                <div className="w-3 h-3 bg-brand-primary rounded-full mx-auto mb-4" />
                                <span className="font-bold text-brand-secondary">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-primary/10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-accent opacity-50" />
                        <h3 className="text-[length:var(--font-h2)] font-bold text-brand-secondary mb-8 text-center">Priority Demand Centers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-secondary mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-brand-primary" /> Immediate Opportunities</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-brand-primary" /> Fertilizer and ammonia production</li>
                                    <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-brand-primary" /> Public-sector and private refineries</li>
                                    <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-brand-primary" /> Steel and metals processing</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-secondary mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-primary" /> Strategic Advantage</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-brand-primary" /> Existing hydrogen handling infrastructure</li>
                                    <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-brand-primary" /> Continuous offtake requirements</li>
                                    <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-brand-primary" /> Clear pathways to scale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Export Strategy */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/market/Export-Linked%20Market%20Opportunities.jpg"
                imageAlt="Export Market"
                subtitle="Global Trade"
                title="Export-Linked Market Opportunities"
                content={
                    <>
                        <p className="mb-6">
                            Beyond domestic consumption, hydrogen enables export-oriented value chains—particularly through ammonia. Markets that can produce hydrogen at structurally lower cost gain a durable advantage.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Export dynamics are shaped by:</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-center">
                                <Anchor className="w-5 h-5 text-brand-primary" />
                                <span className="text-gray-700">Global demand for low-carbon ammonia</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <BarChart3 className="w-5 h-5 text-brand-primary" />
                                <span className="text-gray-700">Cost competitiveness at production</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Truck className="w-5 h-5 text-brand-primary" />
                                <span className="text-gray-700">Access to logistics infrastructure</span>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 7. Global Relevance */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/market/Global%20Relevance%20Beyond%20India.jpeg"
                imageAlt="Global Relevance"
                subtitle="Scalable Impact"
                title="Global Relevance Beyond India"
                content={
                    <>
                        <p className="mb-8">
                            While India is a primary focus, the same economic logic applies globally. As subsidies normalize, cost-led hydrogen platforms are expected to outperform subsidy-dependent models.
                        </p>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-brand-secondary mb-4 border-b border-gray-100 pb-2">Relevant Markets:</h4>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-medium border border-gray-100">Decarbonization zones</span>
                                <span className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-medium border border-gray-100">Manufacturing regions</span>
                                <span className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-medium border border-gray-100">Export hubs</span>
                            </div>
                        </div>
                    </>
                }
            />

            {/* 8. Policy to Reality */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/market/From%20Policy%20Alignment%20to%20Commercial%20Realit.jpg"
                imageAlt="Commercial Reality"
                subtitle="Market Maturity"
                title="From Policy to Reality"
                content={
                    <>
                        <p className="mb-6">
                            Policy frameworks can accelerate adoption, but commercial viability determines longevity. The market opportunity is defined by the ability to deliver:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-center">
                                <CheckCircle className="w-5 h-5 text-brand-primary" />
                                <span className="text-gray-700 font-medium">Predictable Cost</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <CheckCircle className="w-5 h-5 text-brand-primary" />
                                <span className="text-gray-700 font-medium">Scalable Supply</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <CheckCircle className="w-5 h-5 text-brand-primary" />
                                <span className="text-gray-700 font-medium">Industrial Reliability</span>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 9. CTA Section */}
            <section className="relative py-20 md:py-32 bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Ready to scale?</h2>
                    <p className="text-[length:var(--font-intro)] text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        The market demand is real. The technology is ready. The next step is structured collaboration.
                    </p>
                    <Link href="/partnership">
                        <Button variant="primary" size="lg" className="min-w-[240px] shadow-glow">
                            Partner Strategies
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>
        </main>
    );
}
