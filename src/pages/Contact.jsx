import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
     <section id="contact" className="contact">
      <h2>Let’s Connect</h2>
      <p>
        I’m actively seeking frontend developer opportunities and open to
        collaborations. Feel free to reach out!
      </p>

      <div className="connect-links">
        <a
          href="mailto:sbbhoomika63@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/bhoomika-sb-9b1955253/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/bhoomikasb/bhomikasb09"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
