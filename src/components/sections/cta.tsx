"use client";

import SectionWrapper from "../ui/section-wrapper";
import MagneticButton from "../ui/magnetic-button";
import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

export default function CTA() {
    const revealRef = useReveal();

    return (
        <SectionWrapper className="relative overflow-hidden flex items-center justify-center text-center py-28 md:py-36">
            {/* Solar Panel Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                    alt="Solar panels at sunset"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    quality={85}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-bmd-navy/85" />
            </div>

            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmd-gold/30 to-transparent z-10" />

            <div ref={revealRef} className="container mx-auto px-6 relative z-10 reveal">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8">
                    Ready to Build <br /> <span className="text-bmd-gold">The Future?</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
                    Partner with Braj Mohan Group for world-class infrastructure, sustainable energy, and premium design solutions.
                </p>
                <a
                    href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20starting%20a%20project%20with%20Braj%20Mohan%20Group."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagneticButton className="bg-bmd-gold text-bmd-navy hover:bg-white hover:text-bmd-navy border-transparent px-10 py-4 text-base">
                        Start Your Project
                    </MagneticButton>
                </a>
            </div>
        </SectionWrapper>
    );
}
