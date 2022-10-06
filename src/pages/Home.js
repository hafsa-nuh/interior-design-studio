import React from 'react';
import HomePage from '../components/HomePage';
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function Home() {
  return <>
  <section className=" bg-green  rounded-2xl ml-2 ">
  <HomePage/>
  <About/>
  <Services/>
  <Project/>
  <Testimonials/>
  <Contact/>
  </section> 
  </>
}

export default Home