"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full md:min-h-120 overflow-hidden animate-fade-in-up">
            <Image
              src="/A08.png"
              alt="About the Model"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Why Choose Me
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                With a creative background and a passion for visual
                storytelling, I bring energy, authenticity, and expression to
                every shoot. As an aspiring model, I’m confident, camera-ready,
                and eager to collaborate with photographers, brands, and
                agencies to create impactful imagery. My extroverted nature
                allows me to adapt easily on set, connect naturally with the
                team, and convey a wide range of emotions through movement and
                expression. I’m dedicated to growing within the industry,
                continuously refining my craft, and bringing creativity and
                professionalism to every project.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold mt-1">✓</span>
                <p className="text-base text-muted-foreground">
                  Professional & Reliable
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold mt-1">✓</span>
                <p className="text-base text-muted-foreground">
                  Internationally Experienced
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold mt-1">✓</span>
                <p className="text-base text-muted-foreground">
                  Versatile & Adaptable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
