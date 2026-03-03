"use client";

import { Heart, Target } from "lucide-react";
import Image from "next/image";
import BgAbout from "../public/About_bg.jpg"

const informacion = [
  {
    titulo:"Valores",
    descripcion:"Formacion etica y espiritual"
  },
  {
    titulo:"Excencia",
    descripcion:"Calidad académica superior"
  },
  {
    titulo:"Innovacion",
    descripcion:"Educación del futuro"
  },
];

export function About () {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={BgAbout}
                alt="name"
                className="w-full h-125 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#f79408] to-[#a80809] text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl mb-2">+25</p>
              <p className="text-lg">Años formando estudiantes de excelencia</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">Sobre nosotros</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptate non dolorum minus sit soluta. Culpa repellendus consectetur, deserunt cum laboriosam tenetur! Impedit unde odit ab doloremque fugiat velit alias?
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptate non dolorum minus sit soluta. Culpa repellendus consectetur, deserunt cum laboriosam tenetur! Impedit unde odit ab doloremque fugiat velit alias?
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
                {informacion.map((item, i) => (
                    <div className="text-center" key={i}>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f79408]/10 text-[#f79408] mb-4">
                        <Heart className="w-8 h-8" />
                      </div>
                      <h3 className="mb-2 text-gray-900">{item.titulo}</h3>
                      <p className="text-sm text-gray-600">{item.descripcion}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}