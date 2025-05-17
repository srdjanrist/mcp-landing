
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import AlternativesComparison from "@/components/AlternativesComparison";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorks />
        <AlternativesComparison />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
