import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CodeGrapher AI",
      description: "An AI-powered developer assistant that analyzes codebases, builds interactive dependency graphs, and enables code interaction via natural language chat. Leverages LangGraph agents and RAG with vector search (ChromaDB) for deep code comprehension, automated bug fixing, refactoring suggestions, and test generation.",
      tech: [
        "Python", "Flask", "LangGraph", "LangChain", "LLMs", "ChromaDB",
        "Transformers", "Celery", "Redis", "React", "TypeScript", "Docker"
       ],
      metrics: [
        "AI Code Analysis & Chat", "Agentic Task Automation", "RAG Codebase Q&A", "Interactive Dependency Graphs"
      ],
      githubUrl: "https://github.com/Manoj-Murari/CodeGrapher-AI", // Confirm URL
      type: "github"
    },
    {
      title: "Autonomous Web Agent",
      description: "An AI agent designed for autonomous website navigation and task execution. Utilizes Google's Gemini model for reasoning and Computer Vision to interpret dynamic UIs from screenshots, enabling it to handle complex, multi-step workflows and perform intelligent error recovery.",
      tech: ["Python", "Selenium", "Gemini API", "Computer Vision", "AsyncIO"],
      metrics: ["Automated Web Task Execution", "Vision-Based UI Understanding", "LLM-Driven Navigation", "Error Handling & Recovery"],
      githubUrl: "https://github.com/Manoj-Murari/AI-Web-Assistant", // Confirm URL
      type: "github"
    },
    {
      title: "Our Kandukur Startup",
      description: "Sole-engineered a full-stack, hyper-local community portal from concept to launch on a freelance basis. Features AI-driven content generation using the Gemini API, user authentication, and real-time updates managed via Firebase. Handled all aspects of development, deployment (Hostingial), SEO, and domain management.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Gemini API", "Vite", "Hostingial"],
      metrics: ["Full SDLC Ownership", "Production Deployed", "Serverless Backend", "AI Content Features", "Freelance Project"],
      liveUrl: "https://ourkandukur.com",
      githubUrl: "https://github.com/Manoj-Murari/Our-Kandukur-StartUp", 
      demoUrl: "https://www.linkedin.com/posts/manojmurari_webdevelopment-fullstack-reactjs-activity-7355549011371577344-uFzW",
      type: "live"
    },
    {
      title: "Context Crafter (Chrome Extension)",
      description: "A developer productivity tool built as a Chrome Extension. It scans code repositories (e.g., on GitHub), analyzes the file structure and content while respecting ignore rules, and generates a formatted context block optimized for pasting into Large Language Model prompts.",
      tech: ["Chrome Extension API", "TypeScript", "React", "Vite", "Tailwind CSS", "JavaScript"],
      metrics: ["Developer Tool", "Browser Extension", "Codebase Analysis", "AI Workflow Support"],
      githubUrl: "https://github.com/Manoj-Murari/Context-Crafter", 
      demoUrl: "https://www.linkedin.com/posts/manojmurari_developertools-ai-productivity-activity-7378288670644252672-PjpV",
      type: "github" 
    },
  ];

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-6 fade-in text-light-primary">
            High-Impact Projects
          </h2>
          <p className="text-lg md:text-xl text-light-secondary mb-20 max-w-3xl mx-auto fade-in leading-relaxed">
            A selection of projects demonstrating end-to-end development capabilities, from concept to deployment.
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

                {/* Updated Button Group */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-border hover:bg-[hsl(var(--space-border))] w-full sm:w-auto">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-border hover:bg-[hsl(var(--space-border))] w-full sm:w-auto">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {/* Added Demo Button */}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-border hover:bg-[hsl(var(--space-border))] w-full sm:w-auto">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                    </a>
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