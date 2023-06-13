import pfp from "./pfp.jpg";
import fcc1 from "./fcc1.PNG";
import fcc2 from "./fcc2.PNG";
import fcc3 from "./fcc3.PNG";
import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [active, setActive] = useState(0);
  const projects = [
    {
      name: "Random Quote Machine",
      description: `Random quote machine is a web application that generates a random quote from a collection of quotes. It is built using React.js, HTML, and CSS. The quotes were fetched randomly using an API.`,
      backgroundUrl: "RQM.PNG",
      WebsiteLink: "https://th0massh3lby.github.io/Random-Quote-Machine/",
      GitLink: "https://github.com/Th0masSh3lby/Random-Quote-Machine",
    },
    {
      name: "Crooked Colours",
      description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
      backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg",
    },
    {
      name: "Mallrat",
      description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
      backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg",
    },
  ];

  return (
    <div className="App">
      <section className="Main">
        <img id="pfp" alt="profile-picture" src={pfp} />
        <h1>Aravind Reddy C.</h1>

        <p id="main-sub">
          Aspiring to become a part of the technology world. I build accessible,
          inclusive products and digital experiences for the web.
        </p>

        <div className="headers"> ------ About ------</div>
        <div className="headers"> ------ Skills -------</div>
        <div className="headers"> ----- Projects ---</div>

        <div className="socials">
          <a id="Gmail" className="profile-link" target="_blank" href="#">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a id="LinkedIn" className="profile-link" target="_blank" href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a id="Github" className="profile-link" target="_blank" href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <section className="Detail">
        <section id="about">
          <h2 className="About-head">Little about me ...</h2>
          <p>
            After graduating from IIT Hyderabad with a degree in electrical
            engineering, I was excited to start my career. I had always been
            interested in technology, and I was eager to put my skills to use.
            However, I quickly realized that the job market for electrical
            engineers was very competitive especially the Indian Engineering
            Services(IES).
          </p>
          <p>
            After struggling to find a job, I decided to take a step back and
            reconsider my options. I realized that I was more interested in the
            user experience of technology than the underlying hardware. I
            started learning about web development, and I quickly fell in love
            with it. I found that I was able to use my creativity and
            problem-solving skills to create beautiful and functional websites.
          </p>

          <p>
            In the past six months, I have learned everything I can about
            front-end development. I have built several personal projects. I am
            confident that I have the skills and experience necessary to be
            successful in a front-end development role.
          </p>
        </section>
        <section id="skills">
          <h2 id="skills-header">Skills and Certifications:</h2>
          <div className="Certification">
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/CAravindReddy/responsive-web-design"
            >
              <img
                className="fcc"
                src={fcc1}
                alt="freeCodeCamp Certificate"
                loading="lazy"
              />
            </a>

            <div className="skillset">
              <h3>Responsive Web Design:</h3>
              <p>
                In this course, I have learnt the main languages used to develop
                webpages: <span className="skill-i">HTML</span> for content, and{" "}
                <span className="skill-i">CSS</span> for design. I have also
                learnt to make webpages that respond to different screen sizes
                by building various webpages.
              </p>
            </div>
          </div>

          <div className="Certification">
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/CAravindReddy/javascript-algorithms-and-data-structures"
            >
              <img
                className="fcc"
                src={fcc2}
                alt="freeCodeCamp Certificate"
                loading="lazy"
              />
            </a>

            <div className="skillset">
              <h3>Data Structures and Algorithms:</h3>
              <p>
                In this course, I have sharpened my{" "}
                <span className="skill-i">JavaScript</span> skills by
                understanding and implementing various algorithms, and have also
                learnt to two important programming styles: Object Oriented
                Programming (OOP) and Functional Programming (FP).
              </p>
            </div>
          </div>

          <div className="Certification">
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/CAravindReddy/front-end-development-libraries"
            >
              <img
                className="fcc"
                src={fcc3}
                alt="freeCodeCamp Certificate"
                loading="lazy"
              />
            </a>
            <div className="skillset">
              <h3>Front End Libraries:</h3>
              <p>
                In this course, I have learnt how to create powerful Single Page
                Applications (SPAs) with{" "}
                <span className="skill-i">React.js</span> and{" "}
                <span className="skill-i">Redux.js</span>. I have also learnt
                how to style your site quickly with{" "}
                <span className="skill-i">Bootstrap</span> and{" "}
                <span className="skill-i">Sass</span>.
              </p>
            </div>
          </div>
          <p>
            Other languages and skills that I am proficient in include{" "}
            <span className="skill-i">Node.js</span>,{" "}
            <span className="skill-i">Python</span>,{" "}
            <span className="skill-i">MongoDB</span>,{" "}
            <span className="skill-i">Git</span>, and{" "}
            <span className="skill-i">Matlab</span>.
          </p>
        </section>
        <section id="Projects">
          <h2 id="Projects-header">Projects</h2>
          <ul className="AllProjects">
            {projects.map((artist, i) => {
              return (
                <li
                  key={i}
                  style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
                  role="button"
                  className={active === i ? "MP active" : "MP"}
                  onClick={() => setActive(i)}
                >
                  {" "}
                  <h3 id="AR">{artist.name}</h3>
                  <div className="section-content">
                    <div className="inner">
                      <div className="bio">
                        <h2 className="AN">{artist.name}</h2>
                        <p>{artist.description}</p>
                        <div className="Demo"></div>
                        <div className="Github"></div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;