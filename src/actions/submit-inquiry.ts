"use server";

export type InquiryData = {
    name: string;
    phone: string;
    email?: string;
    service: string;
    message?: string;
};

export async function submitInquiry(data: InquiryData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you would use an email service here.
    // Example: await resend.emails.send({ ... })

    console.log("--------------------------------------------------");
    console.log("🚀 NEW LEAD RECEIVED");
    console.log("--------------------------------------------------");
    console.log(`Name:    ${data.name}`);
    console.log(`Phone:   ${data.phone}`);
    console.log(`Service: ${data.service}`);
    if (data.email) console.log(`Email:   ${data.email}`);
    if (data.message) console.log(`Message: ${data.message}`);
    console.log("--------------------------------------------------");

    return { success: true };
}
