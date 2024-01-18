import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <h2>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h2>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h3>gaonkar1998@gmail.com</h3>
              <h3>Bangalore, India</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
