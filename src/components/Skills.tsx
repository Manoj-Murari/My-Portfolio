import { Code2, Database, Brain, Zap, Globe, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["OpenAI GPT-4", "Computer Vision", "Neural Networks", "NLP", "MLOps"],
      proficiency: 95
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Development", 
      skills: ["TypeScript", "React", "Node.js", "Python", "Next.js"],
      proficiency: 90
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Infrastructure",
      skills: ["PostgreSQL", "Redis", "Docker", "AWS", "Microservices"],
      proficiency: 85
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Engineering",
      skills: ["WebAssembly", "Edge Computing", "CDN", "Caching", "Optimization"],
      proficiency: 88
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["Web APIs", "WebRTC", "PWA", "Service Workers", "WebGL"],
      proficiency: 82
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & DevOps",
      skills: ["CI/CD", "Kubernetes", "Security", "Monitoring", "Testing"],
      proficiency: 80
    }
  ];

  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-20 text-center fade-in text-light-primary">
          Technical Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-8 bg-card border border-border rounded-lg hover:border-accent-primary/30 transition-all duration-300 fade-in"
              style={{ '--stagger-index': index } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-medium mb-4 text-light-primary">
                {category.title}
              </h3>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-muted/50 text-light-secondary rounded-full transition-colors hover:bg-accent-primary/20 hover:text-accent-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-light-tertiary">Proficiency</span>
                  <span className="text-accent-primary font-medium">{category.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 rounded-full transition-all duration-1000 group-hover:from-accent-secondary group-hover:to-accent-primary"
                    style={{ width: `${category.proficiency}%` }}
                  />
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-accent-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;