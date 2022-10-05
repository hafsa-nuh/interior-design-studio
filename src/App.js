import React from 'react';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/testimonial" element={<Testimonials />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <About/> */}
      {/* <Home /> */}
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
