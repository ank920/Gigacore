"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Search } from "lucide-react";
import clsx from "clsx";
import SectionWrapper from "../ui/SectionWrapper";
import { menuSlide } from "@/lib/motion";

const NAV_LINKS = [
    { name: "Technology", href: "/technology" },
    { name: "Economics", href: "/economics" },
    { name: "Applications", href: "/applications" },
    { name: "Market", href: "/market" },
    { name: "Partnerships", href: "/partnership" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || isMobileOpen
                        ? "bg-white text-gray-900 border-b border-gray-100 py-4 shadow-sm"
                        : "bg-gradient-to-b from-black/50 to-transparent py-6 text-white"
                )}
            >
                <SectionWrapper className="flex items-center justify-between">
                    <Link href="/" className="relative z-50 group translate-y-[-2px]">
                        <div className="flex flex-col leading-tight">
                            <span className="font-bold text-2xl uppercase tracking-tighter">Gigacore</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-bold hover:text-brand-blue transition-colors relative group tracking-tight"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={clsx("xl:hidden relative z-50 p-2 hover:text-brand-blue transition-colors", isMobileOpen ? "text-gray-900" : "text-current")}
                    >
                        {isMobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </SectionWrapper>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        variants={menuSlide}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 xl:hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 hover:text-brand-blue transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
