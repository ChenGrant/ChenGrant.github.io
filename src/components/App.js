import React from "react";
import Hero from "./hero/Hero";
import NavBar from "./navBar/NavBar";
import Skills from "./skills/Skills";
import customSettings, { CustomSettingsProvider } from "../context/CustomSettings";
import Experience from "./experiences/Experience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import themeMUI from "../ThemeMUI";
import { ThemeProvider } from "@mui/material";

const App = () => {

  return (
    <ThemeProvider theme={themeMUI}>
      <CustomSettingsProvider value = {customSettings}>
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
