"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import ServicesGrid from "@/components/sections/services-grid";
import { PaintBucket, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function InteriorDesignPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Interior Design"
                subtitle="Crafting Spaces That Inspire"
                image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            />

            <SectionWrapper className="border-b border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Luxury Interior Concepts</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Transform your living and working environments with our premium interior design services. We blend aesthetics with functionality to create spaces that reflect your personality and brand.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Turnkey Interior Solutions",
                                "3D Visualization & Planning",
                                "Custom Furniture & Carpentry",
                                "Corporate Office Interiors"
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
                                    Book Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] bg-white/5 rounded-sm overflow-hidden border border-white/10 relative group">
                            <div className="absolute inset-0 bg-bmd-navy/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop"
                                alt="Interior Design"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border-2 border-bmd-gold/30 -z-10" />
                    </div>
                </div>
            </SectionWrapper>

            <div className="pb-20">
                <ServicesGrid />
            </div>
        </main>
    );
}
