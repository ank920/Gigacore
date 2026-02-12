"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Check, ArrowRight, Zap, Scale, ShieldCheck, Thermometer, Box } from "lucide-react";

export default function TechnologyPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/Technology/hero%20section.jpg')] bg-cover bg-center" />
                </div>
            </section>

            {/* 2. Intro Section (Text + Buttons Moved Here) */}
            <section className="py-12 bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900"
                        >
                            A Different Way to <span className="text-gray-900">Split</span> <span className="text-brand-green">Water</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Hydrogen production has traditionally relied on applying <span className="text-gray-900 font-bold">constant electrical force</span> to water molecules until they separate. While effective, this approach is inherently <span className="text-brand-green font-bold">energy-intensive</span> and constrained by well-understood physical limits.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className="px-10 py-4 bg-brand-green text-white rounded-full font-bold transition-all duration-300 shadow-xl text-lg w-full md:w-auto min-w-[200px] md:min-w-[240px] hover:bg-green-700">
                                    Request Technical Overview
                                </button>
                            </Link>
                            <Link href="/partnership" className="w-full md:w-auto">
                                <button className="text-gray-900 font-bold text-lg hover:text-brand-green transition-colors flex items-center gap-2 justify-center w-full md:w-auto">
                                    Engage as a Partner <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. The Shift / Core Concept */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                                From Constant Force to Targeted Energy
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                The technology platform under development takes a fundamentally different path. Instead of steady voltage, it uses controlled electrical excitation within a cold plasma environment to interact with water in a more precise and efficient way.
                            </p>
                            <p className="text-lg text-gray-600 font-medium">
                                This shift—from constant force to targeted energy delivery—is the foundation of the platform.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/Technology/A New Hydrogen Production Architecture2.webp"
                                    alt="Targeted Energy Delivery"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. What Is Cold Plasma */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">What Is Cold Plasma?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Most people are familiar with solids, liquids, and gases. Plasma is often called the fourth state of matter.
                            Cold plasma is created when electricity energizes a gas or vapor without heating it to extreme temperatures.
                            Instead of making everything hot, only a small fraction of particles—mainly electrons—carry high energy.
                            Because the bulk material stays near room temperature, it is called cold plasma.
                        </p>
                    </div>
                    <div className="rounded-sm overflow-hidden shadow-xl border border-gray-200 bg-white">
                        <img
                            src="/Technology/Cold-Plasma Hydrogen.png"
                            alt="Cold Plasma Explained"
                            className="w-full h-auto object-contain max-h-[600px] mx-auto"
                        />
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Analogy & How Creation */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Analogy */}
                        <div className="flex flex-col h-full">
                            <h3 className="text-3xl font-bold mb-8 text-gray-900">
                                A Simple Analogy
                            </h3>

                            <div className="space-y-6">
                                {/* Traditional */}
                                <div className="flex items-start gap-5 p-8 rounded-2xl bg-gray-50 border border-gray-200 transition-all hover:bg-gray-100 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Scale className="w-32 h-32 text-gray-400" />
                                    </div>

                                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm relative z-10">
                                        <Scale className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-gray-500 mb-2 uppercase tracking-wide text-xs">Traditional Electrolysis</h4>
                                        <p className="text-gray-600 leading-relaxed font-medium text-lg">Like pushing a heavy object continuously against friction—requiring constant, high-intensity force to maintain any movement.</p>

                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <p className="text-sm text-gray-500 italic">
                                                "Energy is continuously wasted overcoming molecular resistance before any useful separation actually happens."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cold Plasma */}
                                <div className="flex items-start gap-5 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                                        <Zap className="w-32 h-32 text-white" />
                                    </div>

                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/30 relative z-10">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-xs flex items-center gap-2">
                                            Cold Plasma Tech <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">REVOLUTIONARY</span>
                                        </h4>
                                        <p className="text-white/95 leading-relaxed font-medium text-lg">Like tapping the object at exactly the right resonant frequency—using precise, minimal energy to create massive separation.</p>

                                        <div className="mt-6 pt-6 border-t border-white/20">
                                            <p className="text-sm text-white/80 italic">
                                                "Thousands of tiny, targeted energy pulses split the water molecules instantly, with zero wasted effort."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How Created */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">How Cold Plasma Is Created</h3>
                            <p className="text-gray-600 mb-6">
                                Cold plasma is created using carefully controlled electrical pulses rather than heat or combustion. In practical terms:
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Electricity is applied in short, controlled bursts",
                                    "These pulses create localized electrical discharges",
                                    "The surrounding environment remains at moderate temperature"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="rounded-sm overflow-hidden border border-gray-200 shadow-md">
                                <img
                                    src="/Technology/How Cold Plasma Is Created.jpg"
                                    alt="How Cold Plasma Is Created"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Limitations vs Core Principle */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                        <div className="flex-1 w-full">
                            <img
                                src="/Technology/Why Conventional Approaches Are Constrained.webp"
                                alt="Conventional Constraints"
                                className="w-full h-auto rounded-sm border border-gray-200 shadow-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Conventional Electrolysis Is Limited</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Conventional electrolysis applies energy continuously, regardless of whether water molecules are optimally positioned to respond. This leads to high electricity consumption, significant energy losses, and increasing system complexity as scale grows.
                            </p>
                            <div className="p-4 bg-white border-l-4 border-gray-400 text-gray-600 italic">
                                Incremental improvements in materials or equipment cannot fully overcome this limitation, because the constraint lies in how energy is delivered, not just the hardware itself.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <img
                                src="/Technology/Energy Efficiency by Design.png"
                                alt="Precision Energy Delivery"
                                className="w-full h-auto rounded-sm border border-gray-200 shadow-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Principle: Precision Energy Delivery</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                The platform delivers energy in short, precisely timed electrical pulses rather than constant voltage. This allows energy to interact with water molecules when it is most effective, reduced wasted electricity, and improved efficiency at the system level.
                            </p>
                            <div className="p-4 bg-white border-l-4 border-brand-green text-brand-green font-medium">
                                In simple terms, the system works with the natural behavior of molecules rather than forcing a reaction through brute electrical input.
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Distributed Architecture */}
            {/* 6. Distributed Interaction Architecture */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">Distributed Interaction Architecture</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Instead of relying on a few fixed reaction points, the platform operates with a distributed internal interaction structure.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Energy effects are spread throughout the reaction volume",
                                    "Electric fields are used more efficiently",
                                    "The process remains stable and uniform"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border-l-4 border-brand-green">
                                        <div className="w-2 h-2 bg-brand-green rounded-full" />
                                        <span className="font-bold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full h-[500px] relative rounded-sm overflow-hidden shadow-2xl border border-gray-200">
                            <img
                                src="/Technology/Distributed Interaction Architecture.png"
                                alt="Distributed Interaction Architecture"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Industrial Conditions */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4 text-brand-green">
                                <Thermometer className="w-6 h-6" />
                                <span className="font-bold uppercase tracking-wider text-sm">Industrial Design</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Designed for Industrial Operating Conditions</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                The platform is engineered to operate under moderate temperatures and pressures, avoiding the extremes associated with some alternative hydrogen pathways.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Simpler balance-of-plant", "Easier system integration", "Improved reliability", "Modular deployment"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <Check className="w-4 h-4 text-brand-green" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src="/Technology/Designed for Industrial Operating Conditions.png"
                                alt="Industrial Operating Conditions"
                                className="w-full h-auto rounded-sm border border-gray-200 shadow-md"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. Scalability */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4 text-brand-green">
                                <Box className="w-6 h-6" />
                                <span className="font-bold uppercase tracking-wider text-sm">Scalability</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Scalability Through Modularity</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Rather than scaling through single, oversized units, the system scales by replicating standardized modules. Scalability is treated as an engineering requirement from the outset.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Preserves performance as capacity increases",
                                    "Reduces construction and commissioning risk",
                                    "Enables phased deployment aligned with demand"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-sm border border-gray-100">
                                        <Scale className="w-5 h-5 text-brand-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src="/Technology/Scalability & Modularity.webp"
                                alt="Scalability"
                                className="w-full h-auto rounded-sm border border-gray-200 shadow-xl"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 9. Readiness & Trust */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        {/* Readiness */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Technology Readiness & Validation</h3>
                            <p className="text-gray-600 mb-6">
                                The platform is progressing through a staged development and validation roadmap aligned with industrial expectations.
                            </p>
                            <img
                                src="/Technology/Technology Readiness & Validation Path.jpg"
                                alt="Readiness Path"
                                className="w-full h-48 object-cover rounded-sm mb-6"
                            />
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Pilot-scale operation</li>
                                <li>• Performance validation under real conditions</li>
                                <li>• Independent technical and economic review</li>
                            </ul>
                        </div>
                        {/* Trust */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Built for Trust and Evaluation</h3>
                            <p className="text-gray-600 mb-6">
                                The technology is being developed to withstand scrutiny from industrial customers, government stakeholders, and infrastructure investors.
                            </p>
                            <img
                                src="/Technology/Designed for Industrial Trust.png"
                                alt="Industrial Trust"
                                className="w-full h-48 object-contain rounded-sm mb-6"
                            />
                            <p className="text-sm text-gray-600 italic">
                                Performance and efficiency are intended to be measurable, auditable, and verifiable, not theoretical.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 10. CTA Section */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    {/* 10. CTA Section */}
                    <section className="py-24 bg-white">
                        <SectionWrapper>
                            <div className="relative rounded-2xl overflow-hidden bg-brand-green shadow-2xl text-center py-24 px-8">
                                {/* Background Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-gray-900 opacity-90 z-0" />
                                <div className="absolute inset-0 bg-[url('/Technology/hero%20section.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Engage on the Technology</h2>
                                    <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                        This platform is intended for partners who prioritize deployability, efficiency, and long-term economics.
                                    </p>

                                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                        <Link href="/contact" className="w-full md:w-auto">
                                            <button className="px-10 py-5 bg-white text-brand-green font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px]">
                                                Request Technical Overview
                                            </button>
                                        </Link>
                                        <Link href="/partnership" className="w-full md:w-auto">
                                            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px] flex items-center justify-center gap-2">
                                                Engage as a Partner <ArrowRight className="w-6 h-6" />
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90 uppercase tracking-wider">
                                        <span>Technical Overview</span>
                                        <span className="opacity-50">•</span>
                                        <span>Pilot Deployment</span>
                                        <span className="opacity-50">•</span>
                                        <span>Joint Validation</span>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>
                    </section>
                </SectionWrapper>
            </section>

        </main>
    );
}
