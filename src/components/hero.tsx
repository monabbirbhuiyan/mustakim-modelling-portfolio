"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen pt-16 overflow-hidden bg-background flex items-center justify-center">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full h-full">
        {/* Image Section */}
        <div className="relative h-1/2 md:h-full w-full animate-scale-in">
          <Image
            src="/assets/Mustakim-Headshot.jpg"
            alt="Mustakim Portrait"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-6 md:py-12 sm:md:py-0 animate-slide-in-right h-1/2 md:h-full">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Premium Model
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Mustakim Kabir
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed font-light">
              Aspiring model with a creative background. Extroverted,
              expressive, and always ready for the camera.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToPortfolio}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-widest hover:opacity-90 transition-opacity duration-300"
              >
                View Portfolio
              </button>
              <button className="px-8 py-3 border border-primary text-primary font-medium text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
