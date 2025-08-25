import { useState, useEffect } from "react";
import { Check, ShoppingBag } from "lucide-react";

const salesData = [
  { name: "Maria Silva", region: "São Paulo - SP", package: "Premium", time: "há 2 minutos" },
  { name: "João Santos", region: "Rio de Janeiro - RJ", package: "Básico", time: "há 5 minutos" },
  { name: "Ana Costa", region: "Belo Horizonte - MG", package: "Premium", time: "há 8 minutos" },
  { name: "Pedro Oliveira", region: "Salvador - BA", package: "Premium", time: "há 12 minutos" },
  { name: "Fernanda Lima", region: "Brasília - DF", package: "Básico", time: "há 15 minutos" },
  { name: "Carlos Rodrigues", region: "Fortaleza - CE", package: "Premium", time: "há 18 minutos" },
  { name: "Juliana Mendes", region: "Porto Alegre - RS", package: "Premium", time: "há 22 minutos" },
  { name: "Rafael Alves", region: "Recife - PE", package: "Básico", time: "há 25 minutos" },
  { name: "Camila Ferreira", region: "Curitiba - PR", package: "Premium", time: "há 28 minutos" },
  { name: "Bruno Cardoso", region: "Goiânia - GO", package: "Premium", time: "há 32 minutos" },
  { name: "Larissa Souza", region: "Manaus - AM", package: "Básico", time: "há 35 minutos" },
  { name: "Diego Martins", region: "São Luís - MA", package: "Premium", time: "há 38 minutos" }
];

export default function SalesNotification() {
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      // Esconder após 6 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // Mostrar primeira notificação após 3 segundos
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    // Depois mostrar a cada 15 segundos
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % salesData.length;
      setCurrentIndex(nextIndex);
      setCurrentSale(salesData[nextIndex]);
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [currentIndex]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-6 right-6 z-50 max-w-sm"
      data-testid="sales-notification"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 animate-in slide-in-from-right duration-500">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center mr-3">
            <Check className="text-white" size={16} />
          </div>
          <div className="flex items-center">
            <ShoppingBag className="text-brand-green mr-1" size={16} />
            <span className="text-sm font-semibold text-gray-800">Nova compra!</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-semibold text-gray-800" data-testid="text-buyer-name">
            {currentSale.name}
          </p>
          <p className="text-xs text-gray-600" data-testid="text-buyer-location">
            {currentSale.region}
          </p>
          <p className="text-xs text-brand-green font-medium" data-testid="text-package-purchased">
            Comprou o Pacote {currentSale.package}
          </p>
          <p className="text-xs text-gray-500" data-testid="text-purchase-time">
            {currentSale.time}
          </p>
        </div>
      </div>
    </div>
  );
}