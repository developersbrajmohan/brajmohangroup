"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building2, Sparkles, MessageCircle, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { submitInquiry } from "@/actions/submit-inquiry";

const contactItems = [
    { icon: MapPin, title: "Visit Us", info: "8H/7 Bahadurpur Housing Colony,\nNew Bypass Road, Patna - 800026", gradient: "from-indigo-500 to-purple-600" },
    { icon: Phone, title: "Call Us", info: "+91 90310 74805", gradient: "from-purple-500 to-pink-600" },
    { icon: Mail, title: "Email Us", info: "info@brajmohangroup.com", gradient: "from-pink-500 to-rose-600" },
    { icon: Clock, title: "Opening Hours", info: "Mon - Sat: 10:00 AM - 7:00 PM\nSun: Closed", gradient: "from-orange-500 to-yellow-600" },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ── VIBRANT LIGHT HERO ── */}
            <section className="relative min-h-[65vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">

                {/* Animated gradient blobs */}
                <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-gradient-to-br from-indigo-300/50 to-purple-400/50 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-pink-300/50 to-rose-400/50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gradient-to-br from-violet-200/40 to-cyan-200/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob animation-delay-4000" />

                {/* Polka-dot pattern overlay */}
                <div className="absolute inset-0 opacity-25"
                    style={{ backgroundImage: 'radial-gradient(circle, #818cf855 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                {/* Floating icon bubbles — pushed below navbar */}
                <motion.div
                    animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-[8%] w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl flex items-center justify-center"
                >
                    <Phone className="text-white" size={22} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 16, 0], rotate: [0, -7, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="absolute top-36 right-[10%] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-2xl flex items-center justify-center p-3"
                >
                    <Mail className="text-white" size={20} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-24 left-[12%] rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl flex items-center justify-center p-3"
                >
                    <MessageCircle className="text-white" size={20} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute bottom-20 right-[14%] w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl flex items-center justify-center"
                >
                    <HeadphonesIcon className="text-white" size={22} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute top-[40%] left-[4%] w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 shadow-lg flex items-center justify-center"
                >
                    <MapPin className="text-white" size={16} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-2/3 right-[5%] w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center"
                >
                    <Clock className="text-white" size={16} />
                </motion.div>

                {/* Main content — no badge */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28 pb-12">

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-5 leading-tight"
                    >
                        <span className="text-bmd-navy">Let's Build</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600">
                            Something
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500">
                            Great Together
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-gray-500 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed"
                    >
                        Have a project in mind? Drop us a line and our expert team will reach out faster than you expect.
                    </motion.p>

                    {/* Premium action buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {/* Call — premium indigo with glow */}
                        <a href="tel:+919031074805"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/20">
                            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone size={16} />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] text-indigo-200 uppercase tracking-wider leading-none">Call Us</span>
                                <span className="block text-sm font-bold">+91 90310 74805</span>
                            </div>
                        </a>

                        {/* WhatsApp — real green with official icon */}
                        <a href="https://wa.me/919031074805" target="_blank" rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white text-sm font-bold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/20"
                            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] text-green-100 uppercase tracking-wider leading-none">Chat on</span>
                                <span className="block text-sm font-bold">WhatsApp</span>
                            </div>
                        </a>

                        {/* Email — premium rose/pink */}
                        <a href="mailto:info@brajmohangroup.com"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-bold shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/50 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/20">
                            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail size={16} />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] text-rose-100 uppercase tracking-wider leading-none">Email Us</span>
                                <span className="block text-sm font-bold">Get in Touch</span>
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Bottom fade into white */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* ── CONTACT INFO + FORM ── */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Reach Out
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Head Office
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info Cards */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {contactItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-5 group"
                                >
                                    <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} rounded-l-2xl`} />
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-bmd-navy font-serif font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-600 font-light whitespace-pre-line">{item.info}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Map */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden border border-white/50 shadow-lg"
                                style={{ height: 200 }}
                            >
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
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl" />
                                <h3 className="text-2xl font-serif font-bold text-bmd-navy mb-2">Send an Inquiry</h3>
                                <p className="text-gray-500 text-sm mb-8">We'll get back to you within 24 hours</p>
                                <ContactForm />
                            </div>
                        </motion.div>
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

    const inputClass = "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-sm";

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
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                    <><Send size={16} /> Send via WhatsApp</>
                )}
            </button>
        </form>
    );
}
