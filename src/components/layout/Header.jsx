import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/#services', text: 'Services', isHashLink: true },
    { to: '/#why-choose-us', text: 'Why Us', isHashLink: true },
    { to: '/#contact', text: 'Contact', isHashLink: true },
    { to: '/faq', text: 'FAQ' },
  ];

  const renderNavLinks = (isMobile = false) => (
    navLinks.map((link) => {
      const className = isMobile 
        ? "block text-2xl font-semibold text-card-foreground hover:text-primary transition-colors py-3" 
        : "text-card-foreground hover:text-primary transition-colors";
      
      if (link.isHashLink) {
        return (
          <a key={link.to} href={link.to} className={className} onClick={() => isMobile && setIsMenuOpen(false)}>
            {link.text}
          </a>
        );
      }
      
      return (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `${className} ${isActive && !isMobile ? 'text-primary font-semibold' : ''}`}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          {link.text}
        </NavLink>
      );
    })
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-card shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src="/logo/Bedrock-Color-without-tagline.svg" 
                  alt="Bedrock Gambia" 
                  className={`w-auto transition-all duration-300 ${
                    hasScrolled ? 'h-[60px]' : 'h-[80px] md:h-[100px]'
                  }`} 
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {renderNavLinks()}
            </nav>
            
            <div className="hidden md:block">
              <Link to="/get-a-quote">
                <Button className={`bg-primary hover:bg-primary/90 text-primary-foreground cta-button transition-all duration-300 ${
                  hasScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2'
                }`}>
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-card/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center space-y-6 mb-8">
              {renderNavLinks(true)}
            </nav>
            <Link to="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground cta-button">Get Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;