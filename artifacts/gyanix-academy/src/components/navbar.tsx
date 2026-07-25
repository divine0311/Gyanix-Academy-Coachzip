import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/scholarship", label: "G-SET Scholarship" },
    { href: "/results", label: "Results" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faculty", label: "Faculty" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50 relative group">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary transition-transform group-hover:scale-105">
            <path d="M12 28L20 12L28 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 20L24 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="28" cy="12" r="4" fill="#f4841f"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-primary leading-none tracking-tight">Gyanix</span>
            <span className="text-[10px] font-bold text-secondary tracking-[0.25em] leading-none mt-1">ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location === link.href ? "text-secondary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="secondary" className="font-semibold gap-2 rounded-full px-6">
              <Phone className="w-4 h-4" />
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 relative p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col justify-center px-8`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                location === link.href ? "text-secondary" : "text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" size="lg" className="w-full font-bold text-lg rounded-xl gap-2">
                <Phone className="w-5 h-5" /> Enquire Now
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
