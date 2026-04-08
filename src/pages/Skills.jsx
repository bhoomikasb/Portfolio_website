import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MySQL"],
    },
    {
      title: "IoT & Embedded",
      skills: ["Arduino", "Sensors", "ThingSpeak"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span className="skill-badge" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;