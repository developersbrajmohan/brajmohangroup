import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Renewable Power & Solar Solutions | Braj Mohan Group",
    description: "End-to-end solar installation and renewable energy solutions for residential and commercial needs in Bihar.",
};

export default function RenewablePowerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
