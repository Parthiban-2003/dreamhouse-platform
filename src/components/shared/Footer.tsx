"use client";

import Link from "next/link";
import {
    Home,
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    Send,
    Sparkles,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail("");
    };

    return (
        <footer className="relative mt-auto overflow-hidden bg-slate-950 text-stone-300">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[100px]" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-teal-500/[0.06] blur-[80px]" />
            <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-blue-600/[0.05] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="border-b border-white/[0.06] py-14 md:py-16">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[1.8px] text-blue-300/90">
                                <Sparkles size={12} />
                                Stay in the loop
                            </div>
                            <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[34px] md:leading-[1.2]">
                                Stay updated with{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                                    DreamHouse
                                </span>
                            </h3>
                            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50 md:text-[15px]">
                                Construction tips, market trends & exclusive offers — delivered
                                straight to your inbox.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col gap-3 sm:flex-row"
                        >
                            <div className="relative flex-1">
                                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 transition-all focus:border-blue-500/40 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                            <button
                                type="submit"
                                className="group relative flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30"
                            >
                                <span className="absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
                                <span className="relative">Subscribe</span>
                                <Send className="relative h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4 md:py-16 lg:grid-cols-5 lg:gap-10">
                    {/* Brand */}
                    <div className="col-span-2 space-y-5 md:col-span-4 lg:col-span-2">
                        <Link href="/" className="group inline-flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 opacity-40 blur transition-opacity duration-300 group-hover:opacity-70" />
                                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg">
                                    <Home className="h-5 w-5 text-blue-400" strokeWidth={1.7} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading text-[19px] font-bold leading-none tracking-tight text-white">
                                    DreamHouse
                                    <span className="text-teal-400">.</span>
                                </span>
                                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                                    Spaces to belong
                                </span>
                            </div>
                        </Link>

                        <p className="max-w-xs text-sm leading-relaxed text-white/45">
                            Tamil Nadu&apos;s most trusted platform for finding verified civil
                            engineers, calculating construction costs, and building your dream home.
                        </p>

                        <div className="flex items-center gap-2.5">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-white/40 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]"
                                >
                                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-white/80">
                            Platform
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            {[
                                { label: "Find Engineers", href: "/find-engineers" },
                                { label: "Happy Homes", href: "/reviews" },
                                { label: "Cost Calculator", href: "/cost-calculator" },
                                { label: "Project Tracking", href: "#" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-1 text-white/40 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 -translate-x-1.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-white/80">
                            Company
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Contact", href: "/contact" },
                                { label: "Careers", href: "#" },
                                { label: "Privacy Policy", href: "#" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-1 text-white/40 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 -translate-x-1.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-white/80">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-white/45">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400/80" />
                                <span>Chennai, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0 text-blue-400/80" />
                                <a
                                    href="mailto:support@dreamhouse.in"
                                    className="transition-colors hover:text-white"
                                >
                                    support@dreamhouse.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0 text-blue-400/80" />
                                <a
                                    href="tel:+919876543210"
                                    className="transition-colors hover:text-white"
                                >
                                    +91 98765 43210
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-7 sm:flex-row">
                    <p className="text-sm text-white/30">
                        © {new Date().getFullYear()} DreamHouse. All rights reserved. Built
                        with ❤️ in Tamil Nadu.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-white/30">
                        <Link href="#" className="transition-colors hover:text-white/70">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="transition-colors hover:text-white/70">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;