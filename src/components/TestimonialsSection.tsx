
import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Founder, Urban Thread Co.",
      quote: "BrandMate has transformed how I manage our marketing. I finally understand which campaigns actually drive sales and why.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Marcus Chen",
      position: "Owner, Seaside Apparel",
      quote: "As someone who hates dealing with marketing analytics, this tool is a lifesaver. Simple, actionable insights that actually make sense.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Leila Patel",
      position: "CEO, Bloom Boutique",
      quote: "We've increased our ROI by 37% since using BrandMate. It helped us identify our most profitable customer segments and double down on what works.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Small Business Owners</span>
          </h2>
          <p className="text-lg text-slate-600">
            Hear from apparel brand owners who've simplified their marketing with BrandMate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover-scale">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.imageSrc} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
