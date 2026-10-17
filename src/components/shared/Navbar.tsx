"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Phone, Info, MessageSquare, ArrowUpRight, Sparkles, Users } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    // { href: "/find-engineers", label: "Find Engineers", icon: Users },
    { href: "/about", label: "About", icon: Info },
    { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
    { href: "/contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-20 px-6">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Home className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-900 tracking-tight">DreamHouse<span className="text-blue-600">.</span></span>
                                <span className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">Spaces to Belong</span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "relative px-5 py-2.5 text-sm font-medium transition-all rounded-full flex items-center gap-2",
                                            isActive
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="hidden lg:flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg group"
                        >
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            Let's Talk
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                                <ArrowUpRight className="w-3 h-3 text-white" />
                            </div>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-gray-900"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={toggleMenu}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl"
                        >
                            <div className="p-6 space-y-2">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                                        <Home className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-bold text-lg text-gray-900">DreamHouse<span className="text-blue-600">.</span></span>
                                </div>

                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    const Icon = link.icon;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={toggleMenu}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                                                    isActive
                                                        ? "bg-blue-600 text-white shadow-md"
                                                        : "text-gray-700 hover:bg-gray-50"
                                                )}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="font-medium">{link.label}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <Link
                                        href="/contact"
                                        onClick={toggleMenu}
                                        className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold"
                                    >
                                        <Sparkles className="w-4 h-4 text-yellow-400" />
                                        Let's Talk
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;