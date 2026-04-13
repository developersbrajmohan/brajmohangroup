"use client";

import { useRef, useEffect, useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { useRevealAll } from "@/hooks/use-reveal";
import { HardHat, FolderCheck, Gauge, Sun } from "lucide-react";

const stats = [
    { value: 25, suffix: "+", label: "Years Experience", icon: HardHat },
    { value: 750, suffix: "+", label: "Projects Delivered", icon: FolderCheck },
    { value: 1, suffix: "M+", label: "Smart Meters Installed", icon: Gauge },
    { value: 2, suffix: "MW+", label: "Solar Capacity", icon: Sun },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect();

                    let startTime: number | null = null;
                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * value));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(value);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration, hasAnimated]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    const containerRef = useRevealAll();

    return (
        <SectionWrapper className="relative py-20 md:py-28 overflow-hidden bg-white">
            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 reveal-stagger">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="reveal-child relative group text-center"
                        >
                            {/* Card */}
                            <div className="relative p-8 md:p-10 rounded-2xl bg-surface-warm border border-border-subtle hover:border-bmd-gold/30 hover:shadow-lg transition-all duration-500">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-bmd-navy flex items-center justify-center mx-auto mb-5 group-hover:bg-bmd-gold transition-colors duration-300 shadow-sm">
                                    <stat.icon className="text-white" size={26} strokeWidth={1.5} />
                                </div>

                                {/* Number */}
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-bmd-navy mb-3 tracking-tight">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </h3>

                                {/* Gold underline */}
                                <div className="h-[2px] w-10 bg-bmd-gold mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-500" />

                                {/* Label */}
                                <p className="text-gray-400 text-[11px] uppercase tracking-[0.25em] font-semibold group-hover:text-gray-600 transition-colors duration-300">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
