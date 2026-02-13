"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Factory, Zap, TrendingUp, Globe, MapPin, Truck, Leaf, Beaker, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ApplicationsPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/application/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        Hydrogen Where It Is <span className="text-gradient-green-glow">Actually Used</span>
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-20 bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            The platform is designed for applications where hydrogen demand already exists at scale and where cost, reliability, and integration determine adoption.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            Rather than targeting speculative or niche use cases, deployment is focused on <span className="text-brand-primary font-bold">industrial sectors</span> with continuous hydrogen consumption and clear economic drivers.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact">
                                <Button variant="primary" size="lg" className="min-w-[240px]">
                                    Discuss Application Fit
                                </Button>
                            </Link>
                            <Link href="/partnership">
                                <Button variant="outline" size="lg" className="min-w-[240px]">
                                    Explore Pilot Deployment
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Industrial Hydrogen Feedstock */}
            <section id="production" className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                                <img
                                    src="/application/Industrial%20Hydrogen%20Feedstock.png"
                                    alt="Industrial Feedstock"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Factory className="w-4 h-4" /> Core Input
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">Industrial Hydrogen <span className="text-gradient-green-glow">Feedstock</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Hydrogen is a core input for multiple industrial processes. Replacing fossil-derived hydrogen requires a solution that can operate continuously and at competitive cost.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Applicable use cases:</h4>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Chemical and petrochemical feedstock",
                                    "Process hydrogen for industrial manufacturing",
                                    "Replacement of captive grey hydrogen systems"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-colors">
                                        <div className="mt-1 bg-brand-primary/10 p-1 rounded-full h-fit">
                                            <CheckCircle className="w-4 h-4 text-brand-primary" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 bg-white rounded-lg border-l-4 border-brand-primary shadow-sm">
                                <p className="text-brand-primary font-medium italic">
                                    Lower energy intensity directly improves the feasibility of transitioning to clean hydrogen without disrupting operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Green Ammonia */}
            <section id="ammonia" className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/application/Green%20Ammonia.jpg"
                                    alt="Green Ammonia"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Leaf className="w-4 h-4" /> Fertilizer & Energy Export
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Green <span className="text-gradient-green-glow">Ammonia</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Ammonia is one of the largest existing sinks for hydrogen and a cornerstone of both fertilizer production and emerging energy-export strategies.
                            </p>
                            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-brand-primary/10 mb-6 hover:shadow-[0_4px_20px_rgba(0,213,99,0.08)] transition-all">
                                <h4 className="font-bold text-gray-900 mb-6 text-lg border-b border-gray-100 pb-2">Platform Capabilities:</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="p-1.5 bg-brand-primary/10 rounded-full text-brand-primary">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        Cost-competitive hydrogen input
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="p-1.5 bg-brand-primary/10 rounded-full text-brand-primary">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        Stable, continuous operation required for synthesis loops
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="p-1.5 bg-brand-primary/10 rounded-full text-brand-primary">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        Integration with large-scale facilities
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-500 text-sm italic border-t border-gray-100 pt-4">
                                particularly relevant for export-oriented projects and public-sector infrastructure.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Steel and Refining */}
            <section className="py-24 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Steel */}
                        <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-primary/5 hover:shadow-lg transition-all duration-500 group">
                            <div className="h-[300px] overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                <img src="/application/Steel%20and%20Metals%20Processing.webp" alt="Steel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Steel and Metals Processing</h3>
                                <p className="text-gray-600 mb-6 flex-1 text-lg">
                                    Steelmaking is challenging to decarbonize due to high energy demand. Hydrogen applications include direct reduction, fuel substitution, and metallurgical integration.
                                </p>
                                <div className="mt-auto p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                                    <p className="text-brand-primary font-medium text-sm">Modular nature supports phased adoption without full plant redesign.</p>
                                </div>
                            </div>
                        </div>

                        {/* Refining */}
                        <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-primary/5 hover:shadow-lg transition-all duration-500 group">
                            <div className="h-[300px] overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                <img src="/application/Refining%20and%20Petrochemicals.webp" alt="Refining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refining and Petrochemicals</h3>
                                <p className="text-gray-600 mb-6 flex-1 text-lg">
                                    Refineries are natural early adopters. Deployment models include on-site generation, partial replacement of grey hydrogen, and renewable integration.
                                </p>
                                <div className="mt-auto p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                                    <p className="text-brand-primary font-medium text-sm">Designed to align with refinery uptime, reliability, and safety requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Deployment Models */}
            <section id="distributed" className="py-24 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">On-Site and <span className="text-gradient-green-glow">Distributed Hydrogen</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                For many industrial users, hydrogen transport, storage, and compression add significant cost and complexity.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-5 bg-white rounded-xl border border-brand-primary/10 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,213,99,0.08)] transition-all">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="text-gray-800 font-medium self-center">On-site hydrogen generation</span>
                                </li>
                                <li className="flex gap-4 p-5 bg-white rounded-xl border border-brand-primary/10 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,213,99,0.08)] transition-all">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <span className="text-gray-800 font-medium self-center">Reduced logistics and handling requirements</span>
                                </li>
                                <li className="flex gap-4 p-5 bg-white rounded-xl border border-brand-primary/10 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,213,99,0.08)] transition-all">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <span className="text-gray-800 font-medium self-center">Improved energy security for industrial clusters</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img src="/application/On-Site%20and%20Distributed%20Hydrogen.jpg" alt="On Site Hydrogen" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Beaker className="w-4 h-4" /> Energy Conversion
                                </span>
                            </div>
                            <h2 id="integration" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Energy <span className="text-gradient-green-glow">Storage</span> and Conversion</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Beyond direct consumption, hydrogen plays a growing role in energy storage. Relevant pathways include H2-to-ammonia, combustion integration, and hybrid systems.
                            </p>
                            <div className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-xl">
                                <p className="text-gray-700 italic font-medium">The platform is designed to remain compatible with downstream conversion technologies.</p>
                            </div>
                        </div>
                        <div className="md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img src="/application/Energy%20Storage%20and%20Conversion%20Pathways.jpg" alt="Energy Storage" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Geographic Strategy */}
            <section className="py-24 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Deployment <span className="text-gradient-green-glow">Strategy</span></h2>
                        <p className="text-xl text-gray-500">From Local Impact to Global Scale</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* India First */}
                        <div className="bg-white rounded-3xl p-8 border border-brand-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,213,99,0.1)] transition-all duration-300">
                            <div className="h-[250px] rounded-2xl overflow-hidden mb-8 shadow-md">
                                <img src="/application/India-First%20Industrial%20Deployment.jpg" alt="India Deployment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-8 rounded shadow-sm" />
                                India-First Deployment
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                India presents a unique combination of large hydrogen demand, cost sensitivity, and strong policy momentum.
                            </p>
                            <div className="bg-brand-primary/5 p-4 rounded-xl">
                                <h4 className="font-bold text-brand-primary mb-3 text-sm uppercase tracking-wider">Priority Sectors:</h4>
                                <ul className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white border border-brand-primary/10 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Fertilizer/Ammonia</span>
                                    <span className="px-3 py-1 bg-white border border-brand-primary/10 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Public Refining</span>
                                    <span className="px-3 py-1 bg-white border border-brand-primary/10 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Steel</span>
                                </ul>
                            </div>
                        </div>

                        {/* Global Scale */}
                        <div className="bg-white rounded-3xl p-8 border border-brand-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,213,99,0.1)] transition-all duration-300">
                            <div className="h-[250px] rounded-2xl overflow-hidden mb-8 shadow-md">
                                <img src="/application/Globally%20Scalable%20Use%20Cases.png" alt="Global Scale" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Globe className="w-8 h-8 text-brand-primary" />
                                Globally Scalable
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                The same application logic applies globally where industries face rising pressure to decarbonize without eroding margins.
                            </p>
                            <div className="bg-brand-primary/5 p-4 rounded-xl">
                                <h4 className="font-bold text-brand-primary mb-3 text-sm uppercase tracking-wider">Relevant Markets:</h4>
                                <ul className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white border border-brand-primary/10 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Export Hubs</span>
                                    <span className="px-3 py-1 bg-white border border-brand-primary/10 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Decarbonization Zones</span>
                                    <span className="px-3 py-1 bg-white border border-brand-primary/10 rounded-lg text-sm text-gray-700 font-medium shadow-sm">MFG Clusters</span>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Strategic Deployment */}
            <section className="py-12 md:py-20 bg-gray-900 text-white text-center">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Application-Driven <span className="text-gradient-green-glow">Deployment Strategy</span></h2>
                        <p className="text-xl text-white/80 mb-12 leading-relaxed">
                            Deployment is prioritized where hydrogen demand already exists, cost sensitivity is high, and scale can be achieved through industrial partnerships.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Beaker className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                                <h4 className="font-bold mb-2 text-lg">Existing Demand</h4>
                                <p className="text-sm text-gray-300">Replacement of grey hydrogen users</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <TrendingUp className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                                <h4 className="font-bold mb-2 text-lg">High Cost Sensitivity</h4>
                                <p className="text-sm text-gray-300">Where OPEX dominates decision making</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <Factory className="w-10 h-10 text-brand-primary mx-auto mb-6" />
                                <h4 className="font-bold mb-2 text-lg">Industrial Scale</h4>
                                <p className="text-sm text-gray-300">Partnerships for large consumption</p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. CTA Section */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-20 px-6 md:px-12 group">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/application/hero%20section.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">Engage on Applications</h2>
                            <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                The platform is intended for partners seeking deployable hydrogen solutions, not conceptual pilots.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact" className="w-full md:w-auto">
                                    <button className="px-10 py-5 bg-white text-brand-primary font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px]">
                                        Discuss Application Fit
                                    </button>
                                </Link>
                                <Link href="/partnership" className="w-full md:w-auto">
                                    <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px] flex items-center justify-center gap-2">
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
