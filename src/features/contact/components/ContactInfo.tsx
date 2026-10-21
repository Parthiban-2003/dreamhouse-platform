"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const infoCards = [
    {
        icon: Phone,
        title: "Call Us",
        info: "+91 98765 43210",
        subInfo: "Mon-Sat, 9am to 7pm",
        color: "bg-blue-500",
        link: "tel:+919876543210"
    },
    {
        icon: Mail,
        title: "Email Us",
        info: "support@dreamhouse.in",
        subInfo: "We reply within 24 hours",
        color: "bg-teal-500",
        link: "mailto:support@dreamhouse.in"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        info: "Anna Nagar, Chennai",
        subInfo: "Tamil Nadu, India - 600040",
        color: "bg-purple-500",
        link: "#"
    }
];

export default function ContactInfo() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {infoCards.map((card, index) => (
                <motion.a
                    key={index}
                    href={card.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-gray-700 font-medium">{card.info}</p>
                    <p className="text-sm text-gray-500 mt-1">{card.subInfo}</p>
                </motion.a>
            ))}
        </div>
    );
}