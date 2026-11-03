"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Home,
    Phone,
    Mail,
    MapPin,
    Send,
    Sparkles,
    Building2,
    ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
    explore: [
        { href: "/", label: "Home" },
        { href: "/find-companies", label: "Find Companies" },
        { href: "/about", label: "About Us" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contact", label: "Contact" },
    ],
    forCompanies: [
        { href: "/contact", label: "List your company" },
        { href: "/contact", label: "Partnerships" },
        { href: "/about", label: "Why DreamHouse" },
    ],
    support: [
        { href: "/contact", label: "Help center" },
        { href: "/contact", label: "Report an issue" },
        { href: "/testimonials", label: "Client stories" },
    ],
};

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        toast.success("Subscribed!", {
            description: "Construction tips & offers will hit your inbox.",
        });
        setEmail("");
    };

    return (
        <footer className="relative mt-auto overflow-hidden bg-indigo-950 text-stone-300">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Newsletter */}
                <div className="border-b border-white/10 py-12 md:py-14">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-300/90">
                                <Sparkles size={12} />
                                Newsletter
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                                Stay updated with{" "}
                                <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                                    DreamHouse
                                </span>
                            </h3>
                            <p className="mt-2 max-w-md text-sm text-indigo-200/70 leading-relaxed">
                                Tips on building, verified companies near you, and exclusive
                                offers — no spam.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            {/* email */}
                            <div className="relative flex-1">
                                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3.5 text-sm font-bold text-indigo-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-300 transition-all shrink-0"
                            >
                                Subscribe
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
                    <div className="col-span-2 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-700 to-indigo-900 flex items-center justify-center border border-white/10 shadow-lg">
                                <Home className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                                <span className="font-bold text-lg text-white tracking-tight">
                                    DreamHouse<span className="text-amber-400">.</span>
                                </span>
                                <p className="text-[10px] text-indigo-300/70 uppercase tracking-widest">
                                    Spaces to Belong
                                </p>
                            </div>
                        </Link>
                        <p className="text-sm text-indigo-200/60 leading-relaxed max-w-xs">
                            Find verified construction companies across Tamil Nadu. Transparent
                            pricing. Quality homes.
                        </p>
                        <div className="space-y-2 text-sm">
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-2 text-indigo-200/80 hover:text-amber-300 transition-colors"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                +91 98765 43210
                            </a>
                            <a
                                href="mailto:support@dreamhouse.in"
                                className="flex items-center gap-2 text-indigo-200/80 hover:text-amber-300 transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                support@dreamhouse.in
                            </a>
                            <p className="flex items-center gap-2 text-indigo-200/80">
                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                Anna Nagar, Chennai · 600040
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.explore.map((l) => (
                                <li key={l.href + l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-indigo-200/70 hover:text-amber-300 transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Companies */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-amber-400" />
                            Companies
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.forCompanies.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-indigo-200/70 hover:text-amber-300 transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
                            Support
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.support.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-indigo-200/70 hover:text-amber-300 transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Find Companies */}
                        <Link
                            href="/find-companies"
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                        >
                            Find companies
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-indigo-300/50">
                    <p>© {new Date().getFullYear()} DreamHouse. All rights reserved.</p>
                    <p>Built for Tamil Nadu home builders</p>
                </div>
            </div>
        </footer>
    );
}