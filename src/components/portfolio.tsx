"use client";

import Image from "next/image";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "High Fashion Campaign",
    category: "Fashion",
    image: "/assets/A01.jpg",
  },
  {
    id: 2,
    title: "Runway Show",
    category: "Runway",
    image: "/assets/A02.jpg",
  },
  {
    id: 3,
    title: "Commercial Campaign",
    category: "Commercial",
    image: "/assets/A03.jpg",
  },
  {
    id: 4,
    title: "Editorial Shoot",
    category: "Editorial",
    image: "/assets/A04.jpg",
  },
  {
    id: 5,
    title: "Beauty Campaign",
    category: "Beauty",
    image: "/assets/A06.png",
  },
  {
    id: 6,
    title: "Luxury Brands",
    category: "Fashion",
    image: "/assets/A07.jpg",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Fashion",
    "Runway",
    "Commercial",
    "Editorial",
    "Beauty",
  ];
  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <div className="h-1 w-12 bg-primary" />
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap gap-3 mb-12 sm:mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.05 * index}s` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-140 overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === item.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Overlay Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                  hoveredId === item.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-primary-foreground font-medium mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-serif font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
