"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, CheckCircle, Cross, Eye, Heart, Shield, Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1 pt-10 pb-12 lg:pb-0 lg:pt-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Excelencia en Oftalmología
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary leading-[1.15] tracking-tight">
                Tu visión merece <br />
                <span className="text-secondary">lo extraordinario.</span>
              </h1>
              <p className="font-display text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                En CLIOF combinamos la precisión de la tecnología avanzada con un trato profundamente humano para cuidar de tus ojos en Sincelejo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/contacto"
                  className="bg-secondary hover:bg-[#3da082] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-secondary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/nosotros"
                  className="flex items-center justify-center gap-3 text-primary font-semibold py-4 px-8 rounded-full border-2 border-transparent hover:bg-gray-100 transition-all"
                >
                  <PlayCircle className="text-secondary h-6 w-6" />
                  Conócenos
                </Link>
              </div>

              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 mt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-slate-500">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">5k+</p>
                  <p className="text-sm text-slate-500">Pacientes felices</p>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full max-w-xl mx-auto pt-20 lg:pt-0">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-0"></div>
               <div className="absolute bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"></div>
               
               <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
                   {/* Placeholder Image - In a real scenario, use local or optimized assets */}
                   <Image 
                     src="/images/home/home-hero-principal.webp"
                     alt="Clínica Oftalmológica de Sincelejo - Equipos de última generación"
                     fill
                     className="object-cover object-center"
                   />
                   
                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                       <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                               <CheckCircle className="h-6 w-6" />
                           </div>
                           <div>
                               <p className="text-sm font-bold text-primary">Tecnología de Punta</p>
                               <p className="text-xs text-slate-500">Equipos diagnósticos de última generación</p>
                           </div>
                       </div>
                   </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-10 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-20 max-w-3xl mx-auto">
                <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-3 block">Nuestra Filosofía</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">¿Por qué elegir CLIOF?</h2>
                <p className="text-slate-600 text-lg">
                    Más que una clínica, somos un aliado en el cuidado de tu visión. Entendemos que cada paciente es único y merece una atención personalizada.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Feature 1 */}
                <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                       <Cross className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Liderazgo Local</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Nos hemos consolidado como referentes en oftalmología en Sincelejo y Sucre, ofreciendo diagnósticos certeros y tratamientos efectivos sin necesidad de desplazamientos.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">Vanguardia Tecnológica</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Invertimos constantemente en equipos de última generación para asegurar la máxima precisión en cada procedimiento.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Heart className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Calidez Humana</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Creemos firmemente que la excelencia médica debe ir acompañada de empatía. Nuestro equipo se dedica a escucharte y entender tus necesidades.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="servicios" className="py-10 md:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                <div>
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-3 block">Especialidades</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestros Servicios</h2>
                </div>
                <Link href="/servicios" className="hidden md:inline-flex items-center text-primary font-semibold hover:underline mt-4 md:mt-0 transition-colors">
                    Ver todos los servicios <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Consulta Externa", desc: "Evaluación visual completa para detectar anomalías.", label: "Consulta", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT8QwQYhwPUZwLRSNGasktKm3-Np_g7fsdJQVnzcLJ31bbX8mTGSJDzMgyx2xGCYqEQ9UYj1QRmDkT1nXYHIx3-LywTvx38kzyaB0ePXXlBIjaHCnu-GW8O8Tzf8GYFRrNuXUFTumaEGor0SP6gx9Suvo1o3cwHwUL3GusNzXfuYXIt0bT1BxnVFKsSlKYPfV9_Q0XbQ6Te6Cnv3OGKyWCODBAcoO2R3wY0rnyX1ETPOJubiS0oqTEmhMcle2PNiJ1xCjDwlcwFFM" },
                    { title: "Cirugías", desc: "Intervenciones seguras para cataratas y más.", label: "Cirugía", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFA9XOOXAKqZ1N9i9c_4DdnBQIzV7cuQyi6xhFtqB5-wKil8NG_Z-XyblkdLbxXltq9dvO_pGA8MqKNXck8ge7lRbbDvrTd1m0GL8IVh0fJrvwpZWSgxtfKNHIZgRHoUWhrOHhJzdWPW5sizxnOrPBmMv8CFDf-VM6g0xiUrIeaUSn9WLiqSB1YxYj1RjYMw42BqOL7u7Fh4k5eSuCagM22tIqf1Yk6LwOPfoKv9hkgdnC-6PyESxD8RyB2jOMR093a7c6BzfTi3o" },
                    { title: "Exámenes", desc: "Diagnósticos precisos con tecnología de vanguardia.", label: "Diagnóstico", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe1hY1NmJbSG8SY8JDhG14VgIEsmQO8r06UT1rZbLEscY4msu1GPEMTdMsPF8J-6D4qNbQGnn6T256BHlztAa0KRJJiQH8dslM1zDiy6uvuLBUr--AWPeO9kwu2ad1_gPW6Wf-L_prx_wDGspNp69l2CHsZSz8xjGAg4uY1UqidLta-Uz88zFxDlenfBLBnMXonJ_pyObJsLj4k5OQSpUq3uPW5UT5Pi4nR4HIvely9e4NybA_OnwvH9Esb259XtVco37D1ujF2xA" },
                    { title: "Tratamientos Láser", desc: "Corrección visual y tratamientos mínimamente invasivos.", label: "Láser", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWKBp8U-5x06BKVy6E3w8oasspxoupthkCKyr_v7uUNhoeoUDw1oSVkWeICuoTjr-KHcpDD3MslIviwMUvfn9EhtWLwh0a39Tviam-RauOSzzQr3kJdfrOZSdxlXesl4x4qyRe6e2cTYqFCakClaBT98KxRFW8x9_1sNYR4ouj1P0Q0wT5prOgYMIzDRsjhi2qvfVXu9gXb7XtRbXMOPNETMazo7HnljRdu7-WJM_sc7YNOGZJ4JOizS4kBlxHOi8Jpwdy4Ij-hrI" }
                ].map((service, index) => (
                    <Link href="/servicios" key={index} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 block">
                        <div className="h-56 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-80 z-10"></div>
                            <Image src={service.img} alt={service.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded">{service.label}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.desc}</p>
                            <span className="text-primary text-sm font-semibold flex items-center hover:translate-x-1 transition-transform">
                                Más información <ArrowRight className="h-4 w-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

             <div className="mt-12 text-left md:hidden">
                <Link href="/servicios" className="inline-flex items-center text-primary font-semibold hover:underline">
                    Ver todos los servicios <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </div>
      </section>

      {/* Strategic Allies Section */}
      <section className="py-10 md:py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-secondary font-bold text-base md:text-lg uppercase tracking-[0.2em]">Nuestros Aliados Estratégicos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                    { name: "EPS Sanitas", icon: Shield },
                    { name: "Sura", icon: Cross },
                    { name: "Coosalud", icon: Heart },
                ].map((aliado, index) => (
                    <div key={index} className="bg-white px-8 py-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-4 hover:shadow-md transition-shadow">
                        <aliado.icon className="h-6 w-6 text-slate-400" />
                        <span className="font-display font-medium text-slate-500 text-lg">{aliado.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-10 md:py-28 bg-background-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                
                {/* Contact Info (Left) */}
                <div className="lg:w-5/12 p-10 md:p-14 bg-primary text-white relative overflow-hidden">
                    {/* Abstract circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -ml-16 -mb-16 pointer-events-none"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">Contáctanos</h2>
                            <p className="text-blue-100 mb-10 leading-relaxed font-light">Estamos listos para atenderte. Agenda tu cita hoy mismo o contáctanos para resolver tus dudas.</p>
                            
                            <div className="space-y-8">
                                <div className="flex items-center group">
                                    <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl mr-4 group-hover:bg-secondary/80 transition-colors">
                                        <Phone className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Llámanos</p>
                                        <p className="text-xl font-bold">333 6025022</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center group">
                                    <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl mr-4 group-hover:bg-secondary/80 transition-colors">
                                        <MapPin className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Visítanos</p>
                                        <p className="text-lg font-medium">Clínica Oftalmológica de Sincelejo, Sucre.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center group">
                                    <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl mr-4 group-hover:bg-secondary/80 transition-colors">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Escríbenos</p>
                                        <p className="text-lg font-medium">contacto@cliof.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12">
                            <p className="text-sm text-blue-200 mb-4">Síguenos en redes:</p>
                            <div className="flex space-x-4">
                                {/* Social placeholders */}
                                <div className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white hover:text-primary rounded-full transition-all cursor-pointer">
                                  <Facebook size={18} />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white hover:text-primary rounded-full transition-all cursor-pointer">
                                  <Instagram size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form (Right) */}
                <div className="lg:w-7/12 p-10 md:p-14">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold text-primary mb-2">Envíanos un mensaje</h3>
                        <p className="text-gray-500 mb-8 text-sm">Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                        
                        <ContactForm source="home_page" />
                    </div>
                </div>

            </div>
         </div>
      </section>
    </>
  );
}
