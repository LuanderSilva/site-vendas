import { Star } from "lucide-react";

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Ana Paula",
      rating: 5,
      comment: "Meus filhos adoraram! Agora nosso devocional em família ficou muito mais divertido e participativo. Recomendo!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Carlos Silva",
      rating: 5,
      comment: "Qualidade excepcional! As ilustrações são lindas e as crianças ficam concentradas por horas colorindo.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      name: "Profª Maria",
      rating: 5,
      comment: "Uso na escola dominical e as crianças pedem mais! Material educativo e evangélico de primeira qualidade.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" data-testid="section-social-proof">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="text-testimonials-title">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current" size={24} />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-800" data-testid="text-rating">4,9/5</span>
            <span className="text-gray-600" data-testid="text-reviews-count">com +300 avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} satisfeita com produto`} 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`img-testimonial-avatar-${index}`}
                />
                <div>
                  <h4 className="font-bold text-gray-800" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic" data-testid={`text-testimonial-comment-${index}`}>
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
