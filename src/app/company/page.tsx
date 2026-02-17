"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Target, Lightbulb, Zap, Rocket, ShieldCheck, UserCheck, Globe, Briefcase, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CompanyPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/company/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        About <span className="text-gradient-green-glow">Giga Cora Energy</span>
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
                        <motion.p variants={fadeUp} className="text-xl md:text-3xl text-brand-secondary mb-10 max-w-4xl leading-relaxed font-medium">
                            Giga Cora Energy is a climate-technology company focused on advancing next-generation hydrogen production systems designed for real-world industrial deployment.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-[length:var(--font-intro)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            We address a fundamental challenge: how to produce clean hydrogen at the <span className="text-brand-primary font-bold">scale and cost required by industry</span>, without relying on incremental improvements to legacy technologies.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/technology">
                                <Button variant="primary" size="lg" className="min-w-[200px]">
                                    Our Technology
                                </Button>
                            </Link>
                            <Link href="/partnership">
                                <Button variant="outline" size="lg" className="min-w-[200px]">
                                    Partnership Models
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>


            {/* 3. Mission & Vision */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 gap-12 md:gap-16">
                        {/* Mission */}
                        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                            <div className="flex-1 w-full order-2 lg:order-1">
                                <div className="rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 group">
                                    <div className="relative h-[400px] w-full">
                                        <Image
                                            src="/company/Our%20Mission.jpg"
                                            alt="Our Mission"
                                            fill
                                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 order-1 lg:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                        <Target className="w-4 h-4" /> Purpose
                                    </span>
                                </div>
                                <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">Our <span className="text-gradient-green-glow">Mission</span></h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    To enable the global transition to clean energy by developing innovative hydrogen technologies that are economically viable, industrially scalable, and deployable where energy demand already exists.
                                </p>
                                <div className="p-6 bg-white rounded-2xl border border-brand-primary/10 shadow-[0_4px_20px_rgba(0,213,99,0.05)]">
                                    <p className="text-gray-800 font-medium italic border-l-4 border-brand-primary pl-4">
                                        "Clean energy solutions must compete on fundamentals—cost, reliability, and scale—to achieve lasting impact."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                            <div className="flex-1 w-full">
                                <div className="rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 group">
                                    <div className="relative h-[400px] w-full">
                                        <Image
                                            src="/company/Our%20Vision.jpg"
                                            alt="Our Vision"
                                            fill
                                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                        <Lightbulb className="w-4 h-4" /> Aspiration
                                    </span>
                                </div>
                                <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">Our <span className="text-gradient-green-glow">Vision</span></h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Giga Cora Energy envisions a future where green hydrogen is not a niche solution, but a core industrial input. We see a world where energy infrastructure is decoupled from carbon intensity without compromising on reliability or economic output.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-4 items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-brand-primary shrink-0" />
                                        <span className="text-gray-700 font-medium">Establish new global benchmarks for hydrogen efficiency</span>
                                    </li>
                                    <li className="flex gap-4 items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-brand-primary shrink-0" />
                                        <span className="text-gray-700 font-medium">Support large-scale industrial decarbonization</span>
                                    </li>
                                    <li className="flex gap-4 items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-brand-primary shrink-0" />
                                        <span className="text-gray-700 font-medium">Prioritize deployment and impact over demonstration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Why Giga Cora Exists */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-brand-primary/10 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent z-10 mix-blend-overlay" />
                                <Image
                                    src="/company/Why%20Giga%20Cora%20Energy%20Exists.jpg"
                                    alt="Why We Exist"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Rocket className="w-4 h-4" /> The Challenge
                                </span>
                            </div>
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">Why Giga Cora Energy <span className="text-gradient-green-glow">Exists</span></h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Conventional hydrogen production methods struggle to meet the cost thresholds required for widespread industrial adoption.
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all">
                                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-brand-secondary mb-1">Molecular Rethink</h4>
                                        <p className="text-gray-600 text-sm">Rethinking how energy is delivered at the molecular level to maximize efficiency.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all">
                                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-brand-secondary mb-1">Advanced Physics</h4>
                                        <p className="text-gray-600 text-sm">Applying advanced electrical and plasma-based concepts to reduce energy cost.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all">
                                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-brand-secondary mb-1">Scalability First</h4>
                                        <p className="text-gray-600 text-sm">Designing systems around efficiency and massive scalability from day one.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Technology Philosophy & Deployment */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Philosophy */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all flex flex-col h-full">
                            <div className="rounded-2xl overflow-hidden mb-8 h-64 w-full relative">
                                <Image src="/company/Technology%20Philosophy.png" alt="Philosophy" fill className="object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center gap-3"><Zap className="w-6 h-6 text-brand-primary" /> Technology Philosophy</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Rather than optimizing existing electrochemical systems, we focus on alternative physical mechanisms that enable hydrogen separation using less total energy.
                            </p>
                            <div className="pt-6 border-t border-gray-100">
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center text-gray-700 text-sm font-medium"><CheckCircle className="w-4 h-4 text-brand-primary" /> Precision energy delivery</li>
                                    <li className="flex gap-3 items-center text-gray-700 text-sm font-medium"><CheckCircle className="w-4 h-4 text-brand-primary" /> Moderate operating conditions</li>
                                    <li className="flex gap-3 items-center text-gray-700 text-sm font-medium"><CheckCircle className="w-4 h-4 text-brand-primary" /> Distributed interaction architectures</li>
                                </ul>
                            </div>
                        </div>

                        {/* Deployment */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all flex flex-col h-full">
                            <div className="rounded-2xl overflow-hidden mb-8 h-64 w-full relative">
                                <Image src="/company/Built%20for%20Industrial%20Deployment.jpg" alt="Deployment" fill className="object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center gap-3"><Briefcase className="w-6 h-6 text-brand-primary" /> Industrial Deployment</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                The objective is to move beyond laboratory success toward commercially relevant, infrastructure-grade systems.
                            </p>
                            <div className="pt-6 border-t border-gray-100">
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center text-gray-700 text-sm font-medium"><CheckCircle className="w-4 h-4 text-brand-primary" /> Continuous operation requirements</li>
                                    <li className="flex gap-3 items-center text-gray-700 text-sm font-medium"><CheckCircle className="w-4 h-4 text-brand-primary" /> EPC compatibility</li>
                                    <li className="flex gap-3 items-center text-gray-700 text-sm font-medium"><CheckCircle className="w-4 h-4 text-brand-primary" /> Third-party validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Global Impact */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 relative">
                                <Image
                                    src="/company/Global%20Impact,%20Practical%20Focus.webp"
                                    alt="Global Impact"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Globe className="w-4 h-4" /> Global Reach
                                </span>
                            </div>
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary leading-tight">Global Impact, <span className="text-gradient-green-glow">Practical Focus</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                While the technology has global relevance, deployment strategy emphasizes regions and sectors where hydrogen demand is immediate and substantial.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-5 py-2.5 bg-gray-50 rounded-lg text-gray-700 border border-gray-100 shadow-sm font-medium hover:border-brand-primary/30 transition-colors">Fertilizers</span>
                                <span className="px-5 py-2.5 bg-gray-50 rounded-lg text-gray-700 border border-gray-100 shadow-sm font-medium hover:border-brand-primary/30 transition-colors">Refining</span>
                                <span className="px-5 py-2.5 bg-gray-50 rounded-lg text-gray-700 border border-gray-100 shadow-sm font-medium hover:border-brand-primary/30 transition-colors">Metals</span>
                                <span className="px-5 py-2.5 bg-gray-50 rounded-lg text-gray-700 border border-gray-100 shadow-sm font-medium hover:border-brand-primary/30 transition-colors">Manufacturing Clusters</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Credibility & CTA */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary">Commitment to <span className="text-gradient-green-glow">Credibility</span></h2>
                        <p className="text-xl text-gray-600 mb-12">
                            We prioritize long-term credibility over short-term visibility. We build trust through measurable performance, transparent milestones, and structured validation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <UserCheck className="w-6 h-6 text-brand-primary" />
                                    <h4 className="text-xl font-bold text-brand-secondary">Collaboration-Driven Growth</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Growth is pursued through partnerships that align technical capability with execution scale.</p>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Industrial operators</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Public-sector enterprises</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Infrastructure developers</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="w-6 h-6 text-brand-primary" />
                                    <h4 className="text-xl font-bold text-brand-secondary">Looking Ahead</h4>
                                </div>
                                <p className="text-gray-600 mb-4">The company’s journey is defined not by hype, but by execution.</p>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Advancing technology readiness</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Performance at scale</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Enabling industrial adoption</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA Card */}
                    <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center py-20 px-6 md:px-12 mx-auto max-w-5xl">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-[url('/company/Engage%20with%20Giga%20Cora%20Energy.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-primary/20" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-white drop-shadow-md">Engage with Giga Cora Energy</h2>
                            <p className="text-[length:var(--font-intro)] text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                                We work with partners who approach hydrogen as an industrial input and an infrastructure asset.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact">
                                    <Button variant="primary" size="lg" className="min-w-[240px]">
                                        Strategic Discussions
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </SectionWrapper>
            </section>

        </main>
    );
}
