"use client";

import SectionWrapper from "../ui/section-wrapper";
import Image from "next/image";

const customers = [
    "/images/customers/1.jpg",
    "/images/customers/2.jpg",
    "/images/customers/3.jpg",
    "/images/customers/4.jpg",
    "/images/customers/5.jpg",
    "/images/customers/6.jpg",
    "/images/customers/7.jpg",
    "/images/customers/8.jpg",
];

export default function HappyCustomers() {
    return (
        <SectionWrapper className="bg-surface-warm relative py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-3 font-semibold">
                    Our Community
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-bmd-navy mb-4">
                    Happy Customers
                </h2>
                <p className="text-gray-500 font-light tracking-wide text-sm max-w-md mx-auto">
                    Building Trust, Delivering Satisfaction
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-surface-warm to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-surface-warm to-transparent pointer-events-none" />

                <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...customers, ...customers].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-64 h-80 md:w-72 md:h-88 rounded-xl overflow-hidden border border-border-subtle shrink-0 group hover:border-bmd-gold/40 transition-colors duration-300 shadow-sm"
                        >
                            <Image
                                src={src}
                                alt={`Happy Customer ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 256px, 288px"
                                quality={80}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bmd-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </SectionWrapper>
    );
}
