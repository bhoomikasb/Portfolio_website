import React, { useState } from "react";
import profile from "./profile-photo.png";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false); // ⭐ NEW

  return (
    <nav className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={profile} alt="profile" className="profile-pic" />
        <span className="name">Bhoomika</span>
      </div>

      {/* ⭐ HAMBURGER ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* RIGHT SIDE */}
      <ul className={`nav-right ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => {
              setActive("about");
              setMenuOpen(false); // ⭐ close menu
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="/Bhoomika_SB_python_developer.pdf"
            download
            className="resume-btn"
            onClick={() => {
              setActive("resume");
              setMenuOpen(false); // ⭐ close menu
            }}
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;