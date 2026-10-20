
import { Suspense } from "react";
import { mockEngineers } from "@/src/lib/mock-data";
import { ProfileHeader } from "@/src/features/engineer-details/components/ProfileHeader";
import { AboutSection } from "@/src/features/engineer-details/components/AboutSection";
import { ServicesSection } from "@/src/features/engineer-details/components/ServicesSection";
import { ProjectTypesSection } from "@/src/features/engineer-details/components/ProjectTypesSection";
import { CertificationsSection } from "@/src/features/engineer-details/components/CertificationsSection";
import { CostEstimator } from "@/src/features/engineer-details/components/CostEstimator";
import { ProjectGallery } from "@/src/features/engineer-details/components/ProjectGallery";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface EngineerPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({
    params,
}: EngineerPageProps): Promise<Metadata> {
    const { id } = await params;

    const engineer = mockEngineers.find(
        (engineer) => engineer.id === id
    );

    if (!engineer) {
        return {
            title: "Engineer Not Found | DreamHouse",
        };
    }

    return {
        title: `${engineer.name} | DreamHouse`,
        description: `View ${engineer.name}'s profile, services, projects and construction cost estimates on DreamHouse.`,
    };
}

// Loading UI
function EngineerLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-12">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="animate-pulse space-y-8">
                    <div className="h-48 rounded-3xl bg-gray-200" />

                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="space-y-8 lg:col-span-2">
                            <div className="h-48 rounded-3xl bg-gray-200" />
                            <div className="h-64 rounded-3xl bg-gray-200" />
                            <div className="h-48 rounded-3xl bg-gray-200" />
                        </div>

                        <div className="h-72 rounded-3xl bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Async access params inside Suspense
async function EngineerPageContent({
    params,
}: EngineerPageProps) {
    const { id } = await params;

    const engineer = mockEngineers.find(
        (engineer) => engineer.id === id
    );

    if (!engineer) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-12">
            <div className="container mx-auto max-w-7xl px-4">
                <ProfileHeader engineer={engineer} />

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="space-y-8 lg:col-span-2">
                        <AboutSection engineer={engineer} />
                        <CostEstimator engineer={engineer} />
                        <ServicesSection engineer={engineer} />
                        <ProjectGallery engineer={engineer} />
                        <ProjectTypesSection engineer={engineer} />
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <CertificationsSection engineer={engineer} />

                        <div className="h-fit rounded-3xl bg-gradient-to-br from-blue-600 to-teal-600 p-8 text-white shadow-xl lg:sticky lg:top-24">
                            <h2 className="mb-4 text-2xl font-bold">
                                Ready to Build?
                            </h2>

                            <p className="mb-6 text-blue-100">
                                Contact {engineer.name} today to discuss
                                your dream home project.
                            </p>

                            <div className="space-y-3">
                                <a
                                    href={`tel:${engineer.phone}`}
                                    className="block w-full rounded-xl bg-white px-6 py-3 text-center font-semibold text-blue-600 shadow-lg transition-colors hover:bg-blue-50"
                                >
                                    📞 {engineer.phone}
                                </a>

                                <a
                                    href={`mailto:${engineer.email}`}
                                    className="block w-full rounded-xl border border-white/30 bg-white/20 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                                >
                                    ✉️ Send Email
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

// Page wrapper
export default function EngineerPage(props: EngineerPageProps) {
    return (
        <Suspense fallback={<EngineerLoading />}>
            <EngineerPageContent params={props.params} />
        </Suspense>
    );
}
