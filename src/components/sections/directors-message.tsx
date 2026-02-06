"use client";

import SectionWrapper from "../ui/section-wrapper";
import { Quote } from "lucide-react";

export default function DirectorsMessage() {
    return (
        <SectionWrapper className="bg-bmd-navy-light relative border-y border-white/5">
            <div className="container mx-auto px-6">
                {/* Content Side */}
                <div className="max-w-4xl mx-auto relative text-center">
                    <div className="flex justify-center">
                        <Quote className="text-bmd-gold/20 mb-6" size={80} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                        "We don't just build structures; <br />
                        we build <span className="text-bmd-gold">relationships & trust.</span>"
                    </h2>

                    <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                        <p>
                            At Braj Mohan Group, our journey began in 1999 with a simple vision: to contribute to India's infrastructure growth with
                            unwavering integrity. Today, as we expand across sectors—from civil construction to solar energy—our core values remain unchanged.
                        </p>
                        <p>
                            We are committed to delivering excellence in every project, ensuring that our work stands the test of time and empowers
                            the communities we serve. As we move forward, innovation and sustainability will continue to be our guiding lights.
                        </p>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/10 flex flex-col items-center justify-center">
                        <span className="block font-serif text-2xl text-white signature-font italic">Bunty Singh</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">MD, Braj Mohan Developers</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
