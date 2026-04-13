"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building2 } from "lucide-react";
import { useState } from "react";
import { submitInquiry } from "@/actions/submit-inquiry";
import { useRevealAll } from "@/hooks/use-reveal";

const contactItems = [
    { icon: MapPin, title: "Visit Us", info: "8H/7 Bahadurpur Housing Colony,\nNew Bypass Road, Patna - 800026" },
    { icon: Phone, title: "Call Us", info: "+91 90310 74805" },
    { icon: Mail, title: "Email Us", info: "info@brajmohangroup.in" },
    { icon: Clock, title: "Opening Hours", info: "Mon - Sat: 10:00 AM - 7:00 PM\nSun: Closed" },
];

export default function ContactPage() {
    const heroRef = useRevealAll();
    const contentRef = useRevealAll();

    return (
        <main className="min-h-screen bg-white">

            {/* ── CLEAN HERO ── */}
            <section className="relative min-h-[55vh] overflow-hidden flex items-center justify-center bg-surface-warm">
                {/* Subtle glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-bmd-gold/8 rounded-full blur-[120px] pointer-events-none" />

                <div ref={heroRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-28 pb-12">
                    <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                        Get in Touch
                    </span>

                    <h1 className="reveal text-4xl md:text-6xl font-serif font-bold mb-5 leading-tight text-bmd-navy">
                        Let's Build{" "}
                        <span className="text-bmd-gold">Something Great</span>
                        <br />Together
                    </h1>

                    <p className="reveal text-gray-500 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
                        Have a project in mind? Drop us a line and our expert team will reach out faster than you expect.
                    </p>

                    {/* Action buttons */}
                    <div className="reveal flex flex-wrap gap-4 justify-center">
                        <a href="tel:+919031074805"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-bmd-navy text-white text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <Phone size={16} />
                            <span>+91 90310 74805</span>
                        </a>

                        <a href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20Braj%20Mohan%20Group%20services.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            style={{ background: '#25D366' }}>
                            <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>WhatsApp</span>
                        </a>

                        <a href="mailto:info@brajmohangroup.in"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-bmd-navy text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-border-subtle">
                            <Mail size={16} />
                            <span>Email Us</span>
                        </a>
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* ── CONTACT INFO + FORM ── */}
            <SectionWrapper className="bg-white">
                <div ref={contentRef} className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            Reach Out
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl font-serif font-bold text-bmd-navy">
                            Head Office
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info Cards */}
                        <div className="space-y-4 reveal-stagger">
                            {contactItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="reveal-child relative p-6 rounded-xl bg-surface-warm border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 group"
                                >
                                    <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-bmd-gold/40 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="w-11 h-11 rounded-xl bg-bmd-navy flex items-center justify-center shrink-0 group-hover:bg-bmd-gold transition-colors duration-300">
                                        <item.icon size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-bmd-navy font-serif font-bold text-base mb-1">{item.title}</h3>
                                        <p className="text-gray-500 font-light text-sm whitespace-pre-line">{item.info}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Map */}
                            <div className="reveal-child rounded-xl overflow-hidden border border-border-subtle shadow-sm" style={{ height: 200 }}>
                                <iframe
                                    title="Braj Mohan Group Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiTiA4NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="reveal">
                            <div className="relative p-8 md:p-10 rounded-2xl bg-surface-warm border border-border-subtle shadow-sm">
                                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-bmd-gold/40 to-transparent rounded-full" />
                                <h3 className="text-2xl font-serif font-bold text-bmd-navy mb-2">Send an Inquiry</h3>
                                <p className="text-gray-400 text-sm mb-8">We'll get back to you within 24 hours</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Construction",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await submitInquiry(formData);
            const whatsappMessage = `Hi Braj Mohan Group, I am ${formData.name}. ${formData.service ? `Interested in: ${formData.service}.` : ''} ${formData.message ? `Message: ${formData.message}` : ''}`;
            const url = `https://wa.me/919031074805?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(url, "_blank");
            setFormData({ name: "", phone: "", email: "", service: "Construction", message: "" });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = "w-full pl-11 pr-4 py-3 rounded-xl border border-border-subtle bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bmd-gold/30 focus:border-bmd-gold/50 transition-all text-sm";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="text" placeholder="Your Name" className={inputClass} value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })} required disabled={isSubmitting} />
                </div>
                <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })} required disabled={isSubmitting} />
                </div>
            </div>
            <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="email" placeholder="your@email.com" className={inputClass} value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })} disabled={isSubmitting} />
            </div>
            <div className="relative">
                <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <select className={inputClass} value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })} disabled={isSubmitting}>
                    <option>Construction</option>
                    <option>Renewable Power</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="relative">
                <MessageSquare className="absolute left-3.5 top-4 text-gray-400" size={16} />
                <textarea rows={4} placeholder="Tell us about your project..."
                    className={`${inputClass} pl-11 resize-none`} value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })} disabled={isSubmitting} />
            </div>
            <button type="submit" disabled={isSubmitting}
                className="w-full bg-bmd-navy text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-bmd-gold hover:text-bmd-navy transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                    <><Send size={16} /> Send via WhatsApp</>
                )}
            </button>
        </form>
    );
}
