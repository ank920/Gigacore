"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const DEPLOYMENT_PATHWAYS = [
    {
        title: "Green Hydrogen Production",
        desc: "Integrated stacks for refining, steel, and chemical feedstock.",
        image: "/home/Green Hydrogen Production.jpg", // Keeping existing valid image
        link: "/applications#production"
    },
    {
        title: "Ammonia & Derivative Value Chains",
        desc: "Direct integration for massive-scale fertilizer and fuel synthesis.",
        image: "/home/Green Ammonia.png", // Keeping existing valid image
        link: "/applications#ammonia"
    },
    {
        title: "On-Site Industrial Supply",
        desc: "Distributed generation eliminating cryogenic logistics costs.",
        image: "https://images.unsplash.com/photo-1518709590660-4f5faa0ef881?auto=format&fit=crop&q=80", // More industrial
        link: "/applications#distributed"
    },
    {
        title: "Hybrid Energy Integration Environments",
        desc: "Balancing mechanism for renewable-heavy grids and thermal assets.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80", // Energy grid/Wind farm cinematic
        link: "/applications#integration"
    }
];

export default function Applications() {
    return (
        <section className="py-[var(--spacing-section)] bg-white border-b border-gray-100">
            <SectionWrapper>
                <div className="max-w-4xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[36px] md:text-[52px] font-bold mb-6 leading-[1.15] text-brand-secondary"
                    >
                        Deployment Pathways
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-brand-gray-600 font-light max-w-2xl"
                    >
                        Gigacore systems are structured for massive-scale integration across critical industrial sectors.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {[
                        {
                            title: "Green Ammonia",
                            desc: "Decarbonizing fertilizer production with scalable H2 feedstock.",
                            link: "/applications#ammonia",
                            image: "/home/Green Ammonia.png"
                        },
                        {
                            title: "Industrial Supply",
                            desc: "On-site generation replacing delivered bulk hydrogen logistics.",
                            link: "/applications#industrial",
                            image: "/home/On-Site Industrial Supply.png"
                        },
                        {
                            title: "Hybrid Integration",
                            desc: "Balancing renewable intermittency with baseload industrial demand.",
                            link: "/applications#integration",
                            image: "/home/Hybrid Energy Integration.png"
                        },
                        {
                            title: "Modular Scaling", /* Placeholder title since ChatGPT image name was weird, assuming this is last slot */
                            desc: "Flexible capacity expansion for growing industrial needs.",
                            link: "/technology",
                            image: "/home/ChatGPT Image Feb 16, 2026, 02_31_56 PM.png"
                        }
                    ].map((app, idx) => (
                        <Link href={app.link} key={idx} className="block group cursor-pointer h-full">
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col h-full"
                            >
                                {/* Precise Image Container - No Crop, No Zoom */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-gray-50 border border-gray-100">
                                    <Image
                                        src={app.image}
                                        alt={app.title}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]" /* Minimal scale, object-contain prevents crop */
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-[length:var(--font-h3)] font-bold text-brand-secondary mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                                        {app.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 font-light flex-grow">
                                        {app.desc}
                                    </p>
                                    <div className="flex items-center text-brand-primary text-xs font-bold uppercase tracking-widest mt-auto group-hover:text-brand-hover transition-colors">
                                        View Application <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
