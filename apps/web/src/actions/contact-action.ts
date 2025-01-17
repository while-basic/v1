"use server";

import { z } from "zod";
import { Resend } from "resend";
import ContactEmail from "@v1/email/emails/contact";
import { render } from "@react-email/components";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

console.log("API Key:", process.env.RESEND_API_KEY?.slice(0, 7) + "...");

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function contactAction(formData: FormData) {
  try {
    const validatedFields = contactSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    console.log("Sending email with data:", {
      ...validatedFields,
      email: validatedFields.email.slice(0, 3) + "..." // Log partial email for privacy
    });

    const html = await render(ContactEmail(validatedFields));

    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: "c_celaya@icloud.com", // Your verified email
      subject: "New Contact Form Submission",
      html,
      replyTo: validatedFields.email,
    });

    if (error) {
      console.error("Failed to send email. Full error:", JSON.stringify(error, null, 2));
      return {
        success: false,
        errors: { _form: `Failed to send email: ${error.message}` },
      };
    }

    console.log("Email sent successfully. Response:", JSON.stringify(data, null, 2));
    return { success: true };
  } catch (error) {
    console.error("Error in contactAction. Full error:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.path[0] as string]: curr.message,
          }),
          {} as Record<string, string>,
        ),
      };
    }

    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return {
      success: false,
      errors: { _form: `Something went wrong: ${errorMessage}` },
    };
  }
} 