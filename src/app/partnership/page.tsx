"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, HeartHandshake, Users, Landmark, Hammer, Wrench, Microscope, Coins, Briefcase } from "lucide-react";

export default function PartnershipPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/patnership/hero%20section.jpg')] bg-cover bg-center" />
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
                            Built to Scale Through <span className="text-brand-green">Collaboration</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Large-scale hydrogen deployment does not succeed in isolation. It requires coordinated execution across technology, infrastructure, capital, and operations.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            The platform is designed to be deployed with <span className="text-brand-green font-bold">partners</span>, combining technical capability with industrial reach, project execution expertise, and long-term operating experience.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className="px-8 py-3 bg-brand-green text-white hover:bg-green-700 rounded-full font-bold transition-all duration-300 shadow-xl text-base w-full md:w-auto min-w-[200px]">
                                    Discuss Partnership
                                </button>
                            </Link>
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className="px-8 py-3 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full font-bold transition-all duration-300 text-base w-full md:w-auto min-w-[200px] shadow-sm">
                                    Explore Pilot Collaboration
                                </button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Partnership Philosophy */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/patnership/Partnership%20Philosophy.avif"
                                    alt="Partnership Philosophy"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <HeartHandshake className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Philosophy</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Partnership Philosophy</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Partnerships are structured around shared execution, not vendor relationships. The objective is to move from pilot to commercial operation in a disciplined, de-risked manner.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4">Guiding Principles:</h4>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-2 h-2 mt-2 bg-brand-green rounded-full shrink-0" />
                                    <span className="text-gray-700 font-medium">Long-term alignment rather than transactional engagement</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-2 h-2 mt-2 bg-brand-green rounded-full shrink-0" />
                                    <span className="text-gray-700 font-medium">Clear division of roles and responsibilities</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-2 h-2 mt-2 bg-brand-green rounded-full shrink-0" />
                                    <span className="text-gray-700 font-medium">Transparency in technical and economic validation</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-2 h-2 mt-2 bg-brand-green rounded-full shrink-0" />
                                    <span className="text-gray-700 font-medium">Deployment at meaningful industrial scale</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Industrial Partners */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="/patnership/Industrial%20&%20Offtake%20Partners.jpg"
                                    alt="Industrial Partners"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Offtake Anchor</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industrial & Offtake Partners</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Industrial partners anchor deployment by providing existing hydrogen demand and operational environments for validation.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-4">Priority Partners:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
                                    <span className="text-sm font-semibold text-gray-700">Fertilizers & Ammonia</span>
                                </div>
                                <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
                                    <span className="text-sm font-semibold text-gray-700">Refining & Petrochemicals</span>
                                </div>
                                <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
                                    <span className="text-sm font-semibold text-gray-700">Steel & Metals</span>
                                </div>
                                <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
                                    <span className="text-sm font-semibold text-gray-700">Manufacturing Clusters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Public Sector & EPC (Split) */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Public Sector */}
                        <div className="flex flex-col">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 mb-8 h-[300px]">
                                <img src="/patnership/Public-Sector%20&%20PSU%20Collaboration.avif" alt="Public Sector" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Landmark className="w-6 h-6 text-brand-green" /> Public-Sector & PSU Collaboration</h3>
                            <p className="text-gray-600 mb-6">
                                Public-sector enterprises play a critical role in markets where scale, reliability, and national priorities intersect.
                            </p>
                            <div className="mt-auto p-4 bg-brand-green/5 rounded border border-brand-green/10">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Pilot and demonstration facilities</li>
                                    <li>• Brownfield integration</li>
                                    <li>• Alignment with national mandates</li>
                                </ul>
                            </div>
                        </div>

                        {/* EPC */}
                        <div className="flex flex-col">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 mb-8 h-[300px]">
                                <img src="/patnership/EPC%20&%20Infrastructure%20Partners.webp" alt="EPC" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Hammer className="w-6 h-6 text-brand-green" /> EPC & Infrastructure Partners</h3>
                            <p className="text-gray-600 mb-6">
                                Engineering, procurement, and construction partners are essential for translating technology into bankable infrastructure.
                            </p>
                            <div className="mt-auto p-4 bg-brand-green/5 rounded border border-brand-green/10">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• System integration and plant design</li>
                                    <li>• Construction and commissioning</li>
                                    <li>• Safety and compliance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Manufacturing & Research */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Wrench className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Localization</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Manufacturing & Localization Partners</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Scalable deployment requires manufacturing capability aligned with local supply chains. This approach supports faster deployment timelines.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img src="/patnership/Manufacturing%20&%20Localization%20Partners.avif" alt="Manufacturing" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2">
                            <div className="flex items-center gap-2 mb-4">
                                <Microscope className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Validation</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Research & Validation Partners</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Independent validation is essential for industrial adoption. Research partnerships support performance verification, long-duration testing, and technical review.
                            </p>
                        </div>
                        <div className="md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img src="/patnership/Research%20&%20Validation%20Partners.jpg" alt="Research" className="w-full h-auto" />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Capital & Models */}
            <section className="py-24 bg-white text-center">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Capital & Project Models</h2>
                        <p className="text-xl text-gray-500 mb-12">
                            The platform is structured to support bankable projects, moving deliberately from concept to operation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
                                <Coins className="w-10 h-10 text-brand-green mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Capital & Infrastructure Investors</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Infrastructure-grade risk assessment</li>
                                    <li>Phased capital deployment</li>
                                    <li>Alignment with long-term offtake</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
                                <Briefcase className="w-10 h-10 text-brand-green mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Models</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Joint development and deployment</li>
                                    <li>Licensing and manufacturing partnerships</li>
                                    <li>Project-level joint ventures</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto bg-brand-green/5 rounded-full px-8 py-4 border border-brand-green/10 inline-block">
                        <span className="font-bold text-brand-green uppercase tracking-wide text-sm">Pathway:</span>
                        <span className="mx-2 text-gray-400">Alignment</span>
                        <ArrowRight className="inline w-4 h-4 text-gray-400 mx-1" />
                        <span className="mx-2 text-gray-400">Pilot</span>
                        <ArrowRight className="inline w-4 h-4 text-gray-400 mx-1" />
                        <span className="mx-2 text-gray-400">Validation</span>
                        <ArrowRight className="inline w-4 h-4 text-gray-400 mx-1" />
                        <span className="mx-2 text-brand-green font-bold">Scale</span>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. CTA Section - Map & Data */}
            <section className="py-24 bg-white">
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

        </main>
    );
}
