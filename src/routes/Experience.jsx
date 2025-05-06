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

const certificatesCard = [
  {
    // 1
    name: "CCNA 200-301 Network Fundamentals Course",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyNDE1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIyNTE5NF84NTc5ODIxMTc0NjExMTI4NzU1Ny5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5061%2FLearn%2520CCNA%2520200-301%2520Network%2520Fundamentals%2520Online%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8225194_85798211746111287557.png",
  },
  {
    // 2
    name: "Introduction to Front End Development",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTMzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI4NTcyOV84NTc5ODIxMTc0NjQ2MzgyMTI3MC5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4511%2FIntroduction%2520to%2520Front%2520End%2520Development%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "/intro-to-front-end.png",
  },
  {
    // 3
    name: "ReactJS for Beginners",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI4NDgzNl84NTc5ODIxMTc0NjExMTEwNTcwNS5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8284836_85798211746111105705.png",
  },
  {
    // 4
    name: "Introduction to Cloud Security",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzU4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIwNzgyMl84NTY3NzQyMTc0NDkzNzE0NzMxMi5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4250%2FIntroduction%2520to%2520Cloud%2520Security%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8207822_85677421744937147312.png",
  },
  {
    // 5
    name: "Getting Started with Machine Learning Algorithms",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIxNjgwMF84NTcxMDk0MTc0NjExMTkxNTYzOS5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4241%2FGetting%2520Started%2520with%2520Machine%2520Learning%2520Algorithms%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "/ml-algo.png",
  },
  {
    //6
    name: "Ethical Hacking Basics",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjY4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIxNjQ2M184NTcxMDk0MTc0NTA3MzMyNjQ2Mi5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6061%2FEthical%2520hacking%2520101%2520%3A%2520Beginners%2520guide%2520to%2520Ethical%2520hacking%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8216463_85710941745073326462.png",
  },
  {
    //7
    name: "Introduction to Computer Networking Course",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NzQ3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIxNTMxOV84NTcxMDk0MTc0NTA1ODQ2MTAzMy5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyAifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7741%2FIntroduction%2520to%2520Computer-Networking%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8215319_85710941745058461033.png",
  },
  {
    // 8
    name: "Introduction to Cyber Security",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxMjEzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIwNTA1NV84NTY3NzQyMTc0NDg5NzIwODY3OC5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F3736%2FIntroduction%2520to%2520Cyber%2520Security%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8205055_85677421744897208678.png",
  },
  {
    // 9
    name: "Introduction to Cybercrime",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTUzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODIwNjE5M184NTY3NzQyMTc0NDkwMTkzOTQwMi5wbmciLCJ1c2VybmFtZSI6Ik51cmtpeWEgUy4gU3VlXHUwMGYxbyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4530%2FIntroduction%2520to%2520Cybercrime%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    img: "https://certificates.simplicdn.net/share/8206193_85677421744901939402.png",
  }
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
        <div className='certificates-container'>
          <h2 className="certificates-title">Certificates</h2>
          <div>
            {certificatesCard.map((certificate, index) => (
              <div className="certificate-card" key={index}>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <img src={certificate.img} alt={certificate.name} className="certificate-image" />
                  <p className="certificate-name">{certificate.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;