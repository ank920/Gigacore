"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const CREDIBILITY_POINTS = [
    "Platform developed in collaboration with senior plasma physics and power-electronics experts",
    "Focused on measurable performance, not laboratory novelty",
    "Aligned with industrial deployment timelines and policy frameworks",
    "Designed for auditability, validation, and regulatory scrutiny"
];

const TARGET_AUDIENCE = [
    "Institutional investors",
    "Energy PSUs and ministries",
    "EPCs, utilities, and industrial offtakers"
];

export default function Credibility() {
    return (
        <section className="py-12 md:py-20 bg-white border-b border-gray-100 overflow-hidden">
            <SectionWrapper className="max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
                    {/* Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-brand-primary"></span>
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                                Built for Industrial Reality
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6 leading-[1.2] tracking-tight">
                            Gigacore Energy operates with a <span className="text-gradient-green-glow font-bold">first-principles</span> engineering mindset.
                        </motion.h2>

                        <motion.div variants={fadeUp} className="space-y-2.5 md:space-y-3 mb-6">
                            {CREDIBILITY_POINTS.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 group">
                                    <div className="relative mt-1">
                                        {/* Decorative glow */}
                                        <div className="absolute inset-0 bg-brand-primary/30 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-300" />
                                        <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 relative z-10 stroke-[2.5] transition-transform group-hover:scale-110" />
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">{point}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2 inline-block">Positioned for</h3>
                            <div className="flex flex-wrap gap-2 md:gap-2.5">
                                {TARGET_AUDIENCE.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-brand-primary to-brand-accent text-white border-2 border-brand-primary shadow-lg shadow-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/50 hover:scale-110"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('/home/CREDIBILITY.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/40 to-transparent mix-blend-multiply" />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
