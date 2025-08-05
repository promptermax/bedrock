import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-card shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo/Bedrock-Color-without-tagline.svg" alt="Bedrock Gambia" className="h-[100px] w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-card-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-card-foreground hover:text-primary transition-colors">About Us</Link>
            <a href="/#services" className="text-card-foreground hover:text-primary transition-colors">Services</a>
            <a href="/#why-choose-us" className="text-card-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="/#contact" className="text-card-foreground hover:text-primary transition-colors">Contact</a>
            <Link to="/faq" className="text-card-foreground hover:text-primary transition-colors">FAQ</Link>
          </nav>
          <Link to="/get-a-quote">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cta-button">Get Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
