"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function IndiaFirst() {
    return (
        <section className="py-24 bg-brand-green/5 text-gray-900 relative border-b border-gray-200">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Side - Map/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/home/INDIA-FIRST + GLOBAL OPPORTUNITY.webp')" }}
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <motion.span variants={fadeUp} className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 block">
                            India-First, Globally Relevant
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Built for India’s Scale—Relevant Worldwide
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8 leading-relaxed">
                            India represents one of the world’s most demanding hydrogen markets: price-sensitive, scale-intensive, and policy-driven.
                        </motion.p>

                        <motion.div variants={fadeUp} className="space-y-6">
                            <div className="border-l-2 border-brand-blue pl-6">
                                <h4 className="font-bold text-xl mb-2">India Strategy</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• Alignment to India’s National Green Hydrogen Mission</li>
                                    <li>• Compatibility with domestic manufacturing and localization</li>
                                    <li>• Readiness for PSU-led and private industrial deployment</li>
                                </ul>
                            </div>

                            <div className="border-l-2 border-gray-200 pl-6">
                                <h4 className="font-bold text-xl mb-2">Global Relevance</h4>
                                <p className="text-gray-600 text-sm">
                                    At the same time, the underlying economics and architecture are applicable to global industrial markets seeking cost-competitive green hydrogen.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
