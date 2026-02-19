"use client";

import { MessageSquare, Palette, Code, TestTube, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: MessageSquare,
        title: 'Requirement Discussion',
        description: 'We understand your business goals, target audience, and project requirements in detail.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Our designers create stunning, user-friendly interfaces that match your brand identity.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: Code,
        title: 'Development',
        description: 'Expert developers build your product using modern technologies and best practices.',
        gradient: 'from-amber-500 to-orange-500'
    },
    {
        icon: TestTube,
        title: 'Testing',
        description: 'Rigorous testing ensures bug-free, secure, and high-performance delivery.',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        description: 'Successful deployment with ongoing support and maintenance for peace of mind.',
        gradient: 'from-red-500 to-pink-500'
    }
];

export default function WebDevProcess() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold font-serif text-bmd-navy mb-4"
                    >
                        Our Development Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                        className="text-xl text-gray-500 max-w-3xl mx-auto font-light"
                    >
                        A proven 5-step methodology that delivers exceptional results every time.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 -translate-y-1/2 opacity-40" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl z-10`}>
                                        <step.icon className="w-10 h-10 text-white" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-indigo-200 rounded-full flex items-center justify-center text-bmd-navy font-bold text-sm shadow-md">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold font-serif text-bmd-navy mb-3 group-hover:text-indigo-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { value: '2-4 Weeks', label: 'Average Project Timeline', gradient: 'from-blue-500 to-cyan-600' },
                        { value: 'Daily', label: 'Progress Updates', gradient: 'from-purple-500 to-pink-600' },
                        { value: 'Flexible', label: 'Revision Options', gradient: 'from-green-500 to-emerald-600' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2 font-serif`}>{stat.value}</div>
                            <div className="text-gray-500 uppercase text-xs tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
