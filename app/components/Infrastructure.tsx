import { Monitor, Wifi, Shield, Trees } from 'lucide-react';

export function Infrastructure() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Aulas Multimedia',
      description: 'Salones equipados con proyectores interactivos y tecnología de última generación'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Campus Conectado',
      description: 'WiFi de alta velocidad en todas las instalaciones para facilitar el aprendizaje digital'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Seguridad Integral',
      description: 'Sistema de vigilancia 24/7, control de acceso y protocolos de seguridad certificados'
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: 'Áreas Verdes',
      description: 'Amplios espacios recreativos, canchas deportivas y zonas de esparcimiento'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Infraestructura e Innovación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instalaciones modernas y seguras diseñadas para potenciar el aprendizaje y el desarrollo integral de nuestros estudiantes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#f79408] to-[#a80809] text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1760348213920-d2a90ed705fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjB0ZWNobm9sb2d5JTIwY29tcHV0ZXJzfGVufDF8fHx8MTc3MjQ2OTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnología en el aula"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-[#a80809] to-[#f79408] rounded-2xl p-12 text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl mb-2">100%</p>
              <p className="text-lg opacity-90">Aulas Digitalizadas</p>
            </div>
            <div>
              <p className="text-5xl mb-2">3</p>
              <p className="text-lg opacity-90">Laboratorios Equipados</p>
            </div>
            <div>
              <p className="text-5xl mb-2">5000m²</p>
              <p className="text-lg opacity-90">Áreas Deportivas</p>
            </div>
            <div>
              <p className="text-5xl mb-2">24/7</p>
              <p className="text-lg opacity-90">Seguridad Activa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}