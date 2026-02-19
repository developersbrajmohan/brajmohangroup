"use client";

import Image from "next/image";

const clientLogos = [
    { name: "Adani Group", src: "/images/client-logos/ADANI GROUP.png" },
    { name: "Airtel", src: "/images/client-logos/AIRTEL.jpg" },
    { name: "EESL", src: "/images/client-logos/ENERGY EFFICIENCY SERVICES.jpg" },
    { name: "G R Infraprojects", src: "/images/client-logos/G R INFRA PROJECTS.jpeg" },
    { name: "Genus", src: "/images/client-logos/GENUS.png" },
    { name: "Godrej", src: "/images/client-logos/GODREJ.png" },
    { name: "Google", src: "/images/client-logos/GOOGLE.webp" },
    { name: "Intellismart", src: "/images/client-logos/INTELLISMART.jpeg" },
    { name: "MNRE", src: "/images/client-logos/MINISTERY OF NEW & RENEWABLE ENERGY.jpg" },
    { name: "NBPDCL", src: "/images/client-logos/NORTH BIHAR POWER DISTRIBUTION.png" },
    { name: "Secure", src: "/images/client-logos/SECURE.webp" },
    { name: "SBPDCL", src: "/images/client-logos/SOUTH BIHAR POWER DISTRIBUTION.png" },
    { name: "Tata Power", src: "/images/client-logos/TATA POWER.png" },
    { name: "Tata Projects", src: "/images/client-logos/TATA PROJECTS.png" },
    { name: "Transrail Lighting", src: "/images/client-logos/TRANSRAIL LIGHTING.webp" },
    { name: "Bihar Education Dept", src: "/images/client-logos/bihar education department.jfif" },
    { name: "CPWD", src: "/images/client-logos/cpwd.jfif" },
];

export default function TrustStrip() {
    return (
        <div className="w-full relative py-12 overflow-hidden bg-gray-50 border-y border-gray-100">

            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            {/* Label */}
            <div className="text-center mb-8">
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-semibold">
                    Trusted by Industry Leaders
                </p>
            </div>

            {/* CSS-only infinite scroll — no JS, no lag */}
            <div className="relative overflow-hidden">
                <div className="trust-scroll flex items-center gap-10">
                    {[...clientLogos, ...clientLogos].map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm"
                            style={{ width: 180, height: 110 }}
                        >
                            <div className="flex-1 flex items-center justify-center w-full min-h-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={120}
                                    height={60}
                                    className="object-contain w-full h-full opacity-75 hover:opacity-100 transition-all duration-500"
                                    unoptimized
                                />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pure CSS keyframes for smooth scroll */}
            <style jsx>{`
                .trust-scroll {
                    width: max-content;
                    animation: trust-scroll 60s linear infinite;
                    will-change: transform;
                }
                @keyframes trust-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}
