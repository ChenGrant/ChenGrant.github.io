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
        <li>Maybe underline on nav bar when hovered? (for both large and mobile)</li>
        <li>Make it more responsive now that i got breakpoints</li>
      </ul>
      <Box height = '100vh' ></Box>
    </>
  );
};

export default App;
