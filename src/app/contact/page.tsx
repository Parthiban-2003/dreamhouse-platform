'use client';
import type { Metadata } from "next";
import ContactHero from "@/src/features/contact/components/ContactHero";
import ContactInfo from "@/src/features/contact/components/ContactInfo";
import ContactForm from "@/src/features/contact/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <ContactHero />

            {/* Main Content */}
            <section className="py-20 -mt-16 relative z-20">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Info Cards */}
                    <div className="mb-16">
                        <ContactInfo />
                    </div>

                    {/* Form and Map Grid */}
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left - Form */}
                        <ContactForm />

                        {/* Right- Map */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Headquarters</h2>
                                <p className="text-gray-500 mb-6">Visit us at our main office in Chennai.</p>
                                
                            </div>

                            {/* Quick FAQ */}
                            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl shadow-xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-3">Need Urgent Help?</h3>
                                <p className="text-blue-100 mb-6">
                                    If you have an urgent issue with an ongoing construction project, call our emergency helpline directly.
                                </p>
                                <a
                                    href="tel:+919876543210"
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                                >
                                    📞 Call Emergency Line
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}