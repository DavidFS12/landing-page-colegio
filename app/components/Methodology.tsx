import { Users, Brain, Globe, Lightbulb } from 'lucide-react';

interface MethodologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function MethodologyCard({ icon, title, description }: MethodologyCardProps) {
  return (
    <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f79408] to-[#a80809] rounded-t-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#f79408]/10 to-[#a80809]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Methodology() {
  const methodologies = [
    {
      icon: <Brain className="w-7 h-7 text-[#a80809]" />,
      title: 'Aprendizaje Activo',
      description: 'Metodologías constructivistas que ponen al estudiante en el centro del proceso educativo, promoviendo el pensamiento crítico y la resolución de problemas.'
    },
    {
      icon: <Users className="w-7 h-7 text-[#f79408]" />,
      title: 'Trabajo Colaborativo',
      description: 'Fomentamos el aprendizaje cooperativo y el desarrollo de habilidades sociales fundamentales para el trabajo en equipo y el liderazgo.'
    },
    {
      icon: <Globe className="w-7 h-7 text-[#a80809]" />,
      title: 'Educación Bilingüe',
      description: 'Programa intensivo de inglés con docentes especializados y certificaciones internacionales que preparan a nuestros estudiantes para un mundo globalizado.'
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-[#f79408]" />,
      title: 'Innovación y Tecnología',
      description: 'Integración de herramientas tecnológicas en el aula, robótica, programación y espacios maker para desarrollar competencias del siglo XXI.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f79408]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a80809]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un enfoque pedagógico innovador que combina lo mejor de las metodologías tradicionales y modernas para garantizar aprendizajes significativos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {methodologies.map((method, index) => (
            <MethodologyCard key={index} {...method} />
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl mb-6 text-center">Además ofrecemos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <p className="text-sm text-gray-300">Biblioteca Digital</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎭</div>
              <p className="text-sm text-gray-300">Talleres Artísticos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚽</div>
              <p className="text-sm text-gray-300">Deportes y Recreación</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔬</div>
              <p className="text-sm text-gray-300">Laboratorios Equipados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
