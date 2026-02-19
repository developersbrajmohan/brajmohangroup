"use client";

import SectionWrapper from "../ui/section-wrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function ProjectsShowcase() {
    return (
        <SectionWrapper id="projects" className="bg-white text-bmd-navy relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-12 bg-gradient-to-r from-bmd-gold to-orange-500 rounded-full" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bmd-gold to-orange-600 text-sm tracking-[0.2em] font-bold uppercase">Our Work</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1]">
                            Excellence in <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bmd-navy via-indigo-600 to-bmd-gold">Every Brick</span>
                        </h2>
                    </div>
                    <Link href="/projects">
                        <button className="group px-8 py-4 bg-bmd-navy text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-600 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/10">
                            <span>Explore Portfolio</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </Link>
                </div>

                {/* Clean Gallery Grid — uniform sizing, no text */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                        >
                            <Image
                                src={src}
                                alt={`Work ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                unoptimized
                            />
                            {/* Subtle hover shine */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
