
"use server";

import type { InquiryFormData } from "@/types";
// This is a placeholder for the actual AI flow.
// As per instructions, I cannot modify/create files in src/ai.
// We assume 'getInquiryRecap' exists and is correctly implemented.
// import { getInquiryRecap } from '@/ai/flows/inquiryRecapFlow'; 

// Mock AI function since we can't implement the real one.
async function getInquiryRecap(data: InquiryFormData): Promise<string> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate a scenario where the AI flow might not be available in this environment
  if (typeof process === 'object' && process.env.NODE_ENV === 'test') { // Example condition
     return `Recap for:
Name: ${data.name}
Email: ${data.email}
Project: ${data.projectDescription}
Budget: ${data.budget || 'Not specified'}
(Mocked AI Recap due to environment constraints)`;
  }
  
  // In a real scenario, this would call the Genkit flow:
  // return await getInquiryRecap(data);

  return `Thank you, ${data.name}! Here's a summary of your inquiry:
- Email: ${data.email}
- Project Idea: "${data.projectDescription.substring(0, 50)}${data.projectDescription.length > 50 ? '...' : ''}"
- Budget Indication: ${data.budget || 'Not specified'}
We will be in touch shortly to discuss this further. 
(This is a simulated AI-generated recap for demonstration purposes.)`;
}


export async function submitInquiryAction(
  data: InquiryFormData
): Promise<{ success: boolean; message: string; recap?: string }> {
  try {
    // Basic validation (more complex validation should be with Zod on client/server)
    if (!data.name || !data.email || !data.projectDescription) {
      return { success: false, message: "Missing required fields." };
    }
    if (!data.email.includes('@')) {
        return { success: false, message: "Invalid email address." };
    }

    // Here you would typically save the inquiry to a database
    // For example: await db.collection('inquiries').add(data);
    console.log("New inquiry received:", data);

    // Generate AI recap
    const recap = await getInquiryRecap(data);
    
    // Send an email notification to yourself (example)
    // await sendEmail({ to: 'your-email@example.com', subject: 'New Project Inquiry', body: ... });

    return { 
      success: true, 
      message: "Your inquiry has been submitted successfully!",
      recap: recap
    };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
