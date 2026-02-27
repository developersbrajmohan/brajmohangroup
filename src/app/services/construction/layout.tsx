import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Construction & Real Estate | Braj Mohan Group",
    description: "Premium civil construction and real estate development services by Braj Mohan Group. High-quality infrastructure projects across Bihar.",
};

export default function ConstructionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
