"use client";

import type React from "react";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (send to backend, email service, etc.)
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary"
    >
      <div className="max-w-2xl mx-auto animate-fade-in-up">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground">
            Let's Work Together
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 font-light outline-none focus:border-primary-foreground/50 transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 font-light outline-none focus:border-primary-foreground/50 transition-colors duration-300"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 font-light outline-none focus:border-primary-foreground/50 transition-colors duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 font-light outline-none focus:border-primary-foreground/50 transition-colors duration-300 resize-none"
          />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary-foreground text-primary font-medium uppercase tracking-widest hover:opacity-90 transition-opacity duration-300"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        {submitted && (
          <p className="text-center mt-4 text-primary-foreground text-sm animate-fade-in-up">
            Thank you! I'll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
