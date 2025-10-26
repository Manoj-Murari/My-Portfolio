import React from 'react'; // Make sure React is imported

const About = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Keeping the updated title */}
        <h2 className="text-4xl md:text-6xl font-light mb-16 fade-in text-light-primary">
          The AI Systems Architect
        </h2>

        <div className="text-xl md:text-2xl leading-relaxed text-light-secondary fade-in space-y-8">
          {/* Keeping the updated paragraphs */}
          <p>
            My passion lies in architecting and building intelligent systems that solve real-world problems. I thrive on tackling complexity end-to-end, from conceptualizing AI agent workflows to deploying robust, scalable applications.
          </p>

          <p className="font-medium text-light-primary">
            The projects showcased here represent my drive to create complete, impactful AI-driven applications, demonstrating a deep understanding of both software engineering principles and modern AI capabilities.
          </p>

          {/* Restored Metrics Section (with updated project count) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
              {/* Updated project count from 3 to 4 */}
              <div className="text-3xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform">4</div>
              {/* You might want to adjust the text here slightly if "3 months" is no longer accurate */}
              <div className="text-sm text-light-tertiary">High-Impact Projects Built</div>
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