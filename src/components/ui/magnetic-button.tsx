"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export default function MagneticButton({
    children,
    className,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            className={cn(
                "group relative px-8 py-3 rounded-full border border-bmd-gold text-bmd-gold uppercase text-sm font-medium tracking-widest overflow-hidden transition-colors duration-300 ease-out hover:text-bmd-navy",
                className
            )}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 bg-bmd-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0" />
        </motion.button>
    );
}
