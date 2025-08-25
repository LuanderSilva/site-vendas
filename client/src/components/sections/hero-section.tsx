import { Button } from "@/components/ui/button";
import { Users, School, Home, GraduationCap, ShoppingCart } from "lucide-react";
import heroImage from "@assets/Gemini_Generated_Image_dsfoxrdsfoxrdsfo_1756070827781.png";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-brand-blue to-blue-600 text-white py-20 relative overflow-hidden" data-testid="section-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Bíblia Goods - <span className="text-brand-yellow">Pequenos Artistas</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed" data-testid="text-hero-subtitle">
              Desenvolvimento infantil na hora de pintar com foco, disciplina e criatividade.
            </p>
            
            {/* Tags/Selos */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Users className="mr-2" size={16} />Células
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <School className="mr-2" size={16} />Escola Dominical
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Home className="mr-2" size={16} />Devocional Familiar
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <GraduationCap className="mr-2" size={16} />Pedagogia
              </span>
            </div>

            {/* Botão CTA - hidden no mobile, mostrado no desktop */}
            <div className="hidden lg:block">
              <Button 
                onClick={onCTAClick}
                className="bg-brand-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transform hover:scale-105 transition-all shadow-lg"
                data-testid="button-hero-cta"
              >
                <ShoppingCart className="mr-2" size={20} />
                Quero Bíblia Goods
              </Button>
            </div>
          </div>
          
          <div className="text-center order-2 lg:order-2">
            <img 
              src={heroImage} 
              alt="Crianças colorindo livros cristãos com desenhos bíblicos" 
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform w-full max-w-lg"
              data-testid="img-hero-children"
            />
          </div>

          {/* Botão CTA - mostrado apenas no mobile, abaixo da imagem */}
          <div className="lg:hidden order-3 text-center">
            <Button 
              onClick={onCTAClick}
              className="bg-brand-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transform hover:scale-105 transition-all shadow-lg"
              data-testid="button-hero-cta-mobile"
            >
              <ShoppingCart className="mr-2" size={20} />
              Quero Bíblia Goods
            </Button>
          </div>
        </div>
      </div>
      
      {/* Efeito de ondas na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-gray-50"
          />
        </svg>
      </div>
    </section>
  );
}
