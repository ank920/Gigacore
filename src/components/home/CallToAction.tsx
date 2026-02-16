"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp } from "@/lib/motion";
import Button from "../ui/Button";

import Image from "next/image";

export default function CallToAction() {
    return (
        <section className="relative py-32 overflow-hidden bg-brand-secondary border-t border-white/10">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/build.jpg"
                    alt="Industrial Facility Background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/95 to-brand-secondary/50" />
            </div>

            <SectionWrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    <div className="text-left max-w-2xl">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                                Ready to Scale?
                            </span>
                            <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Engage with Gigacore
                            </h2>
                            <p className="text-[length:var(--font-intro)] text-gray-300 mb-0 leading-relaxed font-light">
                                For organizations evaluating industrial hydrogen systems, our team welcomes a structured technical discussion.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            href="/contact"
                            className="!bg-brand-primary !text-brand-secondary font-bold hover:!bg-white hover:!text-brand-secondary transition-all duration-300 min-w-[280px] shadow-[0_0_20px_rgba(0,213,99,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            Request Technical Overview
                        </Button>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
