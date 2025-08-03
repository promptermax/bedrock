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
  <section className="py-20 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
          🌟 Our Work
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how Bedrock Gambia is making a difference with real-world water solutions across the country.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-2 flex-1">{project.description}</p>
            <div className="text-sm text-muted-foreground mb-1">{project.location}</div>
            <div className="text-xs text-muted-foreground/70">{project.date}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/portfolio">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow">
            View More Projects
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProjects; 