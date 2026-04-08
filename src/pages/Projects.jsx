import React, { useState } from "react";
import "./Project.css";

const Projects = () => {
  const projectsData = [
    {
      title: "IoT Aquaponics System",
      category: "IoT",
      description:
        "Developed an IoT-based aquaponics system to monitor temperature, pH, and water quality in real-time for sustainable plant and fish growth.",
      tech: "Python, Arduino, IoT, ThingSpeak",
      link: "https://github.com/bhoomikasb/IoT-Aquaponics-System",
    },
    {
      title: "Movie Ticket Booking App",
      category: "Full Stack",
      description:
        "Built a full-stack movie booking platform with real-time seat selection, user authentication, and booking management.",
      tech: "Django, HTML, CSS, JavaScript",
      link: "https://github.com/bhoomikasb/Movie_application",
    },
    {
      title: "E-Commerce Web Application",
      category: "Full Stack",
      description:
        "Developed an e-commerce platform with product search, cart functionality, order placement, and user management.",
      tech: "Django, Python, HTML, CSS, JavaScript",
      link: "https://github.com/bhoomikasb/E-Commerce-web-application",
    },
    {
      title: "Student Enrollment System",
      category: "Full Stack",
      description:
        "Created a student enrollment system to manage registrations and data with a dynamic frontend and backend integration.",
      tech: "React, Django, MySQL",
      link: "https://github.com/bhoomikasb/job_portal",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Stack", "IoT"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p> <br />

            <p className="tech-stack"> 
              <strong>Tech:</strong> {project.tech}
            </p> <br />

            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;