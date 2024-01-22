import "./portfolio.css";
import IMG2 from "../../assets/IMG1.png";
import IMG3 from "../../assets/IMG3.webp";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "AC-AD INTEGRATION - SAP",
      img: IMG2,
      description:
        `This website facilitates integration of 2 web applications to cross function according to the system upgrade. The integration process involves creating a standardized API (potentially using OData and OpenAPI) for your web applications to communicate.
         Develop and test the integration using TypeScript, and manage the codebase and collaboration through Bitbucket. Node.js is used on the server side to handle data exchange and facilitate communication between the applications. 
         Regular unit testing ensures the reliability and functionality of the integrated system.`,
      technologies: "NODEJS · TYPESCRIPT · SAPUI5 · ERROR & LOG HANDLING · ODATA INTEGRATION · OPEN API  · UNIT TESTING"
    },
    {
      id: 2,
      title: "WEB PLATFORM PROJECT - SAP",
      img: IMG2,
      description:
        `Highly robust SAP Based website to handle Transports, Projects, Business Tasks. Key features include streamlined transport management, automated workflows for business tasks, and a Node.js backend for efficient handling of concurrent tasks. 
        The system ensures code quality with TypeScript, utilizes Git for version control, and prioritizes security with robust authentication mechanisms.
        The user interface integrates with SAPUI5, providing an intuitive experience for managing transports and business tasks.`,
      technologies: "TYPESCRIPT · NODEJS · PIPELINE FIXING · VERSION UPDATES · CODE REVIEW · DEBUGGING · GIT · GIT GRAPH",

    },
    {
      id: 3,
      title: "SAFETY MENTOR",
      img: IMG3,
      description:
        `The envisioned website is designed as a comprehensive platform for ideation, fostering collaboration within individual groups. 
        Users can seamlessly submit their innovative ideas and with a robust voting system in place, participants can cast their votes for the most promising ideas. 
        Ultimately, the platform aims to identify and report the top 5 ideas based on community voting, fostering a dynamic and engaging environment for idea generation and selection within individual groups.`,
      technologies: "NODEJS · ANGULAR · AMAZON S3 · SSL CERTIFICATE · WEB HOSTING · REST APIs · SWAGGER API · AWS · RENDER",
      link: "https://www.safetymentor.com/",
    },
    {
      id: 4,
      title: "TASKFORC",
      img: "https://taskforc.com/wp-content/uploads/2021/07/Sample-3.png",
      description:
        `This project management website is a dedicated platform designed to streamline the end-to-end process of YouTube video creation while fostering seamless collaboration among teams. 
        Content creators can submit their video concepts, scripts, and voiceover requirements through a user-friendly interface. 
        The platform integrates secure and user-friendly payment methods, facilitating transactions for scriptwriting, voiceover recording, and video creation services. 
        With features tailored for efficient project management, including task assignments, progress tracking, and real-time communication, the website aims to enhance productivity and ensure a smooth workflow for content creators and their teams engaged in YouTube video production.`,
      technologies: "REACTJS · NODEJS · STRIPE · WINSTON LOGGER · SWAGGER API · AWS · MySQL · NEWRELIC · FIREZILLA · LETSENCRYPT",
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
              <h2>{pro.title}</h2>
              <br />
              <p className="para">{pro.description}</p>
              <br />
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
