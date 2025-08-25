import { Button } from "@/components/ui/button";
import { Check, Star, X } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Pacote Básico",
      price: "R$9,99",
      description: "Pagamento único",
      features: [
        { text: "30 livros cristãos para colorir", included: true },
        { text: "Histórias bíblicas ilustradas", included: true },
        { text: "Impressão ilimitada", included: true },
        { text: "Suporte por email", included: true },
        { text: "Cartões Para Memorização", included: false },
        { text: "Livro de Atividades Cristãs", included: false },
        { text: "Aventuras Bíblicas", included: false },
        { text: "Desenhos diversos para colorir", included: false }
      ],
      buttonText: "Escolher Pacote",
      buttonStyle: "bg-gray-600 text-white hover:bg-gray-700",
      isPopular: false
    },
    {
      name: "Pacote Premium",
      price: "R$16,99",
      description: "Pagamento único",
      features: [
        { text: "30 livros cristãos para colorir", included: true },
        { text: "Cartões de versículos", included: true },
        { text: "Desafios e atividades extras", included: true },
        { text: "Plano devocional familiar", included: true },
        { text: "Suporte prioritário", included: true },
        { text: "Atualizações gratuitas", included: true },
        { text: "Cartões Para Memorização", included: true },
        { text: "Livro de Atividades Cristãs", included: true },
        { text: "Aventuras Bíblicas", included: true },
        { text: "Desenhos diversos para colorir", included: true }
      ],
      buttonText: "Escolher Pacote",
      buttonStyle: "bg-white text-brand-green hover:bg-gray-100",
      isPopular: true
    }
  ];

  const handlePlanSelection = (planName: string) => {
    alert(`Redirecionando para checkout do ${planName}...`);
    // TODO: Integrate with payment processor
  };

  return (
    <section id="pricing" className="py-20 bg-white" data-testid="section-pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-pricing-title">
            Oferta Especial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Escolha o pacote ideal para sua família e comece hoje mesmo a transformar os momentos de diversão em aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-8 max-w-4xl mx-auto space-y-8 md:space-y-0">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`${plan.isPopular 
                ? 'bg-gradient-to-br from-brand-green to-green-600 text-white shadow-2xl transform scale-105 relative' 
                : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl'
              } rounded-2xl p-8 transition-shadow`}
              data-testid={`card-plan-${index}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-yellow text-black px-6 py-2 rounded-full font-bold text-sm flex items-center">
                    <Star className="mr-1" size={16} />
                    MAIS VENDIDO
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.isPopular ? 'text-white' : 'text-gray-800'}`} data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-brand-blue'}`} data-testid={`text-plan-price-${index}`}>
                  {plan.price}
                </div>
                <p className={plan.isPopular ? 'text-green-100' : 'text-gray-600'} data-testid={`text-plan-description-${index}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center" data-testid={`text-plan-feature-${index}-${featureIndex}`}>
                    {feature.included ? (
                      <Check className={`mr-3 ${plan.isPopular ? 'text-white' : 'text-brand-green'}`} size={20} />
                    ) : (
                      <X className="mr-3 text-red-500" size={20} />
                    )}
                    <span className={`${plan.isPopular ? 'text-white' : 'text-gray-700'} ${!feature.included ? 'opacity-60' : ''}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handlePlanSelection(plan.name)}
                className={`w-full py-4 rounded-full font-bold text-lg transition-colors ${plan.buttonStyle}`}
                data-testid={`button-plan-select-${index}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
