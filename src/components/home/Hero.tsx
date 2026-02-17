"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "../ui/Button";
import * as THREE from "three";
// @ts-ignore
import CELLS from "vanta/dist/vanta.cells.min";

const rotatingTexts = [
    "Deployment.",
    "Reliability.",
    "Scale.",
    "Uptime.",
    "Integration."
];

export default function Hero() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Rotating text effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 3500); // 3.5 second interval

        return () => clearInterval(interval);
    }, []);

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
                    color1: 0x00D563, // Brand Primary (Bright Green) - Neural pathways
                    color2: 0x020617, // Deepest Black/Slate - Infinite depth
                    size: isMobile ? 1.0 : 1.8, // Smaller cells for more "complexity"
                    speed: 1.0, // Slow, deliberate movement
                    distro: -1.0, // Organic distribution
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-brand-secondary text-white">
            {/* Background Vanta Effect */}
            <div ref={vantaRef} className="absolute inset-0 z-0 opacity-100" />

            {/* Cinematic Vignette Overlay - Adds depth and focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-secondary/20 to-brand-secondary/90 z-10 pointer-events-none" />

            <SectionWrapper className="relative z-20 w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mr-auto flex flex-col items-start text-left px-4 md:px-0"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Industrial Hydrogen.<br />
                        <span className="text-gray-300 relative inline-block w-full align-top">
                            Engineered for{" "}
                            <span className="relative inline-block align-top min-w-[120px]">
                                {/* Spacer to prevent layout shifts */}
                                <span className="invisible">Reliability.</span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentTextIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute left-0 top-0 whitespace-nowrap"
                                    >
                                        {rotatingTexts[currentTextIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-[length:var(--font-intro)] text-gray-300 mb-10 max-w-[600px] leading-relaxed font-light"
                    >
                        Cold plasma hydrogen systems designed for continuous operation, modular scale, and industrial integration.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 w-full justify-start relative z-20">
                        <Button href="/technology" variant="primary" size="lg" className="min-w-[200px] !bg-brand-primary !text-brand-secondary font-bold hover:!bg-white transition-colors border-none">
                            Explore the Platform
                        </Button>
                        <Button href="/contact" variant="outline" size="lg" className="min-w-[200px] !border-white/30 !text-white hover:!bg-white hover:!text-brand-secondary !bg-transparent backdrop-blur-sm">
                            Contact Us
                        </Button>
                    </motion.div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
