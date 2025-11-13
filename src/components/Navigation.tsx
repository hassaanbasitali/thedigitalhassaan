"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
{ href: "/", label: "Home" },
{ href: "/about", label: "About" },
{ href: "/skills", label: "Skills" },
{ href: "/services", label: "Services" },
{ href: "/contact", label: "Contact" }];


export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      "bg-background/95 backdrop-blur-md shadow-lg border-b border-[#39FF14]/20" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold group">
            <span className="text-foreground transition-colors group-hover:text-[#39FF14] !whitespace-pre-line">thedigital

            </span>
            <span className="text-[#39FF14] !whitespace-pre-line">hassaan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-[#39FF14] ${
              pathname === item.href ? "text-[#39FF14]" : "text-foreground"}`
              }>

                {item.label}
                {pathname === item.href &&
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#39FF14]" />
              }
              </Link>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-[#39FF14] transition-colors"
              aria-label="Toggle mobile menu">

              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#39FF14]/20 pt-4 bg-background/95 backdrop-blur-md rounded-lg -mx-6 px-6">
            {navItems.map((item) =>
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-medium transition-colors hover:text-[#39FF14] ${
            pathname === item.href ? "text-[#39FF14]" : "text-foreground"}`
            }>

                {item.label}
              </Link>
          )}
          </div>
        }
      </div>
    </nav>);

}