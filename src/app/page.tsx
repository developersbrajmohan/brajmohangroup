import { Metadata } from 'next';
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import AboutPreview from "@/components/sections/about-preview";
import DirectorsMessage from "@/components/sections/directors-message";
import ServicesGrid from "@/components/sections/services-grid";
import ProjectsShowcase from "@/components/sections/projects-showcase";
import Stats from "@/components/sections/stats";
import HappyCustomers from "@/components/sections/happy-customers";
import CTA from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Braj Mohan Group | Solar, Infrastructure & IT Solutions",
  description: "Leading powerhouse in Bihar specializing in civil projects, renewable energy, and digital solutions since 1999."
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <AboutPreview />
      <TrustStrip />
      <DirectorsMessage />
      <ServicesGrid />
      <ProjectsShowcase />
      <Stats />
      <HappyCustomers />
      <CTA />
    </main>
  );
}
