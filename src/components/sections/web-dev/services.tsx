"use client";

import { Globe, Smartphone, ShoppingCart, LayoutDashboard, Apple, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

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
        gradient: 'from-amber-500 to-orange-500'
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
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Subtle gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" />

            {/* Blobs */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-bold font-serif text-bmd-navy mb-4 tracking-tight"
                    >
                        IT Development Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                        className="text-xl text-gray-500 max-w-3xl mx-auto font-light"
                    >
                        Comprehensive digital solutions tailored for businesses of all sizes.
                    </motion.p>
                </div>

                {/* Website Services */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="text-3xl font-bold font-serif text-bmd-navy mb-10 text-center flex items-center justify-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Globe className="w-5 h-5 text-white" />
                        </div>
                        Website Development
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {websiteServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-2xl p-8 bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-xl font-bold font-serif text-bmd-navy mb-3 group-hover:text-indigo-600 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed font-light text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Services */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="text-3xl font-bold font-serif text-bmd-navy mb-10 text-center flex items-center justify-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        Mobile App Development
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {mobileServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-2xl p-10 bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold font-serif text-bmd-navy mb-4 group-hover:text-indigo-600 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
