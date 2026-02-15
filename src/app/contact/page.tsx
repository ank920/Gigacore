"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Mail, ArrowRight, HeartHandshake, Microscope, TrendingUp, Megaphone, Globe, CheckCircle } from "lucide-react";
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

            {/* 2. Intro Section - Matching Home Page Intro Typography */}
            <section className="py-12 md:py-20 bg-white text-center border-b border-gray-100">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3 block">
                            Get in Touch
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-brand-secondary mb-6">
                            Partnering for <span className="text-gradient-green-glow">Scale</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                            We engage with partners, institutions, and stakeholders evaluating hydrogen as an industrial input and infrastructure asset.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. General Enquiries - Matching 'Differentiators' Card Style */}
            <section className="py-12 md:py-20 bg-gray-50">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1 h-full">
                            <div className="bg-white border border-brand-primary/20 p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl h-full flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-100" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white shadow-md">
                                            <Mail className="w-8 h-8" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-brand-secondary">General Enquiries</h3>
                                    </div>

                                    <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                                        For general questions, introductions, or to request an overview of our platform.
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-2">Email Us</p>
                                            <a href="mailto:info@gigacora.energy" className="text-2xl md:text-3xl font-bold text-brand-secondary hover:text-brand-primary transition-colors block">
                                                info@gigacora.energy
                                            </a>
                                        </div>
                                        <div className="h-px w-full bg-brand-primary/10" />
                                        <div className="flex items-center gap-2 text-gray-500 font-light">
                                            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                                            <span>Response time: 1–2 business days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative h-[400px] w-full">
                                <Image
                                    src="/contact/General%20Enquiries.webp"
                                    alt="General Enquiries"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. Partnerships & Technical - Grid Layout matching Home Page Features */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3 block">Collaborate</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Specialized Engagement</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Partnerships Card */}
                        <div className="bg-white border border-brand-primary/20 p-8 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
                            <div className="relative z-10">
                                <div className="mb-6 w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                                    <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Partnerships & Deployment</h3>
                                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                                    We work with organizations seeking deployable, scalable hydrogen solutions.
                                </p>
                                <div className="rounded-lg overflow-hidden h-48 w-full relative mb-6 border border-gray-100">
                                    <Image src="/contact/Partnerships%20&%20Deployment.jpg" alt="Partnerships & Deployment" fill className="object-contain" />
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Industrial offtake and deployment",
                                        "Pilot and demonstration collaborations",
                                        "Public-sector and PSU engagements",
                                        "EPC and infrastructure partnerships"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Technical Card */}
                        <div className="bg-white border border-brand-primary/20 p-8 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
                            <div className="relative z-10">
                                <div className="mb-6 w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                                    <Microscope className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Technical & Validation</h3>
                                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                                    For technical reviews, diligence requests, or validation discussions under appropriate confidentiality.
                                </p>
                                <div className="rounded-lg overflow-hidden h-48 w-full relative mb-6 border border-gray-100">
                                    <Image src="/contact/Technical%20&%20Validation%20Section.png" alt="Technical & Validation" fill className="object-contain" />
                                </div>
                                <div className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-wider text-sm cursor-pointer group-hover:gap-3 transition-all">
                                    Initiate Discussion <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 5. Investor & Media - Consistent Card Style */}
            <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-white border border-brand-primary/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-brand-secondary/5 rounded-lg flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                        <TrendingUp className="w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-secondary mb-2">Investor Engagement</h3>
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            We engage with long-term capital providers aligned with infrastructure-grade deployment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-brand-primary/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-brand-secondary/5 rounded-lg flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                        <Megaphone className="w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-secondary mb-2">Media & Comms</h3>
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            For media requests, speaking engagements, or corporate communications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative h-[400px] w-full">
                            <Image
                                src="/contact/Investor%20Engagement%20Section.jpg"
                                alt="Investor Engagement"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 6. Operating Regions & Process - Clean Grid */}
            <section className="py-12 md:py-20 bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Operating Regions */}
                        <div className="bg-gray-50 border border-brand-primary/10 p-10 rounded-xl text-center hover:border-brand-primary/30 transition-colors relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                                    <Globe className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Operating Regions</h3>
                                <p className="text-gray-600 mb-8 font-light">Focused on industrial demand centers with immediate relevance.</p>

                                <div className="rounded-lg overflow-hidden h-40 w-full relative mb-8 border border-gray-100 shadow-sm">
                                    <Image src="/contact/India-Aligned,%20Globally%20Competitive.jpg" alt="India Aligned, Globally Competitive" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>

                                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                    <div className="flex items-center justify-between bg-white px-5 py-3 rounded-lg border border-gray-100 shadow-sm">
                                        <span className="font-bold text-brand-secondary">India</span>
                                        <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">PRIMARY</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white px-5 py-3 rounded-lg border border-gray-100 shadow-sm">
                                        <span className="font-bold text-brand-secondary">Global</span>
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">EXPORT</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process */}
                        <div className="bg-brand-secondary text-white p-10 rounded-xl text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />

                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary relative z-10">
                                <CheckCircle className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Engagement Process</h3>
                            <p className="text-gray-300 mb-8 font-light relative z-10">Structured approach for productive discussions.</p>

                            <div className="space-y-4 text-left max-w-xs mx-auto relative z-10">
                                {[
                                    { step: "01", text: "Initial context" },
                                    { step: "02", text: "Alignment on scope" },
                                    { step: "03", text: "Technical discussion" },
                                    { step: "04", text: "Pilot / Partner" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-2 last:border-0">
                                        <span className="text-brand-primary font-mono text-sm">{item.step}</span>
                                        <span className="font-medium text-white">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 7. CTA Section - Matches Home Page CTA */}
            <section className="relative py-20 md:py-32 bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Engage?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        If you are evaluating hydrogen solutions with a focus on cost, scale, and industrial viability, we invite you to connect.
                    </p>
                    <Link href="mailto:info@gigacora.energy?subject=Request Executive Overview">
                        <Button variant="primary" size="lg" className="min-w-[240px] shadow-glow">
                            Request Executive Overview
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
