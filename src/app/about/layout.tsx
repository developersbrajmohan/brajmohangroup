import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Braj Mohan Group",
    description: "Learn about Braj Mohan Group's 25+ years of excellence in transforming India's infrastructure, renewable energy, and digital landscape.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
