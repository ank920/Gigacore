"use client";
import React, { useState, useRef, useEffect } from "react";

const INDUSTRIES = [
    "Aerospace and Defense",
    "Agriculture",
    "Banking and Financial Services",
    "Cloud Services and Data Centers",
    "Construction",
    "Consulting",
    "Consumer Goods",
    "Education",
    "Energy",
    "Food and Beverage",
    "Government",
    "Hospitality and Entertainment",
    "Hospitals and Healthcare",
    "Manufacturing",
    "Media and Telecommunications",
    "Medical, Pharmaceuticals, and Biotechnology",
    "Other",
    "Real Estate",
    "Retail"
];

const COUNTRIES = [
    "United States",
    "India",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other"
];

// ── Custom Dropdown component ──────────────────────────────────────────────────
interface CustomDropdownProps {
    id: string;
    value: string;
    options: string[];
    placeholder?: string;
    required?: boolean;
    onChange: (val: string) => void;
}

function CustomDropdown({ id, value, options, placeholder = "Please Select", required, onChange }: CustomDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Hidden native input for form validation
    return (
        <div ref={ref} className="relative w-full">
            {/* Hidden input for HTML5 form validation */}
            <input
                type="text"
                id={id}
                name={id}
                value={value}
                required={required}
                readOnly
                tabIndex={-1}
                aria-hidden="true"
                className="absolute inset-0 opacity-0 pointer-events-none w-0 h-0"
            />

            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg border bg-white text-left text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all duration-300 shadow-sm hover:border-brand-primary/50 ${open ? "border-brand-primary ring-2 ring-brand-primary/30" : "border-gray-200"}`}
            >
                <span className={`truncate text-[15px] ${value ? "text-gray-900" : "text-gray-400"}`}>
                    {value || placeholder}
                </span>
                <svg
                    className={`ml-2 w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20" fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Dropdown list */}
            {open && (
                <ul
                    role="listbox"
                    className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-64 overflow-y-auto py-1 left-0"
                    style={{ minWidth: 0 }}
                >
                    {options.map(opt => (
                        <li
                            key={opt}
                            role="option"
                            aria-selected={value === opt}
                            onClick={() => { onChange(opt); setOpen(false); }}
                            className={`px-4 py-2.5 text-[15px] cursor-pointer truncate transition-colors duration-150 ${value === opt
                                ? "bg-brand-primary text-white font-medium"
                                : "text-gray-800 hover:bg-gray-50"
                                }`}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// ── Main ContactForm ──────────────────────────────────────────────────────────
export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        industry: "",
        country: "",
        message: "",
        agreePolicy: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleDropdown = (name: string) => (val: string) => {
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Web Enquiry from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Job Title: ${formData.jobTitle}
Industry: ${formData.industry}
Country/Region: ${formData.country}

Message:
${formData.message}

Policy Agreed: ${formData.agreePolicy ? "Yes" : "No"}
`);
        window.location.href = `mailto:info@gigacore.energy?subject=${subject}&body=${body}`;
    };

    const inputClass = "w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary focus:bg-white transition-all duration-300 placeholder:text-gray-400";
    const labelClass = "text-[14px] font-semibold text-gray-700";
    const fieldClass = "flex flex-col gap-2 min-w-0";

    return (
        <div className="w-full max-w-[95%] lg:max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500">
            <h2 className="text-[28px] md:text-[40px] font-bold text-center text-gray-900 mb-8 md:mb-12 tracking-tight">
                Reach our experts.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">

                    {/* First Name */}
                    <div className={fieldClass}>
                        <label htmlFor="firstName" className={labelClass}>First name<span className="text-red-500 ml-1">*</span></label>
                        <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Last Name */}
                    <div className={fieldClass}>
                        <label htmlFor="lastName" className={labelClass}>Last name<span className="text-red-500 ml-1">*</span></label>
                        <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Company Email */}
                    <div className={fieldClass}>
                        <label htmlFor="email" className={labelClass}>Company Email<span className="text-red-500 ml-1">*</span></label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Phone Number */}
                    <div className={fieldClass}>
                        <label htmlFor="phone" className={labelClass}>Phone number<span className="text-red-500 ml-1">*</span></label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Company Name */}
                    <div className={fieldClass}>
                        <label htmlFor="company" className={labelClass}>Company name<span className="text-red-500 ml-1">*</span></label>
                        <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Job Title */}
                    <div className={fieldClass}>
                        <label htmlFor="jobTitle" className={labelClass}>Job Title<span className="text-red-500 ml-1">*</span></label>
                        <input type="text" id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Industry – custom dropdown */}
                    <div className={fieldClass}>
                        <label className={labelClass}>Industry<span className="text-red-500 ml-1">*</span></label>
                        <CustomDropdown
                            id="industry"
                            value={formData.industry}
                            options={INDUSTRIES}
                            required
                            onChange={handleDropdown("industry")}
                        />
                    </div>

                    {/* Country – custom dropdown */}
                    <div className={fieldClass}>
                        <label className={labelClass}>Country/Region<span className="text-red-500 ml-1">*</span></label>
                        <CustomDropdown
                            id="country"
                            value={formData.country}
                            options={COUNTRIES}
                            required
                            onChange={handleDropdown("country")}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="message" className={labelClass}>How can we help you?<span className="text-red-500 ml-1">*</span></label>
                    <textarea
                        id="message" name="message" required rows={5}
                        value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary focus:bg-white transition-all duration-300 resize-y placeholder:text-gray-400"
                    ></textarea>
                </div>

                {/* Consent */}
                <div className="mt-8 bg-gray-50/30 p-4 sm:p-6 rounded-xl border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="relative flex items-center h-5 mt-0.5 shrink-0">
                            <input
                                type="checkbox" id="agreePolicy" name="agreePolicy" required
                                checked={formData.agreePolicy} onChange={handleChange}
                                className="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary focus:ring-offset-1 cursor-pointer"
                            />
                        </div>
                        <label htmlFor="agreePolicy" className="text-[14px] text-gray-600 leading-[1.6] cursor-pointer">
                            By submitting the form, you agree to the <a href="/privacy-policy" className="text-brand-primary font-medium hover:underline">Privacy Policy</a>, authorize Gigacore to use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we may contact you for products, services, and other content that may be of interest to you.
                        </label>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-[1.6] mt-4 ml-0 sm:ml-9">
                        You can unsubscribe from these communications at any time. Please review our <a href="/privacy-policy" className="text-brand-primary font-medium hover:underline">Privacy Policy</a>.
                    </p>
                </div>

                {/* Submit */}
                <div className="pt-6">
                    <button
                        type="submit"
                        className="bg-[#56a345] hover:bg-[#468c37] text-white font-bold py-3.5 px-12 rounded-lg transition-all duration-300 text-[16px] focus:outline-none focus:ring-4 focus:ring-[#56a345]/30 shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
