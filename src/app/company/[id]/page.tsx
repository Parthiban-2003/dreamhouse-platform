import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
    getCompanyById,
    getEngineersByCompany,
} from "@/src/lib/mock-data";
import { CompanyHeader } from "@/src/features/company-details/components/CompanyHeader";
import { CompanyAbout } from "@/src/features/company-details/components/CompanyAbout";
import { CompanyEngineers } from "@/src/features/company-details/components/CompanyEngineers";
import { CompanyProjects } from "@/src/features/company-details/components/CompanyProjects";
import { CompanyContactCard } from "@/src/features/company-details/components/CompanyContactCard";

interface CompanyPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({
    params,
}: CompanyPageProps): Promise<Metadata> {
    const { id } = await params;
    const company = getCompanyById(id);

    if (!company) {
        return { title: "Company Not Found | DreamHouse" };
    }

    return {
        title: `${company.name} | DreamHouse`,
        description: company.description.slice(0, 160),
    };
}

function CompanyLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-indigo-50/30 to-amber-50/20 py-12">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="animate-pulse space-y-8">
                    <div className="h-56 rounded-3xl bg-stone-200" />
                    <div className="h-40 rounded-3xl bg-stone-200" />
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <div className="h-48 rounded-3xl bg-stone-200" />
                            <div className="h-64 rounded-3xl bg-stone-200" />
                        </div>
                        <div className="h-80 rounded-3xl bg-stone-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}

async function CompanyPageContent({ params }: CompanyPageProps) {
    const { id } = await params;
    const company = getCompanyById(id);

    if (!company) {
        notFound();
    }

    const engineers = getEngineersByCompany(company.id);

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-indigo-50/30 to-amber-50/20 py-10 md:py-14">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Companies */}
                <CompanyHeader company={company} />

                <div className="mt-10 grid gap-8 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        {/* Company Information */}
                        <CompanyAbout company={company} />

                        {/* Find Engineers */}
                        <CompanyEngineers
                            engineers={engineers}
                            companyName={company.name}
                        />
                        <CompanyProjects company={company} />
                    </div>

                    <aside className="space-y-8">
                        <CompanyContactCard company={company} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default function CompanyPage(props: CompanyPageProps) {
    return (
        <Suspense fallback={<CompanyLoading />}>
            <CompanyPageContent params={props.params} />
        </Suspense>
    );
}