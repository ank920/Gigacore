"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";

const FEATURES = [
    "Operates without conventional electrolyzer stacks",
    "Avoids dependency on scarce catalyst materials",
    "Enables dynamic operation aligned with variable power inputs"
];

const ENGINEERING_SPECS = [
    "Near-ambient operating conditions",
    "Compact, modular reactor units",
    "Industrial-grade power electronics and controls"
];

export default function PlatformOverview() {
    return (
        <section className="py-12 md:py-20 bg-brand-light border-b border-gray-100 overflow-hidden">
            <SectionWrapper className="max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">

                    {/* Content Side */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1 order-2 lg:order-1"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-brand-primary"></span>
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                                Cold-Plasma Hydrogen Platform
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-brand-secondary">
                            A New Approach to <span className="text-gradient-green-glow font-bold">Hydrogen Generation</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed font-light">
                            Gigacore’s platform uses cold-plasma excitation to activate water molecules under controlled electromagnetic conditions, enabling hydrogen generation through a fundamentally different energy transfer mechanism.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mb-5">
                            <h3 className="text-base md:text-lg font-bold mb-3 text-brand-secondary">Unlike classical electrolysis, the system:</h3>
                            <ul className="space-y-1.5 md:space-y-2">
                                {FEATURES.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-gray-700 bg-white p-2.5 md:p-3 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-brand-primary/20">
                                        <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary mt-0.5">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-card border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                            <h3 className="text-sm md:text-base font-bold mb-2.5 md:mb-3 text-brand-secondary">The platform is being engineered with:</h3>
                            <ul className="space-y-1.5 md:space-y-2">
                                {ENGINEERING_SPECS.map((spec, idx) => (
                                    <motion.li
                                        key={idx}
                                        variants={fadeUp}
                                        className="flex items-start gap-2.5 group"
                                    >
                                        <div className="relative mt-1">
                                            {/* Decorative glow */}
                                            <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-300" />
                                            <Check className="w-6 h-6 text-brand-primary relative z-10 stroke-[3]" />
                                        </div>
                                        <span className="text-gray-700 text-sm md:text-base font-light leading-relaxed flex-1">{spec}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <p className="mt-4 text-gray-400 text-xs italic border-t border-gray-100 pt-3">
                                This architecture is intended to reduce system complexity while opening a pathway to materially lower operating costs.
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full order-1 lg:order-2"
                    >
                        {/* Using an img tag for full visibility and containment, ensuring no cropping */}
                        <div className="relative aspect-[16/9] w-full h-full">
                            <Image
                                src="/home/COLD-PLASMA HYDROGEN PLATFORM SECTION.png"
                                alt="Cold-Plasma Hydrogen Platform Schematic"
                                fill
                                className="object-contain transform transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
