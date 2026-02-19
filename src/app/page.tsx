import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import AboutPreview from "@/components/sections/about-preview";
import DirectorsMessage from "@/components/sections/directors-message";
import ServicesGrid from "@/components/sections/services-grid";
import ProjectsShowcase from "@/components/sections/projects-showcase";
import Stats from "@/components/sections/stats";
import HappyCustomers from "@/components/sections/happy-customers";
import CTA from "@/components/sections/cta";

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
