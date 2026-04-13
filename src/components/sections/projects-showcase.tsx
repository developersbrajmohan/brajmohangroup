"use client";

import SectionWrapper from "../ui/section-wrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRevealAll } from "@/hooks/use-reveal";

const galleryImages = [
    "/images/work-gallery/work-1.jpeg",
    "/images/work-gallery/work-2.jpeg",
    "/images/work-gallery/work-3.jpeg",
    "/images/work-gallery/work-4.jpeg",
    "/images/work-gallery/work-5.jpeg",
    "/images/work-gallery/work-6.jpeg",
    "/images/work-gallery/work-7.jpeg",
    "/images/work-gallery/work-8.jpeg",
    "/images/work-gallery/work-9.jpeg",
    "/images/work-gallery/work-10.jpeg",
    "/images/work-gallery/work-11.jpeg",
    "/images/work-gallery/work-12.jpeg",
];

const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "25+", label: "Years Experience" },
    { value: "50+", label: "Cities Covered" },
];

export default function ProjectsShowcase() {
    const containerRef = useRevealAll();

    return (
        <SectionWrapper id="projects" className="bg-surface-warm text-bmd-navy py-24 md:py-32 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmd-gold/20 to-transparent" />

            <div ref={containerRef} className="container mx-auto px-6">

                {/* Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                    <div>
                        <span className="reveal inline-flex items-center gap-2 text-bmd-gold text-xs tracking-[0.25em] uppercase mb-5 font-semibold">
                            <span className="h-[1px] w-10 bg-bmd-gold/50" />
                            Portfolio
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1]">
                            Crafted with <br className="hidden md:block" />
                            <span className="text-bmd-gold">Precision</span>
                        </h2>
                    </div>

                    {/* Stats */}
                    <div className="reveal flex gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl md:text-4xl font-serif font-black text-bmd-gold">{stat.value}</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px] reveal-stagger" style={{minHeight: 'auto'}}>
                    {/* Large featured — spans 2 cols + 2 rows */}
                    <div className="reveal-child col-span-2 row-span-2 group relative rounded-2xl overflow-hidden shadow-lg border border-border-subtle">
                        <Image
                            src={galleryImages[0]}
                            alt="Featured Project 1"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-xs uppercase tracking-widest text-bmd-gold-light font-bold">Featured</span>
                            <p className="text-white font-serif font-bold text-lg mt-1">Government Infrastructure</p>
                        </div>
                    </div>

                    {/* Regular cards */}
                    {galleryImages.slice(1, 5).map((src, index) => (
                        <div
                            key={index}
                            className="reveal-child group relative rounded-2xl overflow-hidden shadow-md border border-border-subtle"
                        >
                            <Image
                                src={src}
                                alt={`Project ${index + 2}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                quality={80}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                        </div>
                    ))}

                    {/* Second featured — spans 2 cols + 1 row */}
                    {galleryImages.slice(5, 6).map((src, index) => (
                        <div
                            key={index}
                            className="reveal-child col-span-2 group relative rounded-2xl overflow-hidden shadow-md border border-border-subtle"
                        >
                            <Image
                                src={src}
                                alt={`Project ${index + 7}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={80}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}

                    {/* Remaining small cards */}
                    {galleryImages.slice(6, 10).map((src, index) => (
                        <div
                            key={index}
                            className="reveal-child group relative rounded-2xl overflow-hidden shadow-md border border-border-subtle"
                        >
                            <Image
                                src={src}
                                alt={`Project ${index + 8}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                quality={80}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                        </div>
                    ))}

                    {/* Last row — 2 remaining + CTA card */}
                    {galleryImages.slice(10, 12).map((src, index) => (
                        <div
                            key={index}
                            className="reveal-child group relative rounded-2xl overflow-hidden shadow-md border border-border-subtle"
                        >
                            <Image
                                src={src}
                                alt={`Project ${index + 11}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                quality={80}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                        </div>
                    ))}

                    {/* CTA Card — "View All" */}
                    <Link href="/projects" className="reveal-child col-span-2 group relative rounded-2xl overflow-hidden bg-bmd-navy border border-bmd-navy hover:bg-bmd-gold transition-all duration-500 flex items-center justify-center gap-4 cursor-pointer shadow-lg">
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-bmd-navy transition-colors duration-300">
                                Explore All Projects
                            </p>
                            <p className="text-white/50 group-hover:text-bmd-navy/60 text-sm mt-2 font-light transition-colors">View our complete portfolio</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-bmd-navy flex items-center justify-center transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
