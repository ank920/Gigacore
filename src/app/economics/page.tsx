"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, TrendingDown, Zap, Scale, Factory, CheckCircle, BarChart3, FileText, PieChart } from "lucide-react";

export default function EconomicsPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/economics/hero%20section.jpg')] bg-cover bg-center" />
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
                            Hydrogen Economics Is an <span className="text-brand-blue">Energy Problem</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            Across all hydrogen production pathways, <span className="text-brand-green font-bold">electricity consumption</span> is the single largest determinant of cost. Conventional water electrolysis typically requires ~50 kWh of electricity per kilogram of hydrogen, which directly translates into high operating costs and sensitivity to power prices.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            Gigacore Energy’s economics are anchored in a different physical regime: <span className="text-brand-blue font-bold">cold-plasma–enabled water dissociation</span>, which materially lowers the electrical energy required per unit of hydrogen produced.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-3 bg-brand-blue text-white hover:bg-sky-600 rounded-full font-bold transition-all duration-300 shadow-xl text-lg min-w-[200px]">
                                    Request Investor Deck
                                </button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Baseline Cost Structure */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/economics/Conventional%20Hydrogen%20Cost%20Structure.avif"
                                    alt="Conventional Hydrogen Cost Structure"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-2 italic text-center">Enervoxa - Water to Hydrogen Wh...</p>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Baseline: Conventional Hydrogen Cost Structure</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Industry benchmarks referenced in the Enervoxa materials indicate:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <Zap className="w-6 h-6 text-brand-blue shrink-0" />
                                    <span className="text-gray-700"><strong>Energy consumption:</strong> ~50 kWh/kg H₂ for traditional electrolyzers</span>
                                </li>
                                <li className="flex gap-4">
                                    <TrendingDown className="w-6 h-6 text-gray-500 shrink-0" />
                                    <span className="text-gray-700"><strong>Resulting production cost:</strong> approximately $4.40/kg H₂, assuming typical industrial power prices</span>
                                </li>
                                <li className="flex gap-4">
                                    <PieChart className="w-6 h-6 text-brand-green shrink-0" />
                                    <span className="text-gray-700"><strong>Electricity contribution:</strong> the dominant share of LCOH</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                                <p className="text-gray-600 italic">
                                    Even with reductions in electrolyzer CAPEX, overall hydrogen cost remains constrained by this energy intensity.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 3. Demonstrated Energy Reduction */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-sm overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="/economics/Demonstrated%20Energy%20Reduction.jpg"
                                    alt="Demonstrated Energy Reduction"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-2 italic text-center">Revolutionizing_Global_Hydrogen…</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Proven Performance</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Gigacore Energy: Demonstrated Energy Reduction</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                According to the technical documentation, the cold-plasma process has:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-4xl font-bold text-brand-blue mb-2">~22</div>
                                    <div className="text-sm text-gray-500 font-bold uppercase">kWh/kg H₂</div>
                                    <p className="text-gray-600 mt-2">Already demonstrated in operating demo system</p>
                                </div>
                                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-4xl font-bold text-brand-green mb-2">~15</div>
                                    <div className="text-sm text-gray-500 font-bold uppercase">kWh/kg H₂</div>
                                    <p className="text-gray-600 mt-2">Targeted reduction next optimization milestone</p>
                                </div>
                            </div>
                            <p className="text-xl font-medium text-gray-800">
                                Compared to ~50 kWh/kg H₂ for conventional electrolysis, this represents a <span className="text-brand-green font-bold">~70% reduction</span> in electrical energy input.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. OPEX Implication */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Implication for Operating Cost (OPEX)</h2>
                        <p className="text-xl text-gray-600">
                            Because electricity dominates hydrogen OPEX, the energy reduction has a direct and linear economic effect.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-sm overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    src="/economics/Implication%20for%20Operating%20Cost%20(OPEX).avif"
                                    alt="OPEX Implication"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <div className="bg-brand-blue/5 p-8 rounded-lg border border-brand-blue/10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Model Estimates</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span className="text-gray-600">Conventional Electrolysis</span>
                                        <span className="text-xl font-bold text-gray-400">~$4.40/kg</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-brand-green/30 pb-2">
                                        <span className="text-gray-900 font-medium">Gigacore (at ~15 kWh/kg)</span>
                                        <span className="text-2xl font-bold text-brand-green">~$1.37/kg</span>
                                    </li>
                                </ul>
                                <div className="mt-6 flex items-center gap-2 text-brand-green font-bold">
                                    <TrendingDown className="w-5 h-5" />
                                    <span>~68.8% reduction in production cost</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 italic">
                                These figures are presented as modeled outcomes based on demonstrated and targeted energy performance, not guaranteed commercial pricing.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Capital Efficiency & Scale */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Capital Efficiency */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                                <Factory className="w-6 h-6 text-brand-blue" /> Capital Efficiency & System Architecture
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Beyond operating cost, the materials highlight several system-level economic advantages:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                                    Lower operating temperatures (60–80°C vs hundreds of °C)
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                                    Compact reactor footprint, ~70% smaller than electrolyzers
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                                    Modular units designed at 25–50 kg/hour scale
                                </li>
                            </ul>
                            <div className="rounded-sm overflow-hidden shadow-md border border-gray-200">
                                <img
                                    src="/economics/Capital%20Efficiency%20&%20System%20Simplicity.webp"
                                    alt="Capital Efficiency"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Scale Economics */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                                <Scale className="w-6 h-6 text-brand-green" /> Scale Economics
                            </h3>
                            <p className="text-gray-600 mb-6">
                                The system is designed to scale through replication of standardized modules rather than single large units:
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">25–50</div>
                                        <div className="text-xs text-gray-500 uppercase">kg/hour per module</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">250–500</div>
                                        <div className="text-xs text-gray-500 uppercase">kg/hour (10-20 modules)</div>
                                    </div>
                                </div>
                                <p className="text-center text-brand-blue font-medium mt-4">Scaling preserves energy performance</p>
                            </div>
                            <div className="rounded-sm overflow-hidden shadow-md border border-gray-200">
                                <img
                                    src="/economics/Scale%20Economics.jpg"
                                    alt="Scale Economics"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Application Impact */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                                <img
                                    src="/economics/Application-Level%20Economic%20Impact2.webp"
                                    alt="Application Level Impact"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Application-Level Economic Impact</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Lower hydrogen production cost directly enables downstream markets that are currently uneconomic at scale. The documents explicitly position <span className="font-bold text-gray-900">sub-$2/kg hydrogen</span> as the inflection point for industrial adoption.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-brand-green/10 rounded-lg border border-brand-green/20">
                                    <h4 className="font-bold text-brand-green mb-1">Green Ammonia</h4>
                                    <p className="text-gray-700 text-sm">Targeting sub-$400–450/ton parity thresholds</p>
                                </div>
                                <div className="p-4 bg-brand-blue/10 rounded-lg border border-brand-blue/20">
                                    <h4 className="font-bold text-brand-blue mb-1">Industrial Substitution</h4>
                                    <p className="text-gray-700 text-sm">Refining and chemicals replacement</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-800 mb-1">On-site Generation</h4>
                                    <p className="text-gray-700 text-sm">Reducing logistics and compression costs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. Validation & Positioning */}
            <section className="py-24 bg-gray-900 text-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Validation Status</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <BarChart3 className="w-6 h-6 text-brand-blue shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Grounded Data</h4>
                                        <p className="text-gray-400 text-sm">Operating demo plant data (~22 kWh/kg achieved) and engineering roadmap toward ~15 kWh/kg.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <FileText className="w-6 h-6 text-brand-green shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Future Validation</h4>
                                        <p className="text-gray-400 text-sm">Larger pilot deployments, long-duration operation, and third-party review.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold mb-4">Economic Positioning</h3>
                                <p className="text-gray-400 mb-4">
                                    Gigacore Energy’s economics are not based on speculative subsidies or extreme power price assumptions. They are driven by:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Measured energy reduction</span>
                                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Simplified architecture</span>
                                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Modular scale</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-gray-700">
                                <img
                                    src="/economics/Validation%20Status.jpg"
                                    alt="Validation Status"
                                    className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                                />
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

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Engage on Economics</h2>
                            <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                Gigacore Energy engages with partners seeking data-driven evaluation.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <Link href="/contact">
                                    <button className="px-10 py-5 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-xl min-w-[260px]">
                                        Request Economics Brief
                                    </button>
                                </Link>
                                <Link href="/partnership">
                                    <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-xl min-w-[260px] flex items-center justify-center gap-2">
                                        Discuss Pilot Deployment <ArrowRight className="w-6 h-6" />
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
