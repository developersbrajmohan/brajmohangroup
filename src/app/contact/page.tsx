"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import MagneticButton from "@/components/ui/magnetic-button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { submitInquiry } from "@/actions/submit-inquiry";

export default function ContactPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <PageHeader
                title="Get in Touch"
                subtitle="Start Your Journey With Us"
                image="https://images.unsplash.com/photo-1423666639041-f14d70da4c40?q=80&w=2070&auto=format&fit=crop"
            />

            <SectionWrapper>
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-serif text-white mb-8">Head Office</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bmd-navy-light border border-white/10 flex items-center justify-center rounded-sm text-bmd-gold shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-400 font-light">
                                        8H/7 Bahadurpur Housing Colony,<br />
                                        New Bypass Road, Patna - 800026
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bmd-navy-light border border-white/10 flex items-center justify-center rounded-sm text-bmd-gold shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-400 font-light">+91 90310 74805</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bmd-navy-light border border-white/10 flex items-center justify-center rounded-sm text-bmd-gold shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif text-lg mb-1">Email Us</h3>
                                    <p className="text-gray-400 font-light">info@brajmohangroup.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bmd-navy-light border border-white/10 flex items-center justify-center rounded-sm text-bmd-gold shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif text-lg mb-1">Opening Hours</h3>
                                    <p className="text-gray-400 font-light">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                    <p className="text-gray-400 font-light">Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    {/* Contact Form */}
                    <div className="bg-bmd-navy-light p-8 md:p-10 border border-white/5 rounded-sm">
                        <h3 className="text-2xl font-serif text-white mb-6">Send an Inquiry</h3>
                        <ContactForm />
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
        service: "Real Estate & Infra",
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

            setFormData({ name: "", phone: "", email: "", service: "Real Estate & Infra", message: "" });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                    <input
                        type="text"
                        className="w-full bg-bmd-navy border border-white/10 p-3 text-white focus:border-bmd-gold outline-none transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Phone</label>
                    <input
                        type="tel"
                        className="w-full bg-bmd-navy border border-white/10 p-3 text-white focus:border-bmd-gold outline-none transition-colors"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                <input
                    type="email"
                    className="w-full bg-bmd-navy border border-white/10 p-3 text-white focus:border-bmd-gold outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Service Interest</label>
                <select
                    className="w-full bg-bmd-navy border border-white/10 p-3 text-white focus:border-bmd-gold outline-none transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    disabled={isSubmitting}
                >
                    <option>Real Estate & Infra</option>
                    <option>Civil Construction</option>
                    <option>Interior Design</option>
                    <option>Solar Energy</option>
                    <option>Manpower & Security</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                <textarea
                    rows={4}
                    className="w-full bg-bmd-navy border border-white/10 p-3 text-white focus:border-bmd-gold outline-none transition-colors"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                />
            </div>

            <MagneticButton
                className={`w-full justify-center text-bmd-navy border-transparent mt-4 flex items-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-bmd-gold hover:bg-white hover:text-bmd-navy'}`}
            >
                {isSubmitting ? (
                    <>
                        <div className="w-4 h-4 border-2 border-bmd-navy/30 border-t-bmd-navy rounded-full animate-spin" />
                        Processing...
                    </>
                ) : (
                    "Send Message"
                )}
            </MagneticButton>
        </form>
}
