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
    document.title = "Bíblia Goods - Pequenos Artistas | Livros de Colorir Cristãos";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Desenvolvimento infantil na hora de pintar com foco, disciplina e criatividade. Livros de colorir cristãos para células, escola dominical e devocional familiar.');
    }
  }, []);

  return (
    <div className="font-poppins bg-gray-50">
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
            <h3 className="text-2xl font-bold">Pequenos Artistas</h3>
          </div>
          <p className="text-blue-100 mb-6">Desenvolvendo fé, criatividade e aprendizado através da arte</p>
          <div className="border-t border-blue-400 pt-6">
            <p className="text-blue-200">© 2025 Pequenos Artistas | Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingCTA onClick={scrollToPricing} />
    </div>
  );
}
