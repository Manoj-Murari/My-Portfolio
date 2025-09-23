import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        
        {/* Your Name (Styled as a prominent title) */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 fade-in text-accent-primary tracking-widest uppercase">
          Manoj Murari
        </h2>
        
        {/* Main Headline (The largest and most important text) */}
        <h1 className="text-5xl md:text-7xl font-light mb-8 fade-in text-light-primary leading-tight">
          I architect and build{" "}
          <span className="font-medium">autonomous AI agents</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-light-secondary mb-12 max-w-3xl mx-auto fade-in leading-relaxed">
          A systems builder creating end-to-end intelligent applications 
          that solve real-world problems with measurable impact.
        </p>
        
        {/* Button */}
        <Button 
          asChild
          className="magnetic-hover bg-accent-primary hover:bg-accent-secondary text-white px-8 py-4 text-lg rounded-full font-medium fade-in transition-all duration-300 shadow-lg hover:shadow-accent-primary/25"
        >
          <a href="mailto:manojmurari3571@gmail.com" className="inline-flex items-center gap-2">
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;