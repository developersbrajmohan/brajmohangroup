"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Sun, Leaf, BatteryCharging, Zap } from "lucide-react";

const stats = [
    { value: "2 MW+", label: "Solar Capacity Installed" },
    { value: "5000+", label: "Households Solarized" },
    { value: "1M Ton", label: "CO2 Emissions Reduced" },
    { value: "24/7", label: "Green Energy Supply" }
];

export default function SustainabilityPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Sustainability"
                subtitle="Powering a Greener Tomorrow"
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            />

            <SectionWrapper>
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-serif text-white mb-6">Committed to <br /><span className="text-bmd-gold">The Solar Revolution</span></h2>
                        <p className="text-gray-400 font-light leading-relaxed mb-6">
                            At Braj Mohan Group, we believe that true development must be sustainable. We are actively contributing to India's green energy goals through
                            massive solar adoption initiatives. Under schemes like the <strong>PM Surya Ghar: Muft Bijli Yojana</strong>, we have
                            empowered thousands of households to generate their own clean electricity.
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed mb-8">
                            From residential rooftops to large-scale commercial solar plants, our energy division is dedicated to reducing carbon footprints
                            and ensuring energy independence for Bihar and beyond.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Tier-1 Solar Panels & Inverters",
                                "25-Year Performance Warranty",
                                "End-to-End Government Subsidy Support",
                                "Remote Monitoring & Maintenance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-white/80">
                                    <div className="w-8 h-8 rounded-full bg-bmd-gold/10 flex items-center justify-center mr-3 text-bmd-gold">
                                        <Leaf size={16} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-bmd-navy-light p-6 border border-white/5 rounded-sm text-center">
                                <span className="block text-3xl font-serif text-white mb-1 font-bold">{stat.value}</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</span>
                            </div>
                        ))}
                        <div className="col-span-2 bg-gradient-to-r from-bmd-gold to-yellow-400 p-6 rounded-sm text-bmd-navy">
                            <div className="flex items-center justify-center mb-2">
                                <Sun className="mr-2" />
                                <span className="font-bold uppercase tracking-widest">PM Surya Ghar Yojana</span>
                            </div>
                            <p className="text-center text-sm font-medium">Official Implementation Partner</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
