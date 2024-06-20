// src/pages/Portfolio/Portfolio.js
import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Project One', description: 'Description for project one' },
    { id: 2, title: 'Project Two', description: 'Description for project two' },
    { id: 3, title: 'Project Three', description: 'Description for project three' },
    { id: 4, title: 'Project Four', description: 'Description for project four' },
  ];

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
