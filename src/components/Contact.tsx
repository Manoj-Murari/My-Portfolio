import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-12 fade-in text-light-primary">
          Let's build the future
        </h2>
        
        <a 
          href="mailto:manoj.murari.001@gmail.com"
          className="text-2xl md:text-3xl text-light-primary hover:text-accent-primary transition-colors duration-300 underline-reveal mb-16 inline-block fade-in font-medium"
        >
          manoj.murari.001@gmail.com
        </a>
        
        <div className="flex justify-center gap-8 fade-in">
          <a 
            href="https://linkedin.com/in/manojmurari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="svg-animate p-4 hover:bg-accent-primary/10 hover:text-accent-primary rounded-full transition-all duration-300 border border-transparent hover:border-accent-primary/20"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          
          <a 
            href="https://github.com/Manoj-Murari/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="svg-animate p-4 hover:bg-accent-primary/10 hover:text-accent-primary rounded-full transition-all duration-300 border border-transparent hover:border-accent-primary/20"
            aria-label="GitHub Profile"
          >
            <Github className="w-8 h-8" />
          </a>
          
          <a 
            href="mailto:manoj.murari.001@gmail.com"
            className="svg-animate p-4 hover:bg-accent-primary/10 hover:text-accent-primary rounded-full transition-all duration-300 border border-transparent hover:border-accent-primary/20"
            aria-label="Send Email"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;