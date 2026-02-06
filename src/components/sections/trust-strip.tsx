"use client";

import { motion } from "framer-motion";

const clients = [
    "Government of Bihar",
    "TATA Power",
    "Adani Group",
    "Indian Railways",
    "NTPC",
    "NBPDCL",
    "SBPDCL"
];

export default function TrustStrip() {
    return (
        <div className="w-full bg-bmd-navy-light py-12 overflow-hidden border-b border-bmd-gold/10 relative z-30">
            <div className="absolute inset-0 bg-gradient-to-r from-bmd-navy via-transparent to-bmd-navy z-10 pointer-events-none" />

            <div className="flex w-max">
                <motion.div
                    className="flex gap-24 px-12"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                        <span
                            key={i}
                            className="text-xl md:text-2xl font-serif text-white/60 whitespace-nowrap uppercase tracking-widest hover:text-bmd-gold transition-colors duration-300 cursor-default font-bold"
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
