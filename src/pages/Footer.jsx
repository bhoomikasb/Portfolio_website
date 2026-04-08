import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Bhoomika SB</h3>
      <p>Python Full Stack Developer | Tech Enthusiast</p>

      

      <p className="copyright">
        © {new Date().getFullYear()} Bhoomika SB. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
