import React, { useEffect, useState } from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Nav";
import Slidebar from "./Slidebar";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <Nav>
        <NavLink to="">
          <h1>LOGO</h1>
        </NavLink>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/about" activestyle="true">
            About
          </NavLink>
          <NavLink to="/services" activestyle="true">
            Services
          </NavLink>
          <NavLink to="/project" activestyle="true">
            Project
          </NavLink>
          <NavLink to="/testimonial" activestyle="true">
            Testimonial
          </NavLink>
          <NavLink to="/contact" activestyle="true">
            Contact
          </NavLink>
        </NavMenu>
      <Slidebar/>
      </Nav>
    </header>
  );
};

export default Header;