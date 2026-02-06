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
        <section className="bg-gray-50 py-20 border-b border-gray-100">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <motion.span variants={fadeUp} className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 block">
                            Built for Industrial Reality
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Gigacore Energy operates with a first-principles engineering mindset and a commercialization-driven roadmap.
                        </motion.h2>

                        <motion.div variants={fadeUp} className="space-y-4 mb-10">
                            {CREDIBILITY_POINTS.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-lg">{point}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Positioned for:</h3>
                            <div className="flex flex-wrap gap-3">
                                {TARGET_AUDIENCE.map((item, idx) => (
                                    <span key={idx} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-bold text-gray-600 shadow-sm">
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
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/home/CREDIBILITY.jpg')" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
