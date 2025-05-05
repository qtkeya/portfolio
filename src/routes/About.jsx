import CatPawCursor from '../components/CatPawCursor';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
=======

const About = () => {
>>>>>>> e0382cb1ddf279200da5098f9c39dc518ec2b609
  return (
    <section className="about">
      <CatPawCursor />
      <div className="about-container">
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="intro-card">
              <h3>Introduction</h3>
              <p>Hi! I'm Nurkiya S. Sueno, a passionate Frontend Developer who loves creating beautiful and functional web experiences.</p>
            </div>
            
            <div className="background-card">
              <h3>Background</h3>
              <p>Part of a cheering squad, I bring enthusiasm and teamwork into everything I do. I also have a deep love for traveling and exploring new places.</p>
            </div>

            <div className="skills-container">
              <h3>Skills & Expertise</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <FaReact className="skill-icon react" />
                  <span>React</span>
                </div>
                <div className="skill-card">
                  <FaHtml5 className="skill-icon html" />
                  <span>HTML5</span>
                </div>
                <div className="skill-card">
                  <FaCss3Alt className="skill-icon css" />
                  <span>CSS3</span>
                </div>
                <div className="skill-card">
                  <FaJs className="skill-icon javascript" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-card">
                  <FaBootstrap className="skill-icon bootstrap" />
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-right">
          <div className="current-work">
            <h3>Currently Working On</h3>
            <p>I am actively working on enhancing my React portfolio, refining both the user interface and functionality to create a seamless and engaging experience. My focus is on implementing responsive design, improving performance, and integrating modern web development best practices. Through this project, I am exploring new libraries, optimizing my code structure, and experimenting with different design styles to make my portfolio not only visually appealing but also highly interactive. This journey allows me to continuously refine my skills and showcase my expertise in frontend development.</p>
          </div>

          <div className="career-goals">
            <h3>Career Goals</h3>
            <p>Aspiring to become a Senior Frontend Developer and work on projects that enhance user experience and accessibility.</p>
          </div>

          <div className="personal-touch">
            <h3>Personal Touch</h3>
            <div className="fun-facts">
              <p>🐱 Love spending time with cats</p>
              <p>✈️ Passionate about traveling and exploring new places</p>
              <p>💻 Always excited to learn new technologies</p>
            </div>
          </div>

          <div className="cta-section">
<<<<<<< HEAD
          <button className="primary-btn pulse"onClick={() => navigate('/projects')}Projects >View Projects</button>
=======
            <button className="primary-btn pulse">View My Projects</button>
>>>>>>> e0382cb1ddf279200da5098f9c39dc518ec2b609
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;