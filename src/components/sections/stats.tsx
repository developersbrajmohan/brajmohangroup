"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "../ui/section-wrapper";

const stats = [
    { value: 25, suffix: "+", label: "Years Experience", color: "from-bmd-gold to-yellow-600" },
    { value: 750, suffix: "+", label: "Projects Delivered", color: "from-blue-400 to-cyan-600" },
    { value: 1, suffix: "M+", label: "Smart Meters Installed", color: "from-green-400 to-emerald-600" },
    { value: 2, suffix: "MW+", label: "Solar Capacity", color: "from-orange-400 to-red-600" },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    return (
        <SectionWrapper className="relative py-24 overflow-hidden">
            {/* Vibrant Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50" />

            {/* Animated Gradient Mesh */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-br from-bmd-gold to-yellow-300 rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            {/* Glassmorphism Card */}
                            <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                                {/* Colorful Glow Effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                {/* Top Accent Line */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                                {/* Content */}
                                <div className="relative z-10 text-center">
                                    <h3 className={`text-5xl md:text-6xl lg:text-7xl font-serif font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500`}>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </h3>

                                    {/* Animated Divider */}
                                    <motion.div
                                        className={`h-[3px] w-12 bg-gradient-to-r ${stat.color} mx-auto mb-4 rounded-full`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 48 }}
                                        transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                                        viewport={{ once: true }}
                                    />

                                    <p className="text-gray-700 text-xs uppercase tracking-[0.3em] font-bold transition-colors group-hover:text-gray-900">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Corner Decorations */}
                                <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className={`absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </SectionWrapper>
    );
}
