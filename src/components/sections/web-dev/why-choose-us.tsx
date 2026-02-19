"use client";

import { MapPin, DollarSign, Zap, Gauge, Headphones, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
    {
        icon: MapPin,
        title: 'Local Patna-Based Team',
        description: 'Easy communication and face-to-face meetings with a team that understands your local market.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: DollarSign,
        title: 'Affordable Pricing',
        description: 'Premium quality at competitive rates perfect for startups and growing businesses.',
        gradient: 'from-amber-500 to-yellow-500'
    },
    {
        icon: Zap,
        title: 'Modern Tech Stack',
        description: 'Latest technologies and frameworks for future-proof, scalable solutions.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: Gauge,
        title: 'Fast Performance',
        description: 'Clean code and optimized designs for lightning-fast load times.',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        icon: Headphones,
        title: 'Post-Launch Support',
        description: 'Dedicated support and maintenance to keep your digital products running smoothly.',
        gradient: 'from-cyan-500 to-teal-500'
    },
    {
        icon: CheckCircle,
        title: 'On-Time Delivery',
        description: 'Reliable project timelines with transparent communication throughout.',
        gradient: 'from-orange-500 to-red-500'
    }
];

export default function WebDevWhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {/* Blobs */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                    >
                        Why Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-bold font-serif text-bmd-navy mb-4 tracking-tight"
                    >
                        Why Choose the Group?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                        className="text-xl text-gray-500 max-w-3xl mx-auto font-light"
                    >
                        Your trusted IT partner delivering excellence, reliability, and innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl p-10 bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} rounded-t-2xl`} />
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                                <reason.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-bmd-navy mb-4 group-hover:text-indigo-600 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-2xl p-12 text-center relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg"
                >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl" />

                    <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold font-serif text-bmd-navy mb-6">
                            Trusted by Businesses Across Bihar & India
                        </h3>
                        <p className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            Join 30+ satisfied clients who have transformed their digital presence with our expertise and modern solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm">
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-serif">5.0</span>
                                <span className="text-yellow-500 ml-3 text-lg">★★★★★</span>
                            </div>
                            <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100 shadow-sm">
                                <span className="text-lg font-bold text-bmd-navy uppercase tracking-wider">100% Project Success</span>
                            </div>
                            <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 shadow-sm">
                                <span className="text-lg font-bold text-bmd-navy uppercase tracking-wider">24/7 Premium Support</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
