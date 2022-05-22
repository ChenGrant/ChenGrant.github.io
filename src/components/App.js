import { Box } from "@mui/system";
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
    heroFadeDuration : 800,
  };

  return (
    <CustomSettingsProvider value={initialCustomSettings}>
      <NavBar />
      <Hero />
      <Skills />
      <Box bgcolor="secondary.main">
        <ul>
          <li>
            Change use window context to simply let us know what screen size we
            are in
          </li>
          <li>
            make custom settings also include skills and navigation functions?
          </li>
          <li>Choose better font sizes</li>
          <li>when coding for phone: galaxy fold</li>
          <li>
            Maybe underline and make header transition up a bit on nav bar when
            hovered? (for both large and mobile)
          </li>
          <li>
            Make it more responsive now that i got breakpoints, test out the
            different breakpoints
          </li>
          <li>Fade in hero text like danny</li>
          <li>Make image width/heigth 100% and apply css on its BOx instead</li>
          <li>Make hero image an svg</li>
          <li>
            make font size consistent across different components and different
            screen sizes
          </li>
          <li>Have lazy load in</li>
          <li>
            Figure out what text will be h1, small, large etc. i think hero text
            should be the only h1
          </li>
          <li>Center 'frontend' text for mobile</li>
          <li>
            Make smallNavBar not have 400ms animation time if its on phone
            (maybe have it on tablet if it works on ipads)
          </li>
        </ul>
      </Box>
      <Box height="100vh"></Box>
    </CustomSettingsProvider>
  );
};

export default App;
