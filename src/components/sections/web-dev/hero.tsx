"use client";

import { ArrowRight, Sparkles, Code, Globe, Smartphone, Palette } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WebDevHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-20">
            {/* Gradient blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/50 to-purple-400/50 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/50 to-rose-400/50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-200/40 to-violet-200/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob animation-delay-4000" />

            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #818cf855 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Floating icons */}
            <motion.div animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-[8%] w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl flex items-center justify-center">
                <Code className="text-white" size={20} />
            </motion.div>
            <motion.div animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-36 right-[10%] w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-xl flex items-center justify-center">
                <Palette className="text-white" size={20} />
            </motion.div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-36 left-[12%] w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-xl flex items-center justify-center">
                <Globe className="text-white" size={18} />
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-32 right-[14%] w-11 h-11 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl flex items-center justify-center">
                <Smartphone className="text-white" size={18} />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-8xl font-bold font-serif text-bmd-navy mb-6 tracking-tight leading-tight"
                >
                    Building Powerful
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                        Websites & Apps
                    </span>
                    <span className="block mt-2 text-4xl sm:text-6xl text-bmd-navy/80">for Growing Businesses</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Patna's trusted IT partner delivering cutting-edge websites and mobile apps for businesses across India.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="/contact">
                        <button className="group px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                            Get Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <button
                        onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 bg-white/70 backdrop-blur-xl border border-indigo-200/50 text-indigo-700 rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        View Packages
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { number: '50+', label: 'Projects Delivered', gradient: 'from-indigo-500 to-purple-600' },
                        { number: '30+', label: 'Happy Clients', gradient: 'from-pink-500 to-rose-600' },
                        { number: '5+', label: 'Years Experience', gradient: 'from-cyan-500 to-blue-600' },
                        { number: '100%', label: 'Client Satisfaction', gradient: 'from-emerald-500 to-teal-600' }
                    ].map((stat, index) => (
                        <div key={index} className="group text-center p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className={`text-3xl sm:text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>{stat.number}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
