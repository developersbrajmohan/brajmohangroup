"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";
import { Quote } from "lucide-react";

export default function DirectorsMessage() {
    return (
        <SectionWrapper className="relative overflow-hidden">
            {/* Vibrant Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-10 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #0f1729 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Decorative Quote Mark */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-600 blur-2xl opacity-50" />
                            <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                <Quote className="text-white" size={40} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Message Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Glassmorphism Card */}
                        <div className="relative p-8 md:p-12 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
                            {/* Top Gradient Accent */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-t-3xl" />

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 leading-relaxed mb-8 italic"
                            >
                                "Our journey from a small construction firm to a diversified infrastructure group has been driven by{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 font-bold not-italic">
                                    unwavering commitment
                                </span>{" "}
                                to quality, innovation, and sustainable development. We don't just build structures; we build{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 font-bold not-italic">
                                    trust, communities, and a better future
                                </span>{" "}
                                for India."
                            </motion.p>

                            {/* Director Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full blur-lg opacity-50" />
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                                        BM
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-bmd-navy">Banty Kumar</h4>
                                    <p className="text-sm text-gray-600 uppercase tracking-wider">Managing Director</p>
                                </div>
                            </motion.div>

                            {/* Corner Decorations */}
                            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full opacity-60" />
                            <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-60" />
                        </div>
                    </motion.div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    background: `linear-gradient(135deg, ${['#10b981', '#14b8a6', '#06b6d4'][i % 3]}, ${['#059669', '#0d9488', '#0891b2'][i % 3]})`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -25, 0],
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
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </SectionWrapper>
    );
}
