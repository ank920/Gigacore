"use client";
import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    href,
    children,
    className,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        // Bloom Energy green theme
        primary: "bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-[0_0_20px_rgba(0,213,99,0.4)] hover:shadow-[0_0_30px_rgba(0,213,99,0.6)] hover:scale-105 border border-transparent",
        secondary: "bg-brand-secondary text-white hover:bg-brand-green-800 hover:shadow-lg border border-transparent",
        outline: "bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white",
        ghost: "bg-transparent text-brand-secondary hover:bg-brand-green-50 hover:text-brand-primary",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-10 py-4 text-lg", // Bloom Energy pattern: generous padding
    };

    const classes = clsx(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} legacyBehavior passHref>
                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={classes}
                    {...(props as any)}
                >
                    {children}
                </motion.a>
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={classes}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
