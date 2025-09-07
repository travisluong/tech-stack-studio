import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/postmark";
import {
  validateContactForm,
  sanitizeFormData,
  checkForSpam,
} from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields exist
    if (!body.name || !body.email || !body.project || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize the form data
    const formData = sanitizeFormData(body);

    // Validate the form data
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Check for spam
    if (checkForSpam(formData)) {
      console.log("Spam detected:", formData);
      return NextResponse.json(
        { success: false, error: "Message flagged as spam" },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const requiredEnvVars = [
      "POSTMARK_API_KEY",
      "POSTMARK_FROM_EMAIL",
      "POSTMARK_TO_EMAIL",
    ];
    const missingEnvVars = requiredEnvVars.filter(
      (envVar) => !process.env[envVar]
    );

    if (missingEnvVars.length > 0) {
      console.error("Missing environment variables:", missingEnvVars);
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send emails via Postmark
    const emailResult = await sendContactEmails(formData);

    // Log successful submission
    console.log("Contact form submission successful:", {
      name: formData.name,
      email: formData.email,
      project: formData.project,
      timestamp: new Date().toISOString(),
      clientEmailId: emailResult.clientEmailId,
      internalEmailId: emailResult.internalEmailId,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! We will get back to you within 24 hours.",
      deliveryIds: emailResult.deliveryIds,
      trackingEnabled: emailResult.trackingEnabled,
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Don't expose internal error details to client
    return NextResponse.json(
      {
        success: false,
        error: "Unable to send message at this time. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
