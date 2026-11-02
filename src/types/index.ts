export interface Project {
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
}

export interface Engineer {
    id: string;
    companyId: string;
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
    recentProjects?: Project[];
}

export interface Company {
    id: string;
    name: string;
    tagline: string;
    description: string;
    district: string;
    location: string;
    pincode: string;
    lat: number;
    lng: number;
    logo: string;
    coverImage: string;
    rating: number;
    totalProjects: number;
    yearEstablished: number;
    teamSize: number;
    phone: string;
    email: string;
    website?: string;
    address: string;
    services: string[];
    specialties: string[];
    certifications: string[];
    workingHours: string;
    isVerified: boolean;
    projects: Project[];
    engineerIds: string[];
}

export interface Review {
    id: string;
    clientName: string;
    clientImage: string;
    engineerName: string;
    companyName?: string;
    projectType: string;
    location: string;
    rating: number;
    reviewText: string;
    date: string;
    isVerified: boolean;
    projectImage?: string;
}