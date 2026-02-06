"use client";
import React from "react";
import { motion } from "framer-motion";
import { Atom, Zap, Maximize2, Scale } from "lucide-react";
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
        title: "Energy Intensity as the Primary Design Variable",
        description: "We target step-change reductions in electrical input per kilogram of hydrogen, recognizing electricity as the dominant cost driver."
    },
    {
        icon: Maximize2,
        title: "Modular, Industrial Architecture",
        description: "Designed for modular deployment, redundancy, and scalable integration—rather than monolithic plants."
    },
    {
        icon: Scale,
        title: "Cost Parity as a Design Constraint",
        description: "Economic parity with incumbent hydrogen pathways is treated as a hard requirement, not an aspiration."
    }
];

export default function Differentiators() {
    return (
        <section className="py-24 bg-brand-blue/5 relative overflow-hidden">
            {/* Background Image Overlay - faint */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/home/CORE DIFFERENTIATORS.png')] bg-cover bg-center" />
            </div>

            <SectionWrapper className="relative z-10">
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 block"
                    >
                        Core Differentiators
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        Why Gigacore Is Structurally Different
                    </motion.h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {DIFFERENTIATORS.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="bg-gray-50 border border-gray-100 p-10 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-brand-green relative overflow-hidden"
                        >
                            <div className="mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-brand-green transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-green transition-colors">
                                {idx + 1}. {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
