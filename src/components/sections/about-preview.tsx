"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import MagneticButton from "../ui/magnetic-button";
import ContactFormModal from "../ui/contact-form-modal";
import { CheckCircle } from "lucide-react";

const highlights = [
    "25+ Years of Industry Leadership",
    "250+ Government Executed Projects",
    "500+ Renovations Completed",
    "1M+ Smart Meters Installed",
    "2MW+ Solar Infrastructure"
];

export default function AboutPreview() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <SectionWrapper id="about" className="relative overflow-hidden">
            {/* Colorful Gradient Background with Animated Blobs */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Floating Decorative Elements */}
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

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        About the Group
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-5xl font-serif text-bmd-navy mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Building Infrastructure <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                            with Integrity & Innovation
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-700 text-lg leading-relaxed mb-8 font-light mx-auto max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Founded in 1999 in Patna, Braj Mohan Group has grown into a multidisciplinary powerhouse.
                        From constructing state-of-the-art government buildings and bridges to leading the green energy revolution
                        with solar power, we empower India's growth through sustainable execution.
                    </motion.p>

                    {/* Enhanced Highlights with Stagger Animation */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
                        {highlights.map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center space-x-3 group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                {/* Colorful Icon Background */}
                                <div className={`relative flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${['from-indigo-400 to-purple-600', 'from-purple-400 to-pink-600', 'from-pink-400 to-rose-600', 'from-indigo-500 to-purple-700', 'from-purple-500 to-pink-700'][i % 5]
                                    } flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                    <CheckCircle className="text-white" size={18} />
                                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </div>
                                <span className="text-sm text-gray-700 group-hover:text-bmd-navy transition-colors duration-300 font-medium">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <MagneticButton
                            onClick={() => setIsModalOpen(true)}
                            className="border-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/50"
                        >
                            Detailed Company Profile
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </SectionWrapper>
    );
}
