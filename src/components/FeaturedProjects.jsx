import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Community Borehole - Brikama',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Installed a solar-powered borehole providing clean water to over 200 residents in Brikama.',
    location: 'Brikama, West Coast Region',
    date: 'Completed: March 2024',
  },
  {
    title: 'Farm Irrigation Project',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Drilled a deep borehole and set up a filtration system for a commercial farm.',
    location: 'Jarra West, Lower River Region',
    date: 'Completed: January 2024',
  },
  {
    title: 'School Water Supply',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Provided a safe, reliable water source for a rural school, including maintenance training.',
    location: 'Wuli East, Upper River Region',
    date: 'Completed: December 2023',
  },
];

const FeaturedProjects = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
          🌟 Our Work
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See how Bedrock Gambia is making a difference with real-world water solutions across the country.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2 flex-1">{project.description}</p>
            <div className="text-sm text-gray-500 mb-1">{project.location}</div>
            <div className="text-xs text-gray-400">{project.date}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/portfolio">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow">
            View More Projects
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProjects; 