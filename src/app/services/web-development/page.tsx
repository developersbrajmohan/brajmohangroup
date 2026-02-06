import WebDevHero from "@/components/sections/web-dev/hero";
import WebDevServices from "@/components/sections/web-dev/services";
import WebDevWhyChooseUs from "@/components/sections/web-dev/why-choose-us";
import WebDevProcess from "@/components/sections/web-dev/process";
import WebDevPackages from "@/components/sections/web-dev/packages";

export const metadata = {
    title: "Web & App Development | Braj Mohan Group",
    description: "Premium website and mobile app development services in Patna. Custom solutions for businesses using Next.js, React Native, and modern tech.",
};

export default function WebDevelopmentPage() {
    return (
        <main className="bg-bmd-navy min-h-screen">
            <WebDevHero />
            <WebDevServices />
            <WebDevWhyChooseUs />
            <WebDevProcess />
            <WebDevPackages />
        </main>
    );
}
