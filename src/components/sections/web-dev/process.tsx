"use client";

import { MessageSquare, Palette, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: 'Requirement Discussion',
        description: 'We understand your business goals, target audience, and project requirements in detail.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Our designers create stunning, user-friendly interfaces that match your brand identity.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Code,
        title: 'Development',
        description: 'Expert developers build your product using modern technologies and best practices.',
        color: 'from-bmd-gold to-yellow-500'
    },
    {
        icon: TestTube,
        title: 'Testing',
        description: 'Rigorous testing ensures bug-free, secure, and high-performance delivery.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        description: 'Successful deployment with ongoing support and maintenance for peace of mind.',
        color: 'from-red-500 to-pink-500'
    }
];

export default function WebDevProcess() {
    return (
        <section className="py-24 bg-bmd-navy-light relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">How We Work</span>
                    <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-4">
                        Our Development Process
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        A proven 5-step methodology that delivers exceptional results every time.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-bmd-gold to-red-500 -translate-y-1/2 opacity-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl z-10 border border-white/10`}>
                                        <step.icon className="w-10 h-10 text-white" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-bmd-navy border border-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-bmd-gold transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="glass p-8 rounded-sm hover:border-bmd-gold/30 transition-colors">
                        <div className="text-4xl font-bold text-blue-400 mb-2 font-serif">2-4 Weeks</div>
                        <div className="text-gray-500 uppercase text-xs tracking-widest">Average Project Timeline</div>
                    </div>
                    <div className="glass p-8 rounded-sm hover:border-bmd-gold/30 transition-colors">
                        <div className="text-4xl font-bold text-bmd-gold mb-2 font-serif">Daily</div>
                        <div className="text-gray-500 uppercase text-xs tracking-widest">Progress Updates</div>
                    </div>
                    <div className="glass p-8 rounded-sm hover:border-bmd-gold/30 transition-colors">
                        <div className="text-4xl font-bold text-green-400 mb-2 font-serif">Flexible</div>
                        <div className="text-gray-500 uppercase text-xs tracking-widest">Revision Options</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
