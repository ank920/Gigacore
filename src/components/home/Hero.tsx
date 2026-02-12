"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import * as THREE from "three";
// @ts-ignore
import CELLS from "vanta/dist/vanta.cells.min";

export default function Hero() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    color1: 0x00d16c, // Vivid Neon Green
                    color2: 0xf8e71c, // Bright Neon Yellow
                    size: isMobile ? 0.8 : 1.5, // Smaller cells on mobile per user request
                    speed: isMobile ? 3.0 : 3.0, // Slower on mobile
                    distro: -2.0, // Less clustering
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900 text-gray-900">
            {/* Background Vanta Effect - Pure, no filters for specific look */}
            <div ref={vantaRef} className="absolute inset-0 z-0" />

            {/* Industrial Grid Overlay (Subtle) */}
            <div className="absolute inset-0 z-10 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Radial Gradient Overlay for Readability - Soft/Minimal */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

            <SectionWrapper className="relative z-20 text-center mt-[-60px]">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                    >
                        Engineering the Next Cost Curve for Green Hydrogen
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-100 mb-10 max-w-[650px] leading-relaxed font-light drop-shadow-md">
                        A cold-plasma hydrogen platform designed to cross the $2/kg threshold at industrial scale.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-5">
                        <Link href="/partnership">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white hover:bg-black rounded-full font-bold transition-all duration-300 shadow-2xl text-base md:text-lg min-w-[160px] md:min-w-[200px] border border-gray-800"
                            >
                                Partner with Gigacore
                            </motion.button>
                        </Link>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold transition-all duration-300 shadow-xl text-base md:text-lg min-w-[160px] md:min-w-[200px] border border-gray-200"
                            >
                                Request Technical Overview
                            </motion.button>
                        </Link>
                    </motion.div>

                </motion.div>
            </SectionWrapper>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
            >
                <div className="w-[30px] h-[50px] border-2 border-gray-400 group-hover:border-white rounded-full flex justify-center p-2 transition-colors duration-300">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1 h-2 bg-gray-400 group-hover:bg-white rounded-full transition-colors duration-300"
                    />
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">Scroll</span>
            </motion.div>
        </section>
    );
}
