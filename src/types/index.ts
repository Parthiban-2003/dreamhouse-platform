export interface Engineer {
    id: string;
    name: string;
    location: string;
    district: string;
    lat: number;
    lng: number;
    experience: number;
    rating: number;
    pricePerSqft: number;
    services: string[];
    phone: string;
    email: string;
    image: string;
    coverImage?: string;
    description: string;
    projectsCompleted: number;
    availability: "Available" | "Busy" | "On Leave";
    projectTypes: string[];
    teamSize: number;
    certifications: string[];
    workingHours: string;
    languages: string[];
    recentProjects?: {
        id: string;
        title: string;
        location: string;
        image: string;
        year: string;
        area: string;
        duration: string;
        budget: string;
        style: string;
        description: string;
        features: string[];
    }[];
}

export interface Review {
    id: string;
    clientName: string;
    clientImage: string;
    engineerName: string;
    projectType: string;
    location: string;
    rating: number;
    reviewText: string;
    date: string;
    isVerified: boolean;
    projectImage?: string;
}