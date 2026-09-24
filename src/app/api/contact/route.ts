import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Send confirmation email to customer
    // For now, we'll simulate a successful submission

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your enquiry. We will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your enquiry. Please try again." },
      { status: 500 }
    );
  }
}