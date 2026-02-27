import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Braj Mohan Group",
    description: "Get in touch with Braj Mohan Group for inquiries about construction, solar, or IT services in Patna, Bihar.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
