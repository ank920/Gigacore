"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Mail, ArrowRight, MessageSquare, HeartHandshake, Microscope, TrendingUp, Megaphone, Globe, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/contact/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>

            </section>

            {/* 2. Intro Section */}
            <section className="py-20 bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.p variants={fadeUp} className="text-xl md:text-3xl text-gray-900 mb-8 max-w-4xl leading-relaxed font-medium">
                            We engage with partners, institutions, and stakeholders evaluating hydrogen as an industrial input and infrastructure asset.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
                            If you are exploring <span className="text-brand-primary font-bold">deployment, partnerships, or technical review</span>, we welcome a structured discussion.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. General Enquiries */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                        <div className="flex-1 w-full">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                                <div className="relative h-[400px] w-full">
                                    <Image
                                        src="/contact/General%20Enquiries.webp"
                                        alt="General Enquiries"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> Contact
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">General <span className="text-gradient-green-glow">Enquiries</span></h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                For general questions, introductions, or to request an overview of our platform, please reach out via the channels below.
                            </p>

                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                                            <a href="mailto:info@gigacora.energy" className="text-2xl font-bold text-gray-900 hover:text-brand-primary transition-colors">info@gigacora.energy</a>
                                        </div>
                                    </div>
                                    <div className="h-px w-full bg-gray-100 my-2" />
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <span>Response window: 1–2 business days</span>
                                        <span className="italic">Brief context preferred</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Partnerships & Technical (Grid) */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Partnerships */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all flex flex-col h-full group hover:-translate-y-1 duration-300">
                            <div className="mb-6">
                                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    <HeartHandshake className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnerships & Deployment</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We work with organizations seeking deployable, scalable hydrogen solutions.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center text-gray-700 font-medium"><CheckCircle className="w-5 h-5 text-brand-primary" /> Industrial offtake and deployment</li>
                                    <li className="flex gap-3 items-center text-gray-700 font-medium"><CheckCircle className="w-5 h-5 text-brand-primary" /> Pilot and demonstration collaborations</li>
                                    <li className="flex gap-3 items-center text-gray-700 font-medium"><CheckCircle className="w-5 h-5 text-brand-primary" /> Public-sector and PSU engagements</li>
                                    <li className="flex gap-3 items-center text-gray-700 font-medium"><CheckCircle className="w-5 h-5 text-brand-primary" /> EPC and infrastructure partnerships</li>
                                </ul>
                            </div>
                        </div>

                        {/* Technical */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,213,99,0.08)] transition-all flex flex-col h-full group hover:-translate-y-1 duration-300">
                            <div className="rounded-2xl overflow-hidden mb-8 h-64 w-full relative">
                                <Image src="/contact/Technical%20&%20Validation%20Enquiries.jpg" alt="Technical & Validation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Microscope className="w-6 h-6 text-brand-primary" />
                                    <h3 className="text-2xl font-bold text-gray-900">Technical & Validation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    For technical reviews, diligence requests, or validation discussions under appropriate confidentiality.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Investor & Media */}
            <section className="py-12 md:py-20 bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Side */}
                        <div className="lg:order-1 space-y-8">
                            {/* Investor */}
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Investor Engagement</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-16">
                                    We engage with long-term capital providers aligned with infrastructure-grade deployment.
                                </p>
                            </div>

                            {/* Media */}
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                                        <Megaphone className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Media & Comms</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-16">
                                    For media requests, speaking engagements, or corporate communications.
                                </p>
                            </div>
                        </div>

                        {/* Investor Image Side */}
                        <div className="lg:order-2 w-full">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative h-[500px]">
                                <Image
                                    src="/contact/Investor%20&%20Capital%20Engagement.jpg"
                                    alt="Investor Engagement"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Operating Regions & Process */}
            <section className="py-12 md:py-20 bg-white text-center">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Operating Regions</h3>
                            <p className="text-gray-600 mb-8">Our work is focused on industrial demand centers with immediate relevance.</p>
                            <div className="flex flex-col gap-3 items-center">
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-100 shadow-sm w-full max-w-xs">
                                    <span className="text-brand-primary font-bold bg-brand-primary/10 px-2 py-1 rounded text-sm">IN</span>
                                    <span className="font-medium text-gray-800">India (Primary focus)</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-100 shadow-sm w-full max-w-xs">
                                    <span className="text-brand-primary font-bold bg-brand-primary/10 px-2 py-1 rounded text-sm">GL</span>
                                    <span className="font-medium text-gray-800">Global export markets</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement Process</h3>
                            <p className="text-gray-600 mb-8">To ensure productive discussions, engagements typically follow a simple process:</p>
                            <ol className="text-left space-y-4 inline-block mx-auto w-full max-w-xs">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">1</div>
                                    Initial context & objectives
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">2</div>
                                    Alignment on scope
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">3</div>
                                    Technical discussion
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">4</div>
                                    Next steps (pilot/partner)
                                </li>
                            </ol>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. CTA Section */}
            <section className="relative py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-primary/20" />
                </div>
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-md">Get in Touch</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        If you are evaluating hydrogen solutions with a focus on cost, scale, and industrial viability, we invite you to connect.
                    </p>
                    <div className="flex justify-center">
                        <Link href="mailto:info@gigacora.energy?subject=Request Executive Overview">
                            <Button variant="primary" size="lg" className="min-w-[260px]">
                                Request Executive Overview
                            </Button>
                        </Link>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
