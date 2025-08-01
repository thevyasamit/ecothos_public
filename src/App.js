import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App; 