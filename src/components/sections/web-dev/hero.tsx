"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WebDevHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bmd-navy pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="absolute top-20 left-10 w-72 h-72 bg-bmd-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-float">
                        <Sparkles className="w-4 h-4 text-bmd-gold" />
                        <span className="text-bmd-gold/80 text-sm font-medium tracking-wide uppercase">Premium IT Solutions</span>
                    </div>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-serif text-white mb-6 animate-fade-in-up tracking-tight">
                    Building Powerful
                    <span className="block mt-2 bg-gradient-to-r from-bmd-gold via-yellow-200 to-bmd-gold bg-clip-text text-transparent animate-gradient">
                        Websites & Apps
                    </span>
                    <span className="block mt-2 text-4xl sm:text-6xl">for Growing Businesses</span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up font-light leading-relaxed">
                    Patna's trusted IT partner delivering cutting-edge websites and mobile apps for businesses across India.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
                    <Link href="/contact">
                        <button className="group relative px-10 py-4 bg-bmd-gold text-bmd-navy rounded-sm font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(209,168,87,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </Link>

                    <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 glass text-white rounded-sm font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 border-bmd-gold/30">
                        View Packages
                    </button>
                </div>

                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up">
                    {[
                        { number: '50+', label: 'Projects Delivered' },
                        { number: '30+', label: 'Happy Clients' },
                        { number: '5+', label: 'Years Experience' },
                        { number: '100%', label: 'Client Satisfaction' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl sm:text-4xl font-bold font-serif text-white mb-2 group-hover:text-bmd-gold transition-colors">{stat.number}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-2 bg-gray-400 rounded-full animate-scroll-down"></div>
                </div>
            </div>
        </section>
    );
}
