import { useState } from "react";
import { ChevronDown, Shield } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs = [
    {
      id: "delivery",
      question: "Como recebo os livros?",
      answer: "Após a compra, você receberá imediatamente por email todos os arquivos em PDF para download. Você pode imprimir quantas vezes quiser em casa ou numa gráfica."
    },
    {
      id: "printing",
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Com sua compra você tem direito de impressão ilimitada para uso pessoal e familiar. Pode imprimir para seus filhos, netos, aulas ou qualquer atividade não comercial."
    },
    {
      id: "age",
      question: "Qual a faixa etária recomendada?",
      answer: "Nossos livros são ideais para crianças de 3 a 12 anos. Temos diferentes níveis de complexidade para acompanhar o desenvolvimento da criança."
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" data-testid="section-faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-faq-title">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600" data-testid="text-faq-subtitle">
            Tire suas dúvidas sobre nossos livros de colorir cristãos.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-2xl shadow-lg" data-testid={`card-faq-${index}`}>
              <button 
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-gray-800 hover:text-brand-blue transition-colors"
                data-testid={`button-faq-toggle-${index}`}
              >
                {faq.question}
                <ChevronDown 
                  className={`transform transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 text-gray-600" data-testid={`text-faq-answer-${index}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Box */}
        <div className="bg-gradient-to-r from-brand-green to-green-600 text-white p-8 rounded-2xl text-center shadow-xl" data-testid="card-guarantee">
          <div className="flex items-center justify-center mb-4">
            <Shield className="mr-4" size={48} />
            <h3 className="text-2xl font-bold" data-testid="text-guarantee-title">Garantia de 7 dias</h3>
          </div>
          <p className="text-xl text-green-100" data-testid="text-guarantee-description">
            Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
