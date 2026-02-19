"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import { useState, FormEvent } from "react";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Invalid phone number (10 digits required)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Format message for WhatsApp
        const message = `*Company Profile Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `${formData.company ? `*Company:* ${formData.company}\n` : ''}` +
            `${formData.message ? `*Message:* ${formData.message}\n` : ''}\n` +
            `Please send me the complete company profile.`;

        // WhatsApp number (replace with actual company WhatsApp number)
        const whatsappNumber = "919031074805"; // Format: country code + number (no + or spaces)

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
        });
        setIsSubmitting(false);

        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto">
                        <motion.div
                            className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden border border-bmd-navy/10 my-auto max-h-[95vh] sm:max-h-[90vh] flex flex-col"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                        >
                            {/* Header */}
                            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 sm:p-6 text-white flex-shrink-0">
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-2 pr-8">Get Company Profile</h2>
                                <p className="text-white/90 text-xs sm:text-sm pr-8">Fill in your details and we'll send you our complete company profile via WhatsApp</p>
                            </div>

                            {/* Form - Scrollable */}
                            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto flex-1">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-bmd-navy mb-1.5 sm:mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-bmd-navy mb-1.5 sm:mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-bmd-navy mb-1.5 sm:mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                                            placeholder="9876543210"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>

                                {/* Company Field (Optional) */}
                                <div>
                                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-bmd-navy mb-1.5 sm:mb-2">
                                        Company Name
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            placeholder="Your company (optional)"
                                        />
                                    </div>
                                </div>

                                {/* Message Field (Optional) */}
                                <div>
                                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-bmd-navy mb-1.5 sm:mb-2">
                                        Message / Requirements
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={16} />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                                            placeholder="Any specific requirements? (optional)"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Opening WhatsApp...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                                            Send via WhatsApp
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-2 sm:mt-4">
                                    We respect your privacy. Your information will only be used to send you the company profile.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
