import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 28L20 12L28 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 20L24 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="28" cy="12" r="4" fill="#f4841f"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white leading-none tracking-tight">Gyanix</span>
                <span className="text-[9px] font-bold text-secondary tracking-[0.25em] leading-none mt-1">ACADEMY</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Your Path to IIT, NEET, NDA & Defence Success. Transforming ambitious students into high achievers through expert guidance and rigorous preparation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-white/80 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">Our Courses</Link></li>
              <li><Link href="/scholarship" className="text-white/80 hover:text-secondary transition-colors text-sm">G-SET Scholarship</Link></li>
              <li><Link href="/results" className="text-white/80 hover:text-secondary transition-colors text-sm">Results & Achievements</Link></li>
              <li><Link href="/faculty" className="text-white/80 hover:text-secondary transition-colors text-sm">Our Faculty</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-secondary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Courses</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">IIT-JEE (Mains & Advanced)</Link></li>
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">NEET Preparation</Link></li>
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">NDA & Defence</Link></li>
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">CUET</Link></li>
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">RMS & Sainik School</Link></li>
              <li><Link href="/courses" className="text-white/80 hover:text-secondary transition-colors text-sm">Foundation (5th–12th)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Gali No 4, Near New Bus Stand, Main Road Karnal Road, Defence Colony, Kaithal - 136027, Haryana</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@gyanixacademy.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Gyanix Academy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
