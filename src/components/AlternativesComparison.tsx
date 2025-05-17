
import React from "react";
import { Check, X } from "lucide-react";

const AlternativesComparison = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Other Solutions <span className="gradient-text">Don't Work</span> for Small Brands
          </h2>
          <p className="text-lg text-slate-600">
            While enterprise tools focus on endless metrics, BrandMate gives you exactly what you need to grow your apparel brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Traditional Analytics</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Too complex with overwhelming dashboards</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Require technical expertise to interpret</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Don't remember your past campaign context</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">No unified view across platforms</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 shadow-md lg:transform lg:-translate-y-6">
            <h3 className="text-xl font-semibold mb-6 gradient-text">BrandMate</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">Simple, focused interface for busy owners</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">Plain-English insights with clear actions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">Learns from your history and audience</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">All your marketing data in one place</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Manual Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Time-consuming data collection</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Inconsistent tracking methods</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Data scattered across multiple tools</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-600">Limited insights without proper analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativesComparison;
