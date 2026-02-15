"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Building2, Factory, Users, Microscope, Coins, CheckCircle, Target, Zap } from "lucide-react";
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
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        Partnerships: <span className="text-gradient-green-glow">Built to Scale Through Collaboration</span>
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
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-6 max-w-4xl leading-relaxed font-medium">
                            Large-scale hydrogen deployment does not succeed in isolation. It requires coordinated execution across technology, infrastructure, capital, and operations.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-500 mb-6 max-w-4xl leading-relaxed">
                            Gigacore's platform is designed for deployment with partners — combining technical capability with industrial reach, execution expertise, and long-term operating experience.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-900 font-bold mb-10">
                            The objective is simple: <span className="text-brand-primary">Move from pilot to disciplined commercial scale.</span>
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Partnership Philosophy */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/Partnership%20Philosophy.avif"
                                    alt="Partnership Philosophy"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">Partnership <span className="text-gradient-green-glow">Philosophy</span></h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Partnerships are structured around shared execution — not vendor relationships.
                            </p>
                            <p className="text-base text-gray-500 font-bold mb-4">Guiding principles:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Long-term alignment over transactional engagement",
                                    "Clear division of roles and responsibilities",
                                    "Transparency in technical and economic validation",
                                    "Deployment at meaningful industrial scale"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-800 font-medium">
                                The focus is <span className="text-brand-primary font-bold">disciplined scale-up</span> — de-risked, validated, and operationally grounded.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Industrial & Offtake Partners */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/Industrial%20&%20Offtake%20Partners.jpg"
                                    alt="Industrial & Offtake Partners"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Factory className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Industrial & Offtake Partners</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                Industrial partners anchor deployment by providing:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Existing hydrogen demand",
                                    "Real operational environments",
                                    "Continuous offtake pathways"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-base text-gray-500 font-bold mb-4">Priority sectors:</p>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {["Fertilizers and ammonia", "Refining and petrochemicals", "Steel and metals processing", "Industrial manufacturing clusters"].map((sector, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-full text-sm font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20"
                                    >
                                        {sector}
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg text-gray-800 font-medium">
                                Deployment is driven by <span className="text-brand-primary font-bold">demand certainty</span> — not speculative projections.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Public-Sector & PSU Collaboration */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/Public-Sector%20&%20PSU%20Collaboration.jpg"
                                    alt="Public-Sector & PSU Collaboration"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Building2 className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Public-Sector & PSU Collaboration</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                Public-sector enterprises play a critical role where scale, reliability, and national priorities intersect.
                            </p>
                            <p className="text-base text-gray-500 font-bold mb-4">Collaboration areas:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Pilot and demonstration facilities",
                                    "Industrial retrofits and brownfield integration",
                                    "Large-scale hydrogen and ammonia projects",
                                    "Alignment with national hydrogen programs"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-800 font-medium">
                                These partnerships emphasize <span className="text-brand-primary font-bold">auditability, reliability, and long-term execution.</span>
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. EPC & Infrastructure Partners */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/EPC%20&%20Infrastructure%20Partners.jpg"
                                    alt="EPC & Infrastructure Partners"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Zap className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">EPC & Infrastructure Partners</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                EPC partners translate technology into bankable infrastructure.
                            </p>
                            <p className="text-base text-gray-500 font-bold mb-4">Collaboration focuses on:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "System integration and plant design",
                                    "Construction and commissioning",
                                    "Safety and regulatory compliance",
                                    "Multi-site replication"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-800 font-medium">
                                The platform integrates into <span className="text-brand-primary font-bold">established EPC workflows</span> — not bespoke experimental builds.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Manufacturing & Localization Partners */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/Manufacturing%20&%20Localization%20Partners.jpg"
                                    alt="Manufacturing & Localization Partners"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Factory className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Manufacturing & Localization Partners</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                Scalable deployment requires aligned manufacturing capability.
                            </p>
                            <p className="text-base text-gray-500 font-bold mb-4">Partnership scope:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Modular system fabrication",
                                    "Localization of components",
                                    "Standardization and quality control",
                                    "Cost optimization at scale"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-800 font-medium">
                                This enables <span className="text-brand-primary font-bold">predictable scaling</span> aligned with domestic manufacturing priorities.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. Research & Validation Partners */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/Research%20&%20Validation%20Partners.jpg"
                                    alt="Research & Validation Partners"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Microscope className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Research & Validation Partners</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                Independent validation underpins industrial adoption and financing.
                            </p>
                            <p className="text-base text-gray-500 font-bold mb-4">Research collaboration supports:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Performance verification",
                                    "Long-duration reliability testing",
                                    "Third-party technical review",
                                    "Continuous optimization"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-800 font-medium">
                                Credibility is built through <span className="text-brand-primary font-bold">validation</span> — not claims.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 9. Capital & Infrastructure Investors */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/patnership/Partnerships.png"
                                    alt="Capital & Infrastructure Investors"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Coins className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Capital & Infrastructure Investors</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6">
                                Hydrogen infrastructure requires patient, infrastructure-aligned capital.
                            </p>
                            <p className="text-base text-gray-500 font-bold mb-4">Investor collaboration focuses on:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Project-level structures",
                                    "Infrastructure-grade risk assessment",
                                    "Phased capital deployment",
                                    "Long-term offtake alignment"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-800 font-medium">
                                The platform is structured for <span className="text-brand-primary font-bold">bankable assets</span> — not short-cycle demonstrations.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 10. Partnership Models & Deployment Pathway */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                        {/* Partnership Models */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Partnership <span className="text-gradient-green-glow">Models</span></h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Engagement structures are tailored to partner roles and objectives:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Pilot and demonstration collaborations",
                                    "Joint development and deployment",
                                    "Licensing and manufacturing partnerships",
                                    "Project-level joint ventures"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start p-4 bg-brand-light rounded-xl border border-brand-primary/10">
                                        <Target className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-base text-gray-600 mt-6 italic">
                                Each model balances risk, responsibility, and long-term value creation.
                            </p>
                        </div>

                        {/* From Partnership to Deployment */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">From Partnership to <span className="text-gradient-green-glow">Deployment</span></h2>
                            <p className="text-lg text-gray-600 mb-8">
                                The pathway from engagement to operation is structured and disciplined:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Technical and economic alignment" },
                                    { step: "2", title: "Pilot or demonstration deployment" },
                                    { step: "3", title: "Performance validation" },
                                    { step: "4", title: "Commercial-scale rollout" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-semibold">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-base text-gray-600 mt-6 italic">
                                This staged approach reduces risk while enabling scale.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 11. Engage as a Partner - CTA */}
            <section className="py-16 bg-white">
                <SectionWrapper>
                    <div className="relative rounded-2xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-12 px-6 md:px-12 group">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/patnership/hero%20section.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">Engage as a Partner</h2>
                            <p className="text-white/95 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                Engagement is focused on organizations seeking deployable, scalable hydrogen solutions.
                            </p>

                            <div className="flex justify-center">
                                <Link href="/contact" className="w-full md:w-auto">
                                    <button className="w-full md:w-auto px-10 py-4 bg-white text-brand-primary font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-lg">
                                        Discuss Partnership Opportunities
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
