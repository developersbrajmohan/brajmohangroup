"use client";

import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const packages = [
    {
        name: 'Starter Package',
        price: '₹15,000',
        description: 'Perfect for individuals & small businesses',
        features: [
            'Up to 5 pages website OR basic mobile app',
            'Responsive design for all devices',
            'Basic SEO optimization',
            'Contact form integration',
            '1 month free support',
            'Social media integration',
            'Fast delivery (2 weeks)'
        ],
        gradient: 'from-blue-500 to-cyan-600',
        popular: false
    },
    {
        name: 'Business Package',
        price: '₹35,000',
        description: 'Best for growing businesses',
        features: [
            'Up to 10 pages website OR feature-rich app',
            'Custom UI/UX design',
            'Admin panel/dashboard',
            'Advanced SEO & performance optimization',
            '3 months free support',
            'Payment gateway integration',
            'Database & backend setup',
            'Google Analytics integration',
            'Priority support'
        ],
        gradient: 'from-indigo-600 to-purple-700',
        popular: true
    },
    {
        name: 'Premium Package',
        price: '₹75,000+',
        description: 'Best for startups & enterprises',
        features: [
            'Unlimited pages/screens',
            'Fully custom solution',
            'Advanced features & integrations',
            'Multiple user roles & permissions',
            '6 months free support',
            'Cloud hosting setup',
            'Security & performance testing',
            'API development',
            'Dedicated project manager',
            'Training & documentation'
        ],
        gradient: 'from-purple-600 to-pink-600',
        popular: false
    }
];

export default function WebDevPackages() {
    return (
        <section id="packages" className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {/* Blobs */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                    >
                        Pricing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold font-serif text-bmd-navy mb-4"
                    >
                        Development Packages
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                        className="text-xl text-gray-500 max-w-3xl mx-auto font-light"
                    >
                        Transparent pricing with no hidden costs. Choose the package that fits your needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`relative group ${pkg.popular ? 'lg:scale-105 lg:z-10' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg uppercase tracking-wide">
                                        <Sparkles className="w-4 h-4" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`relative rounded-2xl p-8 bg-white/80 backdrop-blur-xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${pkg.popular ? 'border-indigo-300 shadow-xl shadow-indigo-500/10' : 'border-white/50 shadow-lg'}`}>
                                {/* Top accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pkg.gradient} rounded-t-2xl`} />

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold font-serif text-bmd-navy mb-2">{pkg.name}</h3>
                                    <p className="text-gray-500 text-sm">{pkg.description}</p>
                                </div>

                                <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-center">
                                    <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent mb-1`}>
                                        {pkg.price}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">One-time payment</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-indigo-600' : 'text-emerald-500'}`} />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="block">
                                    <button className={`w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-2 ${pkg.popular
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50'
                                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-bmd-navy hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700'}`}>
                                        Get Started
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-4">Need something custom? We've got you covered!</p>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest">
                            Request Custom Quote
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
