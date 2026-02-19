"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react";

const timeline = [
    { year: "1999", title: "Foundation", description: "Established in Patna with a bold vision to transform India's infrastructure landscape.", color: "from-indigo-500 to-purple-600" },
    { year: "2005", title: "Expansion", description: "Expanded into large-scale government civil projects and highway road construction.", color: "from-purple-500 to-pink-600" },
    { year: "2012", title: "Smart Meters", description: "Partnered with major power corporations for smart meter installation across Bihar.", color: "from-pink-500 to-rose-600" },
    { year: "2018", title: "Solar Initiative", description: "Launched our green energy division, installing rooftop solar units statewide.", color: "from-orange-500 to-yellow-600" },
    { year: "2024", title: "Digital Expansion", description: "Integrated AI and digital solutions into core infrastructure services.", color: "from-emerald-500 to-teal-600" },
];

const values = [
    { icon: Award, title: "Excellence", description: "Delivering world-class quality in every brick laid and code written.", gradient: "from-amber-400 to-orange-600" },
    { icon: Users, title: "Integrity", description: "Transparent dealings with government and private stakeholders.", gradient: "from-indigo-400 to-purple-600" },
    { icon: TrendingUp, title: "Innovation", description: "Adopting modern tech like AI and Green Energy solutions.", gradient: "from-cyan-400 to-blue-600" },
    { icon: CheckCircle, title: "Sustainability", description: "Commitment to reducing carbon footprint through solar energy.", gradient: "from-emerald-400 to-teal-600" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Our Legacy"
                subtitle="25+ Years of Nation Building"
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Who We Are
                        </motion.span>
                        <h2 className="text-3xl md:text-5xl font-serif text-bmd-navy mb-6 leading-tight">
                            Empowering India's{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                                Infrastructure Growth
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                            <p>
                                Braj Mohan Group is a multidisciplinary infrastructure powerhouse based in Patna, Bihar.
                                With over two decades of experience, we have successfully bridged the gap between traditional construction
                                and modern technological innovation.
                            </p>
                            <p>
                                From constructing robust government buildings and highways to electrifying thousands of households with renewable energy,
                                our mission is to build a sustainable and progressive ecosystem for future generations.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />
                            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
                                <div
                                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url('https://images.pexels.com/photos/11442140/pexels-photo-11442140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl opacity-10 -z-10" />
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Values Grid */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Core Philosophy
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Driven by Values
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${val.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${val.gradient} rounded-t-2xl`} />
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${val.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <val.icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-bmd-navy mb-3">{val.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Timeline */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Our Story
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Our Journey
                        </motion.h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-300 via-purple-400 to-pink-300 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:p-6">
                                        <div className={`relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />
                                            <span className={`text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} opacity-30 block mb-1`}>
                                                {item.year}
                                            </span>
                                            <h3 className={`text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br ${item.color} mb-2`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className={`absolute left-[10px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${item.color} border-4 border-white shadow-lg z-20`} />

                                    <div className="hidden md:block w-full md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
