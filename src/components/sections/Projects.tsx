import { FC } from 'react';
import ProjectCard from '../ui/ProjectCard';
import './Projects.scss';

const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts using the OpenWeather API. Features include location search and weather alerts.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">📂 Projects</h2>
        <p className="section-description">
          Here are some of my recent projects. Each project is a unique piece of development.
        </p>
        <div className="projects-grid">
          {sampleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
