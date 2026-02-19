"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { HardHat, Globe, Sun, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const serviceDetails = [
    {
        id: "construction",
        title: "Construction",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        description: "Comprehensive construction solutions from civil infrastructure to premium interior & exterior design.",
        features: ["Highway & Road Construction", "Government Institutions", "Turnkey Interior Solutions", "Landscape Designing"],
        href: "/services/construction",
        gradient: "from-orange-500 to-red-600",
        bg: "from-orange-50 to-red-50"
    },
    {
        id: "renewable-power",
        title: "Renewable Power",
        icon: Sun,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
        description: "Sustainable energy solutions including solar, wind, and hybrid renewable power systems.",
        features: ["Rooftop Solar Installation", "PM Surya Ghar Yojana", "Wind Energy Infrastructure", "Energy Audits"],
        href: "/services/renewable-power",
        gradient: "from-yellow-400 to-orange-500",
        bg: "from-yellow-50 to-orange-50"
    },
    {
        id: "web-dev",
        title: "Website Development",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        description: "Crafting high-performance digital presence for modern businesses.",
        features: ["Corporate Websites", "E-commerce Platforms", "SEO Optimization", "SaaS Dashboards"],
        href: "/services/web-development",
        gradient: "from-cyan-500 to-blue-500",
        bg: "from-cyan-50 to-blue-50"
    },
    {
        id: "app-dev",
        title: "App Development",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        description: "Building scalable mobile applications for Android and iOS ecosystems.",
        features: ["Native iOS/Android Apps", "Cross-platform Solutions", "Enterprise Mobility", "UI/UX Design"],
        href: "/services/web-development",
        gradient: "from-green-500 to-emerald-600",
        bg: "from-green-50 to-emerald-50"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ── LIGHT VIBRANT HERO ── */}
            <section className="relative min-h-[55vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                {/* Gradient blobs */}
                <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-gradient-to-br from-indigo-300/50 to-purple-400/50 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-pink-300/50 to-rose-400/50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-cyan-200/40 to-violet-200/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob animation-delay-4000" />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle, #818cf855 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                {/* Floating service icons */}
                <motion.div animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-[10%] w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-xl flex items-center justify-center">
                    <HardHat className="text-white" size={20} />
                </motion.div>
                <motion.div animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-36 right-[12%] w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl flex items-center justify-center">
                    <Sun className="text-white" size={20} />
                </motion.div>
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-28 left-[14%] w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl flex items-center justify-center">
                    <Globe className="text-white" size={18} />
                </motion.div>
                <motion.div animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute bottom-24 right-[16%] w-11 h-11 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl flex items-center justify-center">
                    <Smartphone className="text-white" size={18} />
                </motion.div>

                {/* Hero text */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28 pb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                    >
                        Comprehensive Infrastructure Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-bold leading-tight"
                    >
                        <span className="text-bmd-navy">Our </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                            Expertise
                        </span>
                    </motion.h1>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
            </section>


            {/* Intro */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.span
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        A 360° Approach to Development
                    </motion.h2>
                    <motion.p
                        className="text-gray-700 font-light leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        We offer a vertically integrated service model, handling everything from the ground up—literally.
                        Whether it's laying the foundation of a skyscraper, designing its interiors, or powering it with solar energy,
                        Braj Mohan Group is your end-to-end partner.
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Detailed Service List */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
                <div className="container mx-auto px-6 space-y-20 relative z-10">
                    {serviceDetails.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 z-10`} />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className={`absolute -bottom-4 ${index % 2 !== 0 ? '-left-4' : '-right-4'} w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}>
                                        <service.icon className="text-white" size={28} />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 pt-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md`}>
                                        <service.icon className="text-white" size={20} />
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Service 0{index + 1}</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-bmd-navy mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">{service.description}</p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700 gap-2">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                                                <span className="text-white text-[8px] font-bold">✓</span>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={service.href}>
                                    <button className={`px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold text-sm flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                                        Explore {service.title}
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
