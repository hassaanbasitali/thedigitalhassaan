import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground !whitespace-pre-line">thedigital</span>
              <span className="text-[#39FF14] !whitespace-pre-line">hassaan</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Digital Growth Architect specializing in building comprehensive digital ecosystems that drive measurable business growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-[#39FF14] flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all duration-300 !bg-transparent !text-transparent !border-transparent"
                aria-label="LinkedIn">

                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-[#39FF14] flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all duration-300 !border-transparent"
                aria-label="GitHub">

                <Github size={18} className="!text-transparent !bg-transparent" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-[#39FF14] flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all duration-300 !bg-transparent !text-transparent !border-transparent"
                aria-label="Twitter">

                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#39FF14] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#39FF14] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-[#39FF14] transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#39FF14] transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-[#39FF14]" />
                <a href="mailto:hassaan@example.com" className="hover:text-[#39FF14] transition-colors !whitespace-pre-line">hassaanbasitali@gmail.com

                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-[#39FF14]" />
                <a href="tel:+1234567890" className="hover:text-[#39FF14] transition-colors !whitespace-pre-line">+92 300 1181 588

                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p className="!whitespace-pre-line">© {currentYear} Hassaan Basit. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}