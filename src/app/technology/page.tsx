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
                        <ul className="space-y-4 mt-6">
                            {[
                                "Electricity is applied in short, controlled bursts",
                                "These pulses create localized electrical discharges",
                                "The surrounding environment remains at moderate temperature"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
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
                        <div className="space-y-3 mt-6">
                            {[
                                "Energy effects are spread throughout the reaction volume",
                                "Electric fields are used more efficiently",
                                "The process remains stable and uniform"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-brand-primary/10 rounded-lg shadow-sm">
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
                        <ul className="grid grid-cols-1 gap-3 mt-6">
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
                        <ul className="space-y-3 mt-6">
                            {[
                                "Preserves performance as capacity increases",
                                "Reduces construction and commissioning risk",
                                "Enables phased deployment aligned with demand"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <Check className="w-4 h-4 text-brand-primary" />
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
                        <ul className="space-y-4 mt-6">
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
                            <p className="text-brand-secondary italic text-[15px] sm:text-[16px] leading-relaxed">
                                "Performance and efficiency are intended to be measurable, auditable, and verifiable, not theoretical."
                            </p>
                        </div>
                    </>
                }
            />

            {/* 12. CTA Section */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-16 px-6 md:px-12 group">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-[url('/Technology/hero%20section.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6 drop-shadow-md">Ready to see the numbers?</h2>
                            <p className="text-[15px] sm:text-[16px] text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
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
