import type { Metadata } from "next";
import { mockReviews } from "@/src/lib/mock-data";
import { ReviewCard } from "@/src/features/reviews/components/ReviewCard";
import { MessageSquare, Star, Users, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "Client Reviews | DreamHouse - Real Stories from Homeowners",
    description: "Read genuine reviews from homeowners who built their dream homes with our verified civil engineers across Tamil Nadu.",
};

export default function ReviewsPage() {
    const avgRating = (mockReviews.reduce((acc, curr) => acc + curr.rating, 0) / mockReviews.length).toFixed(1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                        <MessageSquare className="w-4 h-4 text-teal-200" />
                        <span>Wall of Love</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        What Our <span className="text-teal-200">Homeowners</span> Say
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. Hear directly from families who built their dream homes with DreamHouse engineers.
                    </p>
                </div>
            </section>

            {/* Trust Stats Banner */}
            <section className="container mx-auto px-4 -mt-12 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center mb-3">
                                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900">{avgRating} / 5.0</div>
                            <div className="text-sm text-gray-500 font-medium mt-1">Average Rating</div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900">500+</div>
                            <div className="text-sm text-gray-500 font-medium mt-1">Happy Families</div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-3">
                                <Award className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900">98%</div>
                            <div className="text-sm text-gray-500 font-medium mt-1">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="container mx-auto px-4 py-20 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Success Stories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Real feedback from real clients across Tamil Nadu.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockReviews.map((review, index) => (
                        <ReviewCard key={review.id} review={review} index={index} />
                    ))}
                </div>
            </section>

            {/* Submit Review */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-[2.5rem] p-12 md:p-16 border border-blue-100">
                        <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Had a Great Experience?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                            If you built your home with a DreamHouse engineer, we'd love to hear your story. Your feedback helps others make the right choice.
                        </p>
                        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
                            Write a Review
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}