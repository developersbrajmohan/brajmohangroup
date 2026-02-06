"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "../ui/magnetic-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-bmd-navy flex items-center justify-center">
            {/* Background Parallax Layer */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Tech Grid Overlay - Brand Identity */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-20 pointer-events-none" />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-bmd-navy/40 via-bmd-navy/70 to-bmd-navy z-10" />

                {/* Optimized LCP Image */}
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Braj Mohan Group Infrastructure"
                    fill
                    priority
                    className="object-cover object-center opacity-50 scale-105"
                    sizes="100vw"
                />
            </motion.div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-20 text-center">

                {/* Content starts directly with the title */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8"
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
                    className="mb-8 relative inline-flex overflow-hidden rounded-full p-[1px] shadow-[0_0_20px_rgba(209,168,87,0.2)]"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#D1A857_50%,transparent_100%)]" />
                    <div className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-bmd-navy/90 backdrop-blur-md px-6 py-2 text-sm font-bold text-bmd-gold backdrop-filter">
                        <span className="text-lg mr-2">★</span>
                        <span className="tracking-wide">Est. 1999 • 25+ Years of Excellence</span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
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
                        <MagneticButton className="px-8 py-3.5 bg-transparent hover:bg-bmd-gold text-white hover:text-bmd-navy border border-bmd-gold/60 backdrop-blur-sm shadow-[0_0_20px_rgba(209,168,87,0.1)] hover:shadow-[0_0_40px_rgba(209,168,87,0.4)] group flex items-center gap-4 rounded-full transition-all duration-300">
                            <span className="font-bold tracking-widest text-xs uppercase">Explore Services</span>
                            <div className="w-8 h-8 rounded-full bg-bmd-gold/20 group-hover:bg-bmd-navy/10 flex items-center justify-center shrink-0 transition-colors">
                                <ArrowRight size={16} className="text-bmd-gold group-hover:text-bmd-navy group-hover:translate-x-1 transition-all" />
                            </div>
                        </MagneticButton>
                    </Link>
                    <Link href="/projects">
                        <MagneticButton className="px-8 py-3.5 bg-white/5 hover:bg-white text-white hover:text-bmd-navy border border-white/20 hover:border-white backdrop-blur-sm group flex items-center gap-3 rounded-full transition-all duration-300">
                            <span className="font-semibold tracking-wide text-sm">View Projects</span>
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Glow (No Scroll Text) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bmd-gold/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section >
    );
}
