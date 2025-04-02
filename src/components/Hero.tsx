
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-portfolio-light/30 to-white pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-lg md:text-xl font-medium text-portfolio-secondary">
              Hello, I'm
            </h2>
          </div>
          <div className="opacity-0 animate-fadeIn animate-delay-100">
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4 text-portfolio-dark">
              Nandini Gupta
            </h1>
          </div>
          <div className="opacity-0 animate-fadeIn animate-delay-200">
            <p className="text-xl md:text-2xl font-light text-gray-600 mb-8 max-w-xl">
              Aspiring front-end web developer with a strong foundation in HTML, CSS, and JavaScript
            </p>
          </div>
          <div className="opacity-0 animate-fadeIn animate-delay-300 flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-8 py-6 rounded-lg"
              size="lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light px-8 py-6 rounded-lg"
              size="lg"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      {/* Abstract shapes for visual interest */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      <div className="hidden md:block absolute bottom-1/4 right-10 w-64 h-64 bg-portfolio-light rounded-full opacity-20"></div>
      <div className="hidden md:block absolute top-1/3 left-10 w-40 h-40 bg-portfolio-accent rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;
