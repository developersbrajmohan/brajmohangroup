import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SolarChatbot from "@/components/ui/solar-chatbot";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f1729",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Braj Mohan Group | Solar, Infrastructure & IT Solutions",
  description: "Braj Mohan Group - Leading powerhouse in Bihar specializing in civil projects, renewable energy, and digital solutions since 1999.",
  keywords: ["Solar", "Infrastructure", "Real Estate", "Civil Construction", "Solar Energy", "Web Development", "App Development", "IT Solutions", "Bihar", "Patna", "Braj Mohan Group", "Construction Company"],
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Braj Mohan Group | Solar, Infrastructure & IT Solutions",
    description: "Building India's Future with Integrity & Innovation. 25+ Years of Excellence.",
    url: "https://brajmohangroup.in",
    siteName: "Braj Mohan Group",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Braj Mohan Group Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braj Mohan Group | Solar, Infrastructure & IT Solutions",
    description: "Building India's Future with Integrity & Innovation.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brajmohangroup.in",
    languages: {
      'en-IN': 'https://brajmohangroup.in',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
        <SolarChatbot />
      </body>
    </html>
  );
}
