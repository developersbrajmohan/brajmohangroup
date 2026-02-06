"use client";

import { Check, Sparkles, ArrowRight } from 'lucide-react';
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
        gradient: 'from-blue-600 to-cyan-600',
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
        gradient: 'from-bmd-gold to-yellow-600',
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
        <section id="packages" className="py-24 bg-bmd-navy relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-bmd-gold rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">Pricing</span>
                    <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-4">
                        Development Packages
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        Transparent pricing with no hidden costs. Choose the detailed package that fits your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative group ${pkg.popular ? 'lg:scale-105 lg:z-10' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-gradient-to-r from-bmd-gold to-yellow-500 text-bmd-navy px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg uppercase tracking-wide">
                                        <Sparkles className="w-4 h-4" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`relative glass-dark rounded-sm p-8 hover:border-bmd-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pkg.popular ? 'border-bmd-gold shadow-bmd-gold/10' : 'border-white/10'}`}>
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold font-serif text-white mb-2">{pkg.name}</h3>
                                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                                </div>

                                <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                                    <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent mb-1`}>
                                        {pkg.price}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">One-time payment</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-bmd-gold' : 'text-blue-400'}`} />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="block">
                                    <button className={`w-full py-4 rounded-sm font-semibold text-sm uppercase tracking-widest transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-2 ${pkg.popular ? 'bg-bmd-gold text-bmd-navy hover:bg-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                        Get Started
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-4">Need something custom? We've got you covered!</p>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-transparent border border-bmd-gold text-bmd-gold rounded-sm font-semibold hover:bg-bmd-gold hover:text-bmd-navy transition-all duration-300 uppercase text-xs tracking-widest">
                            Request Custom Quote
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
