"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Send, Navigation } from "lucide-react";
import MagneticButton from "../ui/magnetic-button";
import { useState } from "react";
import { submitInquiry } from "@/actions/submit-inquiry";

const footerLinks = {
    services: [
        { name: "Real Estate & Infrastructure", href: "/services#real-estate" },
        { name: "Construction & Civil", href: "/services#civil-construction" },
        { name: "Interior & Exterior", href: "/services#interior-design" },
        { name: "Solar & Energy", href: "/services#solar-energy" },
        { name: "Manpower & Security", href: "/services#manpower" },
        { name: "Digital Solutions", href: "/services#web-dev" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/projects" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Contact", href: "/contact" },
    ],
};

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "Real Estate"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleWhatsAppSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Capture the lead on the server first
            await submitInquiry({
                name: formData.name,
                phone: formData.phone,
                service: formData.service
            });

            // 2. Redirect to WhatsApp with pre-filled message
            const message = `Hi Braj Mohan Group, I am ${formData.name}. I am interested in ${formData.service}. My phone number is ${formData.phone}.`;
            const url = `https://wa.me/919031074805?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");

            // 3. Reset form (optional)
            setFormData({ name: "", phone: "", service: "Real Estate" });
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="bg-bmd-navy text-white pt-12 md:pt-20 pb-12 md:pb-10 border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">

                    {/* Left Column: Brand & Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Braj Mohan Group"
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 rounded-full bg-white p-1 object-contain"
                                />
                                <span className="text-2xl font-serif font-bold tracking-wider text-white italic">Braj Mohan <span className="text-bmd-gold not-italic">Group</span></span>
                            </Link>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 text-gray-400 text-sm group">
                                    <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:from-bmd-gold/20 group-hover:to-bmd-gold/5 group-hover:border-bmd-gold/30 transition-all duration-300 shadow-lg">
                                        <MapPin size={18} className="text-bmd-gold group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="mt-2 group-hover:text-white transition-colors">8H/7 Bahadurpur Housing Colony,<br />New Bypass Road, Patna-800026</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-400 text-sm group">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:from-bmd-gold/20 group-hover:to-bmd-gold/5 group-hover:border-bmd-gold/30 transition-all duration-300 shadow-lg">
                                        <Phone size={18} className="text-bmd-gold group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="group-hover:text-white transition-colors">+91 90310 74805</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-400 text-sm group">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:from-bmd-gold/20 group-hover:to-bmd-gold/5 group-hover:border-bmd-gold/30 transition-all duration-300 shadow-lg">
                                        <Mail size={18} className="text-bmd-gold group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="group-hover:text-white transition-colors">info@brajmohangroup.com</span>
                                </div>
                                <div className="pt-4 border-t border-white/5 space-y-1">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">CIN: <span className="text-gray-400">U45200BR1999PTC009060</span></p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">GST: <span className="text-gray-400">10AABCB6571F1Z5</span></p>
                                </div>
                            </div>
                            <div className="flex space-x-4 pt-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        aria-label={`Visit our ${["Facebook", "Twitter", "Instagram", "LinkedIn"][i]} page`}
                                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:from-bmd-gold/20 hover:to-bmd-gold/5 hover:border-bmd-gold/30 hover:shadow-[0_0_20px_rgba(209,168,87,0.2)] transition-all duration-300 group"
                                    >
                                        <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-serif font-semibold mb-6 text-bmd-gold">Quick Links</h3>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Automated Inquiry Form */}
                    <div className="bg-bmd-navy-light p-8 rounded-xl border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-serif text-white mb-2">Schedule
                            a Call Back</h3>
                        <p className="text-gray-400 text-sm mb-6">Fill the form to connect directly via WhatsApp.</p>

                        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-bmd-navy border border-white/10 p-3 rounded text-white focus:border-bmd-gold outline-none"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                disabled={isSubmitting}
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-bmd-navy border border-white/10 p-3 rounded text-white focus:border-bmd-gold outline-none"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                                disabled={isSubmitting}
                            />
                            <select
                                className="w-full bg-bmd-navy border border-white/10 p-3 rounded text-white focus:border-bmd-gold outline-none"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                disabled={isSubmitting}
                            >
                                <option>Real Estate & Infra</option>
                                <option>Civil Construction</option>
                                <option>Interior Design</option>
                                <option>Solar Energy</option>
                                <option>Technology Services</option>
                            </select>

                            <MagneticButton
                                className={`w-full justify-center text-bmd-navy border-transparent flex items-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-bmd-gold hover:bg-white'}`}
                                aria-label="Submit inquiry"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-bmd-navy/30 border-t-bmd-navy rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} /> Send via WhatsApp
                                    </>
                                )}
                            </MagneticButton>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-48 md:h-64 transition-all duration-500 rounded-lg overflow-hidden border border-white/10 mb-12 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.026743954546!2d85.16914303802525!3d25.585788189652554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58784d847c9f%3A0x6b0c2c102028829!2sBahadurpur%20Housing%20Colony%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover:scale-105 transition-transform duration-700"
                    ></iframe>

                    {/* Get Direction Overlay */}
                    <div className="absolute inset-0 bg-bmd-navy/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=House%2C+Braj+mohan+developers+pvt.+Ltd.%2C+no%2C+8H%2F7%2C+Vijay+Nagar%2C+Patna%2C+Bihar+800026"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MagneticButton className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 rounded-full border border-gray-200">
                                <Navigation size={18} className="fill-blue-600" /> Get Directions
                            </MagneticButton>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Braj Mohan Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
