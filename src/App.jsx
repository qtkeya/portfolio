import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './routes/Navbar'
import Hero from './routes/Hero'
import About from './routes/About'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
