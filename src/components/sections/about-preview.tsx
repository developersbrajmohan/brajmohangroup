"use client";

import { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import MagneticButton from "../ui/magnetic-button";
import ContactFormModal from "../ui/contact-form-modal";
import { CheckCircle } from "lucide-react";
import { useRevealAll } from "@/hooks/use-reveal";

const highlights = [
    "25+ Years of Industry Leadership",
    "250+ Government Executed Projects",
    "500+ Renovations Completed",
    "1M+ Smart Meters Installed",
    "2MW+ Solar Infrastructure"
];

export default function AboutPreview() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRevealAll();

    return (
        <SectionWrapper id="about" className="bg-white">
            <div ref={containerRef} className="container mx-auto px-6 max-w-4xl text-center">
                {/* Content */}
                <div>
                    <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                        About the Group
                    </span>

                    <h2 className="reveal text-3xl md:text-5xl font-serif text-bmd-navy mb-6 leading-tight">
                        Building Infrastructure <br />
                        <span className="text-bmd-gold">
                            with Integrity & Innovation
                        </span>
                    </h2>

                    <p className="reveal text-gray-600 text-lg leading-relaxed mb-10 font-light mx-auto max-w-2xl">
                        Founded in 1999 in Patna, Braj Mohan Group has grown into a multidisciplinary powerhouse.
                        From constructing state-of-the-art government buildings and bridges to leading the green energy revolution
                        with solar power, we empower India's growth through sustainable execution.
                    </p>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto reveal-stagger">
                        {highlights.map((item, i) => (
                            <li
                                key={i}
                                className="reveal-child flex items-center space-x-3 group"
                            >
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-bmd-navy flex items-center justify-center">
                                    <CheckCircle className="text-bmd-gold" size={16} />
                                </div>
                                <span className="text-sm text-gray-600 group-hover:text-bmd-navy transition-colors duration-300 font-medium">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="reveal">
                        <MagneticButton
                            onClick={() => setIsModalOpen(true)}
                            className="border-bmd-navy bg-bmd-navy text-white hover:bg-bmd-gold hover:border-bmd-gold hover:text-bmd-navy"
                        >
                            Detailed Company Profile
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* Contact Form Modal */}
            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </SectionWrapper>
    );
}
