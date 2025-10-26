import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Keep ArrowRight or change if desired

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">

        {/* Your Name */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 fade-in text-accent-primary tracking-widest uppercase">
          Manoj Murari
        </h2>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-light mb-8 fade-in text-light-primary leading-tight">
          I architect and build{" "}
          <span className="font-medium">autonomous AI agents</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-light-secondary mb-12 max-w-3xl mx-auto fade-in leading-relaxed">
          A systems builder creating end-to-end intelligent applications
          that solve real-world problems with measurable impact.
        </p>

        {/* Updated Button */}
        <Button
          asChild // Keep asChild to use the <a> tag inside
          className="magnetic-hover bg-accent-primary hover:bg-accent-secondary text-white px-8 py-4 text-lg rounded-full font-medium fade-in transition-all duration-300 shadow-lg hover:shadow-accent-primary/25"
        >
          {/* Updated <a> tag */}
          <a
            href="https://linkedin.com/in/manojmurari" // Changed href to LinkedIn URL
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice for external links
            className="inline-flex items-center gap-2"
          >
            Connect on LinkedIn {/* Updated text */}
            <ArrowRight className="w-5 h-5" /> {/* Or use a LinkedIn icon */}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;