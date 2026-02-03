
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Availability from './pages/Availability';
import About from './pages/About';
import Winter from './pages/Winter';
import Summer from './pages/Summer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f0f] text-white font-body selection:bg-[#c6a87c] selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/about" element={<About />} />
          <Route path="/winter" element={<Winter />} />
          <Route path="/summer" element={<Summer />} />
        </Routes>

        <footer className="bg-[#0a0a0a] py-12 border-t border-white/5 mt-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading mb-6 text-white">The Timbers</h2>
            <div className="flex justify-center gap-6 mb-8">
              <span className="text-gray-500 uppercase tracking-widest text-xs">Fernie, BC</span>
              <span className="text-[#c6a87c] uppercase tracking-widest text-xs">Since 2004</span>
            </div>
            <p className="text-gray-600 text-xs uppercase tracking-widest">© 2026 All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
