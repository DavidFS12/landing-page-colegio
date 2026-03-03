"use client";

import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-between">
          <div>
            <h3 className="text-xl mb-4 bg-gradient-to-r from-[#f79408] to-[#a80809] bg-clip-text text-transparent">
              Divino Cristo Obrero
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mas de x años formando estudiantes integros con valores cristianos y excelencia academica.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f79408] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f79408] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f79408] transition-colors duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg">Enlaces Rapidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#f79408] transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#levels" className="text-gray-400 hover:text-[#f79408] transition-colors">Nveles Educativos</a>
              </li>
              <li>
                <a href="#methodology" className="text-gray-400 hover:text-[#f79408] transition-colors">Metodologia</a>
              </li>
              <li>
                <a href="#infraestructure" className="text-gray-400 hover:text-[#f79408] transition-colors">Infraestructura</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#f79408] transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg">Contactos</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f79408] flex-shrink-0 mt-0.5"/>
                <span>Av. Education 123, Arequipa</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#f79408] flex-shrink-0 mt-0.5"/>
                <div className="text-gray-400">
                  <p>(+51) 999 666 333</p>
                  <p>(+51) 999 666 999</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#f79408] flex-shrink-0 mt-0.5"/>
                <span>informes@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Colegio Divino Cristo Obrero. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#f79408] transition-colors">
                Politica de Privacidad
              </a>
              <a href="#" className="hover:text-[#f79408] transition-colors">
                Terminos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}