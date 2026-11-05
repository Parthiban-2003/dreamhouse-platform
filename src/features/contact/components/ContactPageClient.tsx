"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Loader2,
    Building2,
    MessageCircle,
    CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

const contactChannels = [
    {
        icon: Phone,
        label: "Call",
        value: "+91 98765 43210",
        hint: "Mon–Sat · 9:00 AM – 7:00 PM",
        href: "tel:+919876543210",
    },
    {
        icon: Mail,
        label: "Email",
        value: "support@dreamhouse.in",
        hint: "Reply within 24 hours",
        href: "mailto:support@dreamhouse.in",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Anna Nagar East, Chennai",
        hint: "Tamil Nadu · 600040",
        href: "https://maps.google.com/?q=Anna+Nagar+Chennai",
    },
];

const subjects = [
    "Find a company near me",
    "Project cost / estimate",
    "List my company",
    "Partnership",
    "Support ticket",
    "Other",
];

export default function ContactPageClient() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: subjects[0],
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const onChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error("Name, email and message are required");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            toast.success("Message sent!", {
                description: "Our team will reach out within 24 hours.",
            });
            setForm({
                name: "",
                email: "",
                phone: "",
                subject: subjects[0],
                message: "",
            });
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Compact header */}
            <div className="bg-indigo-950 text-white">
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
                                <MessageCircle className="w-3.5 h-3.5" />
                                Contact
                            </p>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Let&apos;s talk about your build
                            </h1>
                            <p className="text-indigo-200 mt-2 max-w-lg text-sm md:text-base">
                                Companies, estimates, partnerships, or support — one message is
                                enough. We respond within a business day.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-indigo-200 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Support hours: Mon–Sat, 9 AM – 7 PM IST</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl px-4 -mt-2 pb-20">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
                    {/* Left channels */}
                    <div className="lg:col-span-2 space-y-5 pt-8 lg:pt-10">
                        {contactChannels.map((c, i) => (
                            <motion.a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-900 flex items-center justify-center shrink-0 transition-colors">
                                    <c.icon className="w-5 h-5 text-indigo-800 group-hover:text-amber-400 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                                        {c.label}
                                    </p>
                                    <p className="font-bold text-stone-900 mt-0.5">{c.value}</p>
                                    <p className="text-xs text-stone-500 mt-0.5">{c.hint}</p>
                                </div>
                            </motion.a>
                        ))}

                        <div className="rounded-2xl bg-indigo-950 text-white p-6 border border-indigo-900">
                            <div className="flex items-center gap-2 mb-3">
                                <Building2 className="w-5 h-5 text-amber-400" />
                                <h3 className="font-bold">For construction companies</h3>
                            </div>
                            <p className="text-sm text-indigo-200 leading-relaxed mb-4">
                                Want to list your firm on DreamHouse? Tell us about your team,
                                districts, and projects — we&apos;ll guide the onboarding.
                            </p>
                            <ul className="space-y-2 text-sm text-indigo-100">
                                {[
                                    "Verified badge after review",
                                    "Engineer profiles under your company",
                                    "Leads from district & pincode search",
                                ].map((t) => (
                                    <li key={t} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-3 pt-8 lg:pt-10"
                    >
                        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/50 p-7 md:p-9">
                            <h2 className="text-xl font-bold text-stone-900 mb-1">
                                Send a message
                            </h2>
                            <p className="text-sm text-stone-500 mb-7">
                                Fill the form — no account needed.
                            </p>

                            <form onSubmit={onSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
                                            Full name *
                                        </label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={onChange}
                                            placeholder="Your name"
                                            className="mt-1.5 w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-indigo-500 outline-none text-sm transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
                                            Phone
                                        </label>
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={onChange}
                                            placeholder="+91"
                                            className="mt-1.5 w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-indigo-500 outline-none text-sm transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
                                        Email *
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={onChange}
                                        placeholder="you@email.com"
                                        className="mt-1.5 w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-indigo-500 outline-none text-sm transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
                                        Subject
                                    </label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={onChange}
                                        className="mt-1.5 w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-indigo-500 outline-none text-sm transition-colors"
                                    >
                                        {subjects.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={onChange}
                                        rows={5}
                                        placeholder="District, plot size, budget, or any question..."
                                        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-indigo-500 outline-none text-sm transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/25 disabled:opacity-60 transition-all"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}