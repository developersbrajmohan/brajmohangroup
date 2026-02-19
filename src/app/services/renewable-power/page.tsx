"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Sun, Zap, Shield, CheckCircle, ArrowRight, TrendingUp, Banknote, IndianRupee,
    Home, Building2, Factory, Star, ChevronRight
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const products = [
    {
        name: "Poly-crystalline Solar Panel",
        wattage: "300W – 400W",
        efficiency: "16–18%",
        warranty: "25 Years Performance",
        price: "₹8,500 – ₹12,000",
        bestFor: "Residential",
        tag: "Most Popular",
        tagGradient: "from-yellow-400 to-amber-500",
        gradient: "from-yellow-400 to-amber-600",
        bg: "from-yellow-50 to-amber-50",
        icon: Home,
        features: ["Low cost solution", "Performs well in indirect sunlight", "Ideal for budget-conscious homes", "Easy installation"],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Mono-PERC Solar Panel",
        wattage: "400W – 550W",
        efficiency: "20–22%",
        warranty: "25 Years Performance",
        price: "₹14,000 – ₹22,000",
        bestFor: "Commercial / Semi-Urban",
        tag: "Best Efficiency",
        tagGradient: "from-blue-500 to-indigo-600",
        gradient: "from-blue-500 to-indigo-600",
        bg: "from-blue-50 to-indigo-50",
        icon: Building2,
        features: ["Higher power in small area", "Better low-light performance", "Ideal for commercial rooftops", "Tier-1 grade panels"],
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Bifacial Solar Module",
        wattage: "500W – 700W",
        efficiency: "22–24%",
        warranty: "30 Years Performance",
        price: "₹25,000 – ₹42,000",
        bestFor: "Industrial / Large Scale",
        tag: "Premium Grade",
        tagGradient: "from-emerald-500 to-teal-600",
        gradient: "from-emerald-500 to-teal-600",
        bg: "from-emerald-50 to-teal-50",
        icon: Factory,
        features: ["Captures light from both sides", "Maximum power generation", "Ideal for ground-mounted plants", "Industrial standard"],
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
    },
];

const inverters = [
    { name: "String Inverter", brand: "Havells / Solis", rating: "3kW – 10kW", price: "₹12,000 – ₹45,000", gradient: "from-purple-500 to-pink-600" },
    { name: "Micro Inverter", brand: "Enphase / ABB", rating: "250W – 1500W", price: "₹3,500 – ₹18,000", gradient: "from-indigo-500 to-purple-600" },
    { name: "Hybrid Inverter", brand: "Luminous / Goodwe", rating: "5kW – 20kW", price: "₹35,000 – ₹1,20,000", gradient: "from-cyan-500 to-blue-600" },
];

const installations = [
    { step: "01", title: "Free Site Survey", description: "Our certified engineers visit your site, assess shadow zones, roof structure, and energy consumption to design the optimal system.", icon: Sun, gradient: "from-yellow-400 to-amber-500" },
    { step: "02", title: "Custom System Design", description: "We design a tailored solar layout with 3D CAD models, specifying panel count, inverter type, wiring, and mounting structure.", icon: Zap, gradient: "from-orange-400 to-red-500" },
    { step: "03", title: "Government Approvals", description: "We handle all DISCOMS applications, net-metering registrations, and PM Surya Ghar Yojana subsidy paperwork end-to-end.", icon: Shield, gradient: "from-blue-400 to-indigo-500" },
    { step: "04", title: "Professional Installation", description: "MNRE-certified technicians install your system with precision. Typical residential installation is completed in 1–2 days.", icon: Home, gradient: "from-emerald-400 to-teal-500" },
    { step: "05", title: "Net Meter Connection", description: "We connect your system to the grid with a net meter so you earn credits for excess electricity exported back.", icon: TrendingUp, gradient: "from-purple-400 to-pink-500" },
    { step: "06", title: "Remote Monitoring", description: "Our mobile app lets you track real-time power generation, consumption, savings, and CO2 offset from anywhere.", icon: Star, gradient: "from-rose-400 to-red-500" },
];

