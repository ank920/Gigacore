"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Check, ArrowRight, Zap, Scale, ShieldCheck, Thermometer, Box } from "lucide-react";
import Button from "@/components/ui/Button";
import * as THREE from "three";
// @ts-ignore
import HALO from "vanta/dist/vanta.halo.min";

export default function TechnologyPage() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    baseColor: 0x00D563, // Bloom Green
                    backgroundColor: 0x111827, // gray-900 matches the theme
                    size: 1.5,
                    amplitudeFactor: 1.2,
                    xOffset: 0.1,
                    yOffset: 0.1,
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy();
        };
    }, [vantaEffect]);

    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section ref={vantaRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-0" />

                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg"
                    >
                        A Different Way to <span className="text-gradient-green-glow">Split Water</span>
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-12 md:py-20 bg-white text-center border-b border-gray-100">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed font-light">
                            Hydrogen production has traditionally relied on applying <span className="text-gray-900 font-semibold">constant electrical force</span> to water molecules until they separate. While effective, this approach is inherently <span className="text-brand-primary font-semibold">energy-intensive</span> and constrained by well-understood physical limits.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                            <Link href="/contact">
                                <Button variant="primary" size="lg" className="min-w-[200px]">
                                    Request Technical Overview
                                </Button>
                            </Link>
                            <Link href="/partnership">
                                <Button variant="outline" size="lg" className="min-w-[200px]">
                                    Engage as a Partner <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. The Shift / Core Concept */}
            <section className="py-12 md:py-20 bg-brand-light border-b border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight tracking-tight">
                                From Constant Force to <br /><span className="text-gradient-green-glow">Targeted Energy</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 font-light">
                                The technology platform under development takes a fundamentally different path. Instead of steady voltage, it uses controlled electrical excitation within a cold plasma environment to interact with water in a more precise and efficient way.
                            </p>
                            <p className="text-base text-brand-secondary font-medium border-l-4 border-brand-primary pl-4 py-1">
                                This shift—from constant force to targeted energy delivery—is the foundation of the platform.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
                                <img
                                    src="/Technology/A New Hydrogen Production Architecture2.webp"
                                    alt="Targeted Energy Delivery"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. What Is Cold Plasma */}
            <section className="py-12 md:py-20 bg-white border-b border-gray-100">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">What Is <span className="text-gradient-green-glow">Cold Plasma?</span></h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                            Most people are familiar with solids, liquids, and gases. Plasma is often called the fourth state of matter.
                            Cold plasma is created when electricity energizes a gas or vapor without heating it to extreme temperatures.
                            Instead of making everything hot, only a small fraction of particles—mainly electrons—carry high energy.
                            Because the bulk material stays near room temperature, it is called cold plasma.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white max-w-4xl mx-auto">
                        <img
                            src="/Technology/Plasma_Animation_AdobeStock_165519357.gif"
                            alt="Cold Plasma Animation"
                            className="w-full h-auto object-contain max-h-[500px] mx-auto"
                        />
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Analogy & How Creation */}
            <section className="py-12 md:py-20 bg-brand-light border-b border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Analogy */}
                        <div className="flex flex-col h-full">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 tracking-tight">
                                A Simple <span className="text-gradient-green-glow">Analogy</span>
                            </h3>

                            <div className="space-y-4">
                                {/* Traditional */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 transition-all hover:shadow-md relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Scale className="w-16 h-16 text-gray-400" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm relative z-10 text-gray-400">
                                        <Scale className="w-4 h-4" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-gray-500 mb-1 uppercase tracking-wide text-xs">Traditional Electrolysis</h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">Like pushing a heavy object continuously against friction—requiring constant, high-intensity force to maintain any movement.</p>
                                    </div>
                                </div>

                                {/* Cold Plasma */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-brand-primary/20 shadow-[0_4px_15px_rgba(0,213,99,0.05)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Zap className="w-16 h-16 text-brand-primary" />
                                    </div>

                                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 relative z-10 text-brand-primary">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-brand-primary mb-1 uppercase tracking-wide text-xs flex items-center gap-2">
                                            Cold Plasma Tech <span className="bg-brand-primary/10 px-1.5 py-0.5 rounded text-[9px]">REVOLUTIONARY</span>
                                        </h4>
                                        <p className="text-gray-800 leading-relaxed text-sm font-medium">Like tapping the object at exactly the right resonant frequency—using precise, minimal energy to create massive separation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How Created */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 tracking-tight">How Cold Plasma Is <span className="text-gradient-green-glow">Created</span></h3>
                            <p className="text-gray-600 mb-6 text-base font-light">
                                Cold plasma is created using carefully controlled electrical pulses rather than heat or combustion.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Electricity is applied in short, controlled bursts",
                                    "These pulses create localized electrical discharges",
                                    "The surrounding environment remains at moderate temperature"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_8px_rgba(0,213,99,0.6)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                                <img
                                    src="/Technology/How Cold Plasma Is Created.jpg"
                                    alt="How Cold Plasma Is Created"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Distributed Architecture */}
            <section className="py-12 md:py-20 bg-white border-b border-gray-100">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight tracking-tight">
                                Distributed <span className="text-gradient-green-glow">Interaction Architecture</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed font-light">
                                Instead of relying on a few fixed reaction points, the platform operates with a distributed internal interaction structure.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Energy effects are spread throughout the reaction volume",
                                    "Electric fields are used more efficiently",
                                    "The process remains stable and uniform"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-brand-primary/20 rounded-xl shadow-[0_2px_10px_rgba(0,213,99,0.05)] hover:border-brand-primary/40 transition-colors">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_8px_rgba(0,213,99,0.5)] shrink-0" />
                                        <span className="font-medium text-gray-800 text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src="/Technology/Distributed Interaction Architecture.png"
                                alt="Distributed Interaction Architecture"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Industrial Conditions */}
            <section className="py-12 md:py-20 bg-brand-light border-b border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-brand-primary"></span>
                                <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Industrial Design</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">Designed for <span className="text-gradient-green-glow">Industrial Conditions</span></h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg font-light">
                                The platform is engineered to operate under moderate temperatures and pressures, avoiding the extremes associated with some alternative hydrogen pathways.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {["Simpler balance-of-plant", "Easier system integration", "Improved reliability", "Modular deployment"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-gray-700 text-sm md:text-base">
                                        <div className="p-0.5 rounded-full bg-brand-primary/10 text-brand-primary">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src="/Technology/Designed for Industrial Operating Conditions.png"
                                alt="Industrial Operating Conditions"
                                className="w-full h-auto rounded-2xl border border-gray-200 shadow-xl hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 8. Scalability */}
            <section className="py-12 md:py-20 bg-white border-b border-gray-100">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-8 bg-brand-primary"></span>
                                <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Scalability</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">Scalability Through <span className="text-gradient-green-glow">Modularity</span></h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg font-light">
                                Rather than scaling through single, oversized units, the system scales by replicating standardized modules. Scalability is treated as an engineering requirement from the outset.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Preserves performance as capacity increases",
                                    "Reduces construction and commissioning risk",
                                    "Enables phased deployment aligned with demand"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:bg-white transition-all shadow-sm text-sm md:text-base">
                                        <Scale className="w-4 h-4 text-brand-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src="/Technology/Scalability & Modularity.webp"
                                alt="Scalability"
                                className="w-full h-auto rounded-2xl border border-gray-200 shadow-xl hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 9. Readiness & Trust */}
            <section className="py-12 md:py-20 bg-brand-light border-t border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Readiness */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-brand-primary/10 hover:shadow-[0_4px_30px_rgba(0,213,99,0.08)] transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-1.5 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <ShieldCheck className="w-5 h-5" />
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Readiness & Validation</h3>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base font-light">
                                The platform is progressing through a staged development and validation roadmap aligned with industrial expectations.
                            </p>
                            <div className="rounded-xl overflow-hidden mb-6 shadow-sm">
                                <img
                                    src="/Technology/Technology Readiness & Validation Path.jpg"
                                    alt="Readiness Path"
                                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <ul className="space-y-2">
                                {["Pilot-scale operation", "Performance validation under real conditions", "Independent technical and economic review"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Trust */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-brand-primary/10 hover:shadow-[0_4px_30px_rgba(0,213,99,0.08)] transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-1.5 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Check className="w-5 h-5" />
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Built for Trust</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base font-light">
                                The technology is being developed to withstand scrutiny from industrial customers, government stakeholders, and infrastructure investors.
                            </p>
                            <div className="rounded-xl overflow-hidden mb-6 shadow-sm">
                                <img
                                    src="/Technology/Designed for Industrial Trust.png"
                                    alt="Industrial Trust"
                                    className="w-full h-40 object-contain bg-gray-50"
                                />
                            </div>
                            <p className="text-sm text-brand-secondary italic border-l-2 border-brand-primary/30 pl-4 py-2 bg-brand-light rounded-r-lg">
                                "Performance and efficiency are intended to be measurable, auditable, and verifiable, not theoretical."
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 10. CTA Section */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-16 px-6 md:px-12 group">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/Technology/hero%20section.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">Engage on the Technology</h2>
                            <p className="text-white/95 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                                This platform is intended for partners who prioritize deployability, efficiency, and long-term economics.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                <Link href="/contact" className="w-full md:w-auto">
                                    <button className="w-full md:w-auto px-8 py-3.5 bg-white text-brand-primary font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-base md:text-lg">
                                        Request Technical Overview
                                    </button>
                                </Link>
                                <Link href="/partnership" className="w-full md:w-auto">
                                    <button className="w-full md:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-base md:text-lg flex items-center justify-center gap-2">
                                        Engage as a Partner <ArrowRight className="w-5 h-5" />
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
