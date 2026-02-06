"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const APPLICATIONS = [
    {
        title: "Green Hydrogen Production",
        desc: "For refining, chemicals, steel, and industrial feedstock",
        image: "/home/APPLICATIONS OVERVIEW.jpg", // User provided
        link: "/applications#production"
    },
    {
        title: "Green Ammonia",
        desc: "Export and domestic fertilizer and energy storage pathways",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", // Industrial Plant
        link: "/applications#ammonia"
    },
    {
        title: "On-Site & Distributed",
        desc: "Reducing transport, compression, and logistics costs",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80", // Distributed/Container concept
        link: "/applications#distributed"
    },
    {
        title: "Future Energy Integration",
        desc: "Compatibility with cracking, combustion, and hybrid energy systems",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80", // Abstract Energy/Grid
        link: "/applications#integration"
    }
];

export default function Applications() {
    return (
        <section className="bg-white text-gray-900 py-24 border-b border-gray-100">
            <SectionWrapper>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4 block">Applications Overview</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Designed for Where Hydrogen Is Actually Used</h2>
                    </div>
                    <Link href="/applications" className="text-brand-blue font-bold text-sm hover:underline flex items-center mb-2">
                        View All Applications <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" // 4 Column Grid
                >
                    {APPLICATIONS.map((app, idx) => (
                        <Link href={app.link} key={idx} className="block group cursor-pointer h-full">
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col h-full bg-gray-50 border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Image Area - Aspect Ratio 4:3 or 16:9 */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${app.image}')` }}
                                    />
                                    {/* Overlay only on hover for depth */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-grow relative">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                                        {app.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                        {app.desc}
                                    </p>

                                    {/* Black Arrow Button - Absolute Bottom Right */}
                                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-black text-white flex items-center justify-center transition-colors group-hover:bg-brand-blue z-10">
                                        <ChevronRight className="w-6 h-6" />
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
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 italic text-sm">
                        Each application is evaluated against real deployment economics, not theoretical efficiency.
                    </p>
                </motion.div>

            </SectionWrapper>
        </section>
    );
}
