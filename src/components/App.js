import React from "react";
import Hero from "./hero/Hero";
import NavBar from "./navBar/NavBar";
import Skills from "./skills/Skills";
import { CustomSettingsProvider } from "../context/CustomSettings";
import Experience from "./experiences/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import theme from "../mui/Theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  const initialCustomSettings = {
    navBarHeight: "70px",
    navBarZIndex: Math.max(...Object.values(theme.zIndex)) + 1,
    heroPadding: "80px",
    heroTypographyDelay: 0.5,
    heroButtonDelay: 1.5,
    heroFadeDuration: 800,
    skillItemIconHeight: "60%",
    skillItemCircleHeight: "80px",
    navBarItems: [
      { label: "HOME", link: "#" },
      { label: "SKILLS", link: "#skills" },
      { label: "EXPERIENCES", link: "#experiences" },
      { label: "PROJECTS", link: "#projects" },
      { label: "CONTACT", link: "#contact" },
    ],
    resume: {
      fileName: "GrantResume.pdf",
      fileURL: "../assets/pdf/resume.pdf",
    },
    getValueOfPixelString : (pxStr) => +pxStr.trim().slice(0,-2)
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomSettingsProvider value={initialCustomSettings}>
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <div style={{ backgroundColor: "gray" }}>
          <ul>
            <li>Make navbar link scroll offset better for mobile/tablet</li>
            <li>Make buttons look consistent</li>
            <li>Check over content for projects </li>
            <li>
              When autofill for email is done, ui for textbox is messed up
            </li>
            <li>When u hover over gmail/github/linkedin have elevation</li>
            <li>
              no need to make initial custom settings a context, just make it an
              exportable object
            </li>
            <li>
              make custom settings also include skills and navigation functions?
            </li>
            <li>Choose better font sizes</li>
            <li>Make on load better, load all the shit first</li>
            <li>
              fix fade in happening on screen change (such as when downloading
              resume)
            </li>
            <li>when coding for phone: galaxy fold</li>
            <li>
              Maybe underline and make header transition up a bit on nav bar
              when hovered? (for both large and mobile)
            </li>
            <li>https://github.com/enigosi/react-single-page-navigation</li>
            <li>Make all images local to prevent fetching time</li>
            <li>Remove fade in animation for hero text on mobile</li>
            <li>https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page</li>
            <li>https://dev.to/pierresaid/deploy-node-projects-to-github-pages-with-github-actions-4jco</li>
            <li>
              Make image width/heigth 100% and apply css on its BOx instead
            </li>
            <li>Make hero image an svg</li>
            <li>
              make font size consistent across different components and
              different screen sizes
            </li>
            <li>Have lazy load in</li>
            <li>
              Figure out what text will be h1, small, large etc. i think hero
              text should be the only h1
            </li>
            <li>
              Fade in:
              https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
              in shared/component
            </li>
            <li>Add process.env for emailjs</li>
            <li>Align icons (material UI text too large)</li>
            <li>Wait till font has loaded in, then render page </li>
            <li>https://www.youtube.com/watch?v=huVJW23JHKQ&t=383s</li>
            <li>Center 'frontend' text for mobile</li>
            <li>FadeInSection rest prop removed and just put the width = '100%' in the Box component</li>
            <li>add technology icons for experience</li>
            <li>
              Make smallNavBar not have 400ms animation time if its on phone
              (maybe have it on tablet if it works on ipads)
            </li>
            <li>Make websites load faster</li>
            <li>Make sure responsive, make images load fast</li>
            <li>
              disable form when sending email, have ui to tell user if email was
              sent/not sent
            </li>
            <li>When email is sending, make it dull</li>
            <li>Hide api keys</li>
            <li>get rid of all html elements, use mui ones instead</li>
          </ul>
        </div>
      </CustomSettingsProvider>
    </ThemeProvider>
  );
};

export default App;
