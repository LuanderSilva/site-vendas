import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingCTAProps {
  onClick: () => void;
}

export default function FloatingCTA({ onClick }: FloatingCTAProps) {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-cta">
      <Button 
        onClick={onClick}
        className="bg-brand-green text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-green-600 transition-colors animate-pulse-slow"
        data-testid="button-floating-cta"
      >
        <ShoppingCart className="mr-2" size={20} />
        Comprar Agora
      </Button>
    </div>
  );
}
