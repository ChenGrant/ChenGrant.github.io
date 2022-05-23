import React from "react";
import Hero from "./hero/Hero";
import NavBar from "./navigationBar/NavBar";
import Skills from "./skills/Skills";
import { useTheme } from "@mui/styles";
import { CustomSettingsProvider } from "../context/CustomSettings";

const App = () => {
  const theme = useTheme();

  const initialCustomSettings = {
    navBarHeight: "70px",
    navBarZIndex: Math.max(...Object.values(theme.zIndex)) + 1,
    heroPadding: "80px",
    heroTypographyDelay: 0.5,
    heroButtonDelay: 1.5,
    heroFadeDuration: 800,
    skillItemIconHeight: "60%",
    skillItemCircleHeight: "80px",
  };

  return (
    <CustomSettingsProvider value={initialCustomSettings}>
      <NavBar />
      <Hero />
      <Skills />
      <div style={{backgroundColor : 'gray'}}>
          <ul>
            <li>
              make custom settings also include skills and navigation functions?
            </li>
            <li>Choose better font sizes</li>
            <li>Make on load better, load all the shit first</li>
            <li>when coding for phone: galaxy fold</li>
            <li>
              Maybe underline and make header transition up a bit on nav bar
              when hovered? (for both large and mobile)
            </li>
            <li>https://github.com/enigosi/react-single-page-navigation</li>
            <li>Make all images local to prevent fetching time</li>
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
            <li>Align icons (material UI text too large)</li>
            <li>Wait till font has loaded in, then render page </li>
            <li>https://www.youtube.com/watch?v=huVJW23JHKQ&t=383s</li>
            <li>Center 'frontend' text for mobile</li>
            <li>
              Make smallNavBar not have 400ms animation time if its on phone
              (maybe have it on tablet if it works on ipads)
            </li>
          </ul>
      </div>
    </CustomSettingsProvider>
  );
};

export default App;
