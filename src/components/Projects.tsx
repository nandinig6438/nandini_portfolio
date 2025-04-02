
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Organic Revival",
      description:
        "A web application that facilitates farmers in selling organic vegetables online while allowing customers to order healthy vegetables and fruits.",
      tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Bootstrap 5", "Postman"],
      image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2142&auto=format&fit=crop",
    },
    {
      title: "Double Layer Encryption",
      description:
        "Developed an encoding system using Twin Decomposition for double image encryption to ensure secure transmission over the network.",
      tools: ["MATLAB"],
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience.",
      tools: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-portfolio-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-700 mb-4">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.tools.map((tool, toolIndex) => (
                  <Badge
                    key={toolIndex}
                    className="bg-portfolio-light text-portfolio-primary hover:bg-portfolio-light/80"
                  >
                    {tool}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
