"use client";

import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Eye, 
  ScanEye, 
  Smile, 
  User, 
  Brain, 
  Droplet, 
  Stethoscope, 
  Microscope, 
  Grid, 
  Layers, 
  Mountain, 
  Activity, 
  HeartPulse, 
  Ruler, 
  ZoomIn, 
  Zap, 
  Disc, 
  Grid3X3, 
  Filter, 
  Shield,
  Syringe,
  Scissors,
  CircleDot,
  MoveHorizontal,
  RefreshCcw,
  Siren,
  Sparkles,
  UserRound,
  Phone,
  Mail,
  Clock
} from "lucide-react";

// Define icons map using Lucide React
const Icons = {
    visibility: <Eye size={32} />,
    remove_red_eye: <ScanEye size={32} />,
    blur_on: <Activity size={32} />,
    face: <Smile size={32} />,
    child_care: <User size={32} />,
    psychology: <Brain size={32} />,
    opacity: <Droplet size={32} />,
    healing: <Stethoscope size={32} />,
    biotech: <Microscope size={32} />,
    grid_view: <Grid size={32} />,
    layers: <Layers size={32} />,
    terrain: <Mountain size={32} />,
    waves: <Activity size={32} />,
    bloodtype: <HeartPulse size={32} />,
    straighten: <Ruler size={32} />,
    zoom_in: <ZoomIn size={32} />,
    flash_on: <Zap size={32} />,
    radio_button_checked: <Disc size={32} />,
    grid_on: <Grid3X3 size={32} />,
    filter_tilt_shift: <Filter size={32} />,
    shield: <Shield size={32} />,
    medical_services: <Syringe size={32} />,
    scissors: <Scissors size={32} />,
    circle_dot: <CircleDot size={32} />,
    move_horizontal: <MoveHorizontal size={32} />,
    refresh_ccw: <RefreshCcw size={32} />,
    siren: <Siren size={32} />,
    sparkles: <Sparkles size={32} />,
    doctor: <UserRound size={32} />,
};

// Data structure
const servicesData = {
    "Consulta Externa": {
        description: "Nuestros especialistas están capacitados para tratar diversas patologías oculares.",
        items: [
            { title: "Glaucoma", desc: "Diagnóstico y tratamiento para preservar su nervio óptico.", icon: "visibility" },
            { title: "Retina y Vítreo", desc: "Manejo experto de desprendimientos y retinopatías.", icon: "remove_red_eye" },
            { title: "Córnea", desc: "Tratamiento de queratocono y enfermedades de la superficie.", icon: "blur_on" },
            { title: "Oculoplastia", desc: "Cirugía plástica y reconstructiva de párpados y órbita.", icon: "face" },
            { title: "Oftalmopediatría", desc: "Cuidado visual especializado para niños y adolescentes.", icon: "child_care" },
            { title: "Neuro-oftalmología", desc: "Evaluación de problemas visuales relacionados con el cerebro.", icon: "psychology" },
            { title: "Ojo Seco", desc: "Clínica especializada para el tratamiento de lubricación ocular.", icon: "opacity" },
            { title: "Consulta General", desc: "Valoración integral para la prevención y cuidado visual.", icon: "doctor" }
        ]
    },
    "Exámenes": {
        description: "Equipos de última tecnología para diagnósticos precisos.",
        items: [
            { title: "Biometría Ocular", desc: "Tecnología IOL Master de alta precisión.", icon: "biotech" },
            { title: "Campimetría", desc: "Computarizada Humphrey para campo visual.", icon: "grid_view" },
            { title: "OCT", desc: "Tomografía de Coherencia Óptica Macular.", icon: "layers" },
            { title: "Topografía", desc: "Análisis corneal con sistema Pentacam.", icon: "terrain" },
            { title: "Ecografía Ocular", desc: "Ultrasonido en Modo A y Modo B.", icon: "waves" },
            { title: "Angiografía", desc: "Fluoresceínica para estudio vascular.", icon: "bloodtype" },
            { title: "Paquimetría", desc: "Medición ultrasónica del espesor corneal.", icon: "straighten" },
            { title: "Microscopía", desc: "Recuento de células endoteliales.", icon: "zoom_in" }
        ]
    },
    "Láser": {
        description: "Tecnología no invasiva para tratamientos ambulatorios.",
        items: [
            { title: "Capsulotomía YAG", desc: "Tratamiento para opacidad capsular post-catarata.", icon: "flash_on" },
            { title: "Iridotomía Periférica", desc: "Prevención de glaucoma de ángulo cerrado.", icon: "radio_button_checked" },
            { title: "Fotocoagulación", desc: "Láser de retina para retinopatía diabética.", icon: "grid_on" },
            { title: "Trabeculoplastia (SLT)", desc: "Reducción de presión intraocular en glaucoma.", icon: "filter_tilt_shift" },
            { title: "LASIK/PRK", desc: "Corrección refractiva para eliminar gafas.", icon: "remove_red_eye" },
            { title: "Crosslinking", desc: "Fortalecimiento corneal para queratocono.", icon: "shield" }
        ]
    },
    "Cirugías": {
        description: "Quirófanos especializados y certificados para su seguridad.",
        items: [
            { title: "Catarata", desc: "Facoemulsificación con implante de lente.", icon: "sparkles" },
            { title: "Pterigión", desc: "Resección con autoinjerto conjuntival.", icon: "scissors" },
            { title: "Vitrectomía", desc: "Cirugía de retina y vítreo posterior.", icon: "biotech" },
            { title: "Lente Intraocular", desc: "Implantes fáquicos y afáquicos.", icon: "circle_dot" },
            { title: "Blefaroplastia", desc: "Corrección estética y funcional de párpados.", icon: "face" },
            { title: "Estrabismo", desc: "Alineación ocular quirúrgica.", icon: "move_horizontal" },
            { title: "Trasplante", desc: "Queratoplastia penetrante o lamelar.", icon: "healing" },
            { title: "Trauma Ocular", desc: "Cirugía de emergencia reconstructiva.", icon: "siren" }
        ]
    }
};