const subsidies = [
    { capacity: "Up to 2 kW", subsidy: "₹30,000 per kW", amount: "₹60,000", highlight: false, gradient: "from-amber-400 to-orange-500" },
    { capacity: "2 kW to 3 kW", subsidy: "₹18,000 per kW (extra)", amount: "₹80,000 total", highlight: true, gradient: "from-emerald-400 to-teal-500" },
    { capacity: "Above 3 kW", subsidy: "Fixed upper limit", amount: "₹94,822 max", highlight: false, gradient: "from-blue-400 to-indigo-500" },
];

const roiData = [
    { year: "Year 1", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹21,000", highlight: false },
    { year: "Year 2", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹42,000", highlight: false },
    { year: "Year 3", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹63,000", highlight: false },
    { year: "Year 4", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹84,000+", highlight: true },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RenewablePowerPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Renewable Power"
                subtitle="Solar Solutions for a Sustainable Tomorrow"
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            />

            {/* Intro */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Authorized Partner · PM Surya Ghar Yojana
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6 leading-tight">
                                Powering Bihar with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    Clean Solar Energy
                                </span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-light mb-6">
                                As an MNRE-empanelled installer and an official implementation partner of the PM Surya Ghar: Muft Bijli Yojana,
                                Braj Mohan Group brings world-class solar infrastructure to homes, offices, and industries across Bihar and beyond.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { value: "5000+", label: "Installations" },
                                    { value: "2 MW+", label: "Capacity Deployed" },
                                    { value: "25yr", label: "Warranty" },
                                    { value: "100%", label: "Subsidy Assistance" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-4 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-md text-center"
                                    >
                                        <span className="text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600">
                                            {stat.value}
                                        </span>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                                    Get Free Solar Assessment <ArrowRight size={18} />
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl blur-2xl opacity-15" />
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/50 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2073&auto=format&fit=crop"
                                    alt="Solar Installation"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── PRODUCT CATALOG ── */}
            <SectionWrapper className="relative overflow-hidden" id="products">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-14">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Solar Product Catalog
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Our Solar Products
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 mt-4 max-w-2xl mx-auto font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            We supply and install only Tier-1, BIS-certified solar panels and inverters from globally trusted manufacturers.
                        </motion.p>
                    </div>

                    {/* Solar Panel Cards */}
                    <h3 className="text-xl font-serif font-bold text-bmd-navy mb-6 flex items-center gap-2">
                        <Sun className="text-amber-500" size={22} /> Solar Panels
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                        {products.map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Tag */}
                                <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r ${product.tagGradient} text-white text-xs font-bold shadow-lg`}>
                                    {product.tag}
                                </div>

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-b ${product.gradient} opacity-40 z-10`} />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Top Accent */}
                                <div className={`h-1 bg-gradient-to-r ${product.gradient}`} />

                                {/* Details */}
                                <div className="p-6">
                                    <h4 className="text-xl font-serif font-bold text-bmd-navy mb-1">{product.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">For {product.bestFor}</p>

                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${product.bg} border border-amber-100`}>
                                            <p className="text-xs text-gray-500 mb-1">Wattage</p>
                                            <p className="text-sm font-bold text-gray-800">{product.wattage}</p>
                                        </div>
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${product.bg} border border-amber-100`}>
                                            <p className="text-xs text-gray-500 mb-1">Efficiency</p>
                                            <p className="text-sm font-bold text-gray-800">{product.efficiency}</p>
                                        </div>
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${product.bg} border border-amber-100`}>
                                            <p className="text-xs text-gray-500 mb-1">Warranty</p>
                                            <p className="text-sm font-bold text-gray-800">{product.warranty}</p>
                                        </div>
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${product.bg} border border-amber-100`}>
                                            <p className="text-xs text-gray-500 mb-1">Price / Panel</p>
                                            <p className="text-sm font-bold text-emerald-700">{product.price}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {product.features.map((f, fi) => (
                                            <div key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle size={14} className={`text-transparent`} style={{ color: i === 0 ? '#f59e0b' : i === 1 ? '#6366f1' : '#10b981' }} />
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact">
                                        <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}>
                                            Request Quote <ChevronRight size={16} />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Inverters */}
                    <h3 className="text-xl font-serif font-bold text-bmd-navy mb-6 flex items-center gap-2">
                        <Zap className="text-indigo-500" size={22} /> Solar Inverters
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {inverters.map((inv, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${inv.gradient} rounded-t-2xl`} />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${inv.gradient} flex items-center justify-center`}>
                                        <Zap className="text-white" size={18} />
                                    </div>
                                    <h4 className="font-serif font-bold text-bmd-navy">{inv.name}</h4>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between"><span className="text-gray-400">Brand</span><span className="font-medium text-gray-700">{inv.brand}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-400">Rating</span><span className="font-medium text-gray-700">{inv.rating}</span></div>
                                    <div className={`flex justify-between mt-3 pt-3 border-t border-gray-100`}>
                                        <span className="text-gray-400">Price Range</span>
                                        <span className="font-bold text-emerald-700">{inv.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── INSTALLATION PROCESS ── */}
            <SectionWrapper className="relative overflow-hidden" id="process">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-14">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            How It Works
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Installation Process
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {installations.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="relative p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-t-2xl`} />
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className="text-white" size={26} />
                                    </div>
                                    <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} opacity-30`}>
                                        {step.step}
                                    </span>
                                </div>
                                <h3 className="text-lg font-serif font-bold text-bmd-navy mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── SUBSIDIES ── */}
            <SectionWrapper className="relative overflow-hidden" id="subsidies">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Government Scheme
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6">
                                PM Surya Ghar{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Subsidy Scheme
                                </span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light">
                                Under the <strong>PM Surya Ghar: Muft Bijli Yojana</strong>, the Government of India offers attractive subsidies for rooftop solar installations
                                at residential properties. As an authorized partner, Braj Mohan Group handles the entire application process for you — completely free.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Subsidy credited directly to your bank account",
                                    "We handle all documentation & applications",
                                    "Approval in 4–6 weeks after installation",
                                    "Additional state government benefits in Bihar",
                                    "Free 300 units/month electricity (post subsidy)",
                                ].map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle size={14} className="text-white" />
                                        </div>
                                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-serif font-bold text-bmd-navy mb-6">Central Subsidy Slab</h3>
                            {subsidies.map((slab, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative p-6 rounded-2xl border transition-all duration-300 ${slab.highlight
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent shadow-xl'
                                        : 'bg-white/70 backdrop-blur-xl border-white/50 shadow-lg'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className={`text-sm font-semibold mb-1 ${slab.highlight ? 'text-white/80' : 'text-gray-500'}`}>System Size</p>
                                            <p className={`text-xl font-serif font-bold ${slab.highlight ? 'text-white' : 'text-bmd-navy'}`}>{slab.capacity}</p>
                                            <p className={`text-sm mt-1 ${slab.highlight ? 'text-white/80' : 'text-gray-600'}`}>{slab.subsidy}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-sm font-semibold mb-1 ${slab.highlight ? 'text-white/80' : 'text-gray-500'}`}>Subsidy Amount</p>
                                            <p className={`text-2xl font-serif font-black ${slab.highlight ? 'text-white' : 'text-emerald-600'}`}>{slab.amount}</p>
                                            {slab.highlight && <span className="text-xs text-white/80 bg-white/20 px-2 py-0.5 rounded-full">Most Popular</span>}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="relative p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200">
                                <p className="text-sm text-amber-800 font-medium">
                                    💡 <strong>Additional:</strong> State government of Bihar offers up to ₹15,000 extra subsidy for BPL/rural households.
                                    Ask our team for details.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── BANK LOANS / EMI ── */}
            <SectionWrapper className="relative overflow-hidden" id="loans">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-14">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Financing Options
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-6xl font-serif font-bold text-bmd-navy"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Easy EMI & Bank Loans
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 mt-4 max-w-2xl mx-auto font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Going solar doesn't require a huge upfront cost. Multiple banks and NBFCs offer solar-specific loans with attractive rates.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            { bank: "State Bank of India", scheme: "PM Surya Ghar Loan", rate: "6.75% p.a.", tenure: "Up to 10 years", gradient: "from-blue-500 to-indigo-600" },
                            { bank: "Bank of Baroda", scheme: "Solar Power Loan", rate: "7.25% p.a.", tenure: "Up to 7 years", gradient: "from-purple-500 to-pink-600" },
                            { bank: "IREDA / NBFCs", scheme: "Green Energy Finance", rate: "8–10% p.a.", tenure: "Up to 15 years", gradient: "from-emerald-500 to-teal-600" },
                        ].map((loan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="relative p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${loan.gradient} rounded-t-2xl`} />
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${loan.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                    <Banknote className="text-white" size={22} />
                                </div>
                                <h4 className="font-serif font-bold text-bmd-navy text-lg mb-1">{loan.bank}</h4>
                                <p className="text-sm text-gray-500 mb-4">{loan.scheme}</p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-gray-500">Interest Rate</span>
                                        <span className="font-bold text-emerald-700">{loan.rate}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-gray-500">Repayment</span>
                                        <span className="font-bold text-gray-700">{loan.tenure}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* EMI Example */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <IndianRupee className="w-8 h-8" />
                                <h3 className="text-2xl font-serif font-bold">Example EMI Calculation</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: "System Cost (3kW)", value: "₹1,50,000" },
                                    { label: "Central Subsidy", value: "– ₹94,822" },
                                    { label: "Net Cost", value: "₹55,178" },
                                    { label: "EMI @ 7% / 5yr", value: "≈ ₹1,090/mo" },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                        <p className="text-white/70 text-xs mb-1">{item.label}</p>
                                        <p className="text-white font-bold text-lg">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/60 text-xs mt-4">* Approximate values. Actual EMI may vary based on bank and credit profile. We help you compare and apply.</p>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* ── ROI SECTION ── */}
            <SectionWrapper className="relative overflow-hidden" id="roi">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 text-sm tracking-[0.2em] uppercase mb-4 font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Return on Investment
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6">
                                Break Even in{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    4 Years
                                </span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light">
                                After factoring in the central subsidy, a typical 3kW residential solar system costs around ₹55,000–₹75,000 net.
                                With average annual electricity savings of <strong>₹18,000–₹24,000</strong>, most households recover their investment
                                within just <strong>3.5 to 4 years</strong> — and then enjoy <em>free electricity for 20+ more years.</em>
                            </p>
                            <div className="space-y-3">
                                {[
                                    { label: "Average Monthly Savings", value: "₹1,500 – ₹2,000" },
                                    { label: "Annual Savings", value: "₹18,000 – ₹24,000" },
                                    { label: "Total System Life", value: "25+ years" },
                                    { label: "Net 25-Year Benefit", value: "₹4.5 Lakh+" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-between p-4 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-sm"
                                    >
                                        <span className="text-gray-600 text-sm">{item.label}</span>
                                        <span className="font-bold text-emerald-700 text-sm">{item.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ROI Chart */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-3xl" />
                                <h3 className="text-xl font-serif font-bold text-bmd-navy mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-emerald-600" size={22} />
                                    Cumulative Savings (3kW System)
                                </h3>
                                <div className="space-y-4">
                                    {roiData.map((row, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`relative p-5 rounded-2xl border transition-all duration-300 ${row.highlight
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent shadow-xl'
                                                : 'bg-gray-50 border-gray-100'
                                                }`}
                                        >
                                            {row.highlight && (
                                                <span className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold shadow">
                                                    ✓ Break-Even Point
                                                </span>
                                            )}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className={`font-serif font-bold text-lg ${row.highlight ? 'text-white' : 'text-bmd-navy'}`}>{row.year}</p>
                                                    <p className={`text-xs ${row.highlight ? 'text-white/70' : 'text-gray-500'}`}>Annual: {row.savings}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className={`text-xs mb-1 ${row.highlight ? 'text-white/70' : 'text-gray-500'}`}>Total Saved</p>
                                                    <p className={`text-2xl font-serif font-black ${row.highlight ? 'text-white' : 'text-emerald-700'}`}>{row.cumulativeSavings}</p>
                                                </div>
                                            </div>
                                            {/* Progress bar */}
                                            <div className="mt-3 h-2 rounded-full bg-black/10 overflow-hidden">
                                                <motion.div
                                                    className={`h-full rounded-full ${row.highlight ? 'bg-white' : 'bg-gradient-to-r from-emerald-400 to-teal-500'}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(i + 1) * 25}%` }}
                                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-4">*Based on avg. electricity rate of ₹6/unit and 4 peak sun hours/day</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── CTA ── */}
            <SectionWrapper className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Ready to Go Solar?
                        </h2>
                        <p className="text-white/80 text-xl font-light max-w-2xl mx-auto mb-10">
                            Book a free site assessment and get a custom solar proposal with exact savings, subsidy, and EMI details — no obligation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-white/90 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                                    <Zap size={18} /> Book Free Assessment
                                </button>
                            </Link>
                            <a href="tel:+919031074805">
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                                    📞 Call: +91 90310 74805
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </main>
    );
}
