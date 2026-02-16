"use client";
import React, { useEffect, useRef } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { useInView, useMotionValue, animate } from "framer-motion";

const metrics = [
    {
        value: 70,
        from: 0,
        label: "Energy Reduction Potential",
        subtext: "Relative to conventional electrolysis benchmarks",
        suffix: "%",
        prefix: ""
    },
    {
        value: 2,
        from: 0,
        label: "Hydrogen Production Cost at Scale",
        subtext: "Achieving economic parity with fossil-fuel alternatives",
        suffix: "/kg",
        prefix: "<$"
    },
    {
        value: 50,
        from: 25, // Start from lower bound of range
        label: "Modular Production Units",
        subtext: "Scalable to 250–500+ kg/hr clusters",
        suffix: " kg/hr",
        prefix: "25–"
    }
];

const AnimatedNumber = ({ value, from = 0, prefix = "", suffix = "" }: { value: number, from?: number, prefix?: string, suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            animate(motionValue, value, {
                duration: 1.6,
                ease: "easeOut"
            });
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
        return unsubscribe;
    }, [motionValue]);

    return (
        <span className="tabular-nums tracking-tight">
            {prefix}<span ref={ref}>{from}</span>{suffix}
        </span>
    );
};

export default function SimpleMetrics() {
    return (
        <section className="bg-white w-full border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-[48px] lg:py-[140px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
                    {metrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-start relative pl-0 lg:pl-12 first:pl-0 ${idx !== 0 ? "lg:border-l lg:border-gray-200" : ""
                                }`}
                        >
                            {/* Thin grey divider line (Mobile only, desktop uses border-l) */}
                            <div className="w-full h-px bg-gray-200 mb-6 lg:hidden" />

                            {/* Big Green Number - Bloom Style (Light/Thin) */}
                            {/* Added min-h to align distinct baselines across columns on desktop */}
                            <div className="text-[56px] lg:text-[80px] font-light tracking-tighter text-brand-primary leading-none mb-6 lg:min-h-[160px] flex items-start">
                                <AnimatedNumber
                                    value={metric.value}
                                    from={metric.from}
                                    prefix={metric.prefix}
                                    suffix={metric.suffix}
                                />
                            </div>

                            {/* Bold Label */}
                            {/* Added min-h to align subtext across columns on desktop */}
                            <h3 className="text-[18px] lg:text-[20px] font-bold text-black leading-tight mb-2 lg:min-h-[60px]">
                                {metric.label}
                            </h3>

                            {/* Muted Subtext */}
                            {metric.subtext && (
                                <p className="text-[16px] text-gray-500 leading-relaxed max-w-[280px]">
                                    {metric.subtext}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
