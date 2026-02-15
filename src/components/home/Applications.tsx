"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const APPLICATIONS = [
    {
        title: "Green Hydrogen Production",
        desc: "For refining, chemicals, steel, and industrial feedstock",
        image: "/home/Green Hydrogen Production.jpg",
        link: "/applications#production"
    },
    {
        title: "Green Ammonia",
        desc: "Export and domestic fertilizer and energy storage pathways",
        image: "/home/Green Ammonia.png",
        link: "/applications#ammonia"
    },
    {
        title: "On-Site & Distributed",
        desc: "Reducing transport, compression, and logistics costs",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
        link: "/applications#distributed"
    },
    {
        title: "Future Energy Integration",
        desc: "Compatibility with cracking, combustion, and hybrid energy systems",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
        link: "/applications#integration"
    }
];

export default function Applications() {
    return (
        <section className="bg-white text-gray-900 py-24 border-b border-gray-100">
            <SectionWrapper>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="h-px w-8 bg-brand-primary"></span>
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                                Applications Overview
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-brand-secondary leading-tight"
                        >
                            Designed for Where <span className="text-gradient-green-glow font-bold">Hydrogen</span> Is Actually Used
                        </motion.h2>
                    </div>
                    <Link href="/applications" className="group flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest hover:text-brand-dark transition-colors">
                        View All Applications
                        <span className="bg-brand-primary/10 p-1.5 rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                            <ChevronRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    {APPLICATIONS.map((app, idx) => (
                        <Link href={app.link} key={idx} className="block group cursor-pointer h-full">
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${app.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-4 md:p-8 flex flex-col flex-grow relative bg-white">
                                    <h3 className="text-lg md:text-xl font-bold text-gradient-green-glow mb-2 md:mb-3 transition-colors leading-tight">
                                        {app.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-light flex-grow">
                                        {app.desc}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-brand-primary text-xs font-bold uppercase tracking-wider opacity-100 transition-opacity duration-300 transform translate-y-0">
                                        Learn More <ChevronRight className="w-3 h-3 ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 italic text-sm font-light">
                        Each application is evaluated against real deployment economics, not theoretical efficiency.
                    </p>
                </motion.div>

            </SectionWrapper>
        </section>
    );
}
