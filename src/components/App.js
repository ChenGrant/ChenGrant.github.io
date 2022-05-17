import { Box } from "@mui/system";
import React from "react";
import Hero from "./hero/Hero";
import NavBar from "./navigationBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <Box height = '100vh' ></Box>
    </>
  );
};

export default App;
