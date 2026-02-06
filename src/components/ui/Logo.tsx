import React from "react";

export default function Logo({ className = "", textClassName = "text-gray-900" }: { className?: string, textClassName?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Icon Mark */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M16 2L2 9V23L16 30L30 23V9L16 2Z" className="fill-brand-blue/20 stroke-brand-blue" strokeWidth="2" />
                <path d="M16 6L6 11.5V20.5L16 26L26 20.5V11.5L16 6Z" className="fill-brand-blue" />
                <path d="M16 12L10 15V18L16 21L22 18V15L16 12Z" className="fill-white" />
            </svg>

            {/* Text */}
            <div className={`flex flex-col leading-none ${textClassName}`}>
                <span className="font-bold text-xl tracking-tighter uppercase">Gigacore</span>
            </div>
        </div>
    );
}
