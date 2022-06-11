import React, { useEffect } from "react";
import stylingValues, { StylingValuesProvider } from "../contexts/StylingValues";
import Hero from "./pages/hero/Hero";
import NavBar from "./pages/navBar/NavBar";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experiences/Experience";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import theme from "../mui/Theme";
import { ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease',
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StylingValuesProvider value = {stylingValues}>
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </StylingValuesProvider>
    </ThemeProvider>
  );
};

export default App;
