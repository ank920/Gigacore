"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blogPosts";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
    const filteredPosts = blogPosts.filter(
        (p) =>
            p.slug !== featuredPost.slug &&
            (activeCategory === "All" || p.category === activeCategory)
    );
    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-green-950 to-brand-secondary" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(0,213,99,0.3),transparent_60%)]" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center gap-2 mb-4"
                            >
                                <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                    Blog
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-tight text-white"
                            >
                                The Giga Cora{" "}
                                <span className="text-gradient-green-glow">
                                    Energy Blog
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg text-gray-300 max-w-xl leading-relaxed"
                            >
                                Insights on hydrogen technology, industrial
                                decarbonization, and the future of clean energy
                                infrastructure.
                            </motion.p>
                        </div>
                        {/* Featured Post Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex-1 w-full max-w-lg hidden lg:block"
                        >
                            <Link
                                href={`/company/blog/${featuredPost.slug}`}
                                className="block group"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,213,99,0.15)] transition-all duration-500">
                                    <div className="relative h-[220px] w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-100 to-brand-green-50 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                                <ArrowRight className="w-8 h-8 text-brand-primary group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">
                                            {featuredPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-brand-secondary mt-2 mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                                            {featuredPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {featuredPost.date}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* Blog Content */}
            <section className="py-[var(--spacing-section)] bg-brand-light">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Sidebar Categories */}
                        <aside className="lg:w-[240px] shrink-0">
                            <div className="lg:sticky lg:top-28">
                                <Link
                                    href="/company/blog"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors mb-6"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                    See all posts
                                </Link>
                                <nav className="space-y-1">
                                    {BLOG_CATEGORIES.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setActiveCategory(cat);
                                                setVisibleCount(6);
                                            }}
                                            className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                activeCategory === cat
                                                    ? "bg-brand-primary text-white shadow-sm"
                                                    : "text-gray-600 hover:text-brand-primary hover:bg-white"
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Posts Grid */}
                        <div className="flex-1">
                            {/* Mobile Featured Post */}
                            <div className="lg:hidden mb-10">
                                <Link
                                    href={`/company/blog/${featuredPost.slug}`}
                                    className="block group"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all">
                                        <div className="relative h-[200px] w-full">
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green-100 to-brand-green-50 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                                    <ArrowRight className="w-6 h-6 text-brand-primary" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">
                                                Featured &middot;{" "}
                                                {featuredPost.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-brand-secondary mt-2 mb-3 group-hover:text-brand-primary transition-colors">
                                                {featuredPost.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                                {featuredPost.excerpt}
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                {featuredPost.date}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                            >
                                {visiblePosts.map((post) => (
                                    <motion.div
                                        key={post.slug}
                                        variants={fadeUp}
                                    >
                                        <Link
                                            href={`/company/blog/${post.slug}`}
                                            className="block group h-full"
                                        >
                                            <article className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                                <div className="relative h-[200px] w-full overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green-50 via-white to-brand-green-100 flex items-center justify-center">
                                                        <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                            <ArrowRight className="w-5 h-5 text-brand-primary group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">
                                                            {post.category}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors leading-snug flex-grow">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-auto pt-4 border-t border-gray-50">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {post.date}
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {visiblePosts.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-gray-500 text-lg">
                                        No posts found in this category yet.
                                    </p>
                                    <button
                                        onClick={() =>
                                            setActiveCategory("All")
                                        }
                                        className="mt-4 text-brand-primary font-medium hover:underline"
                                    >
                                        View all posts
                                    </button>
                                </div>
                            )}

                            {/* Load More */}
                            {hasMore && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={() =>
                                            setVisibleCount((c) => c + 6)
                                        }
                                        className="px-8 py-3 rounded-full border-2 border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </SectionWrapper>
            </section>
        </main>
    );
}
