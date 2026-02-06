"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import ServicesGrid from "@/components/sections/services-grid";
import { Building2, HardHat, Zap, Users, Globe, Smartphone, PaintBucket, Sofa } from "lucide-react";

// Detailed service data
const serviceDetails = [
    {
        id: "real-estate",
        title: "Real Estate & Infrastructure",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        description: "Developing premium residential complexes, commercial hubs, and smart townships.",
        features: ["Luxury High-rise Apartments", "Commercial Office Spaces", "Smart City Townships", "Land Development"]
    },
    {
        id: "civil-construction",
        title: "Civil Construction",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        description: "Executing large-scale government infrastructure including bridges, roads, and institutional buildings.",
        features: ["Highway & Road Construction", "Government Institutions", "Bridge & Flyover Projects", "Industrial Warehousing"]
    },
    {
        id: "interior-design",
        title: "Interior & Exterior Design",
        icon: PaintBucket,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        description: "Creating aesthetic, functional, and luxurious living and working spaces.",
        features: ["Turnkey Interior Solutions", "Landscape Designing", "3D Visualization", "Custom Art Installations"]
    },
    {
        id: "furniture",
        title: "Furniture Solutions",
        icon: Sofa,
        image: "https://images.pexels.com/photos/15016523/pexels-photo-15016523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Providing ergonomic and stylish furniture for homes, offices, and hospitality.",
        features: ["Modular Kitchens", "Office Workstations", "Custom Wardrobes", "Hospitality Furniture"]
    },
    {
        id: "solar-energy",
        title: "Solar & Green Energy",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
        description: "Leading the renewable revolution with rooftop solar and large-scale power plants.",
        features: ["Rooftop Solar Installation", "PM Surya Ghar Yojana", "Solar Street Lighting", "Energy Audits"]
    },
    {
        id: "manpower",
        title: "Manpower & Security",
        icon: Users,
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
        description: "Connecting businesses with skilled workforce and providing top-tier security personnel.",
        features: ["Skilled & Unskilled Labor", "Corporate Security Guards", "Facility Management", "Recruitment Services"]
    },
    {
        id: "web-dev",
        title: "Website Development",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        description: "Crafting high-performance digital presence for modern businesses.",
        features: ["Corporate Websites", "E-commerce Platforms", "SEO Optimization", "SaaS Dashboards"]
    },
    {
        id: "app-dev",
        title: "App Development",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        description: "Building scalable mobile applications for Android and iOS ecosystems.",
        features: ["Native iOS/Android Apps", "Cross-platform Solutions", "Enterprise Mobility", "UI/UX Design"]
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Our Expertise"
                subtitle="Comprehensive Infrastructure Solutions"
                image="https://images.unsplash.com/photo-1581094794329-cdac82aadbcc?q=80&w=2100&auto=format&fit=crop"
            />

            {/* Intro */}
            <SectionWrapper className="bg-bmd-navy-light border-b border-white/5">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl font-serif text-white mb-6">A 360° Approach to Development</h2>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">
                        We offer a vertically integrated service model, handling everything from the ground up—literally.
                        Whether it's laying the foundation of a skyscraper, designing its interiors, or powering it with solar energy,
                        Braj Mohan Group is your end-to-end partner.
                    </p>
                </div>
            </SectionWrapper>

            {/* Detailed Service List */}
            <SectionWrapper>
                <div className="container mx-auto px-6 space-y-24">
                    {serviceDetails.map((service, index) => (
                        <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Visual Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-video bg-white/5 rounded-sm border border-white/10 p-1 group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-bmd-navy/60 via-transparent to-transparent z-10" />
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 pt-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-bmd-gold/10 rounded-full text-bmd-gold">
                                        <service.icon size={24} />
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-gray-400">Service 0{index + 1}</span>
                                </div>

                                <h3 className="text-3xl font-serif text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-bmd-gold rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Call to Action Wrapper */}
            <div className="pb-20">
                <ServicesGrid />
            </div>
        </main>
    );
}
