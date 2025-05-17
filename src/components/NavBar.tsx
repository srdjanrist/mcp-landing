
import React from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">BrandMate</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors">
            How it Works
          </a>
          <a href="#why-us" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
