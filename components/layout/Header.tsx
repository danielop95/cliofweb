"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    <span className="material-icons">visibility</span>
                </div>
                <span className="font-display font-bold text-2xl text-primary tracking-wide">CLIOF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors border-b-2",
                    isActive
                      ? "text-secondary border-secondary"
                      : "text-slate-600 hover:text-secondary border-transparent"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contacto"
              className="bg-primary hover:bg-[#033a4b] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary hover:text-secondary p-2 transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top",
          mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                  isActive
                    ? "text-secondary bg-secondary/5 border-l-4 border-secondary"
                    : "text-slate-700 hover:text-secondary hover:bg-slate-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-slate-100">
             <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-primary hover:bg-[#033a4b] text-white px-5 py-3 rounded-lg text-base font-medium transition-colors shadow-md"
            >
              Agendar Cita
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
