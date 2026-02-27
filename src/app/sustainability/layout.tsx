import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sustainability Initiatives | Braj Mohan Group",
    description: "Our commitment to a greener future through renewable energy, solar power, and sustainable infrastructure practices.",
};

export default function SustainabilityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
