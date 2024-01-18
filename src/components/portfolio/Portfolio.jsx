import "./portfolio.css";

import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.webp";
// import IMG4 from "../../assets/Raise.png";
// import IMG5 from "../../assets/Potsave.png";
// import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "AC-AD Integration - SAP",
      img: IMG1,
      description:
        "Integration of 2 web applications to cross function according to the system upgrade.",
      technologies: "SAPUI5 · OData · Open API · Bitbucket · Unit testing · TypeScript · Nodejs",
    },
    {
      id: 2,
      title: "Web Platform Project - SAP",
      img: IMG2,
      description:
        "Hihly robust SAP Based website to handle Transports, Projects, Business Tasks.",
      technologies: "Code Review · Open API · Unit testing · TypeScript · Nodejs · Git",
      
    },
    {
      id: 3,
      title: "Safety Mentor",
      img: IMG3,
      description:
        "Website for data collection, tracking, analysis and reporting top best ideas of individual groups.",
      technologies: "Amazon S3 · Web Hosting · REST APIs · Swagger API · Amazon Web Services (AWS) · Nodejs · Angular",
      link: "https://www.safetymentor.com/",
    },
    {
      id: 4,
      title: "Taskforc",
      img: "https://taskforc.com/wp-content/uploads/2021/07/Sample-3.png",
      description:
        "Project management website for managing YouTube video creation and providing seamless collaboration between teams.",
      technologies: "React.js · Stripe · Swagger API · Amazon Web Services (AWS) · MySQL · Node.js",
      link: "https://taskforc.com/",
    }
  ];

  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
