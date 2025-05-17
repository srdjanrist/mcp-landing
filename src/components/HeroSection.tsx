
import React from "react";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, ChartBarIcon, Book, LightbulbIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full">
              <BriefcaseBusiness className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Your AI-Powered <span className="gradient-text">Marketing Assistant</span> for Small Apparel Brands
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Stop juggling spreadsheets and multiple tools. BrandMate analyzes your social media performance, customer feedback, and market trends in one simple dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              See Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <ChartBarIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unified Analytics</h3>
            <p className="text-slate-600">All your marketing data from different platforms in one place.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Book className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learns & Remembers</h3>
            <p className="text-slate-600">Recalls your successful campaigns and adapts to your brand's unique needs.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <LightbulbIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
            <p className="text-slate-600">Clear recommendations based on data, not guesswork.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
