"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Mustakim</h3>
            <p className="text-sm text-background/70">
              Professional Model & Brand Representative
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Email: mustakimkabir2002@gmail.com</li>
              <li>Phone: +1 (204) 333-2778</li>
              <li>Location: Toronto, ON, Canada</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">
              Follow
            </h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/mustakingggg/"
                className="text-background/70 hover:text-background transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmed-mustakim-kabir/"
                className="text-background/70 hover:text-background transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/mustakim.kabir.16"
                className="text-background/70 hover:text-background transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; {currentYear} Mustakim Kabir. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
