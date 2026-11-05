import type { Metadata } from "next";
import ContactPageClient from "@/src/features/contact/components/ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with DreamHouse — questions about companies, projects, or partnerships. We reply within 24 hours.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}