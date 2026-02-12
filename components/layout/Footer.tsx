import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary font-bold text-lg">
                <span className="material-icons text-sm">visibility</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wide">CLIOF</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Comprometidos con tu salud visual. Tecnología de punta y especialistas certificados para brindarte la mejor atención en Sincelejo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white hover:underline transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white hover:underline transition-colors">Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:underline transition-colors">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-white hover:underline transition-colors">Agendar Cita</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Nuestros Servicios</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/servicios" className="hover:text-white hover:underline transition-colors">Consulta Oftalmológica</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:underline transition-colors">Cirugía de Catarata</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:underline transition-colors">Exámenes Diagnósticos</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:underline transition-colors">Óptica</Link></li>
            </ul>
          </div>

          {/* Map / Location */}
          <div className="rounded-lg overflow-hidden h-40 bg-slate-800 relative group border border-white/10">
            {/* Using a placeholder or static map image if available */}
             <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                 <span className="material-icons text-white/50 text-4xl">map</span>
             </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Link href="/contacto" className="bg-secondary/90 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-sm pointer-events-auto hover:bg-secondary transition-colors">
                Ver Mapa
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p>© {new Date().getFullYear()} Clínica Oftalmológica de Sincelejo (CLIOF). Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
