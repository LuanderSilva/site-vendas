import { Smartphone, Target, Heart, Camera } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Menos Telas",
      description: "Reduz significativamente o tempo em dispositivos eletrônicos de forma natural e divertida.",
      bgGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      iconBg: "bg-red-500",
      iconStrike: true
    },
    {
      icon: Target,
      title: "Mais Foco",
      description: "Desenvolve disciplina e concentração através de atividades direcionadas e estimulantes.",
      bgGradient: "from-brand-blue/10 to-brand-blue/20",
      borderColor: "border-blue-200",
      iconBg: "bg-brand-blue"
    },
    {
      icon: Heart,
      title: "Fé Viva",
      description: "Incentiva o devocional familiar e fortalece os valores cristãos no dia a dia.",
      bgGradient: "from-brand-green/10 to-brand-green/20",
      borderColor: "border-green-200",
      iconBg: "bg-brand-green"
    },
    {
      icon: Camera,
      title: "Memória Afetiva",
      description: "Cria lembranças especiais e momentos únicos entre pais e filhos.",
      bgGradient: "from-brand-orange/10 to-brand-orange/20",
      borderColor: "border-orange-200",
      iconBg: "bg-brand-orange"
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="section-benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-benefits-title">
            Benefícios da Bíblia Goods
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
            Transforme o tempo das crianças em momentos de crescimento, fé e desenvolvimento saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-gradient-to-br ${benefit.bgGradient} rounded-2xl shadow-lg hover:shadow-xl transition-shadow border ${benefit.borderColor}`}
              data-testid={`card-benefit-${index}`}
            >
              <div className={`w-20 h-20 ${benefit.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon 
                  className={`text-white ${benefit.iconStrike ? 'line-through' : ''}`} 
                  size={32} 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h3>
              <p className="text-gray-600" data-testid={`text-benefit-description-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
