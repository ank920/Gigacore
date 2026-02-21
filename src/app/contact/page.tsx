"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { Mail, ArrowRight, HeartHandshake, Microscope, TrendingUp, Megaphone, Globe, CheckCircle } from "lucide-react";

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
            <section className="py-24 lg:py-32 bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-gray-800 mb-8 max-w-4xl">
                            We engage with partners, institutions, and stakeholders evaluating hydrogen as an <span className="text-brand-primary font-bold">industrial input</span> and <span className="text-brand-primary font-bold">infrastructure asset</span>.
                        </motion.h2>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. General Enquiries */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/contact/General%20Enquiries.webp"
                imageAlt="General Enquiries"
                subtitle="Contact"
                title="General Enquiries"
                content={
                    <>
                        <p className="mb-6">
                            For general questions, introductions, or to request an overview of our platform.
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                                <a href="mailto:info@gigacore.energy" className="text-xl font-bold text-gray-900 hover:text-brand-primary transition-colors">
                                    info@gigacore.energy
                                </a>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            Response time: 1–2 business days
                        </p>
                    </>
                }
            />

            {/* 4. Partnerships & Deployment */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/contact/Partnerships%20&%20Deployment.jpg"
                imageAlt="Partnerships & Deployment"
                subtitle="Collaboration"
                title="Partnerships & Deployment"
                content={
                    <>
                        <p className="mb-6">
                            We work with organizations seeking deployable, scalable hydrogen solutions in industrial settings.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Focus Areas:</h4>
                        <ul className="space-y-3">
                            {[
                                "Industrial offtake and deployment",
                                "Pilot and demonstration collaborations",
                                "Public-sector and PSU engagements",
                                "EPC and infrastructure partnerships"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 5. Technical & Validation */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/contact/Technical%20&%20Validation%20Section.png"
                imageAlt="Technical & Validation"
                subtitle="Diligence"
                title="Technical & Validation"
                content={
                    <>
                        <p className="mb-6">
                            For technical reviews, diligence requests, or validation discussions under appropriate confidentiality.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-brand-primary">
                            <div className="flex items-center gap-3 mb-2 text-gray-900 font-bold">
                                <Microscope className="w-5 h-5 text-brand-primary" />
                                <span>Technical Reviews</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                We facilitate deep-dive technical sessions for qualified partners and investors.
                            </p>
                        </div>
                    </>
                }
            />

            {/* 6. Investor Engagement */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/contact/Investor%20Engagement%20Section.jpg"
                imageAlt="Investor Engagement"
                subtitle="Capital"
                title="Investor Engagement"
                content={
                    <>
                        <p className="mb-6">
                            We engage with long-term capital providers aligned with infrastructure-grade deployment and scale.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Infrastructure Capital</h4>
                                    <p className="text-sm text-gray-600">Alignment with long-term asset development.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                                    <Megaphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Media & Comms</h4>
                                    <p className="text-sm text-gray-600">For speaking engagements and corporate updates.</p>
                                </div>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 7. Operating Regions */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/contact/India-Aligned,%20Globally%20Competitive.jpg"
                imageAlt="Operating Regions"
                subtitle="Reach"
                title="Operating Regions"
                content={
                    <>
                        <p className="mb-6">
                            Our deployment strategy is focused on industrial demand centers with immediate relevance and policy support.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                <Globe className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                                <h4 className="font-bold text-gray-900">India</h4>
                                <span className="text-xs font-bold text-white bg-brand-primary px-2 py-0.5 rounded-full inline-block mt-1">PRIMARY</span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                <Globe className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                                <h4 className="font-bold text-gray-900">Global</h4>
                                <span className="text-xs font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full inline-block mt-1">EXPORT</span>
                            </div>
                        </div>
                    </>
                }
            />

            {/* 8. Engagement Process Feature Section */}
            <section className="py-[var(--spacing-section)] bg-gray-900 text-white">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-[length:var(--font-h2)] font-bold mb-4 text-white">Engagement <span className="text-gradient-green-glow">Process</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Structured approach for productive discussions and alignment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Initial Context", desc: "Understanding strategic fit" },
                            { step: "02", title: "Alignment", desc: "Defining scope and goals" },
                            { step: "03", title: "Technical", desc: "Deep-dive validation" },
                            { step: "04", title: "Pilot / Partner", desc: "Execution and deployment" }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                                <div className="text-4xl font-bold text-brand-primary/20 mb-4 group-hover:text-brand-primary/40 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </section>

            {/* 9. CTA Section */}
            <section className="relative py-20 md:py-32 bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Ready to Engage?</h2>
                    <p className="text-[length:var(--font-intro)] text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        If you are evaluating hydrogen solutions with a focus on cost, scale, and industrial viability, we invite you to connect.
                    </p>
                    <Link href="mailto:info@gigacore.energy?subject=Request Executive Overview">
                        <Button variant="primary" size="lg" className="min-w-[240px] shadow-glow">
                            Request Executive Overview
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
