import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import noahArkImage from "@assets/Gemini_Generated_Image_zif1vbzif1vbzif1_1756074374591.png";
import davidGoliathImage from "@assets/Davi e Golias_1756076356614.jpeg";
import babyMosesImage from "@assets/bebemoises_1756076267525.jpeg";
import versiculosImage from "@assets/versiculos_1756076911389.jpeg";

interface BooksCarouselSectionProps {
  onCTAClick: () => void;
}

export default function BooksCarouselSection({ onCTAClick }: BooksCarouselSectionProps) {
  const books = [
    {
      title: "A Arca de Noé",
      description: "Aventura épica de fé e obediência com animais adoráveis para colorir.",
      pages: 23,
      image: noahArkImage,
      isPopular: false
    },
    {
      title: "Davi e Golias",
      description: "História inspiradora de coragem e fé em Deus para enfrentar desafios.",
      pages: 13,
      image: davidGoliathImage,
      isPopular: true
    },
    {
      title: "O bebê Moisés",
      description: "A emocionante história do bebê que foi salvo das águas por Deus.",
      pages: 12,
      image: babyMosesImage,
      isPopular: false
    },
    {
      title: "Versículos Bíblicos",
      description: "Mais de 300 versículos bíblicos para estudos.",
      pages: 20,
      image: versiculosImage,
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" data-testid="section-books-carousel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-books-title">
            Conheça alguns dos nossos livros de colorir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-books-subtitle">
            Livros exclusivos que unem fé, criatividade e aprendizado em histórias bíblicas emocionantes.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mb-12"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {books.map((book, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${book.isPopular ? 'border-2 border-brand-yellow' : ''}`}
                  data-testid={`card-book-${index}`}
                >
                  {book.isPopular && (
                    <div className="bg-brand-yellow text-black px-3 py-1 rounded-full text-sm font-bold mb-4 inline-flex items-center">
                      <Star className="mr-1" size={16} />
                      Mais Popular
                    </div>
                  )}
                  <img 
                    src={book.image} 
                    alt={`Livro de colorir ${book.title}`} 
                    className="w-full h-64 object-cover rounded-xl mb-4"
                    data-testid={`img-book-${index}`}
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`text-book-title-${index}`}>
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`text-book-description-${index}`}>
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-green font-semibold" data-testid={`text-book-pages-${index}`}>
                      📚 {book.pages} páginas
                    </span>
                    <span className="text-brand-blue font-semibold">🎨 Ilustrações 3D</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center">
          <Button 
            onClick={onCTAClick}
            className="bg-brand-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transform hover:scale-105 transition-all shadow-lg"
            data-testid="button-books-cta"
          >
            <ShoppingCart className="mr-2" size={20} />
            Quero Bíblia Goods
          </Button>
        </div>
      </div>
    </section>
  );
}
