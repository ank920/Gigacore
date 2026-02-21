"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { ArrowRight, Building2, Factory, Users, Microscope, Coins, CheckCircle, Target, Zap } from "lucide-react";

export default function PartnershipPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/patnership/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Partnerships: <span className="text-brand-primary">Built to Scale Through Collaboration</span>
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-[var(--spacing-section)] bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            Large-scale deployment requires coordinated execution across technology, infrastructure, and capital.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            Our platform is designed for deployment with partners—combining technical capability with industrial reach. The objective is simple: <span className="text-brand-primary font-bold">Move from pilot to disciplined commercial scale.</span>
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Partnership Philosophy */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Partnership%20Philosophy.avif"
                imageAlt="Partnership Philosophy"
                subtitle="Philosophy"
                title="Partnership Philosophy"
                content={
                    <>
                        <p className="mb-6">
                            Partnerships are structured around shared execution — not vendor relationships.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Guiding principles:</h4>
                        <ul className="space-y-4">
                            {[
                                "Long-term alignment over transactional engagement",
                                "Clear division of roles and responsibilities",
                                "Transparency in technical and economic validation",
                                "Deployment at meaningful industrial scale"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 4. Industrial & Offtake Partners */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/patnership/Industrial%20&%20Offtake%20Partners.jpg"
                imageAlt="Industrial Partners"
                subtitle="Core Partners"
                title="Industrial & Offtake Partners"
                content={
                    <>
                        <p className="mb-6">
                            Industrial partners anchor deployment by providing existing hydrogen demand, real operational environments, and continuous offtake pathways.
                        </p>
                        <p className="text-base text-gray-500 font-bold mb-4">Priority sectors:</p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {["Fertilizers and ammonia", "Refining and petrochemicals", "Steel and metals processing", "Industrial clusters"].map((sector, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-700 shadow-sm"
                                >
                                    {sector}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-800 font-medium border-l-4 border-brand-primary pl-4">
                            Deployment is driven by <strong>demand certainty</strong> — not speculative projections.
                        </p>
                    </>
                }
            />

            {/* 5. Public-Sector & PSU Collaboration */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Public-Sector%20&%20PSU%20Collaboration.jpg"
                imageAlt="Public Sector"
                subtitle="Nation Building"
                title="Public-Sector & PSU Collaboration"
                content={
                    <>
                        <p className="mb-6">
                            Public-sector enterprises play a critical role where scale, reliability, and national priorities intersect.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Collaboration areas:</h4>
                        <ul className="space-y-4">
                            {[
                                "Pilot and demonstration facilities",
                                "Industrial retrofits and brownfield integration",
                                "Large-scale hydrogen and ammonia projects",
                                "Alignment with national hydrogen programs"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 6. EPC & Infrastructure Partners */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/patnership/EPC%20&%20Infrastructure%20Partners.jpg"
                imageAlt="EPC Partners"
                subtitle="Execution"
                title="EPC & Infrastructure Partners"
                content={
                    <>
                        <p className="mb-6">
                            EPC partners translate technology into bankable infrastructure. The platform integrates into <strong>established EPC workflows</strong> — not bespoke experimental builds.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Focus areas:</h4>
                        <ul className="space-y-4">
                            {[
                                "System integration and plant design",
                                "Construction and commissioning",
                                "Safety and regulatory compliance",
                                "Multi-site replication"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 7. Manufacturing & Localization Partners */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Manufacturing & Localization Partners.jpg"
                imageAlt="Manufacturing"
                subtitle="Supply Chain"
                title="Manufacturing & Localization Partners"
                content={
                    <>
                        <p className="mb-6">
                            Scalable deployment requires aligned manufacturing capability. This enables <strong>predictable scaling</strong> aligned with domestic manufacturing priorities.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Partnership scope:</h4>
                        <ul className="space-y-4">
                            {[
                                "Modular system fabrication",
                                "Localization of components",
                                "Standardization and quality control",
                                "Cost optimization at scale"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 8. Research & Validation Partners */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/patnership/Research%20&%20Validation%20Partners.jpg"
                imageAlt="Research Partners"
                subtitle="Validation"
                title="Research & Validation Partners"
                content={
                    <>
                        <p className="mb-6">
                            Independent validation underpins industrial adoption and financing. Credibility is built through <strong>validation</strong> — not claims.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Research collaboration supports:</h4>
                        <ul className="space-y-4">
                            {[
                                "Performance verification",
                                "Long-duration reliability testing",
                                "Third-party technical review",
                                "Continuous optimization"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 9. Capital & Infrastructure Investors */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Capital & Infrastructure Investors.jpg"
                imageAlt="Investors"
                subtitle="Finance"
                title="Capital & Infrastructure Investors"
                content={
                    <>
                        <p className="mb-6">
                            Hydrogen infrastructure requires patient, infrastructure-aligned capital. The platform is structured for <strong>bankable assets</strong>.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Investor collaboration focuses on:</h4>
                        <ul className="space-y-4">
                            {[
                                "Project-level structures",
                                "Infrastructure-grade risk assessment",
                                "Phased capital deployment",
                                "Long-term offtake alignment"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 10. Partnership Models & Deployment Pathway (Feature Section) */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Partnership Models */}
                        <div>
                            <h2 className="text-[length:var(--font-h2)] font-bold mb-6 text-brand-secondary">Partnership <span className="text-gradient-green-glow">Models</span></h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-8">
                                Engagement structures are tailored to partner roles and objectives:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Pilot and demonstration collaborations",
                                    "Joint development and deployment",
                                    "Licensing and manufacturing partnerships",
                                    "Project-level joint ventures"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700 font-medium items-start p-4 bg-white rounded-xl border border-brand-primary/10 shadow-sm">
                                        <Target className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* From Partnership to Deployment */}
                        <div>
                            <h2 className="text-[length:var(--font-h2)] font-bold mb-6 text-brand-secondary">From Partnership to <span className="text-gradient-green-glow">Deployment</span></h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-8">
                                The pathway from engagement to operation is structured and disciplined:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Technical and economic alignment" },
                                    { step: "2", title: "Pilot or demonstration deployment" },
                                    { step: "3", title: "Performance validation" },
                                    { step: "4", title: "Commercial-scale rollout" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-brand-secondary font-semibold">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 11. Engage as a Partner - CTA */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Engage as a Partner</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Engagement is focused on organizations seeking deployable, scalable hydrogen solutions.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Contact Us
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
