"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-4 md:px-12 py-4",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md border-b border-bmd-navy/5 py-4 shadow-sm"
                        : "bg-black/20 backdrop-blur-sm py-6 border-b border-white/10"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="z-50 flex items-center shrink-0 min-w-[150px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <img
                        src="/images/logo.jpg"
                        alt="Braj Mohan Group"
                        className="h-10 md:h-12 w-auto object-contain rounded-full border border-white/20"
                    />
                    <span className={cn(
                        "ml-2 md:ml-3 font-alfa tracking-wider font-bold text-xl md:text-2xl transition-colors duration-300",
                        isScrolled ? "text-bmd-navy" : "text-white"
                    )}>
                        BRAJ MOHAN <span className="text-bmd-gold">GROUP</span>
                    </span>
                </Link>

                {/* Desktop Nav - Hidden on Mobile and Tablet, Visible on Large Screens */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.name === "Services" ? (
                                <button className={cn(
                                    "relative px-2 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:text-bmd-gold hover:drop-shadow-[0_0_8px_rgba(209,168,87,0.5)] flex items-center gap-1 group",
                                    isScrolled ? "text-bmd-navy/80" : "text-white/90"
                                )}>
                                    Services
                                    <span className="absolute bottom-2 left-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-bmd-gold to-transparent -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative px-2 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:text-bmd-gold hover:drop-shadow-[0_0_8px_rgba(209,168,87,0.5)] block group",
                                        isScrolled ? "text-bmd-navy/80" : "text-white/90"
                                    )}
                                >
                                    {link.name}
                                    <span className="absolute bottom-2 left-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-bmd-gold to-transparent -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {link.name === "Services" && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white/95 backdrop-blur-xl border border-bmd-navy/10 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden">
                                    {/* Top Gold Line */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-bmd-gold to-transparent opacity-50"></div>

                                    <div className="py-2 grid">
                                        {[
                                            { name: "Construction", href: "/services/construction" },
                                            { name: "Renewable Power", href: "/services/renewable-power" },
                                            { name: "Web & App Development", href: "/services/web-development" },
                                        ].map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                className="group/item relative flex items-center justify-between px-6 py-4 text-sm text-gray-600 hover:text-bmd-navy transition-all duration-300 hover:bg-gradient-to-r hover:from-bmd-navy/5 hover:to-transparent border-l-2 border-transparent hover:border-bmd-gold hover:pl-7"
                                            >
                                                <span className="font-medium tracking-wide">{subLink.name}</span>
                                                <ArrowRight className="w-4 h-4 text-bmd-gold opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />

                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 bg-bmd-gold/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                            </Link>
                                        ))}
                                        <Link href="/services" className="block px-6 py-4 text-xs uppercase tracking-widest text-bmd-gold hover:text-bmd-navy hover:bg-bmd-gold/10 text-center border-t border-bmd-navy/5 mt-1 font-bold transition-colors">
                                            View All Services
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <a href="tel:+919031074805">
                        <MagneticButton className="ml-4 px-6 py-2.5 text-xs bg-black/90 hover:bg-black text-bmd-gold border border-bmd-gold/30 flex items-center gap-3 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(209,168,87,0.4)] transition-all duration-300 group rounded-full">
                            <div className="w-6 h-6 rounded-full bg-bmd-gold/20 group-hover:bg-bmd-gold/30 flex items-center justify-center shrink-0 transition-colors border border-bmd-gold/20">
                                <Phone size={12} className="text-bmd-gold fill-current transition-colors" />
                            </div>
                            <span className="tracking-widest font-bold text-[10px] uppercase shadow-black drop-shadow-sm">Free Consultation</span>
                        </MagneticButton>
                    </a>
                </nav>

                {/* Mobile Menu Button - Visible on Mobile and Tablet */}
                <button
                    className={cn(
                        "lg:hidden z-50 transition-colors duration-300",
                        isScrolled ? "text-bmd-navy" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </motion.header >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Sidebar */}
                            <motion.div
                                className="fixed inset-y-0 right-0 z-50 w-[75%] max-w-sm bg-white/95 backdrop-blur-xl border-l border-bmd-navy/10 shadow-2xl flex flex-col p-8"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                    <span className="text-xl font-serif text-bmd-navy italic">Menu</span>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 -mr-2 text-bmd-navy/60 hover:text-bmd-navy transition-colors rounded-full hover:bg-bmd-navy/5"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="flex flex-col space-y-6">
                                    {navLinks.map((link, i) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + i * 0.1 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        "text-2xl font-serif transition-colors block border-b border-bmd-navy/5 pb-4",
                                                        isActive ? "text-bmd-gold border-bmd-gold/30 pl-2" : "text-bmd-navy hover:text-bmd-gold"
                                                    )}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-auto mb-8"
                                >
                                    <a href="tel:+919031074805" className="block">
                                        <MagneticButton className="w-full justify-center bg-bmd-gold text-bmd-navy border-transparent hover:bg-bmd-navy hover:text-white flex items-center gap-2 font-bold py-4">
                                            <Phone size={18} fill="currentColor" /> Call Now
                                        </MagneticButton>
                                    </a>
                                    <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-widest">
                                        &copy; {new Date().getFullYear()} Braj Mohan Group
                                    </p>
                                </motion.div>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence >
        </>
    );
}
