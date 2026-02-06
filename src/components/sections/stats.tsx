"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/section-wrapper";

const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "750+", label: "Projects Delivered" },
    { value: "1M+", label: "Smart Meters Installed" },
    { value: "2MW+", label: "Solar Capacity" },
];

export default function Stats() {
    return (
        <SectionWrapper className="bg-bmd-navy border-y border-white/5 py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white mb-3 group-hover:text-bmd-gold transition-colors duration-500">
                                {stat.value}
                            </h3>
                            <div className="h-[2px] w-8 bg-bmd-gold mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-white">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
