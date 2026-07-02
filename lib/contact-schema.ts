import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  budget: z.string().optional(),
  service: z.string().min(1, "Please choose a service."),
  message: z.string().min(10, "Tell me a little about the project.")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