type TabKey = keyof typeof servicesData;

export default function Servicios() {
  const [activeTab, setActiveTab] = useState<TabKey>("Consulta Externa");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden bg-[#538896]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="bg-[#6396a3] rounded-[2rem] p-8 md:p-16 text-center shadow-xl border border-white/10 mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
                    Excelencia Clínica y<br />
                    Cuidado Humano
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                    En CLIOF, fusionamos tecnología de vanguardia con la calidez de nuestros especialistas para brindarle una experiencia oftalmológica superior. Su visión es nuestro compromiso.
                </p>
            </div>
        </div>
      </section>

      <div className="relative">
      {/* Sticky Tabs */}
      <section className="sticky top-20 z-40 bg-background-light border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-2 sm:space-x-4 overflow-x-auto no-scrollbar py-4 justify-start md:justify-center">
                {Object.keys(servicesData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as TabKey)}
                        className={cn(
                            "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border",
                            activeTab === tab
                                ? "bg-secondary text-white border-secondary shadow-md"
                                : "bg-white text-gray-600 border-transparent hover:text-primary hover:border-primary"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 bg-white min-h-[600px]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
                <div className="mb-8 border-l-4 border-primary pl-4">
                    <h2 className="text-2xl font-bold text-primary">
                        {activeTab === "Consulta Externa" ? "Especialidades Médicas" : 
                         activeTab === "Exámenes" ? "Ayudas Diagnósticas" : 
                         activeTab === "Láser" ? "Procedimientos Láser" : 
                         "Procedimientos Quirúrgicos"}
                    </h2>
                    <p className="mt-2 text-gray-600">{servicesData[activeTab].description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData[activeTab].items.map((item, i) => (
                        <div key={i} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                             <div className={cn(
                                 "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                                 "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                             )}>
                                {/* Validating icon existence before rendering */}
                                {Icons[item.icon as keyof typeof Icons] || <span className="material-icons-outlined">circle</span>}
                             </div>
                             <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                             <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Contextual CTA Button */}
                <div className="mt-12 text-center">
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30">
                        {activeTab === "Consulta Externa" ? "Solicitar Cita de Valoración" :
                         activeTab === "Exámenes" ? "Consultar Precios de Exámenes" :
                         activeTab === "Láser" ? "Más Información sobre Láser" :
                         "Programar Cirugía"}
                    </Link>
                </div>
            </div>

         </div>
      </section>
      </div>

      {/* Quick Contact Form Section */}
      <section className="bg-[#f8fafc] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-primary mb-4">Contáctenos</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                      Estamos aquí para atender todas sus inquietudes. Complete el formulario o utilice nuestras líneas de atención directa.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Main Form Card */}
                  <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                      <ContactForm source="servicios_page" showTitle={true} />
                  </div>

                  {/* Sidebar Info */}
                  <div className="lg:col-span-4 space-y-6">
                      {/* Phone Support Card */}
                      <div className="bg-[#024a60] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                          
                          <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                      <Phone size={20} className="text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold">Líneas de Atención</h3>
                              </div>
                              
                              <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                                  Nuestro equipo de atención al usuario está disponible para agendar sus citas.
                              </p>

                              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 inline-block w-full border border-white/10">
                                  <p className="text-xs text-blue-200 uppercase tracking-widest mb-1 font-semibold">Call Center</p>
                                  <p className="text-3xl font-bold tracking-tight">333 6025022</p>
                              </div>

                              <div className="space-y-3 pt-2">
                                  <div className="flex items-start gap-3">
                                      <Clock size={16} className="text-secondary shrink-0 mt-1" />
                                      <div>
                                          <p className="text-xs font-bold text-blue-200 uppercase">Horarios</p>
                                          <p className="text-sm">Lunes a Viernes: 7:00 AM - 6:00 PM</p>
                                          <p className="text-sm">Sábados: 8:00 AM - 12:00 PM</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Emails Card */}
                      <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
                          <div className="flex items-center gap-3 mb-8">
                              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                  <Mail size={20} />
                              </div>
                              <h3 className="text-xl font-bold text-primary transition-colors">Correos Directos</h3>
                          </div>

                          <div className="space-y-6">
                              <div>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">Información General</p>
                                  <a href="mailto:info@cliofsincelejo.com" className="text-primary font-semibold hover:text-secondary transition-colors">
                                      info@cliofsincelejo.com
                                  </a>
                              </div>
                              
                              <div className="w-full h-px bg-slate-100"></div>

                              <div>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">Citas y Programación</p>
                                  <a href="mailto:citas@cliofsincelejo.com" className="text-primary font-semibold hover:text-secondary transition-colors">
                                      citas@cliofsincelejo.com
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
