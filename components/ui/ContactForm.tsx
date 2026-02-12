"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle, AlertCircle, Send, List } from "lucide-react";
import { cn } from "@/lib/utils";

// Schema Validation
const formSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(7, "Número de teléfono inválido"),
  subject: z.string().min(2, "Seleccione un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  source: string; // "home", "servicios", "contacto", etc.
  className?: string;
  showTitle?: boolean;
}

export default function ContactForm({ source, className, showTitle = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "Consulta General"
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, source }),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {showTitle && (
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
            <List size={20} />
          </div>
          <h3 className="text-xl font-bold text-primary transition-colors">Envíenos un mensaje</h3>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Nombre Completo
            </label>
            <div className="relative">
              <input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Su nombre"
                className={cn(
                  "w-full bg-white border rounded-xl px-4 py-3.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all",
                  errors.name ? "border-red-500" : "border-slate-200"
                )}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Correo Electrónico
            </label>
            <div className="relative">
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="correo@ejemplo.com"
                className={cn(
                  "w-full bg-white border rounded-xl px-4 py-3.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all",
                  errors.email ? "border-red-500" : "border-slate-200"
                )}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">
              Teléfono
            </label>
            <div className="relative">
              <input
                id="phone"
                {...register("phone")}
                type="tel"
                placeholder="+57 300 000 0000"
                className={cn(
                  "w-full bg-white border rounded-xl px-4 py-3.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all",
                  errors.phone ? "border-red-500" : "border-slate-200"
                )}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-sm font-medium text-slate-700">
              Asunto
            </label>
            <div className="relative">
              <select
                id="subject"
                {...register("subject")}
                className={cn(
                  "w-full bg-white border rounded-xl px-4 py-3.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none",
                  errors.subject ? "border-red-500" : "border-slate-200"
                )}
              >
                <option value="Consulta General">Consulta General</option>
                <option value="Cita Médica">Cita Médica</option>
                <option value="Servicios Láser">Servicios Láser</option>
                <option value="Cirugías">Cirugías</option>
                <option value="Otro">Otro</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Mensaje
          </label>
          <div className="relative">
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              placeholder="¿En qué podemos ayudarte?"
              className={cn(
                "w-full bg-white border rounded-xl px-4 py-3.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all",
                errors.message ? "border-red-500" : "border-slate-200"
              )}
            />
          </div>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-4 rounded-xl bg-green-50 text-green-700 flex items-center gap-3 text-sm animate-in fade-in zoom-in duration-300">
            <CheckCircle className="h-5 w-5 shrink-0" />
            <span>Mensaje enviado con éxito. Nos pondremos en contacto pronto.</span>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-4 rounded-xl bg-red-50 text-red-700 flex items-center gap-3 text-sm animate-in fade-in zoom-in duration-300">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>Hubo un error al enviar el mensaje. Intenta nuevamente.</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-[#3da082] text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Enviar Mensaje</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
