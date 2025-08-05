import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Settings, Wrench, CheckCircle, Drill } from 'lucide-react';
import heroImage from '../assets/hero-image.png';
import { Link } from 'react-router-dom';

function HomePage() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ message: 'Sending...', type: 'info' });

    // IMPORTANT: Replace with your actual EmailJS credentials
    // You will need a different template for this form
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_CONTACT_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setFormStatus({ message: 'Message sent successfully!', type: 'success' });
        form.current.reset();
      }, (error) => {
        setFormStatus({ message: `Failed to send message. Please try again. Error: ${error.text}`, type: 'error' });
      });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/20 px-4 py-2 rounded-full text-sm mb-6">
                🚀 Trusted Water Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-arsenica-extrabold mb-6">
                From ground to growth
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Your trusted partner for borehole drilling and water system maintenance in The Gambia. We provide reliable access to clean, safe water for homes, farms, and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-a-quote">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Get Started Today
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary bg-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="hero-image bg-primary/20 rounded-lg p-4 backdrop-blur-sm">
                <img 
                  src={heroImage} 
                  alt="Professional water drilling rig in action" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card text-primary p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              🔧 What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Complete Water Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in comprehensive water system services that ensure reliable access to clean, safe water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Borehole Drilling */}
            <div className="bg-[#F2F3AE] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Drill className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Borehole Drilling</h3>
              <p className="text-muted-foreground mb-6">
                Professional borehole drilling using modern equipment and trained professionals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Site assessment and drilling</li>
                <li>• Pump installation</li>
                <li>• Water yield testing</li>
                <li>• Professional equipment</li>
              </ul>
            </div>

            {/* Water Filtration Installation */}
            <div className="bg-[#F2F3AE] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Water Filtration Installation</h3>
              <p className="text-muted-foreground mb-6">
                Complete filtration systems for clean, safe water.
              </p>
              <p className="text-sm text-muted-foreground">
                Comprehensive filtration systems ensure your water is ready for immediate use.
              </p>
            </div>

            {/* Maintenance & After-Service */}
            <div className="bg-[#F2F3AE] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Maintenance & After-Service</h3>
              <p className="text-muted-foreground mb-6">
                Reliable post-installation servicing year after year.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tank cleaning</li>
                <li>• Submersible pump servicing</li>
                <li>• Filter replacement</li>
                <li>• Routine system checks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id = "why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
🏆 Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Built to Address Industry Frustrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're aware of the common frustrations in the borehole industry — and we've built our model to address them head-on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">What you see is what you pay. Our pricing is clear, consistent, and based on a documented pricing policy.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-2">Safety-First Drilling</h3>
                <p className="text-muted-foreground">We prioritize proper site placement to prevent contamination and follow environmental best practices.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-2">Dependable Aftercare</h3>
                <p className="text-muted-foreground">We don't walk away after installation. We offer reliable post-installation servicing year after year.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-2">Clean Water Guaranteed</h3>
                <p className="text-muted-foreground">Every borehole comes with a filtration system to deliver safe, clean water from the start.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-2">Locally Grounded</h3>
                <p className="text-muted-foreground">We're a proudly Gambian company. We know the terrain, challenges, and provide dependable solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-card-foreground mb-2">Professional Standards</h3>
                <p className="text-muted-foreground">Professional standard with solutions that uplift households, farms, and businesses across Gambia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FeaturedProjects /> */}

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center mb-10 lg:mb-0">
            <div className="inline-block bg-primary/20 px-4 py-2 rounded-full text-sm mb-6">Contact Us</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-primary-foreground/90 mb-6 max-w-lg">Have a question, need a quote, or want to discuss your water project? Reach out and our team will get back to you within 24 hours.</p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="ml-2">+220 3014290 / 3139076</span>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="ml-2">info@bedrockgambia.com</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="ml-2">The Gambia</span>
              </div>
            </div>
            <div className="text-sm text-primary-foreground/80 mb-2">We respect your privacy. Your information will never be shared.</div>
            <div className="text-sm text-primary-foreground/80">Our team is available Monday to Saturday, 8am – 6pm.</div>
          </div>
          {/* Contact Form */}
          <div className="flex-1 flex flex-col justify-center w-full max-w-lg bg-card rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Send Us a Message</h3>
            {formStatus.message && (
              <div className={`text-center mb-4 p-2 rounded-md ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : formStatus.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                {formStatus.message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-card-foreground mb-1">Name</label>
                <input id="contact-name" type="text" name="user_name" required className="w-full border border-border bg-background text-foreground p-2 rounded" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-card-foreground mb-1">Email</label>
                <input id="contact-email" type="email" name="user_email" required className="w-full border border-border bg-background text-foreground p-2 rounded" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-card-foreground mb-1">Phone</label>
                <input id="contact-phone" type="tel" name="user_phone" className="w-full border border-border bg-background text-foreground p-2 rounded" placeholder="Phone (optional)" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-card-foreground mb-1">Message</label>
                <textarea id="contact-message" name="message" required className="w-full border border-border bg-background text-foreground p-2 rounded" placeholder="How can we help you?" rows={4}></textarea>
              </div>
              <button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2 rounded font-semibold w-full">Send Message</button>
              <div className="text-xs text-muted-foreground text-center mt-2">We typically respond within 24 hours.</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
