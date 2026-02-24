"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";

export default function EconomicsPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/economics/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Hydrogen Economics Is an <span className="text-brand-primary">Energy Problem</span>
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
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            Across all hydrogen production pathways, <span className="font-bold text-gray-900">electricity consumption</span> is the single largest determinant of cost.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            Conventional water electrolysis typically requires ~50 kWh of electricity per kilogram of hydrogen, which directly translates into high operating costs and sensitivity to power prices.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. The Cost of Production */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/economics/Conventional Hydrogen Cost Structure.avif"
                imageAlt="Cost Structure"
                subtitle="OPEX Challenge"
                title="The Cost of Production"
                content={
                    <>
                        <p>
                            For green hydrogen to compete with fossil-derived inputs, the Levelized Cost of Hydrogen (LCOH) must drop significantly. Currently, <strong>70-80% of the LCOH</strong> for electrolytic hydrogen is purely the cost of electricity.
                        </p>
                        <p>
                            Even with free renewable energy, the capital cost (CAPEX) of electrolyzers and the low utilization rates of intermittent power sources make the economics challenging.
                        </p>
                    </>
                }
            />

            {/* 4. The Capital Problem */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/economics/Capital%20Efficiency%20%26%20System%20Simplicity.jpg"
                imageAlt="Capital Efficiency"
                unoptimized
                subtitle="CAPEX Barrier"
                title="The Capital Problem"
                content={
                    <>
                        <p>
                            Traditional electrolyzers are complex, material-intensive machines that require expensive stacks, membranes, and catalysts.
                        </p>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                <span>High reliance on Platinum Group Metals (PGMs)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                <span>Complex balance of plant (BOP)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                <span>Design life limitations due to membrane degradation</span>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 4b. Preliminary CapEx Assumptions */}
            <section className="py-[var(--spacing-section)] bg-gray-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,213,99,0.08)_0%,_transparent_60%)]" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-12">
                            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-primary mb-4">
                                Subject to Pilot Validation
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 tracking-tight leading-[1.1]">
                                Preliminary CapEx Assumptions
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
                                LCOH figures are only credible when capex assumptions are stated clearly. The following inputs are confirmed by the technical team and used in the model.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl mb-8">
                            <table className="w-full min-w-[600px] text-sm">
                                <thead>
                                    <tr className="bg-brand-primary/10 border-b border-brand-primary/30">
                                        {["Item", "Assumption", "Note / Status"].map((h) => (
                                            <th key={h} className="px-6 py-4 text-left font-bold text-brand-primary tracking-wider text-xs uppercase">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            item: "1 kg/hr base module build cost",
                                            assumption: "Detailed in Use of Funds (Section 13)",
                                            note: "1-year build timeline; costs fully budgeted",
                                            highlight: false,
                                        },
                                        {
                                            item: "5–10 kg/hr multi-module pilot",
                                            assumption: "Detailed in Use of Funds (Section 13)",
                                            note: "1-year build timeline; covered within Phase 1 budget",
                                            highlight: false,
                                        },
                                        {
                                            item: "Electricity cost (India)",
                                            assumption: "$0.035–$0.050/kWh",
                                            note: "Solar/wind PPA rates; state-level agreements",
                                            highlight: true,
                                        },
                                        {
                                            item: "Estimated reactor service life",
                                            assumption: "Minimum 5 years",
                                            note: "Assumed for modelling; to be validated at pilot stage",
                                            highlight: true,
                                        },
                                        {
                                            item: "Depreciation basis",
                                            assumption: "10 years straight-line",
                                            note: "Standard industrial assumption; capex-sensitive to actual life",
                                            highlight: true,
                                        },
                                        {
                                            item: "Module CapEx per kW",
                                            assumption: "$150–$250/kW",
                                            note: "Estimated; to be refined post-pilot build",
                                            highlight: true,
                                        },
                                        {
                                            item: "Annual maintenance & consumables",
                                            assumption: "$0.15–0.25/kg H₂",
                                            note: "Includes catalyst replacement; based on lab data",
                                            highlight: true,
                                        },
                                    ].map((row, i) => (
                                        <tr
                                            key={i}
                                            className={`border-b border-white/5 transition-colors hover:bg-brand-primary/5 ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
                                        >
                                            <td className="px-6 py-4 font-semibold text-white">{row.item}</td>
                                            <td className={`px-6 py-4 font-semibold ${row.highlight ? "text-brand-primary" : "text-gray-300"}`}>{row.assumption}</td>
                                            <td className="px-6 py-4 text-gray-400 text-sm">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>

                        <motion.p variants={fadeUp} className="text-center text-gray-500 text-sm italic max-w-3xl mx-auto">
                            Reactor durability beyond 5 years has not been demonstrated. The model uses 5 years as the conservative baseline. If actual service life reaches 8 to 10 years, LCOH improves materially. Apply appropriate uncertainty to all capex-dependent outputs until the pilot provides data.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 5. Energy Efficiency */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/economics/Radical Efficiency.png"
                imageAlt="OPEX Advantage"
                subtitle="The Solution"
                title="Radical Efficiency"
                content={
                    <>
                        <p>
                            Gigacore addresses the root cause of high LCOH by fundamentally reducing the energy required to split water.
                        </p>
                        <p className="border-l-4 border-brand-primary pl-4 py-2 font-medium text-brand-secondary">
                            By bypassing the thermodynamic barriers of conventional electrolysis, our platform targets a production consumption of <strong>&lt; 35 kWh/kg</strong>.
                        </p>
                        <p>
                            This 30% reduction in energy intensity effectively decouples hydrogen production from peak power volatility.
                        </p>
                    </>
                }
            />

            {/* 6. LCOH Impact */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/economics/Application-Level Economic Impact.webp"
                imageAlt="Economic Impact"
                subtitle="Economic Viability"
                title="A Path to $2/kg"
                content={
                    <>
                        <p>
                            When high efficiency is combined with low-cost, modular hardware, the pathway to $2/kg green hydrogen becomes an engineering reality rather than a forecast.
                        </p>
                        <p>
                            This price point effectively unlocks heavy industry applications—steel, shipping, and chemicals—that cannot switch to hydrogen at current prices of $4-6/kg.
                        </p>
                    </>
                }
            />

            {/* 7. Scalability */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/economics/Scale.jpg"
                imageAlt="Industrial Scale"
                subtitle="Scalability"
                title="Engineered for Scale"
                content={
                    <>
                        <p>
                            Our technology is not just about efficiency; it is about scalability. The system is designed to be modular and factory-produced, allowing for rapid deployment and massive scaling.
                        </p>
                        <p>
                            By moving away from bespoke, site-built plants to standardized, modular units, we can drive down CAPEX and ensure consistent quality and performance.
                        </p>
                    </>
                }
            />


            {/* 7b. Electricity Cost Sensitivity Analysis */}
            <section className="py-[var(--spacing-section)] bg-gray-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,213,99,0.10)_0%,_transparent_60%)]" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {/* Header */}
                        <motion.div variants={fadeUp} className="text-center mb-12">
                            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-primary mb-4">
                                Modelled Cost Structure · Pending Pilot Certification
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 tracking-tight leading-[1.1]">
                                Electricity Cost Sensitivity Analysis
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
                                How total LCOH shifts across electricity price scenarios — at both observed (30 kWh/kg) and target (25 kWh/kg) efficiency levels.
                            </p>
                        </motion.div>

                        {/* Key Stats Row */}
                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            {[
                                { value: "$4.40/kg", label: "Conventional Electrolyser LCOH", sub: "Industry baseline (PEM/Alkaline)", dim: true },
                                { value: "<$2.75/kg", label: "Target LCOH at Pilot Validation", sub: "Pilot-certified cost goal", dim: false },
                                { value: "20–45%", label: "Efficiency Advantage (Observed)", sub: "Subject to 1,000-hr pilot confirmation", dim: false },
                            ].map((stat, i) => (
                                <div key={i} className={`rounded-2xl p-6 border text-center ${stat.dim
                                    ? "bg-white/[0.02] border-white/10"
                                    : "bg-brand-primary/10 border-brand-primary/30"
                                    }`}>
                                    <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.dim ? "text-gray-400" : "text-brand-primary"
                                        }`}>{stat.value}</div>
                                    <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                                    <div className="text-gray-500 text-xs">{stat.sub}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Sensitivity Table */}
                        <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl mb-6">
                            <table className="w-full min-w-[580px] text-sm">
                                <thead>
                                    <tr className="bg-brand-secondary border-b border-white/20">
                                        <th className="px-6 py-4 text-left font-bold text-white tracking-wider text-xs uppercase">Electricity Price</th>
                                        {["3¢/kWh", "5¢/kWh", "7¢/kWh", "10¢/kWh"].map((h) => (
                                            <th key={h} className="px-5 py-4 text-center font-bold text-brand-primary tracking-wider text-xs uppercase">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            label: "Electricity Cost (30 kWh/kg observed)",
                                            values: ["$0.90/kg", "$1.50/kg", "$2.10/kg", "$3.00/kg"],
                                            highlight: false,
                                        },
                                        {
                                            label: "Non-Electric Costs (pilot estimate)",
                                            values: ["$0.55/kg", "$0.55/kg", "$0.55/kg", "$0.55/kg"],
                                            highlight: false,
                                        },
                                        {
                                            label: "TOTAL LCOH (30 kWh/kg basis)",
                                            values: ["~$1.45/kg", "$2.05/kg", "$2.65/kg", "$3.55/kg"],
                                            highlight: true,
                                        },
                                        {
                                            label: "At 25 kWh/kg target (if achieved)",
                                            values: ["~$1.30/kg", "~$1.80/kg", "$2.29/kg", "$3.00/kg"],
                                            highlight: false,
                                        },
                                        {
                                            label: "Meets <$2.75/kg without subsidy?",
                                            values: ["Yes", "Yes (if 25 kWh/kg)", "Yes (30 kWh/kg)", "No subsidy required"],
                                            highlight: false,
                                            isText: true,
                                        },
                                    ].map((row, i) => (
                                        <tr
                                            key={i}
                                            className={`border-b border-white/5 transition-colors ${row.highlight
                                                ? "bg-brand-primary/10 hover:bg-brand-primary/15"
                                                : i % 2 === 0 ? "bg-white/[0.02] hover:bg-white/[0.04]" : "bg-transparent hover:bg-white/[0.03]"
                                                }`}
                                        >
                                            <td className={`px-6 py-4 font-semibold ${row.highlight ? "text-white" : "text-gray-300"
                                                }`}>{row.label}</td>
                                            {row.values.map((val, j) => (
                                                <td key={j} className={`px-5 py-4 text-center font-bold ${row.highlight
                                                    ? "text-brand-primary text-base"
                                                    : row.isText
                                                        ? (val.startsWith("Yes") ? "text-brand-primary" : "text-gray-400")
                                                        : "text-gray-300"
                                                    }`}>{val}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>

                        {/* Disclaimer */}
                        <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                <span className="text-brand-primary font-semibold">† </span>
                                Figures marked with † are contingent on achieving 25 kWh/kg at pilot scale and sustaining 1,000-hour continuous operation. These are <strong className="text-white">NOT</strong> certified cost claims and should not be represented as such to third parties. All LCOH figures are modelled estimates based on 30 to 35 kWh/kg observed in lab conditions. Third-party certification is a pilot milestone. Treat these as illustrative inputs, not validated outputs.
                            </p>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 8. CTA Section */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Built for Market Reality</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        See how this economic advantage translates into market opportunities.
                    </p>
                    <Link href="/market">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Explore the Market
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>
        </main>
    );
}
