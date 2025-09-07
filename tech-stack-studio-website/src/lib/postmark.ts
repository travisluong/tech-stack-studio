import { Client } from "postmark";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  project: string;
}

// Create Postmark client
const createPostmarkClient = () => {
  const apiKey = process.env.POSTMARK_API_KEY;
  if (!apiKey) {
    throw new Error("POSTMARK_API_KEY environment variable is required");
  }
  return new Client(apiKey);
};

// Email template for client confirmation - Updated for monochromatic theme
const getClientEmailTemplate = (data: ContactFormData) => {
  return {
    subject: "Thank you for contacting Tech Stack Studio",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you for contacting Tech Stack Studio</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #000000; color: #ffffff;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #ffffff; font-size: 32px; margin: 0; font-weight: bold;">
                Tech Stack Studio
              </h1>
              <p style="color: #d1d5db; margin: 10px 0 0 0; font-size: 16px;">
                Modern Web Development with Elegant Design
              </p>
            </div>

            <!-- Main Content -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
              <h2 style="color: #ffffff; font-size: 24px; margin: 0 0 20px 0;">
                Thank You, ${data.name}!
              </h2>
              
              <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                We've received your inquiry about <strong style="color: #ffffff;">${data.project}</strong> and we're excited to learn more about your project.
              </p>

              <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Our team will review your requirements and get back to you within 24 hours with a detailed response.
              </p>

              <!-- Project Summary -->
              <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 15px 0;">Project Summary:</h3>
                <p style="color: #d1d5db; margin: 5px 0;"><strong>Project Type:</strong> ${data.project}</p>
                ${data.budget ? `<p style="color: #d1d5db; margin: 5px 0;"><strong>Budget Range:</strong> ${data.budget}</p>` : ""}
                ${data.company ? `<p style="color: #d1d5db; margin: 5px 0;"><strong>Company:</strong> ${data.company}</p>` : ""}
              </div>

              <p style="color: #d1d5db; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                In the meantime, feel free to explore our portfolio and learn more about our services on our website.
              </p>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 20px 0; border-top: 1px solid #374151;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px 0;">
                Tech Stack Studio - Where Technology Meets Elegance
              </p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Thank you for contacting Tech Stack Studio!

Hi ${data.name},

We've received your inquiry about "${data.project}" and we're excited to learn more about your project.

Project Summary:
- Project Type: ${data.project}
${data.budget ? `- Budget Range: ${data.budget}` : ""}
${data.company ? `- Company: ${data.company}` : ""}

Our team will review your requirements and get back to you within 24 hours with a detailed response.

Best regards,
Tech Stack Studio Team

---
Tech Stack Studio - Where Technology Meets Elegance
This is an automated response. Please do not reply to this email.
    `,
  };
};

// Email template for internal notification - Updated for monochromatic theme
const getInternalEmailTemplate = (data: ContactFormData) => {
  return {
    subject: `New Contact Form Submission - ${data.project} from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9fafb; color: #111827;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%); color: #000000; padding: 24px; border-radius: 12px 12px 0 0; border: 2px solid #e5e7eb;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold;">
                🚀 New Lead from Tech Stack Studio
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.8;">
                Someone is interested in working with you!
              </p>
            </div>

            <!-- Content -->
            <div style="background: #ffffff; border: 2px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
              <!-- Contact Info -->
              <div style="margin-bottom: 32px;">
                <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; border-bottom: 2px solid #000000; padding-bottom: 8px;">
                  Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Name:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                    <td style="padding: 8px 0; color: #1f2937;">
                      <a href="mailto:${data.email}" style="color: #000000; text-decoration: none; font-weight: bold;">${data.email}</a>
                    </td>
                  </tr>
                  ${
                    data.company
                      ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.company}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>

              <!-- Project Details -->
              <div style="margin-bottom: 32px;">
                <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; border-bottom: 2px solid #000000; padding-bottom: 8px;">
                  Project Details
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Project Type:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.project}</td>
                  </tr>
                  ${
                    data.budget
                      ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Budget:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.budget}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 32px;">
                <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; border-bottom: 2px solid #000000; padding-bottom: 8px;">
                  Project Message
                </h2>
                <div style="background: #f9fafb; border: 2px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                  <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>

              <!-- Quick Actions -->
              <div style="text-align: center; padding: 24px 0; border-top: 1px solid #e5e7eb;">
                <a href="mailto:${data.email}?subject=Re: Your inquiry about ${data.project}" 
                   style="display: inline-block; background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%); color: #000000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 0 8px; border: 2px solid #000000;">
                  Reply to ${data.name}
                </a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
${data.company ? `- Company: ${data.company}` : ""}

Project Details:
- Project Type: ${data.project}
${data.budget ? `- Budget: ${data.budget}` : ""}

Message:
${data.message}

---
Reply to this lead: ${data.email}
    `,
  };
};

// Send emails using Postmark
export const sendContactEmails = async (data: ContactFormData) => {
  const client = createPostmarkClient();

  try {
    // Prepare email templates
    const clientTemplate = getClientEmailTemplate(data);
    const internalTemplate = getInternalEmailTemplate(data);

    // Validate required environment variables
    const fromEmail = process.env.POSTMARK_FROM_EMAIL;
    const toEmail = process.env.POSTMARK_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      throw new Error(
        "POSTMARK_FROM_EMAIL and POSTMARK_TO_EMAIL environment variables are required"
      );
    }

    // Send client confirmation email
    const clientEmailResult = await client.sendEmail({
      From: fromEmail,
      To: data.email,
      Subject: clientTemplate.subject,
      HtmlBody: clientTemplate.html,
      TextBody: clientTemplate.text,
      MessageStream: "outbound", // Default message stream
      TrackOpens: true,
      // TrackLinks: "None", // Removed - using default (no tracking)
    });

    // Send internal notification email
    const internalEmailResult = await client.sendEmail({
      From: fromEmail,
      To: toEmail,
      Subject: internalTemplate.subject,
      HtmlBody: internalTemplate.html,
      TextBody: internalTemplate.text,
      MessageStream: "outbound",
      TrackOpens: true,
      // TrackLinks: "None", // Removed - using default (no tracking)
    });

    return {
      success: true,
      clientEmailId: clientEmailResult.MessageID,
      internalEmailId: internalEmailResult.MessageID,
      deliveryIds: {
        client: clientEmailResult.MessageID,
        internal: internalEmailResult.MessageID,
      },
      trackingEnabled: true,
    };
  } catch (error) {
    console.error("Postmark email sending failed:", error);

    // Provide more specific error information
    if (error instanceof Error) {
      throw new Error(`Failed to send email via Postmark: ${error.message}`);
    }
    throw new Error("Failed to send email via Postmark");
  }
};

// Health check function to verify Postmark connection
export const checkPostmarkHealth = async (): Promise<boolean> => {
  try {
    const client = createPostmarkClient();
    // Test the connection by getting server info
    await client.getServer();
    return true;
  } catch (error) {
    console.error("Postmark health check failed:", error);
    return false;
  }
};
