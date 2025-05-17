
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to simplify your marketing?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join other small apparel brands using BrandMate to grow their business with less stress and better results.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Start Your Free 14-Day Trial
            </Button>
          </div>
          
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold gradient-text">BrandMate</span>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} BrandMate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
