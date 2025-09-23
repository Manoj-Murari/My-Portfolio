import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Web Agent",
      description: "An advanced AI agent that autonomously navigates websites to execute complex tasks. It leverages a Gemini-based reasoning engine and computer vision to interpret dynamic UIs, handle multi-step workflows, and perform intelligent error recovery.",
      tech: ["Python", "Selenium", "Gemini API", "Computer Vision", "AsyncIO"],
      metrics: ["Automates Workflows", "Scalable Design", "High-Accuracy Vision"],
      githubUrl: "https://github.com/Manoj-Murari/Project-Mini", // Make sure this link is correct
      type: "github"
    },
    {
      title: "CodeGrapher",
      description: "A developer tool that ingests entire codebases and generates interactive dependency graphs. By parsing the source code into an Abstract Syntax Tree (AST), it provides deep structural analysis to help developers visualize architecture and accelerate code comprehension.",
      tech: ["TypeScript", "React", "AST Parsing", "Tree-sitter"],
      metrics: ["Large Codebase Support", "Real-time Analysis", "Reveals Dependencies"],
      githubUrl: "https://github.com/Manoj-Murari/CodeGrapher", // Make sure this link is correct
      type: "github"
    },
    {
      title: "ourkandukur.com",
      description: "A full-stack, hyper-local community platform built from the ground up and deployed to production. Architected with a scalable serverless backend using Firebase, it features real-time data synchronization and is optimized for a fast, responsive user experience.",
      tech: ["React", "Firebase", "Node.js", "Full-Stack"],
      metrics: ["Built for Scale", "Production Deployed", "Real-time Sync"],
      liveUrl: "https://ourkandukur.com",
      githubUrl: "https://github.com/Manoj-Murari/ourkandukur", // Add GitHub link if available
      type: "live"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-6 fade-in text-light-primary">
            High-Impact Projects
          </h2>
          <p className="text-lg md:text-xl text-light-secondary mb-20 max-w-3xl mx-auto fade-in leading-relaxed">
            The following portfolio was conceived, architected, and built in a focused, three-month development sprint from June to September 2025.
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card bg-card border-border p-8 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl md:text-3xl font-medium mb-3 text-light-primary">
                  <span className="underline-reveal">{project.title}</span>
                </CardTitle>
                <CardDescription className="text-lg text-light-secondary leading-relaxed mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="px-3 py-1 text-sm bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded-full font-medium"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-card border border-muted text-light-secondary rounded-full transition-colors hover:bg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button variant="outline" asChild className="border-border hover:bg-[hsl(var(--space-border))]">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="border-border hover:bg-[hsl(var(--space-border))]">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;