"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    category: string;
    location: string;
    image: string;
    className?: string;
}

export default function ProjectCard({ title, category, location, image, className }: ProjectCardProps) {
    const [imgSrc, setImgSrc] = useState(image);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            // Fallback to a reliable placeholder if the primary image fails
            setImgSrc(`https://placehold.co/800x600/1a202c/D1A857?text=${encodeURIComponent(category)}`);
        }
    };

    return (
        <div className={cn("group relative bg-gray-100 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500", className)}>
            {/* Image with Next.js Optimization */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={handleError}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Overlay Gradient - Refined for gallery feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-bmd-navy/90 via-bmd-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content Area */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="h-[1.5px] w-4 bg-bmd-gold" />
                                <span className="text-bmd-gold text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">{category}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 leading-tight">
                                {title}
                            </h3>
                            <div className="flex items-center text-gray-300 text-xs md:text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span className="w-1 h-1 bg-white/50 rounded-full mr-2" />
                                {location}
                            </div>
                        </div>

                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-white group-hover:text-bmd-navy transition-all duration-500 shadow-xl">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Glass Shine Effect on Hover */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000 pointer-events-none" />
        </div>
    );
}
