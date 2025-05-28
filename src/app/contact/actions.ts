'use server';

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  serviceInterest: z.string().optional(),
});

export type ContactFormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    serviceInterest?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    serviceInterest: formData.get('serviceInterest'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Form submission failed. Please check the errors below.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate API call or database save
  console.log('Contact form submitted:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // In a real app, you would send an email, save to a database, etc.
  // For example:
  // try {
  //   await sendEmail(validatedFields.data);
  // } catch (error) {
  //   return {
  //     message: 'An error occurred while sending your message. Please try again.',
  //     success: false,
  //   };
  // }

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    success: true,
  };
}
