import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
// import img from "../../assets/Me.webp";

const Intro = () => {
  return (
    <section id="about">
      <h2>Get to know</h2>
      <h2>About Me</h2>
      <br/>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h2>Experience</h2>
              <h3>3+ year</h3>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h2>Projects</h2>
              <h3>4 Completed Projects</h3>
            </article>
          </div>
          <p>
          <h3> Greetings! I'm a seasoned Backend Developer with 3+ years of hands-on experience in architecting, developing, and deploying robust backend solutions.</h3>
            <h3>My goal is to deliver efficient and effective solutions, and I adhere to the following principles in my work:</h3>
            <br />
            - I focus on providing solutions that address the client's needs and solve their problems. 
            <br />
            - I am dedicated to writing clean, modular, and maintainable code. This not only ensures the longevity of the software but also facilitates easier collaboration with other developers.
            <br />
            - Effective communication is a cornerstone of successful development. I prioritize clear and transparent communication with clients, team members, and stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
