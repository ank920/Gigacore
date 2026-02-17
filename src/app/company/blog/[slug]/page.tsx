"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Tag,
} from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blogPosts";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const postIndex = blogPosts.findIndex((p) => p.slug === slug);
    const post = blogPosts[postIndex];

    if (!post) {
        return (
            <main className="bg-white min-h-screen pt-32">
                <SectionWrapper className="text-center">
                    <h1 className="text-3xl font-bold text-brand-secondary mb-4">
                        Post Not Found
                    </h1>
                    <p className="text-gray-600 mb-8">
                        The blog post you&apos;re looking for doesn&apos;t
                        exist.
                    </p>
                    <Link
                        href="/company/blog"
                        className="text-brand-primary font-semibold hover:underline"
                    >
                        Back to Blog
                    </Link>
                </SectionWrapper>
            </main>
        );
    }

    const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
    const nextPost =
        postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

    const relatedPosts = blogPosts
        .filter(
            (p) =>
                p.slug !== post.slug &&
                (p.category === post.category ||
                    blogPosts.indexOf(p) < 3)
        )
        .slice(0, 3);

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-green-950 to-brand-secondary" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(0,213,99,0.3),transparent_60%)]" />
                </div>
                <SectionWrapper className="relative z-10 pt-32 pb-16">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Link
                                    href="/company/blog"
                                    className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium flex items-center gap-1"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    All Posts
                                </Link>
                                <span className="text-gray-600">/</span>
                                <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {post.category}
                                </span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-tight text-white"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center gap-4 text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                <span className="text-sm">{post.category}</span>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* Article Content */}
            <section className="py-[var(--spacing-section)]">
                <SectionWrapper>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Sidebar */}
                        <aside className="lg:w-[240px] shrink-0 order-2 lg:order-1">
                            <div className="lg:sticky lg:top-28">
                                <Link
                                    href="/company/blog"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors mb-6"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    See all posts
                                </Link>
                                <nav className="space-y-1">
                                    {BLOG_CATEGORIES.filter(
                                        (c) => c !== "All"
                                    ).map((cat) => (
                                        <Link
                                            key={cat}
                                            href={`/company/blog`}
                                            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                post.category === cat
                                                    ? "bg-brand-primary text-white shadow-sm"
                                                    : "text-gray-600 hover:text-brand-primary hover:bg-brand-light"
                                            }`}
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Article Body */}
                        <motion.article
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex-1 order-1 lg:order-2 max-w-3xl"
                        >
                            {post.content.map((block, idx) => {
                                if (block.type === "heading") {
                                    return (
                                        <motion.h2
                                            key={idx}
                                            variants={fadeUp}
                                            className="text-[length:var(--font-h3)] font-bold text-brand-secondary mt-12 mb-6"
                                        >
                                            {block.text}
                                        </motion.h2>
                                    );
                                }
                                if (block.type === "list") {
                                    return (
                                        <motion.ul
                                            key={idx}
                                            variants={fadeUp}
                                            className="space-y-3 my-6 pl-2"
                                        >
                                            {block.items?.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-3 items-start text-gray-600 leading-relaxed"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </motion.ul>
                                    );
                                }
                                return (
                                    <motion.p
                                        key={idx}
                                        variants={fadeUp}
                                        className="text-gray-600 leading-relaxed mb-6 text-lg"
                                    >
                                        {block.text}
                                    </motion.p>
                                );
                            })}

                            {/* Post Navigation */}
                            <div className="mt-16 pt-10 border-t border-gray-100">
                                <div className="flex flex-col sm:flex-row justify-between gap-6">
                                    {prevPost ? (
                                        <Link
                                            href={`/company/blog/${prevPost.slug}`}
                                            className="group flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                            <div>
                                                <span className="text-xs text-gray-400 block">
                                                    Previous
                                                </span>
                                                <span className="text-sm font-medium line-clamp-1">
                                                    {prevPost.title}
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div />
                                    )}
                                    {nextPost && (
                                        <Link
                                            href={`/company/blog/${nextPost.slug}`}
                                            className="group flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors text-right"
                                        >
                                            <div>
                                                <span className="text-xs text-gray-400 block">
                                                    Next
                                                </span>
                                                <span className="text-sm font-medium line-clamp-1">
                                                    {nextPost.title}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    </div>
                </SectionWrapper>
            </section>

            {/* Related Posts */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-t border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-[length:var(--font-h3)] font-bold text-brand-secondary">
                            You might also like
                        </h2>
                        <Link
                            href="/company/blog"
                            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-all"
                        >
                            All articles
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((rp) => (
                            <Link
                                key={rp.slug}
                                href={`/company/blog/${rp.slug}`}
                                className="block group"
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
                                        <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">
                                            {rp.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-brand-secondary mt-2 mb-3 group-hover:text-brand-primary transition-colors leading-snug flex-grow">
                                            {rp.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-auto pt-3 border-t border-gray-50">
                                            {rp.date}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </SectionWrapper>
            </section>
        </main>
    );
}
