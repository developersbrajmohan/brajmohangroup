// ─── BMD Knowledge Base ───────────────────────────────────────────────────────
// Structured knowledge chunks for the RAG system.
// Each chunk has a topic, keywords, and content string.

export interface KnowledgeChunk {
  id: string;
  topic: string;
  keywords: string[];
  content: string;
}

export const knowledgeBase: KnowledgeChunk[] = [
  // ── Company Overview ─────────────────────────────────────────────────────
  {
    id: "company_overview",
    topic: "Company Overview",
    keywords: ["bmd", "brajmohan", "group", "company", "about", "who", "founded", "history"],
    content: `Brajmohan Group (BMD) is a multi-sector conglomerate with 25+ years of experience, headquartered in India. BMD operates in three core verticals: Solar Energy (PM Surya Ghar Yojna), Civil Construction, and IT & Web Development (BMD IT). We are known for quality, reliability, and innovation.`,
  },

  // ── Solar – General ───────────────────────────────────────────────────────
  {
    id: "solar_general",
    topic: "Solar Energy – General",
    keywords: ["solar", "panel", "energy", "surya", "ghar", "pm", "rooftop", "installation", "warranty", "advantages"],
    content: `BMD is an authorized installer under PM Surya Ghar Muft Bijli Yojna. We install high-efficiency rooftop solar panels with a 25-year performance warranty and 5-year installation warranty. Systems are fully grid-tied and net-metering compatible. We handle everything: site survey, design, installation, government registration, subsidy processing, and after-sales service.`,
  },

  // ── Solar – Residential Pricing ───────────────────────────────────────────
  {
    id: "solar_residential_pricing",
    topic: "Solar – Residential Pricing & Subsidy",
    keywords: ["residential", "home", "house", "1kw", "2kw", "3kw", "4kw", "price", "cost", "rate", "subsidy", "pm surya", "muft bijli"],
    content: `Residential Solar Pricing (with PM Surya Ghar Subsidy):
- 1 kW: ₹75,000 gross | Subsidy: ₹30,000 | Net cost: ₹45,000
- 2 kW: ₹1,40,000 gross | Subsidy: ₹60,000 | Net cost: ₹80,000
- 3 kW: ₹2,10,000 gross | Subsidy: ₹78,000 | Net cost: ₹1,32,000
- 4 kW and above: ₹65,000/kW (subsidy capped at ₹78,000 for 3kW+)
Example: 5kW residential = 5 × ₹65,000 = ₹3,25,000 gross | Net after ₹78,000 subsidy = ₹2,47,000
The PM Surya Ghar subsidy maximum is ₹78,000 for 3kW or more.`,
  },

  // ── Solar – Commercial Pricing ────────────────────────────────────────────
  {
    id: "solar_commercial_pricing",
    topic: "Solar – Commercial Pricing",
    keywords: ["commercial", "business", "office", "factory", "industry", "5kw", "10kw", "20kw", "30kw", "price", "cost", "rate"],
    content: `Commercial Solar Pricing (no government subsidy for commercial):
- 1 kW: ₹65,000
- 2 kW: ₹1,20,000
- 3 kW: ₹1,80,000
- 4 kW: ₹2,20,000
- 5–10 kW: ₹50,000/kW
- 11–20 kW: ₹45,000/kW
- 21–30 kW: ₹43,000/kW
- 31–40 kW: ₹42,000/kW
- 40 kW and above: ₹40,000/kW
Commercial systems have no PM Surya Ghar subsidy. Industrial loans available at competitive rates.`,
  },

  // ── Solar – ROI & Savings ─────────────────────────────────────────────────
  {
    id: "solar_roi",
    topic: "Solar – ROI, Savings & Payback",
    keywords: ["roi", "return", "savings", "payback", "bill", "electricity", "monthly", "benefit", "profit", "units", "generate"],
    content: `Solar ROI and Savings:
- A 1kW rooftop solar system generates approximately 100–120 units per month in India.
- Average electricity rate: ₹8–10/unit (varies by state and slab).
- 1kW saves approximately ₹800–1,200/month on electricity bill.
- Typical payback period: 4–6 years for residential, 3–5 years for commercial.
- After payback, 20+ years of near-free electricity.
- Net metering allows selling excess power back to the grid.`,
  },

  // ── Solar – Subsidy Process ───────────────────────────────────────────────
  {
    id: "solar_subsidy_process",
    topic: "Solar – Subsidy Eligibility & Process",
    keywords: ["subsidy", "eligible", "eligibility", "apply", "application", "process", "documents", "government", "pm surya ghar", "scheme"],
    content: `PM Surya Ghar Subsidy Process:
- Eligibility: Indian residential property owners with a valid electricity connection.
- BMD handles the complete application process on your behalf.
- Required documents: Electricity bill, Aadhar card, property proof, bank account details.
- Subsidy is disbursed directly to your bank account by the government after installation.
- Timeline: Installation in 7–15 days; subsidy disbursement in 30–60 days post-installation.
- No advance subsidy; BMD installs first, subsidy credited later.`,
  },

  // ── Civil Construction ────────────────────────────────────────────────────
  {
    id: "civil_residential",
    topic: "Civil Construction - Residential",
    keywords: ["civil", "construction", "residential", "home", "house", "villa", "apartment", "building", "builder"],
    content: `BMD constructs premium residential properties, ranging from independent villas to multi-story apartment complexes. We use high-quality raw materials (TMT steel, premium cement grades) and guarantee structural integrity. From architectural planning to foundation laying and final finishing, we act as a turnkey partner. Average residential projects take 8-18 months depending on scale.`,
  },
  {
    id: "civil_commercial",
    topic: "Civil Construction - Commercial & Industrial",
    keywords: ["civil", "commercial", "office", "mall", "factory", "warehouse", "industrial", "contractor"],
    content: `For commercial & industrial clients, BMD builds high-compliance structures such as office towers, hospitals, shopping malls, and massive warehouses. We ensure ISO-certified safety standards, adhere to strict fire-safety regulations, and utilize smart-building tech for energy efficiency.`,
  },
  {
    id: "civil_highways",
    topic: "Civil Construction - Highways & Infrastructure",
    keywords: ["highway", "road", "bridge", "canal", "infrastructure", "government", "contract", "nhai", "tender"],
    content: `BMD is an established contractor for large-scale government infrastructure. We execute high-way construction (NHAI projects), bridges, and irrigation canals. Our heavily mechanized fleet allows us to meet stringent government tender deadlines without compromising scale or quality.`,
  },
  {
    id: "civil_interiors",
    topic: "Civil Construction - Interior Design & Fit-outs",
    keywords: ["interior", "design", "fitout", "fit-out", "furnishing", "decor", "architectural", "planning"],
    content: `Beyond structural builds, our dedicated interior design wing handles end-to-end fit-outs. We design luxury residential interiors, corporate offices, and healthcare spaces. Services include woodwork, flooring, ceiling, MEP (Mechanical, Electrical, Plumbing), and custom furnishings.`,
  },

  // ── IT & Web Dev ──────────────────────────────────────────────────────────
  {
    id: "it_websites",
    topic: "IT Services - Website Development",
    keywords: ["it", "web", "website", "landing page", "ecommerce", "react", "nextjs", "frontend", "SEO", "speed"],
    content: `BMD IT builds high-performance, cutting-edge websites. We use modern frameworks like React and Next.js, ensuring 99+ Lighthouse speed scores, excellent SEO, and stunning mobile-responsive UI/UX. Typical delivery timeline for a corporate website is 2-4 weeks. Pricing generally depends on complexity, featuring transparent milestone-based billing.`,
  },
  {
    id: "it_mobile_apps",
    topic: "IT Services - Mobile App Development",
    keywords: ["app", "mobile", "ios", "android", "flutter", "react native", "store", "application", "smartphone"],
    content: `We design and develop native and cross-platform mobile apps for iOS and Android. Whether it's an e-commerce app, a delivery platform, or a corporate utility app, we handle UI design, backend API development, and app store deployment. Apps typically take 8-12 weeks to build.`,
  },
  {
    id: "it_custom_saas",
    topic: "IT Services - Custom SaaS & AI Software",
    keywords: ["software", "saas", "custom", "ai", "dashboard", "crm", "erp", "automation", "backend"],
    content: `For specific business needs, BMD IT develops custom Software-as-a-Service (SaaS) products, CRM / ERP dashboards, and AI automation tools. We integrate technologies like OpenAI for chatbots and intelligent data processing, helping businesses automate their operations and scale digitally.`,
  },
  {
    id: "it_digital_marketing",
    topic: "IT Services - Digital Marketing & Branding",
    keywords: ["marketing", "seo", "social media", "ads", "google ads", "branding", "logo", "identity"],
    content: `A great product needs an audience. BMD IT offers full-suite digital marketing, including Search Engine Optimization (SEO), Google Ads management, social media campaigns, and brand identity design. We focus on ROI-driven campaigns to generate leads and sales for our clients.`,
  },

  // ── Contact & Locations ───────────────────────────────────────────────────
  {
    id: "contact",
    topic: "Contact & Office Locations",
    keywords: ["contact", "phone", "call", "office", "address", "location", "email", "reach", "visit", "where"],
    content: `Contact Brajmohan Group (BMD):
- Website: brajmohangroup.com
- For Solar inquiries, share your name and phone number in the chat — our solar expert will call you within 24 hours.
- Our teams are active across Uttar Pradesh, Madhya Pradesh, and surrounding states.
- Office hours: Monday–Saturday, 9 AM to 7 PM IST.`,
  },
];
