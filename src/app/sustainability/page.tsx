"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { Sun, Leaf, BatteryCharging, Zap, TrendingUp, Shield, Award } from "lucide-react";

const stats = [
    { value: "2 MW+", label: "Solar Capacity Installed", gradient: "from-amber-400 to-orange-600", icon: Zap },
    { value: "5000+", label: "Households Solarized", gradient: "from-emerald-400 to-teal-600", icon: Sun },
    { value: "1M Ton", label: "CO2 Emissions Reduced", gradient: "from-green-400 to-emerald-600", icon: Leaf },
    { value: "24/7", label: "Green Energy Supply", gradient: "from-blue-400 to-cyan-600", icon: BatteryCharging },
];

const highlights = [
    { icon: Shield, title: "Tier-1 Solar Panels & Inverters", desc: "Premium quality certified components with industry-best warranties" },
    { icon: Award, title: "25-Year Performance Warranty", desc: "Long-term assurance on all solar systems we install" },
    { icon: TrendingUp, title: "End-to-End Subsidy Support", desc: "Full assistance with PM Surya Ghar Yojana and state subsidies" },
    { icon: Zap, title: "Remote Monitoring & Maintenance", desc: "24/7 digital monitoring with proactive maintenance service" },
];

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Sustainability"
                subtitle="Powering a Greener Tomorrow"
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            />

            {/* Hero Section */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Our Commitment
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6 leading-tight">
                                Committed to The{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Solar Revolution
                                </span>
                            </h2>
                            <p className="text-gray-700 font-light leading-relaxed mb-6">
                                At Braj Mohan Group, we believe that true development must be sustainable. We are actively contributing to India's green energy goals through
                                massive solar adoption initiatives. Under schemes like the <strong className="text-emerald-700">PM Surya Ghar: Muft Bijli Yojana</strong>, we have
                                empowered thousands of households to generate their own clean electricity.
                            </p>
                            <p className="text-gray-700 font-light leading-relaxed mb-8">
                                From residential rooftops to large-scale commercial solar plants, our energy division is dedicated to reducing carbon footprints
                                and ensuring energy independence for Bihar and beyond.
                            </p>

                            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <Sun className="w-6 h-6" />
                                    <span className="font-bold uppercase tracking-widest text-sm">PM Surya Ghar Yojana</span>
                                </div>
                                <p className="text-white/90 text-sm">Official Implementation Partner — Helping families get free electricity & government subsidies</p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 text-center group"
                                >
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`} />
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="text-white" size={22} />
                                    </div>
                                    <span className={`block text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} mb-1`}>
                                        {stat.value}
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Highlights */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Our Solar Solutions
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="relative p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-2xl" />
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <item.icon className="text-white" size={26} />
                                </div>
                                <h3 className="font-serif font-bold text-bmd-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
