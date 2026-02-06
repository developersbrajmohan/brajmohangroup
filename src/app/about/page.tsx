"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react";

const timeline = [
    { year: "1999", title: "Foundation", description: "Established in Patna with a vision to transform infrastructure." },
    { year: "2005", title: "Expansion", description: "Expanded into government civil projects and road construction." },
    { year: "2012", title: "Smart Meters", description: "Partnered with major power corporations for smart meter installation." },
    { year: "2018", title: "Solar Initiative", description: "Launched green energy division, installing rooftop solar units." },
    { year: "2024", title: "Digital Expansion", description: "Integrated AI and digital solutions into core infrastructure services." }
];

const values = [
    { icon: Award, title: "Excellence", description: "Delivering world-class quality in every brick laid and code written." },
    { icon: Users, title: "Integrity", description: "Transparent dealings with government and private stakeholders." },
    { icon: TrendingUp, title: "Innovation", description: "Adopting modern tech like AI and Green Energy solutions." },
    { icon: CheckCircle, title: "Sustainability", description: "Commitment to reducing carbon footprint through solar energy." },
];

export default function AboutPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Our Legacy"
                subtitle="25+ Years of Nation Building"
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <SectionWrapper className="bg-bmd-navy-light border-b border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Empowering India’s<br /><span className="text-bmd-gold">Infrastructure Growth</span></h2>
                        <div className="space-y-4 text-gray-400 font-light leading-relaxed">
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
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-white/5 rounded-sm overflow-hidden p-2 border border-white/10">
                            <div className="w-full h-full bg-[url('https://images.pexels.com/photos/11442140/pexels-photo-11442140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Values Grid */}
            <SectionWrapper>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-bmd-gold text-xs uppercase tracking-widest">Core Philosophy</span>
                        <h2 className="text-4xl font-serif text-white mt-2">Driven by Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, i) => (
                            <div key={i} className="bg-bmd-navy border border-white/10 p-8 rounded-sm hover:border-bmd-gold transition-colors duration-300 group">
                                <val.icon className="text-bmd-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                                <h3 className="text-xl font-serif text-white mb-3">{val.title}</h3>
                                <p className="text-gray-400 text-sm">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Timeline */}
            <SectionWrapper className="bg-bmd-navy-light relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Our Journey</h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-bmd-gold/30 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2 p-4">
                                        <div className={`bg-bmd-navy p-6 border border-white/10 hover:border-bmd-gold/50 transition-colors relative ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                                            <span className="text-4xl font-serif font-bold text-white/10 absolute top-2 right-4">{item.year}</span>
                                            <h3 className="text-xl font-serif text-bmd-gold mb-2">{item.title}</h3>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-bmd-gold rounded-full border-4 border-bmd-navy-light z-20" />

                                    <div className="w-full md:w-1/2 p-4" /> {/* Spacer */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
