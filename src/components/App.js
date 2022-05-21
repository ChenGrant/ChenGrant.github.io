import { Box } from "@mui/system";
import React from "react";
import Hero from "./hero/Hero";
import NavBar from "./navigationBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ul>
        <li>Maybe underline and make header transition up a bit on nav bar when hovered? (for both large and mobile)</li>
        <li>Make it more responsive now that i got breakpoints, test out the different breakpoints</li>
        <li>Fade in hero text</li>
        <li>Make image width/heigth 100% and apply css on its BOx instead</li>
      </ul>
      <Box height = '100vh' ></Box>
    </>
  );
};

export default App;
