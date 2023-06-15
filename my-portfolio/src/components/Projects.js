import rqm from "./RQM.PNG";
import drum from "./DrumMachine.PNG";
import fccmag from "./fccMag.PNG";
import clock from "./Clock.PNG";
import calc from "./Calc.PNG";
import mark from "./markdown.PNG";
import "./projects.css";
import tts from "./Text-to-Speech.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const allProjects = [
  {
    name: "Text-to-Speech",
    description: `This Text-to-Speech Converter is a web application built using React.js, HTML, and CSS. It leverages the Web Speech API to provide users with an easy-to-use interface for converting text into speech. The application allows users to input text, select a voice from a list of available options, and listen to the text being spoken in the chosen voice.`,
    backgroundUrl: tts,
    WebsiteLink: "https://th0massh3lby.github.io/text-to-voice/",
    GitLink: "https://github.com/Th0masSh3lby/text-to-voice",
  },
  {
    name: "Random-Quote",
    description: `Random quote machine is a web application that generates a random quote from a collection of quotes. It is built using React.js, HTML, and CSS. The quotes were fetched randomly using an API.`,
    backgroundUrl: rqm,
    WebsiteLink: "https://th0massh3lby.github.io/Random-Quote-Machine/",
    GitLink: "https://github.com/Th0masSh3lby/Random-Quote-Machine",
  },

  {
    name: "Drum Machine",
    description: `
    This website is a drum machine that can be used to create and play custom beats. It was created using React.js, HTML, and CSS. The website is simple to use and allows users to create beats by clicking on the different drum pads. `,
    backgroundUrl: drum,
    WebsiteLink: "https://th0massh3lby.github.io/drum-machine/",
    GitLink: "https://github.com/Th0masSh3lby/drum-machine",
  },

  {
    name: "Calculator",
    description: `
    This code is for a simple calculator web application built using React.js, HTML and CSS. The calculator has a display area and buttons for numbers, decimal point, operators (+, -, *, /), clear (AC), and equals (=). The calculator can perform basic arithmetic operations and evaluates the expression when the equals button is clicked.`,
    backgroundUrl: calc,
    WebsiteLink: "https://th0massh3lby.github.io/Calculator/",
    GitLink: "https://github.com/Th0masSh3lby/Calculator",
  },
  {
    name: "FCC Magazine",
    description: `
    This website is a single page application done as a part of my Responsive Web Design Certification. Created using HTML and CSS. It was made such that the page responds responsively to the screensize. `,
    backgroundUrl: fccmag,
    WebsiteLink: "https://th0massh3lby.github.io/FreeCodeCamp-magazine/",
    GitLink: "https://github.com/Th0masSh3lby/FreeCodeCamp-magazine",
  },
  {
    name: "Pomodoro Clock",
    description: `This website is an easy to use pomodoro clock.  The user can choose the length of the pomodoro intervals and the length of the breaks. It was created using various React hooks, CSS and HTML.`,
    backgroundUrl: clock,
    WebsiteLink: "https://th0massh3lby.github.io/Clock-25-5/",
    GitLink: "https://github.com/Th0masSh3lby/Clock-25-5",
  },

  {
    name: "Markdown Editor and Previewer",
    description: `This Markdown Editor and Previewer is a web application built using React.js, HTML, and CSS. It provides users with an intuitive interface to write and edit Markdown text while simultaneously previewing the formatted output in real-time. The application leverages the 'marked' library to parse and render the Markdown text into HTML.`,
    backgroundUrl: mark,
    WebsiteLink: "https://Th0masSh3lby.github.io/Markdown-Previewer/",
    GitLink: "https://github.com/Th0masSh3lby/Markdown-Previewer",
  },
];

const Projects = () => {
  return (
    <div className="Mains">
      <div className="actual">
        <h1 id="pname">All Projects</h1>
        {allProjects.map((obj) => {
          return (
            <div className="ProjectS">
              <a target="_blank" href={obj.WebsiteLink}>
                <img className="pr" src={obj.backgroundUrl} />
              </a>

              <div className="description">
                <h3>{obj.name}</h3>
                <p>{obj.description}</p>
                <div className="allGithub">
                  <a
                    href={obj.GitLink}
                    target="_blank"
                    className="allprojectLink"
                  >
                    <FontAwesomeIcon className="Projecticon" icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
