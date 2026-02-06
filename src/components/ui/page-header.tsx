"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    image?: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
    return (
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-bmd-navy flex items-center justify-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-bmd-navy/70 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center scale-105"
                    style={{
                        backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'})`
                    }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-bmd-gold text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4 block"
                >
                    {subtitle}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
                >
                    {title}
                </motion.h1>
            </div>

            {/* Scroll decorative line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 w-[1px] bg-gradient-to-t from-bmd-gold/50 to-transparent" />
        </section>
    );
}
