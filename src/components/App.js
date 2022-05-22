import { Box } from "@mui/system";
import React from "react";
import Hero from "./hero/Hero";
import NavBar from "./navigationBar/NavBar";
import Skills from "./skills/Skills";
import { useTheme } from "@mui/styles";
import { CustomSettingsProvider } from "../context/CustomSettings";






const App = () => {
  const theme = useTheme()

  const getMaxZIndex = theme => Math.max(...Object.values(theme.zIndex))

  const initialCustomSettings = {
    navBarHeight : '70px',
    navBarZIndex : getMaxZIndex(theme) + 1
  }

  return (
    <CustomSettingsProvider value = {initialCustomSettings}>
      <NavBar />
      <Hero />
      <Skills />
      <Box bgcolor="secondary.main">
        <ul>
          <li>Change use window context to simply let us know what screen size we are in</li>
          <li>
            Maybe underline and make header transition up a bit on nav bar when
            hovered? (for both large and mobile)
          </li>
          <li>
            Make it more responsive now that i got breakpoints, test out the
            different breakpoints
          </li>
          <li>Fade in hero text</li>
          <li>Make image width/heigth 100% and apply css on its BOx instead</li>
          <li>Make hero image an svg</li>
          <li>
            make font size consistent across different components and different
            screen sizes
          </li>
          <li>Center 'frontend' text for mobile</li>
        </ul>
      </Box>
      <Box height="100vh"></Box>
    </CustomSettingsProvider>
  );
};

export default App;
