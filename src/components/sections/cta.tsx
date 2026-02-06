"use client";

import SectionWrapper from "../ui/section-wrapper";
import MagneticButton from "../ui/magnetic-button";

export default function CTA() {
    return (
        <SectionWrapper className="bg-bmd-navy relative overflow-hidden flex items-center justify-center text-center py-32">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-bmd-gold/5 opacity-50 block md:hidden" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bmd-gold/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                    Ready to Build <br /> <span className="text-bmd-gold">The Future?</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
                    Partner with Braj Mohan Developers for world-class infrastructure, sustainable energy, and premium design solutions.
                </p>
                <a
                    href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20starting%20a%20project%20with%20Braj%20Mohan%20Group."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagneticButton className="bg-white text-bmd-navy hover:bg-bmd-gold hover:text-bmd-navy border-transparent px-10 py-4 text-base">
                        Start Your Project
                    </MagneticButton>
                </a>
            </div>
        </SectionWrapper>
    );
}
