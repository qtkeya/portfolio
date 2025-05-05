import React from 'react';
import '../App.css'; // or use separate Experience.css if preferred

const experiences = [
  {
    company: "ZENITH",
    role: "Software Engineering Project", // or Developer, Engineer, etc.
    duration: "January 2024 – April 2024",
    description: "Worked on building scalable web applications using React and Node.js. Collaborated with senior developers to improve UI/UX and deployed several key features into production."
  },
  // You can add more experiences here in the future
];

const Experience = () => {
  return (
    <section className="projects" id="experience">
      <div className="projects-container">
        <h2 className="section-title">Experience</h2>
        <div className="projects-grid">
          {experiences.map((exp, index) => (
            <div className="project-card" key={index}>
              <h3>{exp.role}</h3>
              <h4 className="company-name">{exp.company}</h4>
              <p className="experience-duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;