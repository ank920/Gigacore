"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GraduationCap, FlaskConical, Users, Lock, ChevronRight } from "lucide-react";

// ─── Leadership Data ──────────────────────────────────────────────────────────
const leaders = [
    {
        name: "Manish Kothary",
        initials: "MK",
        title: "Chief Executive Officer",
        bio: "Founder developing scalable hydrogen and plasma-based energy systems for industrial decarbonization. Focused on high-efficiency reactor platforms, modular deployment, and strategic partnerships to enable disciplined commercial scale-up.",
        background:
            "Previously founded Bene LLC. Earlier senior roles at Barclays Global Investors, Wells Fargo, and Pacific Gas & Electric.",
        education: [
            "M.Sc Computer Science – University of South Carolina",
            "BE Electrical Engineering – IIT Roorkee",
        ],
    },
    {
        name: "Vandit Verma",
        initials: "VV",
        title: "President – Infrastructure & Energy Platforms",
        bio: "Leads global infrastructure development and commercialization of advanced energy platforms. Brings cross-border project structuring expertise and strategic capital partnerships experience.",
        background:
            "Background includes hydrogen and low-carbon fuel systems, rare earth extraction, and waste-to-energy infrastructure across North America, Europe, and emerging markets.",
        education: ["B.Eng Mechanical Engineering – Ryerson University, Canada"],
    },
    {
        name: "Igor Kuntevitsky",
        initials: "IK",
        title: "Chief Technology Officer",
        bio: "Leads reactor architecture, hydrogen systems engineering, and IP development. Expertise spans matrix reactor systems, controlled partial oxidation, and integrated hydrogen purification.",
        background:
            "Inventor of multiple granted U.S. patents covering hydrogen production and critical mineral recovery systems (including hydrocarbon gas pathways and red mud processing). GigaCore's cold plasma method and reactor architecture are subject to a patent application currently in preparation.",
        education: [],
    },
    {
        name: "Ajeet Saran",
        initials: "AS",
        title: "EPC Director & Government Relations – India",
        bio: "Leads project execution, regulatory interface, and industrial deployment in India.",
        background:
            "Industry leader with nearly 25 years of experience at Tata Steel across mining, power, sales, logistics, and EPC project execution. Brings deep techno-commercial expertise and strong government liaison capability.",
        education: [
            "BE Electrical Engineering – IIT-BHU",
            "PG Supply Chain – XLRI",
        ],
    },
    {
        name: "Gautam Ghosh",
        initials: "GG",
        title: "Director – Finance, Tax & Compliance",
        bio: "Oversees financial governance, cross-border structuring, and regulatory compliance.",
        background:
            "Former Head of Taxation (South West Asia & Middle East) at Motorola Solutions India. Previously served as Head of Treasury at Coca-Cola India (North & North East), following distinguished senior leadership tenures at Nestlé India and Price Waterhouse.",
        education: [
            "Chartered Accountant",
            "B.Com (Hons) – SRCC, Delhi University",
        ],
    },
];

