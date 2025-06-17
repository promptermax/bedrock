import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Droplets, Settings, Wrench, CheckCircle } from 'lucide-react'
import heroImage from './assets/hero-image.png'
import solutionImage from './assets/solution-image.png'
import './App.css'
import ContactForm from './components/ContactForm'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GetAQuoteForm from './components/GetAQuoteForm'
import { useState } from 'react'
import FAQPage from './components/FAQPage'
import FeaturedProjects from './components/FeaturedProjects'
import PortfolioPage from './components/PortfolioPage'

function App() {
  const [showContact, setShowContact] = useState(false)
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Droplets className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Bedrock Gambia</span>
                <span className="text-sm text-gray-500 ml-2">From Ground to Growth</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
                <a href="#why-us" className="text-gray-700 hover:text-blue-600">Why Us</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
              </nav>
              <Link to="/get-a-quote">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="hero-section bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-block bg-blue-500/20 px-4 py-2 rounded-full text-sm mb-6">
                        🚀 Trusted Water Solutions
                      </div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        From Ground to Growth
                      </h1>
                      <p className="text-xl text-blue-100 mb-8">
                        Your trusted partner for borehole drilling and water system maintenance in The Gambia. We provide reliable access to clean, safe water for homes, farms, and businesses.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                          Get Started Today
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="hero-image bg-blue-400/20 rounded-lg p-4 backdrop-blur-sm">
                        <img 
                          src={heroImage} 
                          alt="Professional water drilling rig in action" 
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-semibold">24/7 Service</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      🔧 What We Do
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Complete Water Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      We specialize in comprehensive water system services that ensure reliable access to clean, safe water.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Borehole Drilling */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Droplets className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Borehole Drilling</h3>
                      <p className="text-gray-600 mb-6">
                        Professional borehole drilling using modern equipment and trained professionals.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Site assessment and drilling</li>
                        <li>• Pump installation</li>
                        <li>• Water yield testing</li>
                        <li>• Professional equipment</li>
                      </ul>
                    </div>

                    {/* Water Filtration Installation */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Settings className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Water Filtration Installation</h3>
                      <p className="text-gray-600 mb-6">
                        Complete filtration systems for clean, safe water.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <img 
                          src={solutionImage} 
                          alt="Water filtration system diagram" 
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        Comprehensive filtration systems ensure your water is ready for immediate use.
                      </p>
                    </div>

                    {/* Maintenance & After-Service */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Wrench className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance & After-Service</h3>
                      <p className="text-gray-600 mb-6">
                        Reliable post-installation servicing year after year.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
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
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      🏆 Why Choose Gambia
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Built to Address Industry Frustrations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      We're aware of the common frustrations in the borehole industry — and we've built our model to address them head-on.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                        <p className="text-gray-600">What you see is what you pay. Our pricing is clear, consistent, and based on a documented pricing policy.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Safety-First Drilling</h3>
                        <p className="text-gray-600">We prioritize proper site placement to prevent contamination and follow environmental best practices.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Dependable Aftercare</h3>
                        <p className="text-gray-600">We don't walk away after installation. We offer reliable post-installation servicing year after year.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Clean Water Guaranteed</h3>
                        <p className="text-gray-600">Every borehole comes with a filtration system to deliver safe, clean water from the start.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Locally Grounded</h3>
                        <p className="text-gray-600">We're a proudly Gambian company. We know the terrain, challenges, and provide dependable solutions.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Professional Standards</h3>
                        <p className="text-gray-600">Professional standard with solutions that uplift households, farms, and businesses across Gambia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <FeaturedProjects />

              {/* Contact Section */}
              <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <div className="inline-block bg-blue-500/20 px-4 py-2 rounded-full text-sm mb-6">
                      💬 Get In Touch
                    </div>
                    <h2 className="text-4xl font-extrabold mb-4">
                      Ready to Start Your Water Journey?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                      Whether you're starting fresh or need help maintaining your existing system, Bedrock is ready to support your journey — from the ground up.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center">
                    {/* Left: Contact Form */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full mx-auto md:mx-0">
                        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Send Us a Message</h3>
                        <ContactForm />
                      </div>
                    </div>
                    {/* Right: Contact Info */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="bg-blue-700/60 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center items-center text-white">
                        <div className="mb-10 flex flex-col items-center">
                          <div className="bg-blue-500/30 rounded-full p-4 mb-3">
                            <Phone className="h-10 w-10 text-white" />
                          </div>
                          <div className="text-lg font-bold mb-1">Phone / WhatsApp</div>
                          <div className="text-lg">+220 301-5490</div>
                          <div className="text-lg">+220 313-0176</div>
                        </div>
                        <div className="mb-10 flex flex-col items-center">
                          <div className="bg-blue-500/30 rounded-full p-4 mb-3">
                            <Mail className="h-10 w-10 text-white" />
                          </div>
                          <div className="text-lg font-bold mb-1">Email</div>
                          <div className="text-lg">info@bedrockgambia.com</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-500/30 rounded-full p-4 mb-3">
                            <MapPin className="h-10 w-10 text-white" />
                          </div>
                          <div className="text-lg font-bold mb-1">Location</div>
                          <div className="text-lg">The Gambia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Floating Contact Us Button */}
              <button
                className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
                onClick={() => setShowContact(true)}
              >
                Contact Us
              </button>

              {/* Contact Modal */}
              {showContact && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                      onClick={() => setShowContact(false)}
                    >
                      &times;
                    </button>
                    <ContactForm />
                  </div>
                </div>
              )}

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Droplets className="h-8 w-8 text-blue-400 mr-2" />
                      <span className="text-xl font-bold">Bedrock Gambia</span>
                    </div>
                    <p className="text-gray-400 mb-4">From Ground to Growth</p>
                    <p className="text-gray-400 text-sm">
                      We help communities thrive by unlocking one of life's most essential resources. At Bedrock, we're not just digging holes — we're building long-term water solutions that fuel life, productivity, and resilience.
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                      <p className="text-gray-500 text-sm">© 2024 Bedrock Gambia. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </footer>
            </>
          } />
          <Route path="/get-a-quote" element={<GetAQuoteForm />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

