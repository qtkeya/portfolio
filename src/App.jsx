import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar';
import Hero from './routes/Hero';
import About from './routes/About';
import Projects from './routes/Projects';
import Experience from './routes/Experience';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost';
import Contact from './routes/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes >
    </Router >
  );
}

export default App;


