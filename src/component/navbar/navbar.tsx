"use client";

import React from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-links">
        <li><a href="#MyHome">Home</a></li>
        <li><a href="#AboutMe">About</a></li>
        <li><a href="#MyEducation">Education</a></li>
        <li><a href="#MyExperience">Experience</a></li>
        <li><a href="#MySkills">Skills</a></li>
        <li><a href="#MyContact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;