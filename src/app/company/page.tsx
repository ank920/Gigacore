"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Target, Lightbulb, Zap, Rocket, ShieldCheck, UserCheck, Globe, Briefcase } from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/company/hero%20section.jpg')] bg-cover bg-center" />
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
                            About <span className="text-brand-blue">Giga Cora Energy</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Giga Cora Energy is a climate-technology company focused on advancing next-generation hydrogen production systems designed for real-world industrial deployment.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            We address a fundamental challenge: how to produce clean hydrogen at the <span className="text-brand-green font-bold">scale and cost required by industry</span>, without relying on incremental improvements to legacy technologies.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4">
                            <Link href="/technology">
                                <button className="px-8 py-3 bg-brand-blue text-white hover:bg-sky-600 rounded-full font-bold transition-all duration-300 shadow-xl text-base min-w-[200px]">
                                    Learn More
                                </button>
                            </Link>
                            <Link href="/partnership">
                                <button className="px-8 py-3 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full font-bold transition-all duration-300 text-base min-w-[200px] shadow-sm">
                                    Explore Partnerships
                                </button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Mission & Vision */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 gap-24">
                        {/* Mission */}
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 w-full">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                    <img
                                        src="/company/Our%20Mission.jpg"
                                        alt="Our Mission"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="w-6 h-6 text-brand-blue" />
                                    <span className="text-brand-blue font-bold uppercase tracking-wider text-sm">Purpose</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    To enable the global transition to clean energy by developing innovative hydrogen technologies that are economically viable, industrially scalable, and deployable where energy demand already exists.
                                </p>
                                <div className="p-6 bg-brand-blue/5 rounded-xl border border-brand-blue/10">
                                    <p className="text-gray-800 font-medium italic">
                                        "Clean energy solutions must compete on fundamentals—cost, reliability, and scale—to achieve lasting impact."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                            <div className="flex-1 w-full">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                    <img
                                        src="/company/Our%20Vision.jpg"
                                        alt="Our Vision"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Lightbulb className="w-6 h-6 text-brand-green" />
                                    <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Aspiration</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Giga Cora Energy envisions a future where green hydrogen is not a niche solution, but a core industrial input. We see a world where energy infrastructure is decoupled from carbon intensity without compromising on reliability or economic output. Our vision is to bridge the gap between theoretical possibility and industrial reality.
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-2 h-2 bg-brand-green rounded-full shrink-0" />
                                        <span className="text-gray-700">Establish new global benchmarks for hydrogen efficiency</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-2 h-2 bg-brand-green rounded-full shrink-0" />
                                        <span className="text-gray-700">Support large-scale industrial decarbonization</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-2 h-2 bg-brand-green rounded-full shrink-0" />
                                        <span className="text-gray-700">Prioritize deployment and impact over demonstration</span>
                                    </li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    This transformation requires more than just new technology; it demands a fundamental shift in how we design, deploy, and operate energy systems. We are building the foundation for this shift, ensuring that hydrogen becomes a predictable, tradeable, and ubiquitous commodity.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Why Giga Cora Exists */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="/company/Why%20Giga%20Cora%20Energy%20Exists.jpg"
                                    alt="Why We Exist"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <Rocket className="w-6 h-6 text-brand-blue" />
                                <span className="text-brand-blue font-bold uppercase tracking-wider text-sm">The Challenge</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Giga Cora Energy Exists</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Conventional hydrogen production methods struggle to meet the cost thresholds required for widespread industrial adoption.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4">We challenge these constraints by:</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 bg-white rounded border border-gray-100 shadow-sm">
                                    <span className="text-brand-blue font-bold">•</span>
                                    <span className="text-gray-700">Rethinking how energy is delivered at the molecular level</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-white rounded border border-gray-100 shadow-sm">
                                    <span className="text-brand-blue font-bold">•</span>
                                    <span className="text-gray-700">Applying advanced electrical and plasma-based concepts</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-white rounded border border-gray-100 shadow-sm">
                                    <span className="text-brand-blue font-bold">•</span>
                                    <span className="text-gray-700">Designing systems around efficiency and scalability from the outset</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Technology Philosophy & Deployment (Split) */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Philosophy */}
                        <div>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-8 h-64">
                                <img src="/company/Technology%20Philosophy.png" alt="Philosophy" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Zap className="w-6 h-6 text-brand-blue" /> Technology Philosophy</h3>
                            <p className="text-gray-600 mb-6">
                                Rather than optimizing existing electrochemical systems, we focus on alternative physical mechanisms that enable hydrogen separation using less total energy.
                            </p>
                            <ul className="space-y-2 text-gray-700 list-disc ml-5">
                                <li>Precision energy delivery instead of constant electrical force</li>
                                <li>Moderate operating conditions suitable for industry</li>
                                <li>Distributed interaction architectures</li>
                            </ul>
                        </div>

                        {/* Deployment */}
                        <div>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-8 h-64">
                                <img src="/company/Built%20for%20Industrial%20Deployment.jpg" alt="Deployment" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Briefcase className="w-6 h-6 text-brand-green" /> Built for Industrial Deployment</h3>
                            <p className="text-gray-600 mb-6">
                                The objective is to move beyond laboratory success toward commercially relevant, infrastructure-grade systems.
                            </p>
                            <ul className="space-y-2 text-gray-700 list-disc ml-5">
                                <li>Continuous operation requirements</li>
                                <li>Compatibility with EPC and utility workflows</li>
                                <li>Auditability and third-party validation</li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Global Impact */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                                <img
                                    src="/company/Global%20Impact,%20Practical%20Focus.webp"
                                    alt="Global Impact"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-6 h-6 text-brand-blue" />
                                <span className="text-brand-blue font-bold uppercase tracking-wider text-sm">Reach</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Global Impact, Practical Focus</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                While the technology has global relevance, deployment strategy emphasizes regions and sectors where hydrogen demand is immediate and substantial.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 shadow-sm font-medium">Fertilizers</span>
                                <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 shadow-sm font-medium">Refining</span>
                                <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 shadow-sm font-medium">Metals</span>
                                <span className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 shadow-sm font-medium">Manufacturing Clusters</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Credibility & Growth (Text Section) */}
            <section className="py-24 bg-white text-center">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-brand-green" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Commitment to Credibility</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We prioritize long-term credibility over short-term visibility. We build trust through measurable performance, transparent milestones, and structured validation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><UserCheck className="w-5 h-5 text-brand-blue" /> Collaboration-Driven Growth</h4>
                                <p className="text-gray-600 mb-4">Growth is pursued through partnerships that align technical capability with execution scale.</p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• Industrial operators</li>
                                    <li>• Public-sector enterprises</li>
                                    <li>• Infrastructure developers</li>
                                </ul>
                            </div>
                            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Rocket className="w-5 h-5 text-brand-green" /> Looking Ahead</h4>
                                <p className="text-gray-600 mb-4">The company’s journey is defined not by hype, but by execution.</p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• Advancing technology readiness</li>
                                    <li>• Performance at scale</li>
                                    <li>• Enabling industrial adoption</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. CTA Section - Custom Image Background */}
            <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/company/Engage%20with%20Giga%20Cora%20Energy.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-green/90 mix-blend-multiply" />
                </div>

                <SectionWrapper className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-md">Engage with Giga Cora Energy</h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
                            We work with partners who approach hydrogen as an industrial input and an infrastructure asset.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <Link href="/contact">
                                <button className="px-10 py-5 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all text-xl min-w-[260px]">
                                    Strategic Discussions
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-xl min-w-[260px] flex items-center justify-center gap-2">
                                    Request Executive Brief <ArrowRight className="w-6 h-6" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
