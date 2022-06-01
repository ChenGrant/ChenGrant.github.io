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
import customSettings from "../utils/customSettings";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CustomSettingsProvider value={customSettings}>
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </CustomSettingsProvider>
    </ThemeProvider>
  );
};

export default App;
