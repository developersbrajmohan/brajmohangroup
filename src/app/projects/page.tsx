"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Building2, Zap, Sun, Paintbrush, Camera } from "lucide-react";

const categories = [
    { name: "All", icon: Camera, gradient: "from-indigo-500 to-purple-600" },
    { name: "Civil Construction", icon: Building2, gradient: "from-blue-600 to-indigo-700" },
    { name: "Smart Metering", icon: Zap, gradient: "from-cyan-500 to-blue-600" },
    { name: "Solar", icon: Sun, gradient: "from-amber-500 to-orange-600" },
    { name: "Interiors", icon: Paintbrush, gradient: "from-emerald-500 to-teal-600" },
];

const projects = [
    { src: "/images/work-gallery/work-1.jpeg", category: "Civil Construction" },
    { src: "/images/work-gallery/work-2.jpeg", category: "Civil Construction" },
    { src: "/images/work-gallery/work-3.jpeg", category: "Civil Construction" },
    { src: "/images/work-gallery/work-4.jpeg", category: "Smart Metering" },
    { src: "/images/work-gallery/work-5.jpeg", category: "Smart Metering" },
    { src: "/images/work-gallery/work-6.jpeg", category: "Solar" },
    { src: "/images/work-gallery/work-7.jpeg", category: "Civil Construction" },
    { src: "/images/work-gallery/work-8.jpeg", category: "Smart Metering" },
    { src: "/images/work-gallery/work-9.jpeg", category: "Civil Construction" },
    { src: "/images/work-gallery/work-10.jpeg", category: "Civil Construction" },
    { src: "/images/work-gallery/work-11.jpeg", category: "Solar" },
    { src: "/images/work-gallery/work-12.jpeg", category: "Civil Construction" },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-white">
            {/* Light Premium Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-16">
                {/* Blobs */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-300/40 to-purple-400/40 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-300/40 to-rose-400/40 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-blob animation-delay-2000" />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #818cf855 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                {/* Floating icons */}
                <motion.div animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-[10%] w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl flex items-center justify-center">
                    <Building2 className="text-white" size={20} />
                </motion.div>
                <motion.div animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-36 right-[12%] w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl flex items-center justify-center">
                    <Sun className="text-white" size={20} />
                </motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-28 left-[15%] w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 shadow-xl flex items-center justify-center">
                    <Zap className="text-white" size={18} />
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute bottom-32 right-[14%] w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl flex items-center justify-center">
                    <Paintbrush className="text-white" size={18} />
                </motion.div>

                <div className="relative z-10 text-center px-6">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-8xl font-bold font-serif text-bmd-navy mb-6 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Selected Works</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Showcasing excellence across construction, renewable energy, and smart infrastructure projects.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Gallery Section */}
            <section className="py-16 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Filter Tabs */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`group px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border flex items-center gap-2 ${activeCategory === cat.name
                                    ? `bg-gradient-to-r ${cat.gradient} text-white border-transparent shadow-lg shadow-indigo-500/20`
                                    : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                                    }`}
                            >
                                <cat.icon className="w-4 h-4" />
                                {cat.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* Gallery Grid */}
                    <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.src}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.04 }}
                                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                                >
                                    <Image
                                        src={project.src}
                                        alt={project.category}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-400 text-lg">No projects found in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}
