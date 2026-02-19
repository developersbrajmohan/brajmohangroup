"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "../ui/magnetic-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = [
        {
            src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            alt: "Construction - High rise building",
            label: "Construction"
        },
        {
            src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
            alt: "Solar Park",
            label: "Renewable Energy"
        },
        {
            src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
            alt: "Windmill",
            label: "Wind Power"
        },
        {
            src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
            alt: "Corporate Office",
            label: "Corporate Spaces"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center">
            {/* Background Layer */}
            <motion.div
                className="absolute inset-0 z-0"
            >
                {/* Tech Grid Overlay Removed */}

                {/* Dark Gradient Overlay - Improves visual hierarchy */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 z-10" />



                {/* Slideshow Images */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentImageIndex].src}
                            alt={heroImages[currentImageIndex].alt}
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-30 text-center">

                {/* Content starts directly with the title */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-tight mb-6 md:mb-8 tracking-tight drop-shadow-lg"
                >
                    Building India’s <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bmd-gold via-white to-bmd-gold bg-300% animate-shine">
                        Future
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-6 md:mb-8 relative inline-flex overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-bmd-gold/40 via-bmd-gold to-bmd-gold/40 shadow-[0_0_20px_rgba(209,168,87,0.3)]"
                >
                    <div className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-black/60 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold text-bmd-gold backdrop-blur-md border border-white/10">
                        <span className="text-base md:text-lg mr-2">★</span>
                        <span className="tracking-wide text-white/90">Est. 1999 • 25+ Years of Excellence</span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-gray-100 text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 font-light leading-relaxed px-4 drop-shadow-md"
                >
                    A multidisciplinary infrastructure powerhouse transforming the landscape with
                    innovation, integrity, and sustainable solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Link href="/services">
                        <MagneticButton
                            className="bg-bmd-gold text-bmd-navy border-transparent shadow-xl hover:shadow-[0_0_40px_rgba(209,168,87,0.6)]"
                            fillColor="bg-white"
                        >
                            <span className="font-bold tracking-widest text-xs uppercase group-hover:text-bmd-navy transition-colors">Explore Services</span>
                            <div className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-bmd-navy/10 flex items-center justify-center shrink-0 transition-colors ml-4">
                                <ArrowRight size={16} className="text-bmd-navy group-hover:text-bmd-navy group-hover:translate-x-1 transition-all" />
                            </div>
                        </MagneticButton>
                    </Link>
                    <Link href="/projects">
                        <MagneticButton
                            className="bg-white/10 text-white backdrop-blur-md border-white/30 shadow-md hover:bg-white hover:text-bmd-navy hover:border-white"
                            fillColor="bg-white"
                        >
                            <span className="font-semibold tracking-wide text-sm transition-colors">View Projects</span>
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bmd-gold/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
        </section >
    );
}
