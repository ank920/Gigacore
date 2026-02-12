"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Mail, ArrowRight, MessageSquare, HeartHandshake, Microscope, TrendingUp, Megaphone, Globe, CheckCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section (NO TEXT - Just Image) */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/contact/hero%20section.jpg')] bg-cover bg-center" />
                </div>
            </section>

            {/* 2. Intro Section (Text + Buttons Moved Here) */}
            <section className="py-12 bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900"
                        >
                            Let’s Start the <span className="text-brand-green">Right Conversation</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed font-medium">
                            We engage with partners, institutions, and stakeholders evaluating hydrogen as an industrial input and infrastructure asset.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">
                            If you are exploring deployment, partnerships, or technical review, we welcome a structured discussion.
                        </motion.p>


                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. General Enquiries */}
            <section className="py-12 bg-gray-50 border-y border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                                <img
                                    src="/contact/General%20Enquiries.webp"
                                    alt="General Enquiries"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <MessageSquare className="w-6 h-6 text-brand-green" />
                                <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Contact</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">General Enquiries</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                For general questions, introductions, or to request an overview of our platform, please reach out via the channels below.
                            </p>

                            <div className="flex flex-col gap-1 mb-6">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <a href="mailto:info@gigacora.energy" className="text-xl font-bold text-brand-green hover:underline">info@gigacora.energy</a>
                                </div>
                                <p className="text-sm text-gray-500 ml-8">Response window: 1–2 business days</p>
                            </div>
                            <p className="text-sm text-gray-500 italic">Preferred: Brief context on your organization and objective</p>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Partnerships & Technical (Grid) */}
            <section className="py-12 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Partnerships */}
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <HeartHandshake className="w-6 h-6 text-brand-green" />
                                    <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Collaboration</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnerships & Deployment</h3>
                                <p className="text-gray-600 mb-6">
                                    We work with organizations seeking deployable, scalable hydrogen solutions.
                                </p>
                                <ul className="space-y-2 mb-4 text-gray-700 font-medium">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-brand-green rounded-full" /> Industrial offtake and deployment</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-brand-green rounded-full" /> Pilot and demonstration collaborations</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-brand-green rounded-full" /> Public-sector and PSU engagements</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-brand-green rounded-full" /> EPC and infrastructure partnerships</li>
                                </ul>
                            </div>

                        </div>

                        {/* Technical */}
                        <div className="flex flex-col h-full">
                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-4 h-[250px]">
                                <img src="/contact/Technical%20&%20Validation%20Enquiries.jpg" alt="Technical & Validation" className="w-full h-full object-cover" />
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <Microscope className="w-6 h-6 text-brand-green" />
                                    <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Validation</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical & Validation</h3>
                                <p className="text-gray-600 mb-6">
                                    For technical reviews, diligence requests, or validation discussions under appropriate confidentiality.
                                </p>
                            </div>

                        </div>

                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Investor & Media */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Investor Image Side */}
                        <div className="lg:order-2 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <img src="/contact/Investor%20&%20Capital%20Engagement.jpg" alt="Investor Engagement" className="w-full h-auto" />
                        </div>

                        {/* Text Side */}
                        <div className="lg:order-1 space-y-12">
                            {/* Investor */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-brand-green" /> Investor & Capital Engagement</h3>
                                <p className="text-gray-600 mb-4">We engage with long-term capital providers aligned with infrastructure-grade deployment.</p>
                            </div>

                            <div className="w-full h-px bg-gray-200" />

                            {/* Media */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2"><Megaphone className="w-6 h-6 text-brand-green" /> Media & Communications</h3>
                                <p className="text-gray-600 mb-4">For media requests, speaking engagements, or corporate communications.</p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Operating Regions & Process */}
            <section className="py-12 bg-white text-center">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <Globe className="w-10 h-10 text-brand-green mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Operating Regions</h3>
                            <p className="text-gray-600 mb-6">Our work is focused on industrial demand centers with immediate relevance.</p>
                            <ul className="text-left space-y-3 inline-block mx-auto">
                                <li className="flex items-center gap-3"><span className="text-brand-green font-bold">IN</span> India (Primary deployment focus)</li>
                                <li className="flex items-center gap-3"><span className="text-brand-green font-bold">GL</span> Global industrial & export markets</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <CheckCircle className="w-10 h-10 text-brand-green mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Engage</h3>
                            <p className="text-gray-600 mb-6">To ensure productive discussions, engagements typically follow a simple process:</p>
                            <ol className="text-left space-y-3 inline-block mx-auto list-decimal pl-5 text-gray-700 font-medium">
                                <li>Initial context and objectives</li>
                                <li>Alignment on scope and relevance</li>
                                <li>Structured technical or commercial discussion</li>
                                <li>Next steps (pilot, review, or partnership)</li>
                            </ol>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. CTA Section */}
            <section className="py-12 bg-brand-green/5 border-t border-brand-green/10 text-center">
                <SectionWrapper>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        If you are evaluating hydrogen solutions with a focus on cost, scale, and industrial viability, we invite you to connect.
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:info@gigacora.energy?subject=Request Executive Overview">
                            <button className="px-8 py-4 bg-brand-green text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-colors">
                                Request Executive Overview
                            </button>
                        </a>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
