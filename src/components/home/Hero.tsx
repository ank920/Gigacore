"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "../ui/Button";
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
                    color1: 0x00D563, // Bloom Energy logo green
                    color2: 0x1e293b, // Lighter slate for contrast
                    size: isMobile ? 2.0 : 3.0, // Larger cells for visibility
                    speed: 2.5,
                    distro: -1.5,
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-secondary text-white">
            {/* Background Vanta Effect */}
            <div ref={vantaRef} className="absolute inset-0 z-0" />

            {/* Bottom gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-brand-secondary/80 to-transparent z-10" />

            <SectionWrapper className="relative z-20 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-brand-accent backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
                        Next-Gen Hydrogen Technology
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white drop-shadow-2xl"
                    >
                        The Future of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-primary/80">
                            Green Hydrogen
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-[700px] leading-relaxed font-light"
                    >
                        Industrial-scale cold plasma electrolysis. <br className="hidden md:block" />
                        Breaking the <span className="text-white font-medium">$2/kg</span> cost barrier.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 w-full justify-center relative z-20">
                        <Button href="/partnership" variant="primary" size="lg" className="min-w-[200px] shadow-glow">
                            Partner with Us
                        </Button>
                        <Button href="/technology" variant="outline" size="lg" className="min-w-[200px] !border-white !text-white hover:!bg-white hover:!text-brand-secondary !bg-transparent">
                            View Technology
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator - Centered relative to content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-16 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group"
                    >
                        <div className="w-[30px] h-[50px] border-2 border-gray-400 group-hover:border-white rounded-full flex justify-center p-2 transition-colors duration-300">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-1 h-2 bg-gray-400 group-hover:bg-white rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
