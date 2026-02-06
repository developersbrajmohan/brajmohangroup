"use client";

import { MapPin, DollarSign, Zap, Gauge, Headphones, CheckCircle } from 'lucide-react';

const reasons = [
    {
        icon: MapPin,
        title: 'Local Patna-Based Team',
        description: 'Easy communication and face-to-face meetings with a team that understands your local market.',
        color: 'blue'
    },
    {
        icon: DollarSign,
        title: 'Affordable Pricing',
        description: 'Premium quality at competitive rates perfect for startups and growing businesses.',
        color: 'amber'
    },
    {
        icon: Zap,
        title: 'Modern Tech Stack',
        description: 'Latest technologies and frameworks for future-proof, scalable solutions.',
        color: 'purple'
    },
    {
        icon: Gauge,
        title: 'Fast Performance',
        description: 'Clean code and optimized designs for lightning-fast load times.',
        color: 'green'
    },
    {
        icon: Headphones,
        title: 'Post-Launch Support',
        description: 'Dedicated support and maintenance to keep your digital products running smoothly.',
        color: 'cyan'
    },
    {
        icon: CheckCircle,
        title: 'On-Time Delivery',
        description: 'Reliable project timelines with transparent communication throughout.',
        color: 'orange'
    }
];

const colorClasses = {
    blue: { bg: 'from-blue-500 to-cyan-500' },
    amber: { bg: 'from-amber-500 to-yellow-500' },
    purple: { bg: 'from-purple-500 to-pink-500' },
    green: { bg: 'from-green-500 to-emerald-500' },
    cyan: { bg: 'from-cyan-500 to-teal-500' },
    orange: { bg: 'from-orange-500 to-red-500' }
};

export default function WebDevWhyChooseUs() {
    return (
        <section className="py-24 bg-bmd-navy relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-bmd-gold rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">Why Us</span>
                    <h2 className="text-4xl sm:text-6xl font-bold font-serif text-white mb-4 tracking-tight">
                        Why Choose the Group?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        Your trusted IT partner delivering excellence, reliability, and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const colors = colorClasses[reason.color as keyof typeof colorClasses];
                        return (
                            <div
                                key={index}
                                className="group relative glass-dark rounded-sm p-10 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 border-white/5 hover:border-bmd-gold/20"
                            >
                                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                                    <reason.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-white mb-4 group-hover:text-bmd-gold transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 glass-dark rounded-sm p-12 text-center relative overflow-hidden border-bmd-gold/10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-bmd-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                            Trusted by Businesses Across Bihar & India
                        </h3>
                        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            Join 30+ satisfied clients who have transformed their digital presence with our expertise and modern solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="px-8 py-4 glass rounded-sm border-white/10">
                                <span className="text-3xl font-bold text-bmd-gold font-serif">5.0</span>
                                <span className="text-yellow-400/80 ml-3 text-lg">★★★★★</span>
                            </div>
                            <div className="px-8 py-4 glass rounded-sm border-white/10">
                                <span className="text-lg font-medium text-white uppercase tracking-wider">100% Project Success</span>
                            </div>
                            <div className="px-8 py-4 glass rounded-sm border-white/10">
                                <span className="text-lg font-medium text-white uppercase tracking-wider">24/7 Premium Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
