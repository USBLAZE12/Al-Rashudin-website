import { NextResponse } from "next/server";
import { companyInfo } from "@/lib/company";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, craneModel } = body;

    // Validate required fields
    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, subject, message" },
        { status: 400 }
      );
    }

    // Log for server
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      craneModel,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Build WhatsApp message for manual follow-up
    const whatsappText = `New Enquiry: ${name} - ${subject} - ${phone} - ${craneModel || "N/A"} - ${message.substring(0, 100)}`;
    const whatsappLink = `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will contact you within 2 hours via WhatsApp/phone.",
        whatsappLink,
        contact: {
          whatsapp: companyInfo.contact.whatsappDisplay,
          phone: companyInfo.contact.primaryPhone,
          email: companyInfo.contact.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your enquiry. Please WhatsApp us directly." },
      { status: 500 }
    );
  }
}
