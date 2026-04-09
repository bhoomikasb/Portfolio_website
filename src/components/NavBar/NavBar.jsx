import React, { useState } from "react";
import profile from "./profile-photo.png";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("about"); // default active

  return (
    <nav className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={profile} alt="profile" className="profile-pic" />
        <span className="name">Bhoomika</span>
      </div>

      {/* RIGHT SIDE */}
      <ul className="nav-right">
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="/Bhoomika_SB_python_developer.pdf"
            download
            className="resume-btn"
            onClick={() => setActive("resume")}
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
