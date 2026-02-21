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
                    <div className="absolute inset-0 bg-[url('/economics/hero%20section.png')] bg-cover bg-center opacity-60" />
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
                imageSrc="/economics/Capital Efficiency & System Simplicity.webp"
                imageAlt="Capital Efficiency"
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
                title="A Path to $1/kg"
                content={
                    <>
                        <p>
                            When high efficiency is combined with low-cost, modular hardware, the pathway to $1/kg green hydrogen becomes an engineering reality rather than a forecast.
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
