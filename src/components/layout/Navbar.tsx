"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import SectionWrapper from "../ui/SectionWrapper";
import { menuSlide } from "@/lib/motion";
import Logo from "../ui/Logo";

interface NavLink {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
    { name: "Technology", href: "/technology" },
    { name: "Economics", href: "/economics" },
    { name: "Applications", href: "/applications" },
    { name: "Market", href: "/market" },
    { name: "Partnerships", href: "/partnership" },
    {
        name: "Company",
        href: "/company",
        children: [
            { name: "About Us", href: "/company" },
            { name: "Blog", href: "/company/blog" },
        ],
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDropdownEnter = (name: string) => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setOpenDropdown(name);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white shadow-[0_4px_30px_rgba(0,213,99,0.1)] border-b border-brand-primary/10 py-3" // Pure white navbar
                        : "bg-transparent py-4"
                )}
            >
                <SectionWrapper className="flex items-center justify-between">
                    <Link href="/" className="relative z-50 group">
                        <Logo className="w-[176px] md:w-auto" isScrolled={isScrolled} />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {NAV_LINKS.map((link) =>
                            link.children ? (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => handleDropdownEnter(link.name)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={clsx(
                                            "text-sm font-medium transition-all duration-300 relative group tracking-wide flex items-center gap-1",
                                            isScrolled ? "text-brand-secondary hover:text-brand-primary" : "text-white hover:text-brand-primary"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown className={clsx(
                                            "w-3.5 h-3.5 transition-transform duration-200",
                                            openDropdown === link.name && "rotate-180"
                                        )} />
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-brand-primary" />
                                    </button>
                                    <AnimatePresence>
                                        {openDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                                            >
                                                <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 py-2 min-w-[180px] overflow-hidden">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => setOpenDropdown(null)}
                                                            className="block px-5 py-2.5 text-sm text-brand-secondary hover:text-brand-primary hover:bg-brand-green-50 transition-colors font-medium"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-sm font-medium transition-all duration-300 relative group tracking-wide",
                                        isScrolled ? "text-brand-secondary hover:text-brand-primary" : "text-white hover:text-brand-primary"
                                    )}
                                >
                                    {link.name}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-brand-primary"
                                    )} />
                                </Link>
                            )
                        )}
                        <Link
                            href="/contact"
                            className={clsx(
                                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                                isScrolled
                                    ? "bg-brand-primary text-white border-brand-primary hover:bg-brand-accent hover:border-brand-accent hover:shadow-lg"
                                    : "bg-white/10 text-white border-white/30 hover:bg-brand-primary hover:text-white hover:border-brand-primary backdrop-blur-sm"
                            )}
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={clsx(
                            "xl:hidden relative z-50 p-2 transition-colors duration-300",
                            isMobileOpen || isScrolled ? "text-brand-secondary" : "text-white"
                        )}
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </SectionWrapper>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        variants={menuSlide}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-brand-light/95 backdrop-blur-2xl pt-20 px-6 xl:hidden overflow-y-auto h-[100dvh] flex flex-col"
                    >
                        <div className="flex flex-col space-y-2 mt-4">
                            {NAV_LINKS.map((link, idx) =>
                                link.children ? (
                                    <div key={link.name}>
                                        <button
                                            onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                                            className="text-2xl font-light text-brand-secondary hover:text-brand-primary transition-colors tracking-tight flex items-center gap-2 w-full text-left"
                                        >
                                            <span className="text-[10px] font-bold text-brand-primary/50 block mb-0.5">0{idx + 1}</span>
                                            <span className="flex items-center gap-2">
                                                {link.name}
                                                <ChevronDown className={clsx(
                                                    "w-5 h-5 transition-transform duration-200",
                                                    mobileExpanded === link.name && "rotate-180"
                                                )} />
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {mobileExpanded === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden pl-8"
                                                >
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => setIsMobileOpen(false)}
                                                            className="block text-lg text-gray-600 hover:text-brand-primary transition-colors py-2"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="text-2xl font-light text-brand-secondary hover:text-brand-primary transition-colors tracking-tight"
                                    >
                                        <span className="text-[10px] font-bold text-brand-primary/50 block mb-0.5">0{idx + 1}</span>
                                        {link.name}
                                    </Link>
                                )
                            )}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileOpen(false)}
                                className="text-2xl font-light text-brand-secondary hover:text-brand-primary transition-colors tracking-tight"
                            >
                                <span className="text-[10px] font-bold text-brand-primary/50 block mb-0.5">07</span>
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
