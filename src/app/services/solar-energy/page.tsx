"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import ServicesGrid from "@/components/sections/services-grid";
import { Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SolarEnergyPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Solar & Green Energy"
                subtitle="Powering the Future Sustainably"
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            />

            <SectionWrapper className="border-b border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Renewable Energy Solutions</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Braj Mohan Group is leading the green revolution in Bihar. We specialize in rooftop solar installations and large-scale solar parks, helping homes and businesses reduce carbon footprints and energy costs.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Rooftop Solar for Homes & Offices",
                                "PM Surya Ghar Muft Bijli Yojana Execution",
                                "Solar Street Lighting Systems",
                                "Commercial Energy Audits"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <CheckCircle className="text-bmd-gold w-5 h-5" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link href="/contact">
                                <button className="px-8 py-3 bg-bmd-gold text-bmd-navy font-bold rounded-sm hover:bg-white transition-colors">
                                    Get Free Solar Assessment
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] bg-white/5 rounded-sm overflow-hidden border border-white/10 relative group">
                            <div className="absolute inset-0 bg-bmd-navy/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop"
                                alt="Solar Energy"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 w-1/2 h-1/2 border-2 border-bmd-gold/30 -z-10" />
                    </div>
                </div>
            </SectionWrapper>

            <div className="pb-20">
                <ServicesGrid />
            </div>
        </main>
    );
}
