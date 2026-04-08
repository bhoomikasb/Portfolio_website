import React from "react";
import profile  from "../NavBar/profile-photo.png";
import "./Hero.css"
// adjust path if needed

const Hero = () => {
  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>Hi, I’m Bhoomika</h1>
<h2>Full Stack Developer </h2>
<p>
  I build scalable and user-friendly web applications using Python, Django, 
  React, and modern web technologies.
</p>

        <div className="hero-buttons" >
          <a 
          href="#contact" 
          className="btn primary" 
          style={{ textDecoration: "none" }}
          >
           Contact Me
          </a>
  <a href="#projects" className="btn secondary" style={{ textDecoration: "none" }}>
    View Projects
  </a>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img src={profile} alt="Bhoomika profile" />
      </div>
    </section>
  );
};

export default Hero;
