import React, { useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import MoreServices from './components/MoreServices'; 
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ContactUs from './components/ContactSection'; 

const App = () => {
  const contactRef = useRef(null); 
  return (
    <Router>
      <div>
        
        <Header contactRef={contactRef} /> 
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/Services" element={<ServicesSection />} />
          <Route path="/About" element={<AboutSection />} />
          <Route path="/Moreservices" element={<MoreServices />} />
          <Route path="/Contact" element={<ContactUs />} /> 
        </Routes>

        
        <div ref={contactRef}>
          
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
