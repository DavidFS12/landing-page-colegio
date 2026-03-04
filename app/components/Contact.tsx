"use client";

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', level: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Solicita Información
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para brindarte toda la información sobre nuestro proceso de admisión
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl mb-6 text-gray-900">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f79408]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#f79408]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                    <p className="text-gray-900">(01) 234-5678</p>
                    <p className="text-gray-900">987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a80809]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#a80809]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-gray-900">informes@divinocristoobrero.edu.pe</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f79408]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#f79408]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Dirección</p>
                    <p className="text-gray-900">Av. Educación 123, Lima - Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a80809]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#a80809]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Horario de Atención</p>
                    <p className="text-gray-900">Lunes a Viernes</p>
                    <p className="text-gray-900">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#a80809] to-[#f79408] rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-xl mb-3">Proceso de Admisión 2026</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Matricúlate ahora y asegura la vacante de tu hijo para el próximo año escolar. 
                ¡Cupos limitados!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f79408] focus:border-transparent outline-none transition-all bg-white text-gray-900"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f79408] focus:border-transparent outline-none transition-all bg-white text-gray-900"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f79408] focus:border-transparent outline-none transition-all bg-white text-gray-900"
                    placeholder="987 654 321"
                  />
                </div>

                <div>
                  <label htmlFor="level" className="block text-gray-700 mb-2">
                    Nivel de interés *
                  </label>
                  <select
                    id="level"
                    name="level"
                    required
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f79408] focus:border-transparent outline-none transition-all bg-white text-gray-900"
                  >
                    <option value="">Seleccionar nivel</option>
                    <option value="inicial">Inicial (3-5 años)</option>
                    <option value="primaria">Primaria (6-11 años)</option>
                    <option value="secundaria">Secundaria (12-16 años)</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f79408] focus:border-transparent outline-none transition-all resize-none bg-white text-gray-900"
                  placeholder="Cuéntanos sobre las necesidades de tu hijo..."
                ></textarea>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  ¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#a80809] to-[#f79408] text-white py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Enviar Solicitud</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
