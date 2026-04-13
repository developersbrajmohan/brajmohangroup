"use client";

import SectionWrapper from "../ui/section-wrapper";
import { Quote } from "lucide-react";
import { useRevealAll } from "@/hooks/use-reveal";

export default function DirectorsMessage() {
    const containerRef = useRevealAll();

    return (
        <SectionWrapper className="bg-bmd-navy relative overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmd-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmd-gold/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bmd-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Quote Icon */}
                    <div className="reveal mb-8 inline-flex">
                        <div className="w-16 h-16 rounded-2xl bg-bmd-gold/10 border border-bmd-gold/20 flex items-center justify-center">
                            <Quote className="text-bmd-gold" size={32} />
                        </div>
                    </div>

                    {/* Message */}
                    <blockquote className="reveal">
                        <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white/90 leading-relaxed mb-10 italic">
                            "Our journey from a small construction firm to a diversified infrastructure group has been driven by{" "}
                            <span className="text-bmd-gold font-bold not-italic">
                                unwavering commitment
                            </span>{" "}
                            to quality, innovation, and sustainable development. We don't just build structures; we build{" "}
                            <span className="text-bmd-gold font-bold not-italic">
                                trust, communities, and a better future
                            </span>{" "}
                            for India."
                        </p>
                    </blockquote>

                    {/* Director Info */}
                    <div className="reveal flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-bmd-gold flex items-center justify-center text-bmd-navy text-xl font-bold shadow-lg">
                            BM
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-bold text-white">Banty Kumar</h4>
                            <p className="text-sm text-bmd-gold/80 uppercase tracking-wider">Managing Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
