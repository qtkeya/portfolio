import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CatPawCursor from '../components/CatPawCursor';

const Hero = () => {
    const petalsRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const createPetal = () => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * window.innerWidth + 'px';
            petal.style.animationDuration = Math.random() * 3 + 2 + 's';
            petalsRef.current.appendChild(petal);

            setTimeout(() => petal.remove(), 5000);
        };

        const interval = setInterval(createPetal, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <CatPawCursor />
            <section className="hero">
                <div ref={petalsRef} className="petals-container"></div>
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="title-container">
                            <h1 className="glowing-text">Hi, I'm Nurkiya S. Sueno</h1>
                            <h2 className="sliding-text">Frontend Developer</h2>
                        </div>
                        <p className="fade-in">I craft seamless, interactive, and visually stunning web solutions that bring ideas to life. From responsive designs to dynamic user interfaces, I am passionate about building experiences that leave a lasting impact.</p>
                        <div className="hero-buttons">
                            <button className="primary-btn pulse" onClick={() => navigate('/about')}>About Me</button>
<<<<<<< HEAD

                            <button className="secondary-btn glow-effect" onClick={() => navigate('/contact')}Contact >Contact Me</button>
                            
                        </div>
                        <div className="social-links floating">

                        <a
                    href="https://github.com/qtkeya"
                    className="social-icon github hover-rotate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                        >
                             <FaGithub size={30} />
          </a>
                        <a
                    href="https://www.linkedin.com/in/nurkiya-sueno-35337b361/"
                    className="social-icon linkedin hover-rotate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    >
                    <FaLinkedin size={30} />
                </a>
                <a
                 href="https://www.facebook.com/keyyykim"
                className="social-icon facebook hover-rotate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                >
                <FaFacebook size={30} />
=======
                            <button className="secondary-btn glow-effect">Contact Me</button>
                        </div>
                        <div className="social-links floating">
                            <a href="#" className="social-icon github hover-rotate">
                                <FaGithub size={24} />
                            </a>
                            <a href="#" className="social-icon linkedin hover-rotate">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="social-icon facebook hover-rotate">
                                <FaFacebook size={24} />
>>>>>>> e0382cb1ddf279200da5098f9c39dc518ec2b609
                            </a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="sakura-house">
                            <div className="house-roof"></div>
                            <div className="house-frame">
                                <div className="window-content">
                                    <img src="/cat.jpeg" alt="Profile" className="profile-image" />
                                </div>
                                <div className="sakura-decor top-left"></div>
                                <div className="sakura-decor top-right"></div>
                                <div className="sakura-decor bottom-left"></div>
                                <div className="sakura-decor bottom-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> e0382cb1ddf279200da5098f9c39dc518ec2b609
