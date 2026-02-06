"use client";

import SectionWrapper from "../ui/section-wrapper";
import { Building2, HardHat, PaintBucket, Sofa, Sun, Users, Globe, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        icon: Building2,
        title: "Real Estate & Infra",
        description: "Premium residential & commercial developments.",
        href: "/services/real-estate",
        gradient: "from-purple-600 to-blue-600"
    },
    {
        icon: HardHat,
        title: "Civil Construction",
        description: "Government projects, bridges, and roads.",
        href: "/services/civil-construction",
        gradient: "from-orange-500 to-red-500" // Classic construction color
    },
    {
        icon: PaintBucket,
        title: "Interior & Exterior",
        description: "Luxury finishes and outdoor living spaces.",
        href: "/services/interior-design",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        icon: Sofa,
        title: "Furniture Solutions",
        description: "Modular workstations and home furniture.",
        href: "/services/furniture",
        gradient: "from-amber-600 to-yellow-500" // Wood/Furniture tones
    },
    {
        icon: Sun,
        title: "Solar Energy",
        description: "Rooftop solar & PM Surya Ghar initiatives.",
        href: "/services/solar-energy",
        gradient: "from-yellow-400 to-orange-500" // Sun
    },
    {
        icon: Users,
        title: "Manpower & Security",
        description: "Skilled staffing and facility management.",
        href: "/services/manpower",
        gradient: "from-blue-500 to-teal-500"
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance corporate websites.",
        href: "/services/web-development",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Scalable iOS and Android applications.",
        href: "/services/web-development", // Redirects to consolidated page
        gradient: "from-green-500 to-emerald-600"
    }
];

export default function ServicesGrid() {
    return (
        <SectionWrapper id="services" className="bg-bmd-navy relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">Comprehensive Solutions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link key={index} href={service.href}>
                            <div
                                className="group relative glass-dark rounded-sm p-6 md:p-8 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-3 border-bmd-gold/10 hover:border-bmd-gold/30 h-full"
                            >
                                {/* Gradient Icon Container (Bolt Style) */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/10`}>
                                    <service.icon className="w-8 h-8 text-white drop-shadow-md" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-bmd-gold transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{service.description}</p>

                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>

                                <div className="flex items-center text-bmd-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
