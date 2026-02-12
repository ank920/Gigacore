"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-24 bg-white">
            <SectionWrapper>
                <div className="relative rounded-2xl overflow-hidden bg-brand-primary shadow-2xl text-center py-24 px-8">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md"
                        >
                            Engage with Gigacore Energy
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            If you are evaluating next-generation hydrogen platforms with a serious focus on cost, scale, and industrial viability, we welcome a conversation.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row justify-center items-center gap-6"
                        >
                            <Link href="/partnership" className="w-full md:w-auto">
                                <button className="px-6 py-4 md:px-10 md:py-5 bg-white text-brand-primary font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all text-lg md:text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px]">
                                    Request Partner Discussion
                                </button>
                            </Link>
                            <Link href="/contact" className="w-full md:w-auto">
                                <button className="px-6 py-4 md:px-10 md:py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all text-lg md:text-xl w-full md:w-auto min-w-[200px] md:min-w-[260px] flex items-center justify-center gap-2">
                                    Request Technical Overview <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
