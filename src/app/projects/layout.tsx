import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Projects | Braj Mohan Group",
    description: "Explore our extensive portfolio of successful projects across infrastructure, solar energy, and digital solutions.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
