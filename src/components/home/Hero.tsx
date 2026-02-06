"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-gray-900">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/realistic-water-drop-with-ecosystem.jpg')] bg-cover bg-center" />
            </div>

            <SectionWrapper className="relative z-20 text-center mt-[-60px]">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 drop-shadow-sm"
                    >
                        Engineering the Next Cost Curve for Green Hydrogen
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl leading-relaxed">
                        A cold-plasma hydrogen platform designed to cross the $2/kg threshold at industrial scale.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4">
                        <Link href="/partnership">
                            <button className="px-8 py-3 bg-brand-blue text-white hover:bg-sky-600 rounded-full font-bold transition-all duration-300 shadow-xl text-base min-w-[200px]">
                                Partner with Gigacore
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-8 py-3 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full font-bold transition-all duration-300 text-base min-w-[200px] shadow-sm">
                                Request Technical Overview
                            </button>
                        </Link>
                    </motion.div>

                </motion.div>
            </SectionWrapper>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[30px] h-[50px] border-2 border-gray-400 rounded-full flex justify-center p-2 opacity-80">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-gray-600 rounded-full"
                    />
                </div>
            </motion.div>

            {/* Bottom Text Overlay Strip - REMOVED as it interferes with new flow */}
        </section>
    );
}
