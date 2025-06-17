import React from 'react';

const projects = [
  {
    title: 'Village Water Access',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Solar borehole for a remote village, providing clean water to 150+ people.',
    location: 'Kerewan, North Bank Region',
    date: 'Completed: April 2024',
  },
  {
    title: 'Commercial Farm Supply',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Deep borehole and filtration for a large-scale vegetable farm.',
    location: 'Janjanbureh, Central River Region',
    date: 'Completed: March 2024',
  },
  {
    title: 'School Water Project',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Safe water supply and hygiene training for a rural school.',
    location: 'Basse, Upper River Region',
    date: 'Completed: February 2024',
  },
  {
    title: 'Estate Filtration Upgrade',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
    description: 'Filtration system upgrade for a residential estate.',
    location: 'Kanifing, Kanifing Region',
    date: 'Completed: January 2024',
  },
  {
    title: 'Clinic Water Security',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Reliable borehole and backup pump for a rural clinic.',
    location: 'Jarra East, Lower River Region',
    date: 'Completed: December 2023',
  },
  {
    title: 'Community Irrigation',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Irrigation borehole for a women\'s gardening cooperative.',
    location: 'Kombo South, West Coast Region',
    date: 'Completed: November 2023',
  },
  {
    title: 'Hotel Water System',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'High-capacity borehole and filtration for a coastal hotel.',
    location: 'Bakau, Kanifing Region',
    date: 'Completed: October 2023',
  },
  {
    title: 'Urban School Upgrade',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Water system upgrade for an urban primary school.',
    location: 'Serrekunda, Kanifing Region',
    date: 'Completed: September 2023',
  },
  {
    title: 'Fish Farm Water Supply',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Borehole and filtration for a new aquaculture project.',
    location: 'Farafenni, North Bank Region',
    date: 'Completed: August 2023',
  },
  {
    title: 'Mosque Water Project',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Community borehole for a mosque and surrounding homes.',
    location: 'Soma, Lower River Region',
    date: 'Completed: July 2023',
  },
  {
    title: 'Market Water Access',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Water supply and filtration for a busy local market.',
    location: 'Brikama, West Coast Region',
    date: 'Completed: June 2023',
  },
  {
    title: 'NGO Partnership Project',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Joint project with an NGO to provide water to a remote settlement.',
    location: 'Wuli West, Upper River Region',
    date: 'Completed: May 2023',
  },
];

const PortfolioPage = () => (
  <div className="max-w-7xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Project Portfolio</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
  </div>
);

export default PortfolioPage; 