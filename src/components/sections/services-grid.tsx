"use client";

import SectionWrapper from "../ui/section-wrapper";
import { Building2, HardHat, PaintBucket, Sofa, Sun, Users, Globe, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        icon: HardHat,
        title: "Construction",
        description: "Civil construction, interior & exterior design solutions.",
        href: "/services/construction",
        gradient: "from-orange-500 to-red-600"
    },
    {
        icon: Sun,
        title: "Renewable Power",
        description: "Solar, wind & sustainable energy solutions.",
        href: "/services/renewable-power",
        gradient: "from-yellow-400 to-orange-500"
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance corporate websites.",
        href: "/services/web-development",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        icon: Smartphone,
        title: "App Development",
        description: "Scalable iOS and Android applications.",
        href: "/services/web-development",
        gradient: "from-green-500 to-emerald-600"
    }
];

export default function ServicesGrid() {
    return (
        <SectionWrapper id="services" className="relative overflow-hidden">
            {/* Vibrant Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                            background: `linear-gradient(135deg, ${['#818cf8', '#c084fc', '#f472b6'][i % 3]}, ${['#6366f1', '#a855f7', '#ec4899'][i % 3]})`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-bmd-navy leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Comprehensive Solutions
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <Link href={service.href}>
                                <div className="group relative rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                                    {/* Gradient top accent */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />

                                    {/* Gradient Icon Container */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                                        <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-serif font-bold text-bmd-navy mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.gradient} transition-colors">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">{service.description}</p>

                                    <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                                        <span>Explore</span>
                                        <ArrowRight size={14} className="text-current opacity-70 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
