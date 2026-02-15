"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, TrendingDown, Zap, Scale, Factory, CheckCircle, BarChart3, FileText, PieChart } from "lucide-react";
import Button from "@/components/ui/Button";

export default function EconomicsPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/economics/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        Hydrogen Economics Is an <span className="text-gradient-green-glow">Energy Problem</span>
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
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Across all hydrogen production pathways, <span className="text-brand-primary font-bold">electricity consumption</span> is the single largest determinant of cost. Conventional water electrolysis typically requires ~50 kWh of electricity per kilogram of hydrogen, which directly translates into high operating costs and sensitivity to power prices.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            Gigacore Energy’s economics are anchored in a different physical regime: <span className="text-brand-primary font-bold">cold-plasma–enabled water dissociation</span>, which materially lowers the electrical energy required per unit of hydrogen produced.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact">
                                <Button variant="primary" size="lg" className="min-w-[240px]">
                                    Request Investor Deck
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Baseline Cost Structure */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20">
                                <img
                                    src="/economics/Conventional%20Hydrogen%20Cost%20Structure.avif"
                                    alt="Conventional Hydrogen Cost Structure"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">Baseline: Conventional <span className="text-gradient-green-glow">Hydrogen Cost Structure</span></h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Industry benchmarks referenced in the Enervoxa materials indicate:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700"><strong>Energy consumption:</strong> ~50 kWh/kg H₂ for traditional electrolyzers</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                                        <TrendingDown className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700"><strong>Resulting production cost:</strong> approximately $4.40/kg H₂, assuming typical industrial power prices</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                                        <PieChart className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700"><strong>Electricity contribution:</strong> the dominant share of LCOH</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-brand-secondary shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                                <p className="text-gray-600 italic">
                                    Even with reductions in electrolyzer CAPEX, overall hydrogen cost remains constrained by this energy intensity.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Demonstrated Energy Reduction */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/economics/Demonstrated%20Energy%20Reduction.jpg"
                                    alt="Demonstrated Energy Reduction"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Proven Performance</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Gigacore Energy: Demonstrated <span className="text-gradient-green-glow">Energy Reduction</span></h2>
                            <p className="text-lg text-gray-600 mb-6">
                                According to the technical documentation, the cold-plasma process has:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-primary/30 transition-colors">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">~22</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">kWh/kg H₂</div>
                                    <p className="text-gray-600 mt-3 text-sm font-medium">Already demonstrated in operating demo system</p>
                                </div>
                                <div className="p-6 bg-brand-primary/5 rounded-2xl shadow-[0_4px_20px_rgba(0,213,99,0.1)] border border-brand-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-3 opacity-10">
                                        <Zap className="w-16 h-16 text-brand-primary" />
                                    </div>
                                    <div className="text-4xl font-bold text-brand-primary mb-2">~15</div>
                                    <div className="text-xs text-brand-primary/80 font-bold uppercase tracking-wider">kWh/kg H₂</div>
                                    <p className="text-gray-700 mt-3 text-sm font-medium relative z-10">Targeted reduction next optimization milestone</p>
                                </div>
                            </div>
                            <p className="text-xl font-medium text-gray-800">
                                Compared to ~50 kWh/kg H₂ for conventional electrolysis, this represents a <span className="text-brand-primary font-bold">~70% reduction</span> in electrical energy input.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. OPEX Implication */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Implication for <span className="text-gradient-green-glow">Operating Cost (OPEX)</span></h2>
                        <p className="text-xl text-gray-600">
                            Because electricity dominates hydrogen OPEX, the energy reduction has a direct and linear economic effect.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/economics/Implication%20for%20Operating%20Cost%20(OPEX).avif"
                                    alt="OPEX Implication"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-brand-primary/10 shadow-[0_10px_40px_rgba(0,213,99,0.08)]">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Model Estimates</h3>
                                <ul className="space-y-6">
                                    <li className="flex justify-between items-center border-b border-gray-100 pb-4">
                                        <span className="text-gray-600 font-medium">Conventional Electrolysis</span>
                                        <span className="text-xl font-bold text-gray-400">~$4.40/kg</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-brand-primary/10 pb-4">
                                        <span className="text-gray-900 font-bold">Gigacore (at ~15 kWh/kg)</span>
                                        <span className="text-2xl font-bold text-brand-primary">~$1.37/kg</span>
                                    </li>
                                </ul>
                                <div className="mt-8 flex items-center gap-3 text-brand-primary font-bold bg-brand-primary/5 p-4 rounded-xl">
                                    <TrendingDown className="w-6 h-6" />
                                    <span className="text-lg">~68.8% reduction in production cost</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 italic pl-4 border-l-2 border-gray-200">
                                These figures are presented as modeled outcomes based on demonstrated and targeted energy performance, not guaranteed commercial pricing.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Capital Efficiency & Scale */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-stretch">
                        {/* Capital Efficiency */}
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Factory className="w-6 h-6" />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900">Capital Efficiency & System Architecture</h3>
                            </div>

                            <p className="text-gray-600 mb-6 text-lg">
                                Beyond operating cost, the materials highlight several system-level economic advantages:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Lower operating temperatures (60–80°C vs hundreds of °C)",
                                    "Compact reactor footprint, ~70% smaller than electrolyzers",
                                    "Modular units designed at 25–50 kg/hour scale"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                        <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mt-auto h-72 w-full">
                                <img
                                    src="/economics/Capital%20Efficiency%20&%20System%20Simplicity.webp"
                                    alt="Capital Efficiency"
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Scale Economics */}
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                                    <Scale className="w-6 h-6" />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900">Scale Economics</h3>
                            </div>
                            <p className="text-gray-600 mb-6 text-lg">
                                The system is designed to scale through replication of standardized modules rather than single large units:
                            </p>
                            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-brand-primary/10 mb-8 hover:shadow-[0_4px_20px_rgba(0,213,99,0.08)] transition-all">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                                    <div className="relative">
                                        <div className="text-3xl font-bold text-gray-900 mb-1">25–50</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wide">kg/hour per module</div>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200 hidden sm:block"></div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">250–500</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wide">kg/hour (10-20 modules)</div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-brand-primary font-bold">Scaling preserves energy performance</p>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mt-auto h-72 w-full">
                                <img
                                    src="/economics/Scale.jpg"
                                    alt="Scale Economics"
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Application Impact */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/economics/Application-Level%20Economic%20Impact2.webp"
                                    alt="Application Level Impact"
                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">Application-Level <span className="text-gradient-green-glow">Economic Impact</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Lower hydrogen production cost directly enables downstream markets that are currently uneconomic at scale. The documents explicitly position <span className="font-bold text-brand-primary">sub-$2/kg hydrogen</span> as the inflection point for industrial adoption.
                            </p>
                            <div className="space-y-4">
                                <div className="p-5 bg-white rounded-xl border border-brand-primary/20 shadow-[0_4px_15px_rgba(0,213,99,0.05)] hover:shadow-[0_4px_20px_rgba(0,213,99,0.1)] transition-all">
                                    <h4 className="font-bold text-brand-primary mb-1">Green Ammonia</h4>
                                    <p className="text-gray-600 text-sm font-medium">Targeting sub-$400–450/ton parity thresholds</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-brand-primary/30 transition-all">
                                    <h4 className="font-bold text-gray-900 mb-1">Industrial Substitution</h4>
                                    <p className="text-gray-600 text-sm font-medium">Refining and chemicals replacement</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-brand-primary/30 transition-all">
                                    <h4 className="font-bold text-gray-900 mb-1">On-site Generation</h4>
                                    <p className="text-gray-600 text-sm font-medium">Reducing logistics and compression costs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Validation & Positioning */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Validation <span className="text-gradient-green-glow">Status</span></h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4 p-6 bg-brand-light rounded-2xl border border-brand-primary/5">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-brand-primary h-fit">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Grounded Data</h4>
                                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">Operating demo plant data (~22 kWh/kg achieved) and engineering roadmap toward ~15 kWh/kg.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-6 bg-brand-light rounded-2xl border border-brand-primary/5">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-brand-primary h-fit">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Future Validation</h4>
                                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">Larger pilot deployments, long-duration operation, and third-party review.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">Economic Positioning</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Gigacore Energy’s economics are not based on speculative subsidies or extreme power price assumptions. They are driven by:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-bold border border-brand-primary/20">Measured energy reduction</span>
                                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-bold border border-brand-primary/20">Simplified architecture</span>
                                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-bold border border-brand-primary/20">Modular scale</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/economics/Validation%20Status.jpg"
                                    alt="Validation Status"
                                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                                />
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
                        <div className="absolute inset-0 bg-[url('/economics/hero%20section.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">Engage on Economics</h2>
                            <p className="text-white/95 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                Gigacore Energy engages with partners seeking data-driven evaluation.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact" className="w-full md:w-auto">
                                    <button className="w-full md:w-auto px-10 py-4 bg-white text-brand-primary font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-lg">
                                        Request Economics Brief
                                    </button>
                                </Link>
                                <Link href="/partnership" className="w-full md:w-auto">
                                    <button className="w-full md:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-lg flex items-center justify-center gap-2">
                                        Discuss Pilot Deployment <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                            </div>

                            <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/90 uppercase tracking-wider">
                                <span>Detailed energy-to-cost translation</span>
                                <span className="opacity-50">•</span>
                                <span>Sensitivity analysis</span>
                                <span className="opacity-50">•</span>
                                <span>Pilot economics</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
