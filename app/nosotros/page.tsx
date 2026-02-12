"use client";

import Image from "next/image";
import { CheckCircle, Eye, Shield, Award, Cross, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Data for infrastructure gallery
const infrastructureData = {
  "Salas de Cirugía": [
    { title: "Quirófano Principal", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEcoQyK0sMwQPkdAJ5BJgELn4XMZ8Ei7F8CTbeFrIGGtv7nOHO74ixq4BbExByPcKsfM868rrOCME0OEIDaHGqU_bHAe6WklXXs2j3xsgMTfMH5E11R73BTSP8RnAvkBy7qB11MGv_y443IlSkKilRPtmoaoB4eFX9i9LmwEvNoU7Dsx-wopNP0kj2XbFsYvxLcJSYWkX6wD9uQEX3uKQ45yoZuv8oqOE-FRqE1XC4J0X5b_QZesZ6srVxKxDamfw9vfTw2J7KtbE" },
    { title: "Área de Recuperación", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR3YHuozRHN8cqqdoYtqUZXLDA1fmqYxIf1rv6AlGR2gzF5_QxWti7c48QjaZrIAr987dPWDzfzNXlQvwWcwWeSObqcbcbEStv-XH-WDbDRDMFIE3V5-mn8PAxmZl2rWNamYFjAZ7Xi8BBDp5vNwRZgHSGevc5NbJa-KbzgYfsql4ooxQO4BpBuy5z49iCSIzLPXCXpiMyBxKOFxaKMgyLQgt7sSXzCBx5eWgHiJRLzliWSWYoMaYQmroZnEnT9yrc-1l864UxCco" },
    { title: "Esterilización", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc6dc7dUaxbvh6OK0Tn8pyWxaMSe84rRKQVXGsDsAzXB78B_o7_GphJs3PRXgv8VhCvn_kYrrDcz0DiFgLgLpSBJkOV7GN5H8ndF2bWjMat0bHsVa0j9AqKTxSWFHu70RLse7tptgdaC6AmVTCzslxzBzIo-sfZa4YGIJA46bTYQpAGP0v5RlE2waNuRHPZhOSX80YckADiO9JqBX_M3r7hfb9y_LWBAjP8KZ2dAjCl8RuLXhhOlkpoduOtFxchsBGOExNwIIusxE" }, // Reusing precision equipment img as placeholder contextually
  ],
  "Consultorios": [
    { title: "Consultorio A", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHaceB92O-qaiIsAsjxlzivKNRmwvZLWCakXw3eSRNOHBLxbPy9RmOf6tZwGH2m8xupa_FU8IC4d0oLfDC49BhfedKsB-CQ912l1ytoRL1Axh8lsfiOFhI5few8eBI_n9KRHRBF860TGBGUY3FD0pb_fpByTB_z8Duy_VDwqL6-Gmn3qSJ1Nh-VhLI3bqfbwbP9fu6wIlT2lsBCqzyA2KalCmXseWfEZdj5k1Q-h3p3YQFqcTk8kMzJAsZSTBMmQsR-ef7z6bWhNw" }, // Reusing facility img
    { title: "Examen Visual", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT8QwQYhwPUZwLRSNGasktKm3-Np_g7fsdJQVnzcLJ31bbX8mTGSJDzMgyx2xGCYqEQ9UYj1QRmDkT1nXYHIx3-LywTvx38kzyaB0ePXXlBIjaHCnu-GW8O8Tzf8GYFRrNuXUFTumaEGor0SP6gx9Suvo1o3cwHwUL3GusNzXfuYXIt0bT1BxnVFKsSlKYPfV9_Q0XbQ6Te6Cnv3OGKyWCODBAcoO2R3wY0rnyX1ETPOJubiS0oqTEmhMcle2PNiJ1xCjDwlcwFFM" },
  ],
  "Ayudas Diagnósticas": [
    { title: "Tecnología Láser", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe1hY1NmJbSG8SY8JDhG14VgIEsmQO8r06UT1rZbLEscY4msu1GPEMTdMsPF8J-6D4qNbQGnn6T256BHlztAa0KRJJiQH8dslM1zDiy6uvuLBUr--AWPeO9kwu2ad1_gPW6Wf-L_prx_wDGspNp69l2CHsZSz8xjGAg4uY1UqidLta-Uz88zFxDlenfBLBnMXonJ_pyObJsLj4k5OQSpUq3uPW5UT5Pi4nR4HIvely9e4NybA_OnwvH9Esb259XtVco37D1ujF2xA" },
    { title: "Equipos de Precisión", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc6dc7dUaxbvh6OK0Tn8pyWxaMSe84rRKQVXGsDsAzXB78B_o7_GphJs3PRXgv8VhCvn_kYrrDcz0DiFgLgLpSBJkOV7GN5H8ndF2bWjMat0bHsVa0j9AqKTxSWFHu70RLse7tptgdaC6AmVTCzslxzBzIo-sfZa4YGIJA46bTYQpAGP0v5RlE2waNuRHPZhOSX80YckADiO9JqBX_M3r7hfb9y_LWBAjP8KZ2dAjCl8RuLXhhOlkpoduOtFxchsBGOExNwIIusxE" },
  ],
  "Salas de Espera": [
     { title: "Recepción Principal", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHaceB92O-qaiIsAsjxlzivKNRmwvZLWCakXw3eSRNOHBLxbPy9RmOf6tZwGH2m8xupa_FU8IC4d0oLfDC49BhfedKsB-CQ912l1ytoRL1Axh8lsfiOFhI5few8eBI_n9KRHRBF860TGBGUY3FD0pb_fpByTB_z8Duy_VDwqL6-Gmn3qSJ1Nh-VhLI3bqfbwbP9fu6wIlT2lsBCqzyA2KalCmXseWfEZdj5k1Q-h3p3YQFqcTk8kMzJAsZSTBMmQsR-ef7z6bWhNw" }, // Placeholder
  ]
};

type TabKey = keyof typeof infrastructureData;

export default function Nosotros() {
  const [activeTab, setActiveTab] = useState<TabKey>("Salas de Cirugía");

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            <div className="mb-12 lg:mb-0">
              <h2 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">Sobre Nosotros</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Expertos en el cuidado de tu <span className="text-secondary relative inline-block">visión</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En la Clínica Oftalmológica de Sincelejo (CLIOF), nos dedicamos a preservar y mejorar la salud visual de nuestros pacientes. Con años de experiencia y tecnología de vanguardia, somos referentes en oftalmología en la región.
              </p>
              <p className="text-base text-gray-500 mb-8 leading-relaxed">
                Nuestro compromiso va más allá del diagnóstico; construimos relaciones basadas en la confianza, la ética y la excelencia médica, asegurando que cada paciente reciba un trato humano y personalizado.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                         {/* Placeholder avatars */}
                         <div className="w-full h-full bg-slate-300"></div>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">
                    +20
                  </div>
                </div>
                <span className="text-sm font-medium text-primary">Especialistas a tu servicio</span>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                 <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHaceB92O-qaiIsAsjxlzivKNRmwvZLWCakXw3eSRNOHBLxbPy9RmOf6tZwGH2m8xupa_FU8IC4d0oLfDC49BhfedKsB-CQ912l1ytoRL1Axh8lsfiOFhI5few8eBI_n9KRHRBF860TGBGUY3FD0pb_fpByTB_z8Duy_VDwqL6-Gmn3qSJ1Nh-VhLI3bqfbwbP9fu6wIlT2lsBCqzyA2KalCmXseWfEZdj5k1Q-h3p3YQFqcTk8kMzJAsZSTBMmQsR-ef7z6bWhNw"
                    alt="CLIOF Facility"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Tecnología de Punta</p>
                    <p className="text-sm opacity-90">Equipos de última generación para diagnósticos precisos.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
               
               {/* Mission */}
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full transition-transform group-hover:scale-110 duration-500"></div>
                  <div className="relative z-10">
                     <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary">
                        <Award className="h-8 w-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Prestar servicios de salud visual integral con altos estándares de calidad, apoyados en un equipo humano idóneo y tecnología avanzada, garantizando la seguridad del paciente y la satisfacción de sus necesidades visuales en un ambiente cálido y seguro.
                     </p>
                  </div>
               </div>

               {/* Vision */}
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110 duration-500"></div>
                  <div className="relative z-10">
                     <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                        <Eye className="h-8 w-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Para el año 2028, seremos reconocidos como la institución líder en salud visual en la región Caribe, destacándonos por la innovación tecnológica, la excelencia en el servicio y nuestro compromiso con la investigación y el desarrollo científico.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Safety Policy */}
      <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4fb292 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-6 backdrop-blur-sm border border-secondary/30">
                  <Shield className="h-6 w-6 text-secondary" />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Política de Seguridad Integral</h2>
               <p className="text-lg text-gray-200 mb-10 font-light leading-relaxed">
                  En CLIOF, la seguridad del paciente es el eje fundamental de nuestra atención. Implementamos protocolos rigurosos de esterilización, farmacovigilancia y gestión de riesgos para garantizar procedimientos exitosos y libres de complicaciones.
               </p>
               
               <div className="flex flex-wrap justify-center gap-4">
                  {["Protocolos Certificados", "Personal Calificado", "Tecnología Segura"].map((item) => (
                      <div key={item} className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 group cursor-default">
                         <CheckCircle className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                         <span className="text-sm font-medium">{item}</span>
                      </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Gallery / Infrastructure */}
      <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Infraestructura</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Espacios diseñados pensando en tu comodidad y seguridad clínica.</p>
             </div>

            {/* Tabs */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-sm py-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 flex justify-start sm:justify-center overflow-x-auto no-scrollbar scroll-smooth">
                <div className="flex space-x-2 sm:space-x-4 min-w-max">
                    {Object.keys(infrastructureData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as TabKey)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeTab === tab
                                    ? "bg-secondary text-white border-secondary shadow-md transform scale-105"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-primary"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
                {infrastructureData[activeTab].map((item, index) => (
                    <div key={`${activeTab}-${index}`} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer animate-in fade-in zoom-in duration-500">
                        <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</span>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </section>

      {/* Strategic Allies Section */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-secondary font-bold text-xs md:text-sm uppercase tracking-[0.2em]">Respaldo y Confianza</h2>
                <h3 className="text-3xl font-bold text-primary mt-2">Nuestros Aliados Estratégicos</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
                {/* Simplified logo placeholders using icons for now as per design system */}
                <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:shadow-md transition-all group-hover:scale-110">
                        <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <span className="font-semibold text-slate-600">EPS Sanitas</span>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:shadow-md transition-all group-hover:scale-110">
                        <Cross className="h-8 w-8 text-blue-400" />
                    </div>
                    <span className="font-semibold text-slate-600">Sura</span>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:shadow-md transition-all group-hover:scale-110">
                        <Heart className="h-8 w-8 text-red-500" />
                    </div>
                    <span className="font-semibold text-slate-600">Coosalud</span>
                </div>
                 <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:shadow-md transition-all group-hover:scale-110">
                       <Award className="h-8 w-8 text-yellow-500" />
                    </div>
                    <span className="font-semibold text-slate-600">Nueva EPS</span>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
