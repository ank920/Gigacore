"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { ArrowRight, Factory, Zap, TrendingUp, Globe, MapPin, Truck, Leaf, Beaker, CheckCircle } from "lucide-react";

export default function ApplicationsPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/application/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Hydrogen Where It Is <span className="text-brand-primary">Actually Used</span>
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
                            The platform is designed for applications where hydrogen demand already exists at scale and where cost, reliability, and integration determine adoption.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            Rather than targeting speculative or niche use cases, deployment is focused on <span className="text-brand-primary font-bold">industrial sectors</span> with continuous hydrogen consumption and clear economic drivers.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Industrial Hydrogen Feedstock */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/application/Hydrogen is a core input for multiple industrial processes..jpg"
                imageAlt="Industrial Feedstock"
                subtitle="Core Input"
                title="Industrial Hydrogen Feedstock"
                content={
                    <>
                        <p className="mb-6">
                            Hydrogen is a core input for multiple industrial processes. Replacing fossil-derived hydrogen requires a solution that can operate continuously and at competitive cost.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Applicable use cases:</h4>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Chemical and petrochemical feedstock",
                                "Process hydrogen for industrial manufacturing",
                                "Replacement of captive grey hydrogen systems"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4">
                            Lower energy intensity directly improves the feasibility of transitioning to clean hydrogen.
                        </p>
                    </>
                }
            />

            {/* 4. Green Ammonia */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Green%20Ammonia.jpg"
                imageAlt="Green Ammonia"
                subtitle="Fertilizer & Energy"
                title="Green Ammonia"
                content={
                    <>
                        <p className="mb-6">
                            Ammonia is one of the largest existing sinks for hydrogen and a cornerstone of both fertilizer production and emerging energy-export strategies.
                        </p>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                            <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Platform Capabilities:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <Zap className="w-4 h-4 text-brand-primary" /> Cost-competitive hydrogen input
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <Zap className="w-4 h-4 text-brand-primary" /> Stable, continuous operation
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <Zap className="w-4 h-4 text-brand-primary" /> Integration with large-scale facilities
                                </li>
                            </ul>
                        </div>
                    </>
                }
            />

            {/* 5. Steel and Metals Processing */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/application/Steel%20and%20Metals%20Processing.webp"
                imageAlt="Steel Processing"
                subtitle="Heavy Industry"
                title="Steel and Metals Processing"
                content={
                    <>
                        <p className="mb-6">
                            Steelmaking is challenging to decarbonize due to high energy demand. Hydrogen applications include direct reduction, fuel substitution, and metallurgical integration.
                        </p>
                        <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-brand-primary">
                            <p className="text-brand-primary font-medium text-sm">Modular nature supports phased adoption without full plant redesign.</p>
                        </div>
                    </>
                }
            />

            {/* 6. Refining and Petrochemicals */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Refining%20and%20Petrochemicals.webp"
                imageAlt="Refining"
                subtitle="Early Adopters"
                title="Refining and Petrochemicals"
                content={
                    <>
                        <p className="mb-6">
                            Refineries are natural early adopters. Deployment models include on-site generation, partial replacement of grey hydrogen, and renewable integration.
                        </p>
                        <div className="p-4 bg-white rounded-lg border-l-4 border-brand-primary shadow-sm">
                            <p className="text-brand-primary font-medium text-sm">Designed to align with refinery uptime, reliability, and safety requirements.</p>
                        </div>
                    </>
                }
            />

            {/* 7. On-Site and Distributed Hydrogen */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/application/On-Site%20and%20Distributed%20Hydrogen.jpg"
                imageAlt="Distributed Hydrogen"
                subtitle="Logistics"
                title="On-Site and Distributed Hydrogen"
                content={
                    <>
                        <p className="mb-6">
                            For many industrial users, hydrogen transport, storage, and compression add significant cost and complexity.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <MapPin className="w-6 h-6 text-brand-primary shrink-0" />
                                <span className="text-gray-800 font-medium self-center">On-site hydrogen generation</span>
                            </li>
                            <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <Truck className="w-6 h-6 text-brand-primary shrink-0" />
                                <span className="text-gray-800 font-medium self-center">Reduced logistics requirements</span>
                            </li>
                            <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <Zap className="w-6 h-6 text-brand-primary shrink-0" />
                                <span className="text-gray-800 font-medium self-center">Improved energy security</span>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 8. Energy Storage and Conversion */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Energy%20Storage%20and%20Conversion%20Pathways.jpg"
                imageAlt="Energy Storage"
                subtitle="Integration"
                title="Energy Storage and Conversion"
                content={
                    <>
                        <p className="mb-6">
                            Beyond direct consumption, hydrogen plays a growing role in energy storage. Relevant pathways include H2-to-ammonia, combustion integration, and hybrid systems.
                        </p>
                        <p className="text-gray-700 italic font-medium border-l-4 border-brand-primary pl-4">
                            The platform is designed to remain compatible with downstream conversion technologies.
                        </p>
                    </>
                }
            />

            {/* 9. India-First Deployment */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/application/India-First%20Industrial%20Deployment.jpg"
                imageAlt="India Deployment"
                subtitle="Strategy"
                title="India-First Deployment"
                content={
                    <>
                        <p className="mb-6">
                            India presents a unique combination of large hydrogen demand, cost sensitivity, and strong policy momentum.
                        </p>
                        <h4 className="font-bold text-brand-primary mb-3 text-sm uppercase tracking-wider">Priority Sectors:</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Fertilizer/Ammonia</span>
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Public Refining</span>
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Steel</span>
                        </div>
                    </>
                }
            />

            {/* 10. Globally Scalable */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Globally%20Scalable%20Use%20Cases.png"
                imageAlt="Global Scale"
                subtitle="Global Reach"
                title="Globally Scalable Use Cases"
                content={
                    <>
                        <p className="mb-6">
                            The same application logic applies globally where industries face rising pressure to decarbonize without eroding margins.
                        </p>
                        <h4 className="font-bold text-brand-primary mb-3 text-sm uppercase tracking-wider">Relevant Markets:</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Export Hubs</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Decarbonization Zones</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">MFG Clusters</span>
                        </div>
                    </>
                }
            />

            {/* 11. Strategic Deployment (Feature Section) */}
            <section className="py-[var(--spacing-section)] bg-gray-900 text-white text-center">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-[length:var(--font-h1)] font-bold mb-8 text-white">Application-Driven <span className="text-gradient-green-glow">Deployment Strategy</span></h2>
                        <p className="text-[length:var(--font-intro)] text-white/80 mb-12 leading-relaxed font-light">
                            Deployment is prioritized where hydrogen demand already exists, cost sensitivity is high, and scale can be achieved through industrial partnerships.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Beaker className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                                <h4 className="font-bold mb-2 text-lg text-white">Existing Demand</h4>
                                <p className="text-sm text-gray-300">Replacement of grey hydrogen users</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <TrendingUp className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                                <h4 className="font-bold mb-2 text-lg text-white">High Cost Sensitivity</h4>
                                <p className="text-sm text-gray-300">Where OPEX dominates decision making</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Factory className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                                <h4 className="font-bold mb-2 text-lg text-white">Industrial Scale</h4>
                                <p className="text-sm text-gray-300">Partnerships for large consumption</p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 12. CTA Section */}
            <section className="relative py-20 md:py-32 bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Is the market ready?</h2>
                    <p className="text-[length:var(--font-intro)] text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        We don't build for hypothetical futures. We build for immediate industrial demand. See the market landscape.
                    </p>
                    <Link href="/market">
                        <Button variant="primary" size="lg" className="min-w-[240px] shadow-glow">
                            Understand the Market
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>
        </main>
    );
}
