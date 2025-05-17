
import React from "react";
import { MessageSquare, TrendingUp, Users, Star } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">BrandMate</span> Works
          </h2>
          <p className="text-lg text-slate-600">
            Your comprehensive marketing assistant that analyzes, learns, and helps you grow your apparel brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="feature-card hover-scale">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inbox Analysis</h3>
            <p className="text-slate-600">
              Understand what customers are asking about, which products generate the most interest, and identify peak engagement times.
            </p>
          </div>
          
          <div className="feature-card hover-scale">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Campaign Analysis</h3>
            <p className="text-slate-600">
              Track performance metrics of past campaigns, analyze ad reactions, and learn what worked best for your specific audience.
            </p>
          </div>
          
          <div className="feature-card hover-scale">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Insights</h3>
            <p className="text-slate-600">
              Identify your top buyers, understand review patterns, and build strategies to nurture your existing customer relationships.
            </p>
          </div>
          
          <div className="feature-card hover-scale">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Market Intelligence</h3>
            <p className="text-slate-600">
              Stay ahead with trend analysis, competitor insights, and best practices from successful campaigns in your niche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
