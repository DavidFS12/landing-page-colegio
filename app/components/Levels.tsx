"use client";

import { Baby, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import inicial from "../public/inicial.jpg";
import primaria from "../public/levels2.jpg";
import secundaria from "../public/levels3.jpg";

interface LevelCardProps {
  icon: React.ReactNode;
  title: string;
  age: string;
  description:string;
  features: string[];
  image: string;
  gradient: string;
}

function LevelCard({icon, title, age, description, features, image, gradient} : LevelCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${gradient} opacity-20`}></div>
        <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">{icon}</div>
      </div>
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl mb-1 text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{age}</p>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => 
            <li key={index} className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f79408] mt-2 flex-shrink-0"></span>
              <span className="text-gray-600">{feature}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export function Levels () {
  const levels = [
    {
      icon: <Baby className="w-6 h-6 text-[#f79408]" />,
      title: 'Nivel Inicial',
      age: '3 a 5 años',
      description: 'Estimulación temprana y desarrollo integral en un ambiente cálido y seguro que potencia las habilidades de nuestros pequeños.',
      features: [
        'Metodología lúdica y experimental',
        'Desarrollo de psicomotricidad',
        'Iniciación a la lectoescritura',
        'Inglés desde los 3 años',
        'Talleres de arte y música'
      ],
      image: inicial,
      gradient: 'bg-gradient-to-br from-[#f79408] to-[#ffa500]'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#a80809]" />,
      title: 'Nivel Primaria',
      age: '6 a 11 años',
      description: 'Construcción de bases sólidas en todas las áreas del conocimiento, fortaleciendo valores y habilidades sociales.',
      features: [
        'Programa académico integral',
        'Inglés intensivo certificado',
        'Educación en valores cristianos',
        'Desarrollo de pensamiento crítico',
        'Actividades deportivas y culturales'
      ],
      image: primaria,
      gradient: 'bg-gradient-to-br from-[#a80809] to-[#d41841]'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#f79408]" />,
      title: 'Nivel Secundaria',
      age: '12 a 16 años',
      description: 'Preparación para la vida universitaria y profesional con énfasis en liderazgo, innovación y emprendimiento.',
      features: [
        'Preparación preuniversitaria',
        'Laboratorios de ciencias equipados',
        'Talleres de emprendimiento',
        'Orientación vocacional personalizada',
        'Programa bilingüe avanzado'
      ],
      image: secundaria,
      gradient: 'bg-gradient-to-br from-[#f79408] to-[#a80809]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Niveles Educativos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una propuesta educativa completa que acompaña a nuestros estudiantes desde los primeros años hasta su preparación universitaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <LevelCard key={index} {...level} />
          ))}
        </div>
      </div>
    </section>
  );
}