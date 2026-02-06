"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

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
        <section className="py-24 bg-white text-gray-900 border-b border-gray-100 overflow-hidden">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1 order-2 lg:order-1"
                    >
                        <motion.span variants={fadeUp} className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 block">
                            Cold-Plasma Hydrogen Platform
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                            A New Approach to Hydrogen Generation
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Gigacore’s platform uses cold-plasma excitation to activate water molecules under controlled electromagnetic conditions, enabling hydrogen generation through a fundamentally different energy transfer mechanism.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mb-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Unlike classical electrolysis, the system:</h3>
                            <ul className="space-y-3">
                                {FEATURES.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <Check className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-gray-50 p-6 border-l-4 border-brand-blue">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">The platform is being engineered with:</h3>
                            <ul className="space-y-2">
                                {ENGINEERING_SPECS.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-gray-500 text-sm italic">
                                This architecture is intended to reduce system complexity while opening a pathway to materially lower operating costs.
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full order-1 lg:order-2"
                    >
                        {/* Using an img tag for full visibility and containment, ensuring no cropping */}
                        <div className="relative rounded-sm overflow-hidden bg-white shadow-2xl border border-gray-100">
                            <img
                                src="/home/COLD-PLASMA HYDROGEN PLATFORM.webp"
                                alt="Cold-Plasma Hydrogen Platform Schematic"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
