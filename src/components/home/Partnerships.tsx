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
        <section className="py-24 bg-white">
            <SectionWrapper>
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4 block"
                    >
                        Partnerships & Collaboration
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Building with Strategic Partners
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        Our approach prioritizes long-term alignment, technical transparency, and commercial readiness.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {PARTNERS.map((p, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="flex flex-col items-center justify-center p-8 bg-white border border-brand-primary/10 hover:border-brand-primary rounded-sm hover:shadow-xl transition-all text-center aspect-square md:aspect-auto md:h-64 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-gray-400 group-hover:text-brand-primary transition-colors">
                                <p.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{p.label}</h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-wrap justify-center gap-4 bg-gray-100 text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-medium text-sm">
                        <span>Pilot deployments</span>
                        <span className="text-gray-600">•</span>
                        <span>Joint development programs</span>
                        <span className="text-gray-600">•</span>
                        <span>Licensing and manufacturing</span>
                    </div>
                </motion.div>

            </SectionWrapper>
        </section>
    );
}
