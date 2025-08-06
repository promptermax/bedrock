// src/components/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/hero-image.png";

function AboutPage() {
  return (
    <div className="bg-white min-h-screen"> 
      {/* The pt-20 class was removed from this line */}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bedrock Gambia</h1>
          <p className="text-xl opacity-90 mb-6">
            Building the foundation for sustainable water access and community growth across The Gambia.
          </p>
          <p className="text-lg opacity-80">
            We are a team of dedicated professionals committed to solving the nation's water challenges with integrity, innovation, and a deep-rooted focus on the communities we serve. Our story is one of purpose, driven by the belief that reliable water is the bedrock of a thriving future.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Our Story</h2>
          
          <div className="text-lg text-gray-700 space-y-6 max-w-4xl mx-auto">
            <p>
              Bedrock Gambia was founded on a simple yet powerful belief: access to clean, reliable water is fundamental to every community's growth and prosperity. Based in The Gambia, we've witnessed firsthand how proper water infrastructure transforms lives, supports agriculture, and drives economic development across our nation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-200 rounded-lg h-60 flex items-center justify-center text-gray-500 italic">
                [Image: Early project or founding moment]
              </div>
              <div className="bg-gray-200 rounded-lg h-60 flex items-center justify-center text-gray-500 italic">
                [Image: Community impact or completed project]
              </div>
            </div>
            
            <p>
              Starting with a focus on professional borehole drilling and water system services, we're building our reputation as The Gambia's most reliable water solutions partner. Our comprehensive approach includes borehole drilling, water filtration installation, and ongoing maintenance services that ensure long-term access to clean, safe water.
            </p>
            
            <p>
              While our current expertise centers on borehole services, our vision extends to becoming a complete provider of water solutions and quality construction materials as we grow and expand our capabilities to serve The Gambia's developing infrastructure needs.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link to="/#services" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold mr-4 inline-block transition duration-300">
              View Our Services
            </Link>
            <Link to="/get-a-quote" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md font-semibold inline-block transition duration-300">
              Get a Free Quote Today
            </Link>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream-50 border-l-4 border-green-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be The Gambia's leading provider of reliable water solutions and quality construction materials, contributing to improved water access and infrastructure development across the country.
              </p>
            </div>
            <div className="bg-cream-50 border-l-4 border-green-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver professional, high-quality water services and construction materials that exceed customer expectations while operating with integrity, innovation, and environmental responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Our Core Values</h2>
          
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500 italic mb-8">
            [Image: Team working together or company values in action]
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Excellence</h4>
              <p className="text-gray-600">
                We commit to the highest standards in all our operations, from initial site assessment to final project completion and ongoing support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Reliability</h4>
              <p className="text-gray-600">
                We deliver on our promises consistently and dependably, understanding that communities and businesses depend on our water solutions for their success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Integrity</h4>
              <p className="text-gray-600">
                We operate with honesty and ethical business practices, maintaining transparent communication and fair pricing throughout every project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Innovation</h4>
              <p className="text-gray-600">
                We continually improve our techniques and solutions, staying current with the latest drilling technology and water system innovations to serve our clients better.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Community Focus</h4>
              <p className="text-gray-600">
                We contribute positively to local development, understanding that every borehole we drill strengthens the foundation for community growth and prosperity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Environmental Responsibility</h4>
              <p className="text-gray-600">
                We implement sustainable practices in all our operations, ensuring our water solutions protect and preserve The Gambia's natural resources for future generations.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us */}
      <section className="bg-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Why Choose Bedrock</h2>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-500 italic mb-8 max-w-4xl mx-auto">
            [Image: Team photo or equipment showcase]
          </div>
          
          <div className="text-lg text-gray-700 space-y-6 max-w-4xl mx-auto">
            <p>
              Currently specializing in borehole drilling and water system services, we've developed comprehensive expertise in solving The Gambia's water access challenges. Our team combines technical knowledge with genuine care for the communities we serve, ensuring every project contributes to sustainable development.
            </p>
            
            <p>
              We're not just drilling boreholes – we're building the foundation for sustainable growth, healthy communities, and prosperous futures. From small community projects to large agricultural installations, we bring the same commitment to excellence and long-term success to every water solution we deliver.
            </p>
            
            <p>
              As we continue to grow, our expanding services will support The Gambia's broader infrastructure development needs, always maintaining our core commitment to quality, reliability, and community impact.
            </p>
          </div>

          <div className="mt-8">
            {/* All buttons removed from this section */}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
          
          <div className="text-lg space-y-6 max-w-3xl mx-auto">
            <p>
              Every project we undertake is backed by our commitment to quality, safety, and customer satisfaction. We don't consider a job complete until your water system is running reliably and your team is fully trained on maintenance and operation.
            </p>
            
            <p>
              When you partner with Bedrock Gambia, you're working with a team that understands that reliable water access is more than infrastructure – it's the foundation upon which communities build their future.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/#contact" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold mr-4 inline-block transition duration-300">
              Contact Us Today
            </Link>
            <Link to="/get-a-quote" className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-md font-semibold inline-block transition duration-300">
              Get Free Quote
            </Link>
          </div>
          
          <p className="italic opacity-80 mt-8">
            Ready to discuss your water solution needs? Our team is here to provide consultation and quotes tailored to your specific requirements.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;