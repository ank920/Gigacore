import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Logo from "../ui/Logo";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../ui/SocialIcons";

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 py-20 border-t border-gray-200 cursor-default">
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* 1. Brand & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <Logo textClassName="text-gray-900 group-hover:text-brand-primary transition-colors" />
                        </Link>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Advancing next-generation hydrogen production systems designed for real-world industrial deployment. Built for scale, reliability, and economic viability.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-gray-600">
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-gray-600">
                                <TwitterIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-gray-600">
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-gray-600">
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Platform Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6 text-lg">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/technology" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="/economics" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Economics
                                </Link>
                            </li>
                            <li>
                                <Link href="/applications" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Applications
                                </Link>
                            </li>
                            <li>
                                <Link href="/sustainability" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Sustainability
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Company Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/market" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Market Opportunity
                                </Link>
                            </li>
                            <li>
                                <Link href="/partnership" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Partnerships
                                </Link>
                            </li>
                            <li>
                                <Link href="/company" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6 text-lg">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-900 mb-1">General Inquiries</p>
                                    <a href="mailto:info@gigacore.energy" className="hover:text-brand-primary transition-colors">info@gigacore.energy</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-900 mb-1">Headquarters</p>
                                    <p>Global Industrial Hubs<br />New Delhi, India</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
                    <p>© {new Date().getFullYear()} Gigacore Energy. All rights reserved.</p>
                    <div className="flex gap-8 text-gray-500">
                        <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </SectionWrapper>
        </footer>
    );
}
