
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-primary text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Nandini Gupta</h3>
            <p className="text-sm opacity-80">Front-End Web Developer</p>
          </div>

          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-portfolio-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-portfolio-light transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-portfolio-light transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-portfolio-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm opacity-80">
            <p>&copy; {currentYear} Nandini Gupta. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
