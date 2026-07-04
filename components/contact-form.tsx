"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { site } from "@/lib/site-data";

const services = ["Custom web app", "Business website", "App hosting & care", "Downloadable app"];

function buildWhatsappMessage(values: ContactFormValues) {
  const lines = [
    "New enquiry from the website:",
    `Name: ${values.name}`,
    `Phone: ${values.phone || "-"}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    `Budget: ${values.budget || "-"}`,
    "",
    `Details: ${values.message}`
  ];
  return encodeURIComponent(lines.join("\n"));
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: services[0]
    }
  });

  function onSubmit(values: ContactFormValues) {
    const text = buildWhatsappMessage(values);
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-lg border bg-white p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+91..." {...register("phone")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="budget">Budget</Label>
          <Input id="budget" placeholder="₹25k - ₹1L" {...register("budget")} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Service</Label>
        <select
          id="service"
          className="h-11 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          {...register("service")}
        >
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
        {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea id="message" placeholder="What should the app or website do?" {...register("message")} />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} size="lg" className="bg-[#25D366] hover:bg-[#1ebe57]">
        <MessageCircle className="h-4 w-4" />
        Send Enquiry on WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Opens WhatsApp with your details filled in. Nothing is sent until you hit send there.
      </p>
    </form>
  );
}
