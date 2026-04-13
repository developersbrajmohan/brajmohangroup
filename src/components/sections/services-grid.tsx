"use client";

import SectionWrapper from "../ui/section-wrapper";
import { HardHat, Sun, Globe, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRevealAll } from "@/hooks/use-reveal";

const services = [
    {
        icon: HardHat,
        title: "Construction",
        description: "Civil construction, interior & exterior design solutions for residential, commercial, and government projects.",
        href: "/services/construction",
    },
    {
        icon: Sun,
        title: "Renewable Power",
        description: "Solar panel installation, wind energy, and sustainable power solutions with government subsidy assistance.",
        href: "/services/renewable-power",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance corporate websites, e-commerce platforms, and custom web applications.",
        href: "/services/web-development",
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Scalable iOS and Android applications built with modern frameworks and clean architecture.",
        href: "/services/web-development",
    }
];

export default function ServicesGrid() {
    const containerRef = useRevealAll();

    return (
        <SectionWrapper id="services" className="bg-surface-warm">
            <div ref={containerRef} className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                        Our Expertise
                    </span>
                    <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-bmd-navy leading-tight">
                        Comprehensive Solutions
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 reveal-stagger">
                    {services.map((service, index) => (
                        <Link href={service.href} key={index}>
                            <div className="reveal-child group relative rounded-2xl p-7 md:p-8 bg-white border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-lg transition-all duration-500 h-full cursor-pointer">
                                {/* Gold top accent */}
                                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-bmd-gold/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-bmd-navy flex items-center justify-center mb-6 group-hover:bg-bmd-gold transition-colors duration-500 shadow-sm">
                                    <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-lg font-serif font-bold text-bmd-navy mb-3 group-hover:text-bmd-gold transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                                    {service.description}
                                </p>

                                {/* Explore link */}
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-bmd-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
