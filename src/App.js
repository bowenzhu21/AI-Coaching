import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Software from './pages/Software';
import Biotech from './pages/Biotech';
import Fitness from './pages/Fitness';
import Nutrition from './pages/Nutrition';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/bowen">
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/biotech" element={<Biotech />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
