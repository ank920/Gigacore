"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";

const PLATFORM_FEATURES = [
    "Modular reactor clusters",
    "Near-ambient operating conditions",
    "Industrial power electronics",
    "Integrated control systems"
];

export default function PlatformOverview() {
    return (
        <section className="py-[var(--spacing-section)] bg-brand-light border-b border-gray-100 overflow-hidden">
            <SectionWrapper className="max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Content Side */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <motion.h2 variants={fadeUp} className="text-[34px] md:text-[48px] font-bold mb-6 leading-[1.15] text-brand-secondary">
                            A Different Architecture for <br />
                            <span className="text-brand-primary">Hydrogen Generation</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-brand-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl">
                            Gigacore’s platform uses controlled cold plasma excitation to activate water molecules under engineered electromagnetic conditions.
                        </motion.p>

                        <motion.div variants={fadeUp} className="space-y-6">
                            <h3 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">The system architecture:</h3>
                            <ul className="space-y-4">
                                {PLATFORM_FEATURES.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-brand-secondary border-b border-gray-200 pb-2 last:border-0">
                                        <span className="h-0.5 w-3 bg-brand-primary" /> {/* Simple industrial dash */}
                                        <span className="font-medium text-lg text-brand-secondary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        {/* Main Architecture Image */}
                        <div className="relative w-full">
                            <Image
                                src="/home/A Different Architecture.png"
                                alt="Gigacore Different Architecture Diagram"
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>


                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
