"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for CSS-only scroll reveal animations.
 * Attaches IntersectionObserver to add `.visible` class when elements enter viewport.
 * 
 * Usage:
 *   const revealRef = useReveal();
 *   <div ref={revealRef} className="reveal">...</div>
 * 
 * For stagger groups:
 *   const staggerRef = useReveal();
 *   <div ref={staggerRef} className="reveal-stagger">
 *     <div className="reveal-child">Item 1</div>
 *     <div className="reveal-child">Item 2</div>
 *   </div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px"
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect reduced motion preference
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("visible");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.unobserve(el); // Only animate once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}

/**
 * Hook for observing multiple elements at once.
 * Returns a callback ref to attach to a container — it will observe
 * all children with `.reveal` or `.reveal-stagger` class.
 */
export function useRevealAll(
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px"
) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            container.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
                el.classList.add("visible");
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        container.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return containerRef;
}
