import { Suspense } from "react";
import FindCompaniesContent from "./FindCompaniesContent";

export const metadata = {
    title: "Find Companies | DreamHouse",
    description:
        "Search verified construction companies by district and pincode across Tamil Nadu.",
};

function FindCompaniesFallback() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-indigo-50/30 to-amber-50/20">
            <div className="container mx-auto px-4 py-16">
                <div className="animate-pulse space-y-6">
                    <div className="h-10 w-72 bg-stone-200 rounded-xl" />
                    <div className="h-6 w-48 bg-stone-100 rounded-lg" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-80 bg-stone-100 rounded-2xl" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FindCompaniesPage() {
    return (
        <Suspense fallback={<FindCompaniesFallback />}>
            <FindCompaniesContent />
        </Suspense>
    );
}