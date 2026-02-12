import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#16A34A", // Primary Green (was green)
                    secondary: "#111827", // Dark Gray/Black
                    accent: "#84CC16", // Lime Green
                    green: "#16A34A", // Kept for backward compatibility
                    blue: "#3B82F6", // Standard Blue (deprioritized)
                    gray: {
                        50: "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        800: "#1F2937",
                        900: "#111827",
                    }
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
            }
        },
    },
    plugins: [],
};
export default config;
