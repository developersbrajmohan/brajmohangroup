import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloater from "@/components/ui/whatsapp-floater";
import SmoothScroll from "@/components/layout/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braj Mohan Group | Infrastructure & Real Estate",
  description: "Braj Mohan Group - Leading infrastructure powerhouse in Bihar specializing in civil projects, real estate, energy, and digital solutions since 1999.",
  keywords: ["Infrastructure", "Real Estate", "Civil Construction", "Solar Energy", "Bihar", "Patna", "Braj Mohan Group", "Construction Company"],
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Braj Mohan Group | Infrastructure & Real Estate",
    description: "Building India's Future with Integrity & Innovation. 25+ Years of Excellence.",
    url: "https://brajmohangroup.com",
    siteName: "Braj Mohan Group",
    images: [
      {
        url: "/images/og-image.jpg", // We'll need to make sure this exists or just fallback to logo for now if typical
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
    title: "Braj Mohan Group | Infrastructure & Real Estate",
    description: "Building India's Future with Integrity & Innovation.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brajmohangroup.com",
    languages: {
      'en-IN': 'https://brajmohangroup.com',
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
        className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} antialiased bg-bmd-navy text-white font-sans`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloater />
        </SmoothScroll>
      </body>
    </html>
  );
}
