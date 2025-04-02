
import React from "react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-primary">
              Aspiring Front-End Developer
            </h3>
            <div className="text-gray-700 space-y-4">
              <p>
                I am a passionate front-end web developer with a strong foundation in HTML, CSS, and JavaScript. 
                As a recent Computer Science graduate, I am eager to apply my technical skills in a professional environment 
                and contribute to innovative web projects.
              </p>
              <p>
                I specialize in creating responsive web applications using modern frameworks like React, 
                and I'm committed to delivering clean, efficient code that enhances user experiences.
              </p>
              <p>
                My education in Computer Science, combined with my practical experience in web development, 
                has equipped me with the technical expertise and problem-solving abilities needed to tackle complex challenges.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="bg-portfolio-primary hover:bg-portfolio-secondary">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-portfolio-light p-6 rounded-lg">
              <h4 className="text-xl font-bold text-portfolio-primary mb-2">Education</h4>
              <p className="text-gray-700">B.Tech in Computer Science with 6.4 CGPA</p>
            </div>
            <div className="bg-portfolio-light p-6 rounded-lg">
              <h4 className="text-xl font-bold text-portfolio-primary mb-2">Location</h4>
              <p className="text-gray-700">Agra, Uttar Pradesh, India</p>
            </div>
            <div className="bg-portfolio-light p-6 rounded-lg">
              <h4 className="text-xl font-bold text-portfolio-primary mb-2">Languages</h4>
              <p className="text-gray-700">Hindi, English</p>
            </div>
            <div className="bg-portfolio-light p-6 rounded-lg">
              <h4 className="text-xl font-bold text-portfolio-primary mb-2">Interests</h4>
              <p className="text-gray-700">Makeup, Painting, Dancing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
