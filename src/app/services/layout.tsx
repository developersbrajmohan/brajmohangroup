import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services | Braj Mohan Group",
    description: "Explore our diverse services including Civil Construction, Renewable Power, Web Development, and App Development in Patna, Bihar.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
