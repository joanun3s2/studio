"use server";

import { InquiryFormData } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (data: InquiryFormData) => {
  await resend.emails.send({
    to: process.env.RESEND_TO_EMAIL ?? "",
    from: process.env.RESEND_FROM_EMAIL ?? "",
    subject: `New Project Inquiry from ${data.name}`,
    html: `
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Project Description: ${data.projectDescription}</p>
        <p>Budget: ${data.budget || "Not specified"}</p>
        `,
  });
};
