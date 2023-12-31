import pfp from "./pfp.jpg";
import fcc1 from "./fcc1.PNG";
import fcc2 from "./fcc2.PNG";
import fcc3 from "./fcc3.PNG";
import rqm from "./RQM.PNG";
import Pokedex from "./Pokedex.PNG";
import Task from "./Task.PNG";
import fccmag from "./fccMag.PNG";
import tts from "./Text-to-Speech.PNG";
import "./Home.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  const [active, setActive] = useState(0);
  const projects = [
    {
      name: "Pokedex",
      description: `
      This website is a three page application made using React.js and PokeAPi. Key features include Infinite scroll(More Items load as you scroll down), Bookmarks page(content bookmarked from different pages can be seen here), and Search Page.`,
      backgroundUrl: Pokedex,
      WebsiteLink: "https://th0massh3lby.github.io/pokedex/",
      GitLink: "https://github.com/Th0masSh3lby/pokedex",
    },
    {
      name: "Task Manager",
      description: `Task Manager is a web application built using Next.js and typescript. Implemented the CRUD functionality using mst store. Styling is done using Tailwind CSS.`,
      backgroundUrl: Task,
      WebsiteLink: "https://task-manager-black-beta.vercel.app/",
      GitLink: "https://github.com/Th0masSh3lby/task-manager",
    },

    {
      name: "Text-to-Speech",
      description: `This Text-to-Speech Converter is a web application built using React.js, HTML, and CSS. It leverages the Web Speech API to provide users with an easy-to-use interface for converting text into speech. The application allows users to input text, select a voice from a list of available options, and listen to the text being spoken in the chosen voice.`,
      backgroundUrl: tts,
      WebsiteLink: "https://th0massh3lby.github.io/text-to-voice/",
      GitLink: "https://github.com/Th0masSh3lby/text-to-voice",
    },
  ];

  return (
    <div className="App">
      <section className="Main">
        <img id="pfp" alt="profile-picture" src={pfp} />
        <h1>Aravind Reddy C.</h1>

        <p id="main-sub">Bringing creativity to the web, one pixel at a time</p>

        <div className="headers">
          {" "}
          <a className="header-id" href="#about">
            ------ About ------
          </a>
        </div>
        <div className="headers">
          {" "}
          <a className="header-id" href="#skills">
            ------ Skills -------
          </a>
        </div>
        <div className="headers">
          {" "}
          <a className="header-id" href="#Projects">
            ----- Projects ---
          </a>
        </div>

        <div className="socials">
          <a
            id="Gmail"
            className="profile-link"
            target="_blank"
            href="mailto: aravind.choppa@alumini.iith.ac.in"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            id="LinkedIn"
            className="profile-link"
            target="_blank"
            href="https://www.linkedin.com/in/aravind-reddy-272898279/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            id="Github"
            className="profile-link"
            target="_blank"
            href="https://github.com/Th0masSh3lby"
          >
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
            engineers was very competitive.
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
                how to style a website quickly with{" "}
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
          <h2 id="Projects-header">Recent Projects</h2>
          <ul className="AllProjects">
            {projects.map((artist, i) => {
              return (
                <li
                  key={i}
                  role="button"
                  style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
                  className={active === i ? "MP active" : "MP"}
                  onClick={() => setActive(i)}
                >
                  <h3 id="AR">{artist.name}</h3>
                  <div className="section-content">
                    <div className="inner">
                      <div className="bio">
                        <h2 className="AN">{artist.name}</h2>
                        <p>{artist.description}</p>
                        <div className="Links">
                          <div className="Demo">
                            <a
                              href={artist.WebsiteLink}
                              target="_blank"
                              className="projectLink"
                            >
                              <FontAwesomeIcon
                                className="Projecticon"
                                icon={faArrowRight}
                              />
                            </a>
                          </div>
                          <div className="Github">
                            <a
                              href={artist.GitLink}
                              target="_blank"
                              className="projectLink"
                            >
                              <FontAwesomeIcon
                                className="Projecticon"
                                icon={faGithub}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link to="projects">
            <button className="Show">Show All</button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Home;
