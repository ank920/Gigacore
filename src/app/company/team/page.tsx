"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Linkedin } from "lucide-react";

// Team Data (14 Members)
const teamMembers = [
    {
        name: "Dr. Elena Rostova",
        title: "Chief Executive Officer",
        bio: "Former Director of Energy Systems at EuroGrid. PhD in Chemical Engineering.",
        image: "/team/member-1.jpg", // Placeholder path
        linkedin: "#",
    },
    {
        name: "James Chen",
        title: "Chief Technology Officer",
        bio: "20+ years in plasma physics and industrial automation systems.",
        image: "/team/member-2.jpg",
        linkedin: "#",
    },
    {
        name: "Sarah Williams",
        title: "VP of Engineering",
        bio: "Led scaled deployment of modular refineries across 3 continents.",
        image: "/team/member-3.jpg",
        linkedin: "#",
    },
    {
        name: "Michael Ross",
        title: "Head of Operations",
        bio: "Expert in supply chain logistics for heavy industrial machinery.",
        image: "/team/member-4.jpg",
        linkedin: "#",
    },
    {
        name: "Dr. Aris Thorne",
        title: "Lead Research Scientist",
        bio: "Specialist in non-equilibrium thermodynamics and catalysis.",
        image: "/team/member-5.jpg",
        linkedin: "#",
    },
    {
        name: "Jessica Liu",
        title: "Senior Process Engineer",
        bio: "Focuses on maximizing thermal efficiency in reactor designs.",
        image: "/team/member-6.jpg",
        linkedin: "#",
    },
    {
        name: "David Miller",
        title: "Director of Business Development",
        bio: "Bridging the gap between technical innovation and market needs.",
        image: "/team/member-7.jpg",
        linkedin: "#",
    },
    {
        name: "Robert Fox",
        title: "Principal Mechanical Engineer",
        bio: "Designing robust systems for harsh industrial environments.",
        image: "/team/member-8.jpg",
        linkedin: "#",
    },
    {
        name: "Amanda Clark",
        title: "Head of Sustainability",
        bio: "Ensuring lifecycle carbon neutrality for all deployed units.",
        image: "/team/member-9.jpg",
        linkedin: "#",
    },
    {
        name: "Thomas Wright",
        title: "Electrical Systems Lead",
        bio: "Grid integration specialist for high-load industrial applications.",
        image: "/team/member-10.jpg",
        linkedin: "#",
    },
    {
        name: "Emily Davis",
        title: "Product Manager",
        bio: "Coordinating cross-functional teams to deliver on product roadmaps.",
        image: "/team/member-11.jpg",
        linkedin: "#",
    },
    {
        name: "Kevin Patel",
        title: "Senior Software Engineer",
        bio: "Developing the digital twin and control systems for Gigacore units.",
        image: "/team/member-12.jpg",
        linkedin: "#",
    },
    {
        name: "Laura Green",
        title: "QA/QC Manager",
        bio: "Maintaining rigorous quality standards for manufacturing output.",
        image: "/team/member-13.jpg",
        linkedin: "#",
    },
    {
        name: "Daniel Lee",
        title: "Field Operations Lead",
        bio: "Overseeing on-site installation and commissioning of pilot plants.",
        image: "/team/member-14.jpg",
        linkedin: "#",
    },
];

export default function TeamPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* 1. Hero Section - Premium Image with Bottom Text */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-brand-dark">
                {/* Background Image */}
                <div className="absolute inset-0 top-0">
                    <Image
                        src="/our%20team/our%20team%20hero%20section.jpg"
                        alt="GigaCore Team"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
                </div>

                {/* Text Content positioned at center */}
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-[length:var(--font-hero)] font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-md">
                            Our <span className="text-brand-primary">Team</span>
                        </h1>
                        <p className="text-[length:var(--font-intro)] text-gray-200 leading-relaxed font-light drop-shadow-sm max-w-3xl mx-auto">
                            The team consists of 14 people, the main specialists are highly qualified engineers and scientists who work on a permanent basis.
                        </p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Team Grid Section */}
            <section className="py-[var(--spacing-section)] bg-gray-50/50">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] w-full bg-gray-100 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="pr-4">
                                            <h3 className="text-xl font-bold text-brand-secondary leading-tight mb-1 group-hover:text-brand-primary transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm font-medium text-gray-500 mb-3">
                                                {member.title}
                                            </p>
                                        </div>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-300 hover:text-[#0077b5] transition-colors"
                                                aria-label={`LinkedIn profile of ${member.name}`}
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                    </div>

                                    {member.bio && (
                                        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 mt-auto">
                                            {member.bio}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. CTA Section */}
            <section className="relative py-20 bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h2)] font-bold text-white mb-6">Want to work with us?</h2>
                    <p className="text-[length:var(--font-intro)] text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        We are always looking for talented individuals to join our team. Connect with us to explore opportunities.
                    </p>
                    <Link href="/contact">
                        {/*@ts-ignore*/}
                        <Button variant="primary" size="lg" className="min-w-[200px] shadow-glow">
                            Contact Us
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>
        </main>
    );
}
