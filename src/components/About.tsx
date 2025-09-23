const About = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-16 fade-in text-light-primary">
          The Builder
        </h2>
        
        <div className="text-xl md:text-2xl leading-relaxed text-light-secondary fade-in space-y-8">
          <p>
            My passion is building functional, high-impact software at maximum velocity. 
            I focus on the entire system, from the initial concept and architecture to the final, deployed product.
          </p>
          
          <p className="font-medium text-light-primary">
            The projects in my portfolio are not simple exercises. They are complete, working applications that demonstrate my ability to tackle complex challenges and ship real code.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
              <div className="text-3xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform">3</div>
              <div className="text-sm text-light-tertiary">Senior-Level Projects Built in 3 Months</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-light-tertiary">End-to-End Code Ownership</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform">10k+</div>
              <div className="text-sm text-light-tertiary">Users Scalability Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;