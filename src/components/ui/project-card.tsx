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
        <div className={cn("group relative aspect-[4/3] bg-gray-900 rounded-sm overflow-hidden cursor-pointer shadow-2xl", className)}>
            {/* Image with Next.js Optimization */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    onError={handleError}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bmd-navy via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-bmd-gold text-xs uppercase tracking-widest mb-2 block font-medium">{category}</span>
                        <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight group-hover:text-bmd-gold transition-colors">{title}</h3>
                        <p className="text-gray-300 text-sm flex items-center font-light">
                            <span className="w-1.5 h-1.5 bg-bmd-gold rounded-full mr-2" />
                            {location}
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-bmd-gold group-hover:border-bmd-gold group-hover:text-bmd-navy transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
