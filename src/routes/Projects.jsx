import React from 'react';
import '../App.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my frontend projects and design skills using ReactJs.",
    github: "https://github.com/qtkeya/portfolio",
    demo: "https://nurkiyasueno.netlify.app/",
    tech: ["React", "CSS", "JavaScript"]
  },
  {
    title: "Science Calculator",
    description: "A science calculator that is from our weekly prokect and is made by RaectJs",
    github: "https://github.com/qtkeya/scientific-calculator.git",
    demo: "https://scientific-calcu.netlify.app/",
    tech: ["React", "API", "Bootstrap"]
  },
  
];

 function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span className="tech-pill" key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
