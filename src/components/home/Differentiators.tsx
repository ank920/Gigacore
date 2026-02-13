"use client";
import React from "react";
import { motion } from "framer-motion";
import { Atom, Zap, Maximize2, Scale, ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const DIFFERENTIATORS = [
    {
        icon: Atom,
        title: "Physics-Led, Not Catalyst-Led",
        description: "Our approach is based on controlled plasma–water interaction rather than precious-metal-intensive electrochemical stacks."
    },
    {
        icon: Zap,
        title: "Energy Intensity as Design Variable",
        description: "We target step-change reductions in electrical input per kilogram of hydrogen, recognizing electricity as the dominant cost driver."
    },
    {
        icon: Maximize2,
        title: "Modular, Industrial Architecture",
        description: "Designed for modular deployment, redundancy, and scalable integration—rather than monolithic plants."
    },
    {
        icon: Scale,
        title: "Cost Parity as a Constraint",
        description: "Economic parity with incumbent hydrogen pathways is treated as a hard requirement, not an aspiration."
    }
];

export default function Differentiators() {
    return (
        <section className="py-12 md:py-20 bg-white border-b border-gray-100 overflow-hidden">
            <SectionWrapper className="max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3 block"
                    >
                        Core Differentiators
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-brand-secondary mb-4"
                    >
                        Why Gigacore Is <span className="text-gradient-green-glow">Structurally Different</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-base md:text-lg leading-relaxed font-light"
                    >
                        A fundamentally different approach to hydrogen generation
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
                >
                    {DIFFERENTIATORS.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="bg-white border border-brand-primary/20 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 group rounded-xl relative overflow-hidden"
                        >
                            {/* Subtle gradient background - always visible */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="mb-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold mb-2 text-gradient-green-glow transition-colors leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
