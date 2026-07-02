"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

const services = ["Custom web app", "Business website", "App hosting & care", "Downloadable app"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: services[0]
    }
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset({ service: services[0], name: "", email: "", phone: "", budget: "", message: "" });
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
      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Send Inquiry
      </Button>
      {status === "success" && (
        <p className="rounded-md bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
          Thanks. Your inquiry has been received.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-700">
          Something went wrong. Please email directly and I will respond.
        </p>
      )}
    </form>
  );
}
