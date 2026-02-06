"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Factory, Zap, TrendingUp, Globe, MapPin, Truck, Leaf, Beaker } from "lucide-react";
import Link from "next/link";

export default function ApplicationsPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/application/hero%20section.jpg')] bg-cover bg-center" />
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
                            Hydrogen Where It Is <span className="text-brand-blue">Actually Used</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            The platform is designed for applications where hydrogen demand already exists at scale and where cost, reliability, and integration determine adoption.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            Rather than targeting speculative or niche use cases, deployment is focused on <span className="text-brand-green font-bold">industrial sectors</span> with continuous hydrogen consumption and clear economic drivers.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-3 bg-brand-blue text-white hover:bg-sky-600 rounded-full font-bold transition-all duration-300 shadow-xl text-base min-w-[200px]">
                                    Discuss Application Fit
                                </button>
                            </Link>
                            <Link href="/partnership">
                                <button className="px-8 py-3 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full font-bold transition-all duration-300 text-base min-w-[200px] shadow-sm">
                                    Explore Pilot Deployment
                                </button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Industrial Hydrogen Feedstock */}
            <section id="production" className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/application/Industrial%20Hydrogen%20Feedstock.png"
                                    alt="Industrial Feedstock"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <Factory className="w-6 h-6 text-brand-blue" />
                                <span className="text-brand-blue font-bold uppercase tracking-wider text-sm">Core Input</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industrial Hydrogen Feedstock</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Hydrogen is a core input for multiple industrial processes. Replacing fossil-derived hydrogen requires a solution that can operate continuously and at competitive cost.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4">Applicable use cases:</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-gray-700">
                                    <div className="w-2 h-2 mt-2 bg-brand-blue rounded-full shrink-0" />
                                    <span>Chemical and petrochemical feedstock</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <div className="w-2 h-2 mt-2 bg-brand-blue rounded-full shrink-0" />
                                    <span>Process hydrogen for industrial manufacturing</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <div className="w-2 h-2 mt-2 bg-brand-blue rounded-full shrink-0" />
                                    <span>Replacement of captive grey hydrogen systems</span>
                                </li>
                            </ul>
                            <p className="text-brand-green font-medium italic">
                                Lower energy intensity directly improves the feasibility of transitioning to clean hydrogen without disrupting operations.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Green Ammonia */}
            <section id="ammonia" className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="/application/Green%20Ammonia.jpg"
                                    alt="Green Ammonia"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <Leaf className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Fertilizer & Energy Export</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Green Ammonia</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Ammonia is one of the largest existing sinks for hydrogen and a cornerstone of both fertilizer production and emerging energy-export strategies.
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                                <h4 className="font-bold text-gray-900 mb-4">Platform Capabilities:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700"><Zap className="w-4 h-4 text-brand-green" /> Cost-competitive hydrogen input</li>
                                    <li className="flex items-center gap-2 text-gray-700"><Zap className="w-4 h-4 text-brand-green" /> Stable, continuous operation required for synthesis loops</li>
                                    <li className="flex items-center gap-2 text-gray-700"><Zap className="w-4 h-4 text-brand-green" /> Integration with large-scale facilities</li>
                                </ul>
                            </div>
                            <p className="text-gray-500 text-sm">
                                particularly relevant for export-oriented projects and public-sector infrastructure.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Steel and Refining */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Steel */}
                        <div className="flex flex-col">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 mb-8 h-[300px]">
                                <img src="/application/Steel%20and%20Metals%20Processing.webp" alt="Steel" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Steel and Metals Processing</h3>
                            <p className="text-gray-600 mb-6">
                                Steelmaking is challenging to decarbonize due to high energy demand. Hydrogen applications include direct reduction, fuel substitution, and metallurgical integration.
                            </p>
                            <div className="mt-auto p-4 bg-brand-blue/5 rounded border border-brand-blue/10">
                                <p className="text-brand-blue font-medium text-sm">Modular nature supports phased adoption without full plant redesign.</p>
                            </div>
                        </div>

                        {/* Refining */}
                        <div className="flex flex-col">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 mb-8 h-[300px]">
                                <img src="/application/Refining%20and%20Petrochemicals.webp" alt="Refining" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Refining and Petrochemicals</h3>
                            <p className="text-gray-600 mb-6">
                                Refineries are natural early adopters. Deployment models include on-site generation, partial replacement of grey hydrogen, and renewable integration.
                            </p>
                            <div className="mt-auto p-4 bg-brand-green/5 rounded border border-brand-green/10">
                                <p className="text-brand-green font-medium text-sm">Designed to align with refinery uptime, reliability, and safety requirements.</p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Deployment Models */}
            <section id="distributed" className="py-24 bg-gray-50 border-t border-gray-200">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">On-Site and Distributed Hydrogen</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                For many industrial users, hydrogen transport, storage, and compression add significant cost and complexity.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 bg-white rounded shadow-sm">
                                    <MapPin className="w-6 h-6 text-brand-blue shrink-0" />
                                    <span className="text-gray-800">On-site hydrogen generation</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-white rounded shadow-sm">
                                    <Truck className="w-6 h-6 text-brand-blue shrink-0" />
                                    <span className="text-gray-800">Reduced logistics and handling requirements</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-white rounded shadow-sm">
                                    <Zap className="w-6 h-6 text-brand-blue shrink-0" />
                                    <span className="text-gray-800">Improved energy security for industrial clusters</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img src="/application/On-Site%20and%20Distributed%20Hydrogen.jpg" alt="On Site Hydrogen" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2">
                            <h2 id="integration" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Energy Storage and Conversion</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Beyond direct consumption, hydrogen plays a growing role in energy storage. Relevant pathways include H2-to-ammonia, combustion integration, and hybrid systems.
                            </p>
                            <div className="p-6 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r">
                                <p className="text-gray-700 italic">The platform is designed to remain compatible with downstream conversion technologies.</p>
                            </div>
                        </div>
                        <div className="md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img src="/application/Energy%20Storage%20and%20Conversion%20Pathways.jpg" alt="Energy Storage" className="w-full h-auto" />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Geographic Strategy */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Deployment Strategy</h2>
                        <p className="text-xl text-gray-500">From Local Impact to Global Scale</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* India First */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <div className="h-[250px] rounded-lg overflow-hidden mb-8 shadow-md">
                                <img src="/application/India-First%20Industrial%20Deployment.jpg" alt="India Deployment" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-8 rounded shadow-sm" />
                                India-First Deployment
                            </h3>
                            <p className="text-gray-600 mb-6">
                                India presents a unique combination of large hydrogen demand, cost sensitivity, and strong policy momentum.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Priority Sectors:</h4>
                            <ul className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-sm">Fertilizer/Ammonia</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-sm">Public Refining</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-sm">Steel</span>
                            </ul>
                        </div>

                        {/* Global Scale */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <div className="h-[250px] rounded-lg overflow-hidden mb-8 shadow-md">
                                <img src="/application/Globally%20Scalable%20Use%20Cases.png" alt="Global Scale" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Globe className="w-8 h-8 text-brand-blue" />
                                Globally Scalable
                            </h3>
                            <p className="text-gray-600 mb-6">
                                The same application logic applies globally where industries face rising pressure to decarbonize without eroding margins.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Relevant Markets:</h4>
                            <ul className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-sm">Export Hubs</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-sm">Decarbonization Zones</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-sm">MFG Clusters</span>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Strategic Deployment */}
            <section className="py-24 bg-gray-900 text-white text-center">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Application-Driven Deployment Strategy</h2>
                        <p className="text-xl text-white/80 mb-12">
                            Deployment is prioritized where hydrogen demand already exists, cost sensitivity is high, and scale can be achieved through industrial partnerships.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                                <Beaker className="w-8 h-8 text-brand-blue mx-auto mb-4" />
                                <h4 className="font-bold mb-2">Existing Demand</h4>
                                <p className="text-sm text-gray-300">Replacement of grey hydrogen users</p>
                            </div>
                            <div className="p-6 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                                <TrendingUp className="w-8 h-8 text-brand-green mx-auto mb-4" />
                                <h4 className="font-bold mb-2">High Cost Sensitivity</h4>
                                <p className="text-sm text-gray-300">Where OPEX dominates decision making</p>
                            </div>
                            <div className="p-6 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
                                <Factory className="w-8 h-8 text-brand-blue mx-auto mb-4" />
                                <h4 className="font-bold mb-2">Industrial Scale</h4>
                                <p className="text-sm text-gray-300">Partnerships for large consumption</p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. CTA Section */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="relative rounded-2xl overflow-hidden bg-brand-blue shadow-2xl text-center py-24 px-8">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/application/hero%20section.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Engage on Applications</h2>
                            <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                The platform is intended for partners seeking deployable hydrogen solutions, not conceptual pilots.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact">
                                    <button className="px-10 py-5 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-xl min-w-[260px]">
                                        Discuss Application Fit
                                    </button>
                                </Link>
                                <Link href="/partnership">
                                    <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-xl min-w-[260px] flex items-center justify-center gap-2">
                                        Explore Pilot Deployment <ArrowRight className="w-6 h-6" />
                                    </button>
                                </Link>
                            </div>

                            <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90 uppercase tracking-wider">
                                <span>Application-specific feasibility</span>
                                <span className="opacity-50">•</span>
                                <span>Pilot projects</span>
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
