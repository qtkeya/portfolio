import { useState } from 'react';
import { Link } from 'react-router-dom';
import CatPawCursor from '../components/CatPawCursor';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CatPawCursor />
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-brand">KEYA</Link>
          </div>
          <div className="nav-right">
            <div className={`nav-items ${isOpen ? 'active' : ''}`}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
