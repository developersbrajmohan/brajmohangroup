"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const serviceSubLinks = [
    { name: "Construction", href: "/services/construction" },
    { name: "Renewable Power", href: "/services/renewable-power" },
    { name: "Web & App Development", href: "/services/web-development" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
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

    // Reset services dropdown when mobile menu closes
    useEffect(() => {
        if (!isMobileMenuOpen) {
            setIsServicesOpen(false);
        }
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
                    <Image
                        src="/images/logo.jpg"
                        alt="Braj Mohan Group"
                        width={48}
                        height={48}
                        priority
                        className="h-10 md:h-12 w-auto object-contain rounded-full border border-white/20"
                    />
                    <span className={cn(
                        "ml-2 md:ml-3 font-accent tracking-wider font-bold text-xl md:text-2xl transition-colors duration-300",
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
                                    "relative px-2 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:text-bmd-gold hover:drop-shadow-[0_0_8px_rgba(209,168,87,0.5)] flex items-center gap-1 group font-accent font-semibold",
                                    isScrolled ? "text-bmd-navy/80" : "text-white/90"
                                )}>
                                    Services
                                    <span className="absolute bottom-2 left-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-bmd-gold to-transparent -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative px-2 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:text-bmd-gold hover:drop-shadow-[0_0_8px_rgba(209,168,87,0.5)] block group font-accent font-semibold",
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
                                        {serviceSubLinks.map((subLink) => (
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
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20Braj%20Mohan%20Group%20services.%20Please%20share%20more%20details."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4"
                    >
                        <MagneticButton className="px-3 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white border border-[#25D366]/30 flex items-center gap-2 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 group rounded-full">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-white shrink-0">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="tracking-widest font-bold text-[10px] uppercase">WhatsApp</span>
                        </MagneticButton>
                    </a>

                    {/* Call Button */}
                    <a href="tel:+919031074805">
                        <MagneticButton className="ml-2 px-3 py-2.5 text-xs bg-black/90 hover:bg-black text-bmd-gold border border-bmd-gold/30 flex items-center gap-2 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(209,168,87,0.4)] transition-all duration-300 group rounded-full">
                            <div className="w-5 h-5 rounded-full bg-bmd-gold/20 group-hover:bg-bmd-gold/30 flex items-center justify-center shrink-0 transition-colors border border-bmd-gold/20">
                                <Phone size={10} className="text-bmd-gold fill-current transition-colors" />
                            </div>
                            <span className="tracking-widest font-bold text-[10px] uppercase shadow-black drop-shadow-sm">Call</span>
                        </MagneticButton>
                    </a>
                </nav>

                {/* Mobile Actions - WhatsApp + Menu Button */}
                <div className="lg:hidden z-50 flex items-center gap-2">
                    {/* Mobile WhatsApp Icon */}
                    <a
                        href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20Braj%20Mohan%20Group%20services.%20Please%20share%20more%20details."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "p-2 rounded-full transition-all duration-300",
                            isScrolled
                                ? "bg-[#25D366]/10 text-[#25D366]"
                                : "bg-white/10 text-[#25D366]"
                        )}
                        aria-label="Chat on WhatsApp"
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>

                    {/* Hamburger Menu Button */}
                    <button
                        className={cn(
                            "transition-colors duration-300",
                            isScrolled ? "text-bmd-navy" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.header>

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
                                className="fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-white/95 backdrop-blur-xl border-l border-bmd-navy/10 shadow-2xl flex flex-col"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-bmd-navy/10 shrink-0">
                                    <span className="text-lg font-accent text-bmd-navy font-semibold tracking-wide">Menu</span>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 -mr-2 text-bmd-navy/60 hover:text-bmd-navy transition-colors rounded-full hover:bg-bmd-navy/5"
                                    >
                                        <X size={22} />
                                    </button>
                                </div>

                                {/* Scrollable Nav Links */}
                                <div className="flex-1 overflow-y-auto px-6 py-6">
                                    <div className="flex flex-col space-y-1">
                                        {navLinks.map((link, i) => {
                                            const isActive = pathname === link.href || (link.name === "Services" && pathname.startsWith("/services"));

                                            if (link.name === "Services") {
                                                return (
                                                    <motion.div
                                                        key={link.name}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 + i * 0.08 }}
                                                    >
                                                        {/* Services Toggle Button */}
                                                        <button
                                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                            className={cn(
                                                                "w-full flex items-center justify-between text-lg font-accent font-semibold tracking-wide transition-colors py-3 border-b border-bmd-navy/5",
                                                                isActive ? "text-bmd-gold" : "text-bmd-navy hover:text-bmd-gold"
                                                            )}
                                                        >
                                                            <span>Services</span>
                                                            <motion.div
                                                                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <ChevronDown size={18} className="text-bmd-gold" />
                                                            </motion.div>
                                                        </button>

                                                        {/* Services Dropdown Sub-links */}
                                                        <AnimatePresence>
                                                            {isServicesOpen && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="pl-4 py-2 space-y-1 border-l-2 border-bmd-gold/30 ml-2">
                                                                        {serviceSubLinks.map((subLink, j) => (
                                                                            <motion.div
                                                                                key={subLink.name}
                                                                                initial={{ opacity: 0, x: -10 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ delay: j * 0.08 }}
                                                                            >
                                                                                <Link
                                                                                    href={subLink.href}
                                                                                    className={cn(
                                                                                        "flex items-center justify-between py-2.5 px-3 text-sm font-body tracking-wide rounded-lg transition-all duration-200 group/sub",
                                                                                        pathname === subLink.href
                                                                                            ? "text-bmd-gold bg-bmd-gold/10"
                                                                                            : "text-gray-600 hover:text-bmd-navy hover:bg-bmd-navy/5"
                                                                                    )}
                                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                                >
                                                                                    <span>{subLink.name}</span>
                                                                                    <ArrowRight size={14} className="text-bmd-gold opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                                                                </Link>
                                                                            </motion.div>
                                                                        ))}
                                                                        <motion.div
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: serviceSubLinks.length * 0.08 }}
                                                                        >
                                                                            <Link
                                                                                href="/services"
                                                                                className="block py-2.5 px-3 text-xs uppercase tracking-[0.15em] text-bmd-gold hover:text-bmd-navy font-bold rounded-lg hover:bg-bmd-gold/10 transition-all duration-200 text-center mt-1 border-t border-bmd-navy/5 pt-3"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                View All Services
                                                                            </Link>
                                                                        </motion.div>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                );
                                            }

                                            return (
                                                <motion.div
                                                    key={link.name}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + i * 0.08 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className={cn(
                                                            "text-lg font-accent font-semibold tracking-wide transition-colors block border-b border-bmd-navy/5 py-3",
                                                            isActive ? "text-bmd-gold pl-2" : "text-bmd-navy hover:text-bmd-gold"
                                                        )}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Footer CTA */}
                                <div className="shrink-0 px-6 pb-6 pt-4 border-t border-bmd-navy/10">
                                    <div className="flex gap-3">
                                        <a
                                            href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20Braj%20Mohan%20Group%20services.%20Please%20share%20more%20details."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <MagneticButton className="w-full justify-center bg-[#25D366] text-white border-transparent hover:bg-[#1da851] flex items-center gap-2 font-bold py-3.5 text-sm rounded-xl">
                                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                                WhatsApp
                                            </MagneticButton>
                                        </a>
                                        <a href="tel:+919031074805" className="flex-1">
                                            <MagneticButton className="w-full justify-center bg-bmd-gold text-bmd-navy border-transparent hover:bg-bmd-navy hover:text-white flex items-center gap-2 font-bold py-3.5 text-sm rounded-xl">
                                                <Phone size={16} fill="currentColor" /> Call
                                            </MagneticButton>
                                        </a>
                                    </div>
                                    <p className="text-center text-gray-400 text-[10px] mt-4 uppercase tracking-[0.15em]">
                                        &copy; {new Date().getFullYear()} Braj Mohan Group
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence>
        </>
    );
}
