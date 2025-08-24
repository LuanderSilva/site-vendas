import { Users, School, Home, GraduationCap } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: Users,
      title: "Células",
      description: "Atividades lúdicas que reforçam princípios bíblicos de forma divertida e envolvente.",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-brand-blue"
    },
    {
      icon: School,
      title: "Escola Dominical",
      description: "Material complementar dinâmico para enriquecer as aulas e engajar os pequenos.",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-brand-green"
    },
    {
      icon: Home,
      title: "Devocional Familiar",
      description: "Momentos especiais de união em casa, fortalecendo os laços familiares.",
      bgGradient: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      iconBg: "bg-brand-yellow"
    },
    {
      icon: GraduationCap,
      title: "Pedagogia",
      description: "Desenvolvimento motor e artístico através de atividades educativas estruturadas.",
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      iconBg: "bg-brand-orange"
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="section-why-choose">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-why-choose-title">
            Por que escolher nossos livros?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-why-choose-subtitle">
            Desenvolvemos materiais que combinam fé, aprendizado e diversão para o crescimento saudável das crianças.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${benefit.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border ${benefit.borderColor}`}
              data-testid={`card-benefit-${index}`}
            >
              <div className={`w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
