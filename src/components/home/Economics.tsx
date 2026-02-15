"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { TrendingDown, Settings, BatteryCharging } from "lucide-react";
import Image from "next/image";

export default function Economics() {
    return (
        <section className="py-12 md:py-20 bg-white border-b border-gray-100 overflow-hidden">
            <SectionWrapper className="max-w-7xl">
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <span className="h-px w-8 bg-brand-primary"></span>
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                            Economics Snapshot
                        </span>
                        <span className="h-px w-8 bg-brand-primary"></span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold text-brand-secondary mb-4 leading-tight"
                    >
                        A Credible Pathway to <span className="text-gradient-green-glow font-bold">Sub-$2/kg</span> Hydrogen
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-500 leading-relaxed font-light"
                    >
                        Across global markets, hydrogen economics are constrained less by capital cost and more by electricity consumption per unit of output. Gigacore’s design philosophy directly addresses this constraint.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Chart/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100"
                    >
                        <Image
                            src="/home/ECONOMICS SNAPSHOT.png"
                            alt="Hydrogen Cost Curve Chart"
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-brand-secondary border-l-4 border-brand-primary pl-4">Economic Focus Areas</motion.h3>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: TrendingDown,
                                    title: "Reducing kWh/kg",
                                    desc: "Targeting lower electricity input per unit of hydrogen produced."
                                },
                                {
                                    icon: Settings,
                                    title: "Simplifying Balance-of-Plant",
                                    desc: "Reducing auxiliary system complexity and CAPEX."
                                },
                                {
                                    icon: BatteryCharging,
                                    title: "Lowering OPEX Exposure",
                                    desc: "Long-term resilience against power price volatility."
                                }
                            ].map((item, idx) => (
                                <motion.div key={idx} variants={fadeUp} className="flex gap-5 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm text-white border border-gray-100 flex-shrink-0 transition-all duration-300">
                                        <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gradient-green-glow mb-1 transition-colors">{item.title}</h4>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeUp} className="pt-8 border-t border-gray-200">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">TARGET MARKETS</p>
                            <div className="flex flex-wrap gap-3">
                                {["Green Ammonia Parity", "Industrial Substitution", "Large-scale Offtake"].map((market, idx) => (
                                    <span
                                        key={idx}
                                        className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-brand-primary to-brand-accent text-white border-2 border-brand-primary shadow-lg shadow-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/50 hover:scale-110"
                                    >
                                        {market}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
