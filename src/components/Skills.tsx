import React from "react";
import { Brain, Code2, Database, Cloud, Rocket, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillCategories = [
     {
      icon: <Brain />,
      title: "AI / ML Engineering",
      skills: [
        "LLMs", "RAG Systems", "Agentic Workflows", "Model Context Protocol", "Prompt Engineering" ,
        "LangChain", "LangGraph",
        "LlamaIndex", "Transformers", "NLP", "Computer Vision",
      ],
    },
    {
      icon: <Code2 />,
      title: "Frontend Development",
      skills: [
        "React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS",
        "Tailwind CSS", "Chrome Extensions"
      ],
    },
    {
      icon: <Rocket />,
      title: "Backend Development",
      skills: ["Python", "Flask", "FastAPI", "Node.js", "Express.js"],
    },
    {
      icon: <Database />,
      title: "Databases & Data",
      skills: [
        "SQL", "Redis", "Vector Databases",
        "Neo4j", "Power BI", "Streamlit"
      ],
    },
    {
      icon: <Cloud />,
      title: "Cloud & DevOps",
      skills: [
        "Docker", "GCP", "AWS", "Firebase", "Supabase", "Vercel",
        "Netlify", "GitHub Actions", "Hostingial" // Corrected typo if needed
      ],
    },
    {
      icon: <Wrench />,
      title: "Tools & Methodologies",
      skills: [
        "Git/GitHub", "VS Code/Cursor", "Agile/Scrum", "Pytest","Google AI Studio"
      ],
    }
  ];

  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto"> {/* Use wider container */}
        <h2 className="text-4xl md:text-6xl font-light mb-20 text-center fade-in text-light-primary">
          Technical Expertise
        </h2>

        {/* Enhanced Two-Column Grid Layout with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              // Added group class, transition, hover transform & shadow
              className="group fade-in border-l-2 border-accent-primary/30 pl-6 py-4 transition-all duration-300 ease-out hover:border-accent-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-primary/10 rounded-r-lg" // Added slight rounding
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="flex items-center gap-3 text-xl font-medium mb-4 text-light-primary">
                {React.cloneElement(category.icon, { className: "w-5 h-5 text-accent-primary shrink-0 transition-transform duration-300 group-hover:scale-110" })} {/* Icon scale on hover */}
                {/* Added underline-reveal span */}
                <span className="underline-reveal">{category.title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    // Enhanced tag style with interactive hover
                    className="inline-block px-3 py-1 text-sm bg-card border border-border text-light-secondary rounded-full transition-all duration-200 hover:bg-accent-primary/10 hover:text-accent-primary hover:border-accent-primary/30 hover:scale-[1.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;