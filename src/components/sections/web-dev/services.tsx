"use client";

import { Globe, Smartphone, ShoppingCart, LayoutDashboard, Apple, MonitorSmartphone } from 'lucide-react';

const websiteServices = [
    {
        icon: Globe,
        title: 'Business Websites',
        description: 'Professional corporate websites that establish your brand and attract customers.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: LayoutDashboard,
        title: 'Portfolio Websites',
        description: 'Stunning portfolios that showcase your work and help you stand out.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce Websites',
        description: 'Powerful online stores with secure payments and inventory management.',
        gradient: 'from-bmd-gold to-yellow-500'
    },
    {
        icon: LayoutDashboard,
        title: 'Admin Dashboards',
        description: 'Custom admin panels to manage your business operations efficiently.',
        gradient: 'from-green-500 to-emerald-500'
    }
];

const mobileServices = [
    {
        icon: Smartphone,
        title: 'Android Apps',
        description: 'Native Android apps with smooth performance and modern features.',
        gradient: 'from-green-500 to-teal-500'
    },
    {
        icon: Apple,
        title: 'iOS Apps',
        description: 'Premium iOS applications designed for the Apple ecosystem.',
        gradient: 'from-blue-500 to-indigo-500'
    },
    {
        icon: MonitorSmartphone,
        title: 'Cross-Platform Apps',
        description: 'Flutter & React Native apps that work on both Android and iOS.',
        gradient: 'from-purple-500 to-blue-500'
    }
];

export default function WebDevServices() {
    return (
        <section className="py-24 bg-bmd-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl sm:text-6xl font-bold font-serif text-white mb-4 tracking-tight">
                        IT Development Services
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        Comprehensive digital solutions tailored for businesses of all sizes.
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-3xl font-bold font-serif text-white mb-10 text-center flex items-center justify-center gap-3">
                        <Globe className="w-8 h-8 text-blue-400" />
                        Website Development
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {websiteServices.map((service, index) => (
                            <div
                                key={index}
                                className="group relative glass-dark rounded-sm p-8 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-3 border-bmd-gold/10 hover:border-bmd-gold/30"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-bmd-gold transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed font-light text-sm">
                                    {service.description}
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold font-serif text-white mb-10 text-center flex items-center justify-center gap-3">
                        <Smartphone className="w-8 h-8 text-bmd-gold" />
                        Mobile App Development
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {mobileServices.map((service, index) => (
                            <div
                                key={index}
                                className="group relative glass-dark rounded-sm p-10 hover:shadow-[0_0_40px_rgba(209,168,87,0.1)] transition-all duration-500 hover:-translate-y-3 border-bmd-gold/10 hover:border-bmd-gold/30"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold font-serif text-white mb-4 group-hover:text-bmd-gold transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {service.description}
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
