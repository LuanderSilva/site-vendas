import { useEffect } from "react";
import HeroSection from "@/components/sections/hero-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import BooksCarouselSection from "@/components/sections/books-carousel-section";
import BenefitsSection from "@/components/sections/benefits-section";
import SocialProofSection from "@/components/sections/social-proof-section";
import PricingSection from "@/components/sections/pricing-section";
import FAQSection from "@/components/sections/faq-section";
import FloatingCTA from "@/components/ui/floating-cta";
import { Button } from "@/components/ui/button";
import { Book, ShoppingCart } from "lucide-react";

export default function Home() {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // SEO metadata
    document.title = "Bíblia Goods - ColoriMente | Livros de Colorir Cristãos";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Desenvolvimento infantil na hora de pintar com foco, disciplina e criatividade. Livros de colorir cristãos para células, escola dominical e devocional familiar.');
    }
  }, []);

  return (
    <div className="font-inter bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50" data-testid="header">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
              <Book className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue">ColoriMente</h1>
          </div>
          <Button 
            onClick={scrollToPricing}
            className="bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            data-testid="button-header-cta"
          >
            Quero Bíblia Goods
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection onCTAClick={scrollToPricing} />
        <WhyChooseSection />
        <BooksCarouselSection onCTAClick={scrollToPricing} />
        <BenefitsSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-brand-blue to-blue-600 text-white py-12" data-testid="footer">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Book className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">ColoriMente</h3>
          </div>
          <p className="text-blue-100 mb-6">Desenvolvendo fé, criatividade e aprendizado através da arte</p>
          <div className="border-t border-blue-400 pt-6">
            <p className="text-blue-200">© 2025 ColoriMente | Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingCTA onClick={scrollToPricing} />
    </div>
  );
}