const techExpertise = [
    "Plasma Physics",
    "Materials Science",
    "Nanostructured Media",
    "Industrial Reactor Engineering",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
    return (
        <main className="bg-white min-h-screen selection:bg-brand-primary/20 selection:text-brand-secondary">
            {/* 1. Hero Section - Premium Light Theme */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gray-50 border-b border-gray-100">
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between"
                    >
                        {/* Text Col */}
                        <motion.div variants={fadeUp} className="max-w-2xl w-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px w-12 bg-brand-primary" />
                                <span className="text-sm font-bold tracking-widest uppercase text-brand-primary whitespace-nowrap">
                                    The People Behind the Platform
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]">
                                Leadership <br />
                                <span className="text-gray-400">&amp; Team</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                                A team of operators, engineers, and scientists united by a single mission - making green hydrogen industrially deployable and economically viable.
                            </p>
                        </motion.div>

                        {/* Image Col */}
                        <motion.div variants={fadeUp} className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                            <Image
                                src="/our team/our team hero section.jpg"
                                alt="GigaCore Team Hero"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Intro Statement */}
            <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-primary/[0.06] rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
                <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-sky-200/[0.2] rounded-full blur-3xl pointer-events-none" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-4xl mx-auto md:ml-0 md:mr-auto pl-6 md:pl-10 border-l-4 border-brand-primary"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-normal md:leading-relaxed text-gray-800"
                        >
                            Our leadership brings decades of experience across energy, finance, engineering, and government - combined with deep technical expertise in plasma physics and reactor design. We are building the infrastructure for the next industrial era.
                        </motion.h2>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Leadership Cards - Clean, White, Structural */}
            <section className="py-[var(--spacing-section)] bg-slate-50 border-y border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-sky-600/[0.03] rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mb-16 md:mb-20"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
                        >
                            Executive Leadership
                        </motion.h2>
                        <motion.div variants={fadeUp} className="h-1 w-20 bg-brand-primary mt-6" />
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {leaders.map((person, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group relative bg-white border border-gray-200 p-8 md:p-10 flex flex-col gap-6 hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
                            >
                                {/* Top row */}
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-secondary font-bold text-xl group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors shrink-0">
                                        {person.initials}
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-bold text-xl mb-1">
                                            {person.name}
                                        </h3>
                                        <p className="text-brand-primary font-semibold text-sm tracking-wide uppercase">
                                            {person.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-100" />

                                {/* Bio */}
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {person.bio}
                                </p>

                                {/* Background / Experience */}
                                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        {person.background}
                                    </p>
                                </div>

                                {/* Education */}
                                {person.education.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-auto pt-4">
                                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                            <GraduationCap size={14} className="text-gray-400" />
                                            <span>Education</span>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {person.education.map((edu, j) => (
                                                <li key={j} className="text-gray-600 text-[13px] flex items-start gap-2">
                                                    <ChevronRight size={14} className="text-brand-primary mt-0.5 shrink-0 opacity-70" />
                                                    {edu}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 4. Core Technical Team - Split Layout */}
            <section className="relative py-[var(--spacing-section)] bg-gradient-to-t from-slate-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                <div className="absolute -bottom-40 -left-60 w-[800px] h-[800px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                    >
                        {/* Content */}
                        <motion.div variants={fadeUp} className="order-2 lg:order-1">
                            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-primary mb-4">
                                Research &amp; Engineering
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                                Core Technical Team
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our bench of engineers and scientists forms the backbone of GigaCore's reactor development, rigorous testing, and expanding IP portfolio.
                            </p>

                            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
                                <Users size={40} className="text-gray-300" />
                                <div>
                                    <div className="text-4xl font-black text-gray-900 tracking-tight">14</div>
                                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Full-time Specialists</div>
                                </div>
                            </div>

                            <div className="mb-10">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Core Competencies</p>
                                <div className="flex flex-wrap gap-2">
                                    {techExpertise.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-700 font-medium text-sm rounded flex items-center gap-2"
                                        >
                                            <FlaskConical size={14} className="text-gray-400" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50 border-l-2 border-amber-400 p-5 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <Lock size={16} className="text-amber-500 mt-1 shrink-0" />
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        <span className="font-semibold text-gray-900">Confidentiality.</span> Individual CVs and detailed credentials for core technical team members are available upon execution of a Non-Disclosure Agreement (NDA).
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div variants={fadeUp} className="order-1 lg:order-2 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                            <Image
                                src="/our team/Untitled design.png"
                                alt="GigaCore Technical Engineering"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-secondary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 5. Minimal Light CTA */}
            <section className="py-24 bg-gray-50 border-t border-gray-100 text-center">
                <SectionWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
                            Build the Infrastructure of Tomorrow
                        </h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            We are always looking for driven engineers, scientists, and operators who share our conviction that industrial decarbonization is both necessary and achievable.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="md" className="min-w-[200px] shadow-lg shadow-brand-primary/20">
                                Get in Touch
                            </Button>
                        </Link>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}
