import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.5.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  type: "contact" | "distributor";
  name: string;
  email: string;
  phone?: string;
  message?: string;
  company?: string;
  location?: string;
  experience?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormRequest = await req.json();
    console.log("Received form submission:", data);

    let emailSubject = "";
    let emailHtml = "";

    if (data.type === "contact") {
      emailSubject = `New Contact Form Submission from ${data.name}`;
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    } else if (data.type === "distributor") {
      emailSubject = `New Distributor Application from ${data.name}`;
      emailHtml = `
        <h2>New Distributor Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company Name:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Location:</strong> ${data.location || "Not provided"}</p>
        <p><strong>Experience/Description:</strong></p>
        <p>${data.experience}</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "RAOZI Forms <onboarding@resend.dev>",
      to: ["support@raozi.in"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
