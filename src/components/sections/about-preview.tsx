"use client";

import SectionWrapper from "../ui/section-wrapper";
import MagneticButton from "../ui/magnetic-button";
import { CheckCircle } from "lucide-react";

const highlights = [
    "25+ Years of Industry Leadership",
    "250+ Government Executed Projects",
    "500+ Renovations Completed",
    "1M+ Smart Meters Installed",
    "2MW+ Solar Infrastructure"
];

export default function AboutPreview() {
    return (
        <SectionWrapper id="about" className="bg-bmd-navy relative">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <div>
                    <span className="text-bmd-gold text-sm tracking-[0.2em] uppercase mb-4 block">About the Group</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                        Building Infrastructure <br /> with Integrity & Innovation
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                        Founded in 1999 in Patna, Braj Mohan Group has grown into a multidisciplinary powerhouse.
                        From constructing state-of-the-art government buildings and bridges to leading the green energy revolution
                        with solar power, we empower India’s growth through sustainable execution.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {highlights.map((item, i) => (
                            <li key={i} className="flex items-center space-x-3 text-white/80">
                                <CheckCircle className="text-bmd-gold" size={20} />
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <MagneticButton className="border-white/20 hover:bg-white hover:text-bmd-navy">
                        Detailed Company Profile
                    </MagneticButton>
                </div>

                {/* Right: Visual */}
                <div className="relative">
                    <div className="aspect-[4/5] bg-gray-900 rounded-sm overflow-hidden relative group">
                        {/* Placeholder Image */}
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 md:grayscale md:group-hover:grayscale-0" />

                        {/* Overlay Box */}
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-bmd-navy border border-bmd-gold p-6 flex flex-col justify-center items-center text-center hidden md:flex">
                            <span className="text-5xl font-serif text-white font-bold block mb-2">25+</span>
                            <span className="text-xs uppercase tracking-widest text-bmd-gold">Years of Experience</span>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-bmd-gold/50" />
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-bmd-gold/50" />
                </div>
            </div>
        </SectionWrapper>
    );
}
