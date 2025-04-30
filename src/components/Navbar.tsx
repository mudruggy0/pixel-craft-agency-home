
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-black">
              Pixel<span className="text-primary">Craft</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              홈
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              서비스
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              포트폴리오
            </a>
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              프로세스
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              후기
            </a>
            <a 
              href="#contact" 
              className="bg-primary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-all"
            >
              문의하기
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-white z-50 flex flex-col items-center pt-10 space-y-6">
            <a 
              href="#" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              홈
            </a>
            <a 
              href="#services" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              서비스
            </a>
            <a 
              href="#portfolio" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              포트폴리오
            </a>
            <a 
              href="#process" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              프로세스
            </a>
            <a 
              href="#testimonials" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              후기
            </a>
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              문의하기
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
