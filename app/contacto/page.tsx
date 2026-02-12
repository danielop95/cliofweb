"use client";

import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Syringe, 
  FileText, 
  ClipboardList, 
  Clock,
  User as UserIcon,
  Circle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-[#5f9ea0] pt-20 pb-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="max-w-3xl mx-auto animate-in fade-in zoom-in duration-700">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
                    Contáctanos
                </h1>
                <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed">
                    Estamos comprometidos con su salud visual. <br className="hidden md:block" />
                    Encuentre aquí todos nuestros canales de atención especializados.
                </p>
            </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Línea Única de Atención Card */}
              <div className="relative z-20 -mt-24 mb-20 max-w-4xl mx-auto">
                  <div className="bg-[#0b4f5f] rounded-[2rem] p-12 md:p-14 text-center shadow-2xl shadow-[#0b4f5f]/20 relative overflow-hidden">
                      
                      <p className="text-[#4fb292] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">CENTRAL DE CITAS</p>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Línea Única de Atención</h2>
                      
                      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                          <a href="tel:3336025022" className="flex items-center gap-3 bg-[#4fb292] hover:bg-[#3da082] text-white px-8 py-3 rounded-lg font-bold text-xl shadow-lg transition-all hover:-translate-y-1">
                              <Phone size={24} className="fill-current" />
                              333 6025022
                          </a>
                          <div className="flex items-center gap-3 text-white text-lg md:ml-4">
                              <Mail size={20} className="text-[#4fb292]" />
                              <a href="mailto:info@cliofsincelejo.com" className="hover:text-[#4fb292] transition-colors">info@cliofsincelejo.com</a>
                          </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-300/80 font-light">
                          <span>Horario de atención: Lunes a Viernes 7:00 AM - 6:00 PM</span>
                          <span className="hidden md:block text-slate-500">|</span>
                          <span>Sábados 8:00 AM - 12:00 PM</span>
                      </div>
                  </div>
              </div>

              {/* Canales Especializados Section */}
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-primary mb-4">Canales Especializados</h2>
                  <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                  <ChannelCard 
                      icon={<Syringe size={22} />}
                      title="Cirugías"
                      desc="Información sobre programación quirúrgica y presupuestos."
                      email="cirugia@cliofsincelejo.com"
                  />
                  <ChannelCard 
                      icon={<FileText size={22} />}
                      title="Historias Clínicas"
                      desc="Solicitud y entrega de registros médicos del paciente."
                      email="historias@cliofsincelejo.com"
                  />
                  <ChannelCard 
                      icon={<ClipboardList size={22} />}
                      title="MIPRES"
                      desc="Gestión de servicios no PBS y requerimientos administrativos."
                      email="mipres@cliofsincelejo.com"
                  />
              </div>

              {/* Área Administrativa Section */}
              <section className="bg-slate-50/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-24 mb-28">
                  <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold text-primary mb-2">Área Administrativa</h2>
                          <p className="text-slate-500">Nuestro personal directivo y de soporte a su servicio.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <AdminPerson 
                              name="Estefanía Pérez"
                              role="Gestión Administrativa"
                              email="estefania@cliofsincelejo.com"
                          />
                          <AdminPerson 
                              name="Shirley Martínez"
                              role="Coordinación Médica"
                              email="shirley@cliofsincelejo.com"
                          />
                          <AdminPerson 
                              name="Martha Herrera"
                              role="Atención al Usuario"
                              email="martha@cliofsincelejo.com"
                          />
                      </div>
                  </div>
              </section>

              {/* Direct Message and Map Section */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                      {/* Left: Form */}
                      <div className="lg:w-1/2 p-10 md:p-14 lg:p-16">
                          <div className="mb-10">
                              <h3 className="text-3xl font-bold text-[#024a60] mb-3">Mensaje Directo</h3>
                              <p className="text-slate-500">Complete el formulario y un asesor le contactará en breve.</p>
                          </div>
                          <ContactForm source="contacto_page" className="max-w-full" />
                      </div>

                      {/* Right: Map */}
                      <div className="lg:w-1/2 relative min-h-[500px] h-full bg-slate-100">
                          <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.865578712296!2d-75.39768692414346!3d9.293458790779774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e591458e3f42b0b%3A0xc4a387799d636831!2sSincelejo%2C%20Sucre!5e0!3m2!1ses!2sco!4v1715872345678!5m2!1ses!2sco" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              allowFullScreen 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              className="grayscale-[0.5] opacity-90 h-full w-full absolute inset-0 mix-blend-multiply"
                          ></iframe>
                          
                          {/* Location Badge */}
                          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80">
                              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
                                  <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 rounded-full bg-[#024a60] flex items-center justify-center text-white shrink-0 shadow-md">
                                          <MapPin size={18} />
                                      </div>
                                      <div>
                                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">UBICACIÓN</p>
                                          <p className="text-sm font-semibold text-[#024a60] leading-snug">
                                              Clínica Oftalmológica de Sincelejo<br />
                                              <span className="text-slate-500 font-normal">Calle 123 # 45-67, Barrio El Bosque. Sincelejo, Sucre.</span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </>
  );
}

// Subcomponents for better organization
function ChannelCard({ icon, title, desc, email }: { icon: any, title: string, desc: string, email: string }) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group text-left h-full flex flex-col items-start border border-slate-50">
            <div className="w-14 h-14 rounded-2xl bg-[#e6f4f1] flex items-center justify-center text-[#4fb292] mb-6 group-hover:bg-[#4fb292] group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#024a60] mb-3">{title}</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{desc}</p>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-[#024a60] font-bold text-sm hover:text-[#4fb292] transition-colors mt-auto">
                {email}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
}

function AdminPerson({ name, role, email }: { name: string, role: string, email: string }) {
    return (
        <div className="bg-[#f8f9fa] rounded-[2rem] p-10 text-center hover:shadow-xl transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full bg-[#e2e8f0] mx-auto mb-6 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-300">
                <UserIcon size={48} />
            </div>
            <h3 className="text-xl font-bold text-[#024a60] mb-2">{name}</h3>
            <p className="text-xs font-bold text-[#4fb292] uppercase tracking-wider mb-6">{role}</p>
            <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 text-slate-500 text-sm hover:text-[#4fb292] transition-colors cursor-pointer">
                <Mail size={16} />
                <span>{email}</span>
            </a>
        </div>
    );
}
