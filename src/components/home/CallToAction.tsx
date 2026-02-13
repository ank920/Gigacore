"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CallToAction() {
    return (
        <section className="py-24 bg-white">
            <SectionWrapper>
                <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-24 px-8 group">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-brand-primary opacity-100 z-0" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-3xl -mr-32 -mt-32 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-3xl -ml-32 -mb-32 mix-blend-overlay" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg tracking-tight"
                        >
                            Engage with Gigacore Energy
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
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
                            <Button
                                variant="primary"
                                size="lg"
                                href="/partnership"
                                className="w-full md:w-auto min-w-[200px] bg-white text-brand-secondary hover:bg-brand-accent hover:text-white border-0"
                            >
                                Request Partner Discussion
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                href="/contact"
                                className="w-full md:w-auto min-w-[200px] !border-white !text-white hover:!bg-white hover:!text-brand-secondary !bg-transparent"
                            >
                                Technical Overview <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
