"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, HeartHandshake, Building2, Users, Goal, CheckCircle, Zap, ShieldCheck, PieChart, Coins, Briefcase } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PartnershipPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/patnership/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        Partnership <span className="text-gradient-green-glow">Models</span>
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
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight"
                        >
                            Collaboration at <span className="text-gradient-green-glow">Industrial Scale</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Hydrogen infrastructure requires diverse expertise. We partner with leaders across the value chain to deliver complete, bankable solutions.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact">
                                <Button variant="primary" size="lg" className="min-w-[240px]">
                                    Become a Partner
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>


            {/* 3. Partner Categories */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                            Ecosystem
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We <span className="text-gradient-green-glow">Work With</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* EPCs */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">EPC Contractors</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We provide the core technology stack—electrolyzers and power integration—while you manage site balance of plant and construction.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Modular integration
                                </li>
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Standardized interfaces
                                </li>
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Technical support
                                </li>
                            </ul>
                        </div>

                        {/* Project Developers */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <Goal className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Developers</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Accelerate your pipeline with a technology partner that offers predictable costs and performance guarantees.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Feasibility analysis
                                </li>
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Bankable performance
                                </li>
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Rapid deployment
                                </li>
                            </ul>
                        </div>

                        {/* Industrial Offtakers */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Offtakers</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Secure reliable, low-cost hydrogen supply with on-site production solutions tailored to your consumption profile.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Supply security
                                </li>
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Cost certainty
                                </li>
                                <li className="flex gap-3 items-center text-gray-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    Decarbonization
                                </li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Value Proposition */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <ArrowRight className="inline w-4 h-4 text-gray-400 mx-1" />
                        <span className="mx-2 text-brand-green font-bold">Scale</span>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. CTA Section - Map & Data */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    {/* 1. Map Image (Visual Context) */}
                    <div className="rounded-2xl overflow-hidden mb-16 shadow-2xl border border-gray-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
                        <img src="/patnership/Engage%20as%20a%20Partner.jpg" alt="Global Partnership Map" className="w-full h-auto object-cover" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <span className="px-4 py-1.5 bg-brand-green text-white text-sm font-bold rounded-full shadow-sm">Just Energy Transition Partnerships (JETP)</span>
                        </div>
                    </div>

                    {/* 2. Header & CTA */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Engage as a Partner</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Engagement is focused on partners seeking deployable, scalable hydrogen solutions.
                        </p>
                        <div className="flex justify-center items-center w-full">
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className="px-10 py-4 bg-brand-green text-white font-bold rounded-full shadow-xl hover:bg-green-700 hover:scale-105 transition-all text-lg w-full md:w-auto min-w-[200px] md:min-w-[240px]">
                                    Discuss Opportunities
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* 3. Country Data Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* South Africa */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">1. South Africa, 2021</h4>
                            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">Announced: COP26 (Glasgow)</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-brand-green">USD 8.5 Billion</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-snug">
                                <span className="font-bold">Partners:</span> US, Japan, UK, EU, Germany, France.
                            </p>
                        </div>

                        {/* Indonesia */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">2. Indonesia, 2022</h4>
                            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">Announced: G20 (Bali)</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-brand-green">USD 20 Billion</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-snug">
                                <span className="font-bold">Partners:</span> US, Japan, Canada, Denmark, France, Germany, Italy, Norway, UK, EU.
                            </p>
                        </div>

                        {/* Vietnam */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">3. Vietnam, 2022</h4>
                            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">Announced: Dec 2022</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-brand-green">USD 15.5 Billion</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-snug">
                                <span className="font-bold">Partners:</span> EU, UK, US, Japan, Germany, France, Italy, Canada, Denmark, Norway.
                            </p>
                        </div>

                        {/* Senegal */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">4. Senegal, 2023</h4>
                            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">Announced: June 2023</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-brand-green">USD 2.7 Billion</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-snug">
                                <span className="font-bold">Partners:</span> France, Germany, EU, UK, Canada.
                            </p>
                        </div>

                    </div>
                </SectionWrapper>
            </section>

        </main >
    );
}
