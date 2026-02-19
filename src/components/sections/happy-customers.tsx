"use client";

import SectionWrapper from "../ui/section-wrapper";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <SectionWrapper className="bg-[#F9F5F0] relative py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-6xl font-dancing text-bmd-gold mb-4 drop-shadow-sm">
                    Happy Customers
                </h2>
                <p className="text-gray-600 font-light tracking-wide uppercase text-sm">
                    Building Trust, Deliver Satisfaction
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks - Updated to match vintage bg */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#F9F5F0] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#F9F5F0] to-transparent pointer-events-none" />

                <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* Double the list for seamless loop */}
                    {[...customers, ...customers].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden border border-bmd-gold/30 shrink-0 group hover:border-bmd-gold transition-colors duration-300 shadow-sm"
                        >
                            <Image
                                src={src}
                                alt={`Happy Customer ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bmd-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
