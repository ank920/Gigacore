"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { TrendingDown, Settings, BatteryCharging } from "lucide-react";

export default function Economics() {
    return (
        <section className="py-24 bg-brand-green/5 border-b border-gray-200">
            <SectionWrapper>
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 block"
                    >
                        Economics Snapshot
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        A Credible Pathway to Sub-$2/kg Hydrogen
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        Across global markets, hydrogen economics are constrained less by capital cost and more by electricity consumption per unit of output. Gigacore’s design philosophy directly addresses this constraint.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Chart/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-2 rounded-sm shadow-xl border border-gray-100"
                    >
                        <img
                            src="/home/ECONOMICS SNAPSHOT.png"
                            alt="Hydrogen Cost Curve Chart"
                            className="w-full h-auto rounded-sm"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-gray-900">Economic Focus Areas</motion.h3>

                        <motion.div variants={fadeUp} className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-blue flex-shrink-0">
                                <TrendingDown className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Reducing kWh/kg</h4>
                                <p className="text-gray-600 text-sm">Targeting lower electricity input per unit of hydrogen produced.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-blue flex-shrink-0">
                                <Settings className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Simplifying Balance-of-Plant</h4>
                                <p className="text-gray-600 text-sm">Reducing auxiliary system complexity and CAPEX.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-blue flex-shrink-0">
                                <BatteryCharging className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Lowering OPEX Exposure</h4>
                                <p className="text-gray-600 text-sm">Long-term resilience against power price volatility.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="pt-6 border-t border-gray-200">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">TARGET MARKETS</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">Green Ammonia Parity</span>
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">Industrial Substitution</span>
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">Large-scale Offtake</span>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
