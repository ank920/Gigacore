"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import * as THREE from "three";
// @ts-ignore
import HALO from "vanta/dist/vanta.halo.min";
import SplitSection from "@/components/ui/SplitSection";

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
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-lg"
                    >
                        A Different Way to <span className="text-brand-primary">Split Water</span>
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-[calc(var(--spacing-section)*1.5)] bg-white text-center">
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
                            className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-gray-800 mb-12 max-w-4xl"
                        >
                            Hydrogen production has traditionally relied on applying <span className="text-[#001F1B] font-bold">constant electrical force</span>. While effective, this approach is inherently <span className="text-brand-primary font-bold">energy-intensive</span>.
                        </motion.h2>

                        <motion.div variants={fadeUp}>
                            <Link href="/economics">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    See the Economics
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. The Shift / Core Concept */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/A New Hydrogen Production Architecture2.webp"
                imageAlt="Targeted Energy Delivery"
                subtitle="Core Concept"
                title="From Constant Force to Targeted Energy"
                content={
                    <>
                        <p>
                            The technology platform under development takes a fundamentally different path. Instead of steady voltage, it uses controlled electrical excitation within a cold plasma environment to interact with water in a more precise and efficient way.
                        </p>
                        <p className="border-l-4 border-brand-primary pl-4 py-2 font-medium text-brand-secondary">
                            This shift—from constant force to targeted energy delivery—is the foundation of the platform.
                        </p>
                    </>
                }
            />

            {/* 4. What Is Cold Plasma */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Technology/Plasma_Animation_AdobeStock_165519357.gif"
                imageAlt="Cold Plasma Animation"
                subtitle="The Medium"
                title="What Is Cold Plasma?"
                unoptimized={true}
                content={
                    <>
                        <p>
                            Most people are familiar with solids, liquids, and gases. Plasma is often called the fourth state of matter.
                            Cold plasma is created when electricity energizes a gas or vapor without heating it to extreme temperatures.
                        </p>
                        <p>
                            Instead of making everything hot, only a small fraction of particles—mainly electrons—carry high energy.
                            Because the bulk material stays near room temperature, it is called cold plasma.
                        </p>
                    </>
                }
            />

            {/* 5. Analogy */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/Traditional Electrolysis.png"
                imageAlt="Resonance and Precision"
                subtitle="Comparative Analysis"
                title="A Simple Analogy: Resonance & Precision"
                content={
                    <>
                        <p className="font-semibold text-gray-800">
                            Traditional Electrolysis: Brute Force
                        </p>
                        <p className="mb-4 text-sm text-gray-500">
                            Like pushing a heavy object continuously against friction—requiring constant, high-intensity force to maintain any movement.
                        </p>

                        <p className="font-semibold text-brand-primary text-[16px] sm:text-[18px]">
                            Cold Plasma: Resonance
                        </p>
                        <p>
                            Like tapping the object at exactly the right resonant frequency—using precise, minimal energy to create massive separation.
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-brand-secondary text-[15px] font-bold uppercase tracking-wider">
                            <span className="p-1 rounded bg-brand-primary/10 text-brand-primary">
                                <Check className="w-4 h-4" />
                            </span>
                            Revolutionary Efficiency
                        </div>
                    </>
                }
            />

            {/* 6. How Created */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Technology/How Cold Plasma Is Created.png"
                imageAlt="How Cold Plasma Is Created"
                subtitle="Process"
                title="How Cold Plasma Is Created"
                content={
                    <>
                        <p>
                            Cold plasma is created using carefully controlled <span className="font-medium text-gray-900">electrical pulses</span> rather than heat or combustion.
                        </p>
                        <ul className="space-y-2 mt-6">
                            {[
                                "Electricity is applied in short, controlled bursts",
                                "These pulses create localized electrical discharges",
                                "The surrounding environment remains at moderate temperature"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 7. Distributed Architecture */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/Distributed Interaction Architecture.png"
                imageAlt="Distributed Interaction Architecture"
                subtitle="Architecture"
                title="Distributed Interaction Architecture"
                content={
                    <>
                        <p>
                            Instead of relying on a few fixed reaction points, the platform operates with a distributed internal interaction structure.
                        </p>
                        <div className="space-y-1.5 mt-6">
                            {[
                                "Energy effects are spread throughout the reaction volume",
                                "Electric fields are used more efficiently",
                                "The process remains stable and uniform"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 p-3 bg-white border border-brand-primary/10 rounded-lg shadow-sm">
                                    <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                                    <span className="font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* 8. Industrial Conditions */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Technology/Designed for Industrial Operating Conditions.png"
                imageAlt="Industrial Operating Conditions"
                subtitle="Industrial Design"
                title="Designed for Industrial Conditions"
                content={
                    <>
                        <p>
                            The platform is engineered to operate under moderate temperatures and pressures, avoiding the extremes associated with some alternative hydrogen pathways.
                        </p>
                        <ul className="grid grid-cols-1 gap-2 mt-6">
                            {["Simpler balance-of-plant", "Easier system integration", "Improved reliability", "Modular deployment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-gray-700">
                                    <div className="p-0.5 rounded-full bg-brand-primary/10 text-brand-primary">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 9. Scalability */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/Scalability Through Modularity.jpeg"
                imageAlt="Scalability"
                subtitle="Scalability"
                title="Scalability Through Modularity"
                content={
                    <>
                        <p>
                            Rather than scaling through single, oversized units, the system scales by replicating standardized modules. Scalability is treated as an engineering requirement from the outset.
                        </p>
                        <ul className="space-y-1 mt-6">
                            {[
                                "Preserves performance as capacity increases",
                                "Reduces construction and commissioning risk",
                                "Enables phased deployment aligned with demand"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium bg-gradient-to-r from-brand-primary/5 to-white p-3 rounded-lg border border-brand-primary/10 shadow-sm">
                                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 10. Readiness */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Technology/Technology Readiness & Validation Path.jpg"
                imageAlt="Technology Readiness"
                subtitle="Validation"
                title="Readiness & Validation"
                content={
                    <>
                        <p>
                            The platform is progressing through a staged development and validation roadmap aligned with industrial expectations.
                        </p>
                        <ul className="space-y-2 mt-6">
                            {["Pilot-scale operation", "Performance validation under real conditions", "Independent technical and economic review"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 font-medium text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 11. Trust */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/Designed for Industrial Trust.jpg"
                imageAlt="Industrial Trust"
                subtitle="Trust"
                title="Built for Trust"
                content={
                    <>
                        <p>
                            The technology is being developed to withstand scrutiny from industrial customers, government stakeholders, and infrastructure investors.
                        </p>
                        <div className="mt-6 p-4 bg-brand-light rounded-xl border-l-4 border-brand-primary">
                            <p className="text-brand-secondary italic text-[15px] sm:text-[16px] leading-[1.5]">
                                "Performance and efficiency are intended to be measurable, auditable, and verifiable, not theoretical."
                            </p>
                        </div>
                    </>
                }
            />

            {/* 12. Alternative Physics Pathway — Lab Validation */}
            <section className="py-[var(--spacing-section)] bg-gray-950 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,213,99,0.12)_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,213,99,0.07)_0%,_transparent_60%)]" />

                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {/* Section Header */}
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-primary mb-4">
                                Lab Validation Status &amp; Pilot Objectives
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Alternative Physics Pathway
                            </h2>
                            <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-[15px] sm:text-[16px] leading-[1.5]">
                                <p>
                                    Conventional electrolysis is constrained by electrochemical thermodynamics. Water splitting has a theoretical minimum of 237 kJ/mol. Real systems add 0.5 to 1.5V of overpotential, pushing energy consumption to 45 to 55 kWh/kg. Twenty years of incremental work has reduced this by 2 to 3% per decade.
                                </p>
                                <p>
                                    GigaCore is investigating a different pathway: non-equilibrium plasma activation to reduce the activation energy for water dissociation. Lab results show 30 to 35 kWh/kg, consistent with a meaningful efficiency advantage. The pilot verifies this at 1 kg/hr scale using defined metrology standards and kill points.
                                </p>
                            </div>
                        </motion.div>

                        {/* Core Technology Architecture Table */}
                        <motion.div variants={fadeUp} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-1 bg-brand-primary/20" />
                                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-primary whitespace-nowrap">
                                    Core Technology Architecture
                                </h3>
                                <div className="h-px flex-1 bg-brand-primary/20" />
                            </div>

                            <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
                                <table className="w-full min-w-[640px] text-sm">
                                    <thead>
                                        <tr className="bg-brand-primary/10 border-b border-brand-primary/30">
                                            {["Component", "GigaCore", "Conventional", "Advantage"].map((h) => (
                                                <th key={h} className="px-5 py-4 text-left font-bold text-brand-primary tracking-wider text-xs uppercase">
                                                    {h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            {
                                                component: "Voltage Approach",
                                                gigacore: "Pulsed (6–15V, variable)",
                                                conventional: "Constant (1.5–3V)",
                                                advantage: "Higher current density at lower average potential",
                                            },
                                            {
                                                component: "Operating Temperature",
                                                gigacore: "Near-ambient (25–60°C)",
                                                conventional: "Elevated (40–80°C)",
                                                advantage: "Reduces cooling costs; improves efficiency",
                                            },
                                            {
                                                component: "Electrode Material",
                                                gigacore: "Aluminium + polymer matrix",
                                                conventional: "Precious metals (Ir, Pt, Ni)",
                                                advantage: "Eliminates supply chain risk; reduces cost volatility",
                                            },
                                            {
                                                component: "Cell Configuration",
                                                gigacore: "Modular stacks (1–5 kg/hr units)",
                                                conventional: "Monolithic (50+ MW cells)",
                                                advantage: "Enables rapid scaling; reduces manufacturing complexity",
                                            },
                                            {
                                                component: "Hydrogen Purity",
                                                gigacore: "99.95%+ on first pass",
                                                conventional: "99.9%+ (extra purification)",
                                                advantage: "Lower downstream purification cost",
                                            },
                                            {
                                                component: "Energy Efficiency",
                                                gigacore: "30–35 kWh/kg observed; 25 kWh/kg target",
                                                conventional: "45–55 kWh/kg typical",
                                                advantage: "20–45% advantage depending on target achievement; pilot validation required",
                                            },
                                        ].map((row, i) => (
                                            <tr
                                                key={i}
                                                className={`border-b border-white/5 transition-colors hover:bg-brand-primary/5 ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
                                            >
                                                <td className="px-5 py-4 font-semibold text-white">{row.component}</td>
                                                <td className="px-5 py-4 text-brand-primary font-medium">{row.gigacore}</td>
                                                <td className="px-5 py-4 text-gray-400">{row.conventional}</td>
                                                <td className="px-5 py-4 text-brand-primary/80 text-sm">{row.advantage}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Bottom two columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                            {/* Lab Validation Status */}
                            <motion.div variants={fadeUp} className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-6 bg-brand-primary rounded-full" />
                                    <h3 className="text-xs font-bold tracking-widest uppercase text-brand-primary">
                                        Lab Validation Status (TRL 5–6)
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-6 ml-5">Confirmed Data Points</p>
                                <ul className="space-y-2">
                                    {[
                                        "Observed energy range: 30–35 kWh/kg across multiple experimental runs (target: 25 kWh/kg at pilot scale)",
                                        "Experiments successfully completed in all planned directions at laboratory level",
                                        "Modular reactor design (1 kg/hr base module) engineered and tested at lab scale",
                                        "Multi-module 5–10 kg/hr pilot configuration scoped and engineered",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-[1.5]">
                                            <div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center shrink-0 mt-0.5 border border-brand-primary/20">
                                                <Check className="w-3 h-3 text-brand-primary" strokeWidth={3} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Metrology & Verification */}
                            <motion.div variants={fadeUp} className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-6 bg-brand-primary rounded-full" />
                                    <h3 className="text-xs font-bold tracking-widest uppercase text-brand-primary">
                                        Metrology &amp; Verification Framework
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-6 ml-5">
                                    Measurement integrity is central to investor credibility. The pilot verification protocol covers the following.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Hydrogen output: calibrated mass flow meters + cross-validated via gas chromatography (purity and yield)",
                                        "Energy input: measured at DC power supply level with true RMS instrumentation (not estimated from nameplate)",
                                        "Calorimetric cross-checking: required at pilot stage to close the energy balance",
                                        "Error margin reporting: all efficiency figures reported with ±5% measurement uncertainty band",
                                        "Independent third-party validation: commissioned at Month 12 of pilot (pre-certification)",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-[1.5]">
                                            <span className="text-brand-primary font-bold shrink-0 mt-0.5">→</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Next Phase TRL 6-7 Milestones */}
                        <motion.div variants={fadeUp}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-1 bg-brand-primary/20" />
                                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-primary whitespace-nowrap">
                                    Next Phase TRL 6–7 Milestones
                                </h3>
                                <div className="h-px flex-1 bg-brand-primary/20" />
                            </div>
                            <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">(Subject to Kill Points)</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {[
                                    {
                                        number: "01",
                                        text: "1 kg/hr base module commissioning in India (Month 6); build costs covered within Phase 1 Use of Funds",
                                    },
                                    {
                                        number: "02",
                                        text: "Scale to 5–10 kg/hr multi-module pilot (Month 12–18); 2-year total timeline from project start",
                                    },
                                    {
                                        number: "03",
                                        text: "1,000-hour continuous endurance testing — primary kill point for commercialisation go/no-go",
                                    },
                                    {
                                        number: "04",
                                        text: "Independent cost certification; gas chromatography yield verification",
                                    },
                                    {
                                        number: "05",
                                        text: "Regulatory pathway completion (ASME/CE/ISO depending on jurisdiction; compliance budget allocated)",
                                    },
                                ].map((milestone, i) => (
                                    <div
                                        key={i}
                                        className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-brand-primary/30 rounded-2xl p-6 transition-all duration-300"
                                    >
                                        <div className="text-4xl font-black text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors leading-none mb-4">
                                            {milestone.number}
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="text-brand-primary font-bold shrink-0">→</span>
                                            <p className="text-gray-300 text-sm leading-[1.5]">{milestone.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 13. CTA Section */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-16 px-6 md:px-12 group">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/Technology/hero%20section.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6 drop-shadow-md">Ready to see the numbers?</h2>
                            <p className="text-[15px] sm:text-[16px] text-white/95 mb-10 max-w-3xl mx-auto leading-[1.5]">
                                Technology is only as good as its economic viability. See how low-energy inputs translate to market-leading LCOH.
                            </p>

                            <div className="flex justify-center">
                                <Button
                                    href="/economics"
                                    variant="primary"
                                    size="md"
                                    className="!bg-white !text-brand-primary hover:!bg-gray-50 shadow-lg min-w-[220px] w-full md:w-auto mt-2"
                                >
                                    See the Economics
                                </Button>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
