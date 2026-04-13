"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react";
import { useRevealAll } from "@/hooks/use-reveal";

const timeline = [
    { year: "1999", title: "Foundation", description: "Established in Patna with a bold vision to transform India's infrastructure landscape." },
    { year: "2005", title: "Expansion", description: "Expanded into large-scale government civil projects and highway road construction." },
    { year: "2012", title: "Smart Meters", description: "Partnered with major power corporations for smart meter installation across Bihar." },
    { year: "2018", title: "Solar Initiative", description: "Launched our green energy division, installing rooftop solar units statewide." },
    { year: "2024", title: "Digital Expansion", description: "Integrated AI and digital solutions into core infrastructure services." },
];

const values = [
    { icon: Award, title: "Excellence", description: "Delivering world-class quality in every brick laid and code written." },
    { icon: Users, title: "Integrity", description: "Transparent dealings with government and private stakeholders." },
    { icon: TrendingUp, title: "Innovation", description: "Adopting modern tech like AI and Green Energy solutions." },
    { icon: CheckCircle, title: "Sustainability", description: "Commitment to reducing carbon footprint through solar energy." },
];

export default function AboutPage() {
    const introRef = useRevealAll();
    const valuesRef = useRevealAll();
    const timelineRef = useRevealAll();

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Our Legacy"
                subtitle="25+ Years of Nation Building"
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro Section */}
            <SectionWrapper className="bg-surface-warm">
                <div ref={introRef} className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            Who We Are
                        </span>
                        <h2 className="reveal text-3xl md:text-5xl font-serif text-bmd-navy mb-6 leading-tight">
                            Empowering India's{" "}
                            <span className="text-bmd-gold">Infrastructure Growth</span>
                        </h2>
                        <div className="reveal space-y-4 text-gray-600 font-light leading-relaxed">
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
                    <div className="reveal">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-border-subtle">
                            <div
                                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: `url('https://images.pexels.com/photos/11442140/pexels-photo-11442140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
                            />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Values Grid */}
            <SectionWrapper className="bg-white">
                <div ref={valuesRef} className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            Core Philosophy
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl font-serif font-bold text-bmd-navy">
                            Driven by Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="reveal-child group relative p-8 rounded-2xl bg-surface-warm border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-md transition-all duration-500 text-center h-full"
                            >
                                <div className="w-14 h-14 rounded-xl bg-bmd-navy flex items-center justify-center mx-auto mb-6 group-hover:bg-bmd-gold transition-colors duration-300 shadow-sm">
                                    <val.icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-lg font-serif font-bold text-bmd-navy mb-3">{val.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Timeline */}
            <SectionWrapper className="bg-surface-warm">
                <div ref={timelineRef} className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            Our Story
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl font-serif font-bold text-bmd-navy">
                            Our Journey
                        </h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border-subtle md:-translate-x-1/2" />

                        <div className="space-y-12 reveal-stagger">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`reveal-child relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:p-6">
                                        <div className={`relative p-6 rounded-2xl bg-white border border-border-subtle shadow-sm hover:shadow-md hover:border-bmd-gold/30 transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                                            <span className="text-3xl font-serif font-black text-bmd-gold/20 block mb-1">
                                                {item.year}
                                            </span>
                                            <h3 className="text-lg font-serif font-bold text-bmd-navy mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-bmd-gold border-4 border-white shadow-sm z-20" />

                                    <div className="hidden md:block w-full md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
