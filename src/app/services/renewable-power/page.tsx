"use client";

import PageHeader from "@/components/ui/page-header";
import SectionWrapper from "@/components/ui/section-wrapper";
import Image from "next/image";
import Link from "next/link";
import {
    Sun, Zap, Shield, CheckCircle, ArrowRight, TrendingUp, Banknote, IndianRupee,
    Home, Building2, Factory, Star, ChevronRight
} from "lucide-react";
import { useRevealAll } from "@/hooks/use-reveal";

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
        icon: Factory,
        features: ["Captures light from both sides", "Maximum power generation", "Ideal for ground-mounted plants", "Industrial standard"],
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
    },
];

const inverters = [
    { name: "String Inverter", brand: "Havells / Solis", rating: "3kW – 10kW", price: "₹12,000 – ₹45,000" },
    { name: "Micro Inverter", brand: "Enphase / ABB", rating: "250W – 1500W", price: "₹3,500 – ₹18,000" },
    { name: "Hybrid Inverter", brand: "Luminous / Goodwe", rating: "5kW – 20kW", price: "₹35,000 – ₹1,20,000" },
];

const installations = [
    { step: "01", title: "Free Site Survey", description: "Our certified engineers visit your site, assess shadow zones, roof structure, and energy consumption to design the optimal system.", icon: Sun },
    { step: "02", title: "Custom System Design", description: "We design a tailored solar layout with 3D CAD models, specifying panel count, inverter type, wiring, and mounting structure.", icon: Zap },
    { step: "03", title: "Government Approvals", description: "We handle all DISCOMS applications, net-metering registrations, and PM Surya Ghar Yojana subsidy paperwork end-to-end.", icon: Shield },
    { step: "04", title: "Professional Installation", description: "MNRE-certified technicians install your system with precision. Typical residential installation is completed in 1–2 days.", icon: Home },
    { step: "05", title: "Net Meter Connection", description: "We connect your system to the grid with a net meter so you earn credits for excess electricity exported back.", icon: TrendingUp },
    { step: "06", title: "Remote Monitoring", description: "Our mobile app lets you track real-time power generation, consumption, savings, and CO2 offset from anywhere.", icon: Star },
];

const subsidies = [
    { capacity: "Up to 2 kW", subsidy: "₹30,000 per kW", amount: "₹60,000", highlight: false },
    { capacity: "2 kW to 3 kW", subsidy: "₹18,000 per kW (extra)", amount: "₹80,000 total", highlight: true },
    { capacity: "Above 3 kW", subsidy: "Fixed upper limit", amount: "₹94,822 max", highlight: false },
];

