"use client";

import { ArrowRight } from "lucide-react"; 
import Image from "next/image";
import heroBG from "../public/Bg_hero.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBG}
          alt="Estudiantes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#a80809]/95 via-[#a80809]/85 to-[#f79408]/85"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
            Name School
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl mb-8 font-light max-w-4xl mx-auto">
            Educacion de excelencia que transforma vidas
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto opacity-95">
            Formamos Estudiantes integros con valores cristianos, excelencia academica y espirutu inovador
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 gb-white text-[#a80809] px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            <span className="text-lg">Solicitar Informacion</span>
            <ArrowRight className="w-5 h-5"/>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 opacity-75">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}