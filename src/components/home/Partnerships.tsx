"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Landmark, Beaker } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const PARTNERS = [
    { icon: Building2, label: "Energy and industrial groups" },
    { icon: Users, label: "EPC and infrastructure developers" },
    { icon: Landmark, label: "Government and public-sector entities" },
    { icon: Beaker, label: "Research and validation partners" },
];

export default function Partnerships() {
    return (
        <section className="py-12 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
            <SectionWrapper>
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <span className="h-px w-8 bg-brand-primary"></span>
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                            Partnerships & Collaboration
                        </span>
                        <span className="h-px w-8 bg-brand-primary"></span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-brand-secondary mb-6 leading-tight"
                    >
                        Building within an <span className="text-gradient-green-glow font-bold">Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-500 leading-relaxed font-light"
                    >
                        Our approach prioritizes long-term alignment, technical transparency, and commercial readiness.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:grid-cols-4 gap-6"
                >
                    {PARTNERS.map((p, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="flex flex-col items-center justify-center p-4 md:p-10 bg-white border border-gray-100 rounded-xl md:rounded-2xl hover:shadow-card-hover hover:border-brand-primary/20 transition-all duration-300 text-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-brand-primary/5 opacity-100 transition-opacity duration-300" />

                            <div className="w-14 h-14 md:w-20 md:h-20 bg-brand-primary rounded-full flex items-center justify-center shadow-sm mb-3 md:mb-6 text-white transition-all duration-300 relative z-10">
                                <p.icon className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="font-bold text-gradient-green-glow text-sm md:text-lg transition-colors relative z-10">{p.label}</h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 bg-white border border-brand-primary/10 shadow-[0_4px_20px_rgba(0,213,99,0.05)] p-6 md:px-10 md:py-5 rounded-2xl md:rounded-full">
                        <span className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(0,213,99,0.5)]"></span>
                            <span className="text-gray-600 font-medium">Pilot deployments</span>
                        </span>

                        <span className="hidden md:block w-px h-5 bg-gray-200"></span>

                        <span className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(0,213,99,0.5)]"></span>
                            <span className="text-gray-600 font-medium">Joint development programs</span>
                        </span>

                        <span className="hidden md:block w-px h-5 bg-gray-200"></span>

                        <span className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(0,213,99,0.5)]"></span>
                            <span className="text-gray-600 font-medium">Licensing and manufacturing</span>
                        </span>
                    </div>
                </motion.div>

            </SectionWrapper>
        </section>
    );
}