const roiData = [
    { year: "Year 1", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹21,000", highlight: false },
    { year: "Year 2", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹42,000", highlight: false },
    { year: "Year 3", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹63,000", highlight: false },
    { year: "Year 4", savings: "₹18,000 – ₹24,000", cumulativeSavings: "₹84,000+", highlight: true },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RenewablePowerPage() {
    const introRef = useRevealAll();
    const productsRef = useRevealAll();
    const processRef = useRevealAll();
    const subsidyRef = useRevealAll();
    const loanRef = useRevealAll();
    const roiRef = useRevealAll();
    const ctaRef = useRevealAll();

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Renewable Power"
                subtitle="Solar Solutions for a Sustainable Tomorrow"
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            />

            {/* Intro */}
            <SectionWrapper className="bg-surface-warm">
                <div ref={introRef} className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                                Authorized Partner · PM Surya Ghar Yojana
                            </span>
                            <h2 className="reveal text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6 leading-tight">
                                Powering Bihar with{" "}
                                <span className="text-bmd-gold">Clean Solar Energy</span>
                            </h2>
                            <p className="reveal text-gray-600 leading-relaxed font-light mb-6">
                                As an MNRE-empanelled installer and an official implementation partner of the PM Surya Ghar: Muft Bijli Yojana,
                                Braj Mohan Group brings world-class solar infrastructure to homes, offices, and industries across Bihar and beyond.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8 reveal-stagger">
                                {[
                                    { value: "5000+", label: "Installations" },
                                    { value: "2 MW+", label: "Capacity Deployed" },
                                    { value: "25yr", label: "Warranty" },
                                    { value: "100%", label: "Subsidy Assistance" },
                                ].map((stat, i) => (
                                    <div key={i} className="reveal-child p-4 rounded-xl bg-white border border-border-subtle shadow-sm text-center">
                                        <span className="text-2xl font-serif font-black text-bmd-gold">{stat.value}</span>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="reveal">
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-bmd-navy text-white font-bold rounded-xl hover:bg-bmd-gold hover:text-bmd-navy transition-all duration-300 flex items-center gap-2">
                                        Get Free Solar Assessment <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="reveal">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2073&auto=format&fit=crop"
                                    alt="Solar Installation"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── PRODUCT CATALOG ── */}
            <SectionWrapper className="bg-white" id="products">
                <div ref={productsRef} className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            Solar Product Catalog
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl font-serif font-bold text-bmd-navy">Our Solar Products</h2>
                        <p className="reveal text-gray-500 mt-4 max-w-2xl mx-auto font-light">
                            We supply and install only Tier-1, BIS-certified solar panels and inverters from globally trusted manufacturers.
                        </p>
                    </div>

                    {/* Solar Panel Cards */}
                    <h3 className="reveal text-lg font-serif font-bold text-bmd-navy mb-6 flex items-center gap-2">
                        <Sun className="text-bmd-gold" size={20} /> Solar Panels
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 reveal-stagger">
                        {products.map((product, i) => (
                            <div
                                key={i}
                                className="reveal-child group rounded-2xl overflow-hidden bg-white border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-lg transition-all duration-500"
                            >
                                {/* Tag */}
                                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-bmd-navy text-white text-xs font-bold shadow-sm">
                                    {product.tag}
                                </div>

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Details */}
                                <div className="p-6">
                                    <h4 className="text-lg font-serif font-bold text-bmd-navy mb-1">{product.name}</h4>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">For {product.bestFor}</p>

                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        {[
                                            { label: "Wattage", value: product.wattage },
                                            { label: "Efficiency", value: product.efficiency },
                                            { label: "Warranty", value: product.warranty },
                                            { label: "Price / Panel", value: product.price },
                                        ].map((spec, si) => (
                                            <div key={si} className="p-3 rounded-xl bg-surface-warm border border-border-subtle">
                                                <p className="text-xs text-gray-400 mb-1">{spec.label}</p>
                                                <p className={`text-sm font-bold ${si === 3 ? 'text-bmd-gold' : 'text-gray-800'}`}>{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {product.features.map((f, fi) => (
                                            <div key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle size={14} className="text-bmd-gold shrink-0" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact">
                                        <button className="w-full py-3 rounded-xl bg-bmd-navy text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-bmd-gold hover:text-bmd-navy transition-all duration-300">
                                            Request Quote <ChevronRight size={16} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Inverters */}
                    <h3 className="reveal text-lg font-serif font-bold text-bmd-navy mb-6 flex items-center gap-2">
                        <Zap className="text-bmd-gold" size={20} /> Solar Inverters
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 reveal-stagger">
                        {inverters.map((inv, i) => (
                            <div
                                key={i}
                                className="reveal-child relative p-6 rounded-2xl bg-surface-warm border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-bmd-navy flex items-center justify-center">
                                        <Zap className="text-white" size={18} />
                                    </div>
                                    <h4 className="font-serif font-bold text-bmd-navy">{inv.name}</h4>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between"><span className="text-gray-400">Brand</span><span className="font-medium text-gray-700">{inv.brand}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-400">Rating</span><span className="font-medium text-gray-700">{inv.rating}</span></div>
                                    <div className="flex justify-between mt-3 pt-3 border-t border-border-subtle">
                                        <span className="text-gray-400">Price Range</span>
                                        <span className="font-bold text-bmd-gold">{inv.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── INSTALLATION PROCESS ── */}
            <SectionWrapper className="bg-surface-warm" id="process">
                <div ref={processRef} className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            How It Works
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl font-serif font-bold text-bmd-navy">Installation Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
                        {installations.map((step, i) => (
                            <div
                                key={i}
                                className="reveal-child relative p-7 rounded-2xl bg-white border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-md transition-all duration-500 group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-bmd-navy flex items-center justify-center group-hover:bg-bmd-gold transition-colors duration-300 shadow-sm">
                                        <step.icon className="text-white" size={22} />
                                    </div>
                                    <span className="text-3xl font-black text-bmd-gold/15 font-serif">{step.step}</span>
                                </div>
                                <h3 className="text-base font-serif font-bold text-bmd-navy mb-3">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── SUBSIDIES ── */}
            <SectionWrapper className="bg-white" id="subsidies">
                <div ref={subsidyRef} className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                                Government Scheme
                            </span>
                            <h2 className="reveal text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6">
                                PM Surya Ghar <span className="text-bmd-gold">Subsidy Scheme</span>
                            </h2>
                            <p className="reveal text-gray-600 leading-relaxed mb-8 font-light">
                                Under the <strong>PM Surya Ghar: Muft Bijli Yojana</strong>, the Government of India offers attractive subsidies for rooftop solar installations
                                at residential properties. As an authorized partner, Braj Mohan Group handles the entire application process for you — completely free.
                            </p>
                            <div className="space-y-4 reveal-stagger">
                                {[
                                    "Subsidy credited directly to your bank account",
                                    "We handle all documentation & applications",
                                    "Approval in 4–6 weeks after installation",
                                    "Additional state government benefits in Bihar",
                                    "Free 300 units/month electricity (post subsidy)",
                                ].map((point, i) => (
                                    <div key={i} className="reveal-child flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-bmd-navy flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle size={12} className="text-bmd-gold" />
                                        </div>
                                        <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 reveal-stagger">
                            <h3 className="reveal-child text-lg font-serif font-bold text-bmd-navy mb-4">Central Subsidy Slab</h3>
                            {subsidies.map((slab, i) => (
                                <div
                                    key={i}
                                    className={`reveal-child relative p-6 rounded-2xl border transition-all duration-300 ${slab.highlight
                                        ? 'bg-bmd-navy text-white border-bmd-navy shadow-lg'
                                        : 'bg-surface-warm border-border-subtle shadow-sm'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className={`text-sm font-semibold mb-1 ${slab.highlight ? 'text-white/70' : 'text-gray-400'}`}>System Size</p>
                                            <p className={`text-xl font-serif font-bold ${slab.highlight ? 'text-white' : 'text-bmd-navy'}`}>{slab.capacity}</p>
                                            <p className={`text-sm mt-1 ${slab.highlight ? 'text-white/70' : 'text-gray-500'}`}>{slab.subsidy}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-sm font-semibold mb-1 ${slab.highlight ? 'text-white/70' : 'text-gray-400'}`}>Subsidy Amount</p>
                                            <p className={`text-2xl font-serif font-black ${slab.highlight ? 'text-bmd-gold' : 'text-bmd-gold'}`}>{slab.amount}</p>
                                            {slab.highlight && <span className="text-xs text-bmd-gold/80 bg-bmd-gold/10 px-2 py-0.5 rounded-full">Most Popular</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="reveal-child relative p-5 rounded-2xl bg-bmd-gold/5 border border-bmd-gold/20">
                                <p className="text-sm text-gray-700 font-medium">
                                    💡 <strong>Additional:</strong> State government of Bihar offers up to ₹15,000 extra subsidy for BPL/rural households.
                                    Ask our team for details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── BANK LOANS / EMI ── */}
            <SectionWrapper className="bg-surface-warm" id="loans">
                <div ref={loanRef} className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                            Financing Options
                        </span>
                        <h2 className="reveal text-4xl md:text-5xl font-serif font-bold text-bmd-navy">Easy EMI & Bank Loans</h2>
                        <p className="reveal text-gray-500 mt-4 max-w-2xl mx-auto font-light">
                            Going solar doesn't require a huge upfront cost. Multiple banks and NBFCs offer solar-specific loans with attractive rates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 reveal-stagger">
                        {[
                            { bank: "State Bank of India", scheme: "PM Surya Ghar Loan", rate: "6.75% p.a.", tenure: "Up to 10 years" },
                            { bank: "Bank of Baroda", scheme: "Solar Power Loan", rate: "7.25% p.a.", tenure: "Up to 7 years" },
                            { bank: "IREDA / NBFCs", scheme: "Green Energy Finance", rate: "8–10% p.a.", tenure: "Up to 15 years" },
                        ].map((loan, i) => (
                            <div key={i} className="reveal-child relative p-7 rounded-2xl bg-white border border-border-subtle hover:border-bmd-gold/30 shadow-sm hover:shadow-md transition-all duration-500 group">
                                <div className="w-11 h-11 rounded-xl bg-bmd-navy flex items-center justify-center mb-4 group-hover:bg-bmd-gold transition-colors duration-300 shadow-sm">
                                    <Banknote className="text-white" size={20} />
                                </div>
                                <h4 className="font-serif font-bold text-bmd-navy text-lg mb-1">{loan.bank}</h4>
                                <p className="text-sm text-gray-400 mb-4">{loan.scheme}</p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-warm border border-border-subtle">
                                        <span className="text-gray-400">Interest Rate</span>
                                        <span className="font-bold text-bmd-gold">{loan.rate}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-warm border border-border-subtle">
                                        <span className="text-gray-400">Repayment</span>
                                        <span className="font-bold text-gray-700">{loan.tenure}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* EMI Example */}
                    <div className="reveal relative p-8 rounded-2xl bg-bmd-navy text-white shadow-lg overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmd-gold/40 to-transparent" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <IndianRupee className="w-7 h-7 text-bmd-gold" />
                                <h3 className="text-xl font-serif font-bold">Example EMI Calculation</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: "System Cost (3kW)", value: "₹1,50,000" },
                                    { label: "Central Subsidy", value: "– ₹94,822" },
                                    { label: "Net Cost", value: "₹55,178" },
                                    { label: "EMI @ 7% / 5yr", value: "≈ ₹1,090/mo" },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-white/50 text-xs mb-1">{item.label}</p>
                                        <p className="text-white font-bold text-lg">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/40 text-xs mt-4">* Approximate values. Actual EMI may vary based on bank and credit profile. We help you compare and apply.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── ROI SECTION ── */}
            <SectionWrapper className="bg-white" id="roi">
                <div ref={roiRef} className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="reveal inline-block text-bmd-gold text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                                Return on Investment
                            </span>
                            <h2 className="reveal text-3xl md:text-5xl font-serif font-bold text-bmd-navy mb-6">
                                Break Even in <span className="text-bmd-gold">4 Years</span>
                            </h2>
                            <p className="reveal text-gray-600 leading-relaxed mb-8 font-light">
                                After factoring in the central subsidy, a typical 3kW residential solar system costs around ₹55,000–₹75,000 net.
                                With average annual electricity savings of <strong>₹18,000–₹24,000</strong>, most households recover their investment
                                within just <strong>3.5 to 4 years</strong> — and then enjoy <em>free electricity for 20+ more years.</em>
                            </p>
                            <div className="space-y-3 reveal-stagger">
                                {[
                                    { label: "Average Monthly Savings", value: "₹1,500 – ₹2,000" },
                                    { label: "Annual Savings", value: "₹18,000 – ₹24,000" },
                                    { label: "Total System Life", value: "25+ years" },
                                    { label: "Net 25-Year Benefit", value: "₹4.5 Lakh+" },
                                ].map((item, i) => (
                                    <div key={i} className="reveal-child flex items-center justify-between p-4 rounded-xl bg-surface-warm border border-border-subtle shadow-sm">
                                        <span className="text-gray-500 text-sm">{item.label}</span>
                                        <span className="font-bold text-bmd-gold text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ROI Chart */}
                        <div className="reveal">
                            <div className="relative p-8 rounded-2xl bg-surface-warm border border-border-subtle shadow-sm">
                                <h3 className="text-lg font-serif font-bold text-bmd-navy mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-bmd-gold" size={20} />
                                    Cumulative Savings (3kW System)
                                </h3>
                                <div className="space-y-4">
                                    {roiData.map((row, i) => (
                                        <div
                                            key={i}
                                            className={`relative p-5 rounded-2xl border transition-all duration-300 ${row.highlight
                                                ? 'bg-bmd-navy text-white border-bmd-navy shadow-lg'
                                                : 'bg-white border-border-subtle'
                                                }`}
                                        >
                                            {row.highlight && (
                                                <span className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-bmd-gold text-bmd-navy text-xs font-bold shadow">
                                                    ✓ Break-Even Point
                                                </span>
                                            )}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className={`font-serif font-bold text-lg ${row.highlight ? 'text-white' : 'text-bmd-navy'}`}>{row.year}</p>
                                                    <p className={`text-xs ${row.highlight ? 'text-white/60' : 'text-gray-400'}`}>Annual: {row.savings}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className={`text-xs mb-1 ${row.highlight ? 'text-white/60' : 'text-gray-400'}`}>Total Saved</p>
                                                    <p className={`text-2xl font-serif font-black ${row.highlight ? 'text-bmd-gold' : 'text-bmd-gold'}`}>{row.cumulativeSavings}</p>
                                                </div>
                                            </div>
                                            {/* Progress bar */}
                                            <div className="mt-3 h-1.5 rounded-full bg-black/5 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${row.highlight ? 'bg-bmd-gold' : 'bg-bmd-gold/50'}`}
                                                    style={{ width: `${(i + 1) * 25}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-4">*Based on avg. electricity rate of ₹6/unit and 4 peak sun hours/day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── CTA ── */}
            <SectionWrapper className="bg-bmd-navy relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmd-gold/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bmd-gold/5 rounded-full blur-[120px] pointer-events-none" />
                <div ref={ctaRef} className="container mx-auto px-6 text-center relative z-10">
                    <div className="reveal">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Ready to Go Solar?
                        </h2>
                        <p className="text-white/50 text-lg font-light max-w-2xl mx-auto mb-10">
                            Book a free site assessment and get a custom solar proposal with exact savings, subsidy, and EMI details — no obligation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-bmd-gold text-bmd-navy font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-2">
                                    <Zap size={18} /> Book Free Assessment
                                </button>
                            </Link>
                            <a href="tel:+919031074805">
                                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                                    📞 Call: +91 90310 74805
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
