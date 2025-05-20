import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Engineering from './pages/Engineering';
import Fitness from './pages/Fitness';
import Nutrition from './pages/Nutrition';
import Skincare from './pages/Skincare';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/bowen" element={<Home />} />
          <Route path="/bowen/engineering" element={<Engineering />} />
          <Route path="/bowen/fitness" element={<Fitness />} />
          <Route path="/bowen/nutrition" element={<Nutrition />} />
          <Route path="/bowen/skincare" element={<Skincare />} />
          <Route path="/bowen/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
