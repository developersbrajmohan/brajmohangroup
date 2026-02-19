"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { HardHat, CheckCircle, Building2, PaintBucket, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const civilServices = [
    "Highway & Road Construction",
    "Government Institutional Buildings",
    "Bridges & Flyovers",
    "Industrial Warehousing & Factories",
];

const interiorServices = [
    "Turnkey Interior Solutions",
    "3D Visualization & Planning",
    "Custom Furniture & Carpentry",
    "Corporate Office Interiors",
];

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", label: "Civil Works", gradient: "from-orange-500 to-red-600" },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", label: "Interior Projects", gradient: "from-pink-500 to-rose-600" },
    { src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800&auto=format&fit=crop", label: "Exterior Designs", gradient: "from-amber-500 to-orange-600" },
    { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", label: "Infrastructure", gradient: "from-red-500 to-orange-600" },
];

export default function ConstructionPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Construction"
                subtitle="Building Excellence from Foundation to Finish"
                image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Main Content Section */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <HardHat className="text-white" size={24} />
                                </div>
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-sm tracking-[0.2em] uppercase font-bold"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    Our Expertise
                                </motion.span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6 leading-tight">
                                Comprehensive{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                    Construction Solutions
                                </span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-light mb-8">
                                From large-scale civil infrastructure to premium interior design, Braj Mohan Group delivers
                                end-to-end construction excellence. We combine advanced engineering with artistic vision to
                                create spaces that inspire and endure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <button className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                                        Request Project Quote <ArrowRight size={16} />
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="px-7 py-3.5 border-2 border-orange-300 text-orange-700 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300">
                                        Schedule Consultation
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-20" />
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                                    alt="Construction Excellence"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Civil Construction */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-2xl" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <Building2 className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-bmd-navy">Civil Construction</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed font-light">
                                Large-scale infrastructure projects executed with precision and adherence to the highest safety standards.
                            </p>
                            <div className="space-y-3">
                                {civilServices.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3"
                                    >
                                        <CheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Interior & Exterior */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-t-2xl" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <PaintBucket className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-bmd-navy">Interior & Exterior</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed font-light">
                                Transform spaces with luxury finishes, innovative designs, and meticulous attention to detail.
                            </p>
                            <div className="space-y-3">
                                {interiorServices.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3"
                                    >
                                        <CheckCircle className="text-pink-500 w-5 h-5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Project Gallery */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Project Gallery
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Our Construction Portfolio
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[3/4]"
                            >
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r ${img.gradient} text-white text-xs font-bold shadow-lg`}>
                                    {img.label}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-serif font-bold">{img.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
