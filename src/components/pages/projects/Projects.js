import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import AnimateOnScroll from "../../shared/AnimateOnScroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/styles";
import useScreenSize from "../../../hooks/useScreenSize";

const projects = [
  {
    name: "fitcountr",
    description:
      "fitcountr is a calorie-tracking web app that graphically visualizes data about user-recorded foods, weights, and steps.",
    techStack: [
      "React.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Redux",
      "Material UI",
      "Formik",
      "Heroku",
    ],
    websiteURL: "https://www.fitcountr.com",
    githubURL: "https://github.com/ChenGrant/fitcountr",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/fitcountr-c2a46.appspot.com/o/fitcountr.gif?alt=media&token=ee5d315e-e07c-4d87-b7c2-44cf5eb3999a",
  },
  {
    name: "Chatify",
    description:
      "Chatify is a web messaging app that allows for instant group messaging and sharing of media files between authenticated users.",
    techStack: ["React.js", "Firebase", "ChatEngine.io REST API", "Heroku"],
    //websiteURL: "https://chatify-reactjs.herokuapp.com/",
    githubURL: "https://github.com/ChenGrant/Chatify-Public",
    desktopImgSrc:
      "https://raw.githubusercontent.com/ChenGrant/Chatify-Public/2bfaaf7f78d4795033a2a7b89b74d634202e0333/about/gif.gif",
  },
  {
    name: "Graphing Calculator",
    description:
      "This project creates a mathematical graphing calculator that graphs any function constructed from any combination of any elementary function.",
    techStack: ["Java"],
    githubURL: "https://github.com/ChenGrant/Math-Graphing-Calculator",
    desktopImgSrc:
      "https://raw.githubusercontent.com/ChenGrant/Math-Graphing-Calculator/main/about/gif.gif",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "This project visualizes selection, insertion, bubble, and merge sort and displays their respective best, average, and worst time complexity.",
    techStack: ["Java"],
    githubURL: "https://github.com/ChenGrant/Sorting-Algorithm-Visualizer",
    desktopImgSrc:
      "https://github.com/ChenGrant/Sorting-Algorithm-Visualizer/raw/956209d1caae8aa4bfea950299804ff28edc30d1/about/gif.gif",
  },
];

const Projects = () => {
  const theme = useTheme();
  const { desktop } = useScreenSize();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
      py={7}
      id="projects"
    >
      <Typography variant="h1">projects</Typography>
      {projects.map((project, index) => {
        return (
          <AnimateOnScroll
            animation={index % 2 === 1 ? "fade-left" : "fade-right"}
            key={uuidv4()}
            display="grid"
            sx={{ placeItems: "center" }}
          >
            <Box
              display="flex"
              flexDirection={
                desktop ? index % 2 === 1 && "row-reverse" : "column"
              }
              width={desktop ? "1000px" : "min(500px, 90%)"}
              alignItems="center"
              gap={desktop ? "50px" : "30px"}
              mt="100px"
            >
              <Box flex="1" display="flex" flexDirection="column" gap="15px">
                <Typography variant="h4">{project.name}</Typography>
                <Typography>{project.description}</Typography>
                {project.techStack && (
                  <Box>
                    {project.techStack.map((technology, index) => (
                      <React.Fragment key={uuidv4()}>
                        {index !== 0 && (
                          <Typography display="inline">, </Typography>
                        )}
                        <Typography display="inline">{technology}</Typography>
                      </React.Fragment>
                    ))}
                  </Box>
                )}
                <Box display="flex" alignItems="center">
                  {project.websiteURL && (
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{
                        p: "15px",
                        borderRadius: "6px",
                        fontSize: "16px",
                        marginRight: "15px",
                      }}
                      sx={{ "&:hover": { boxShadow: 10 } }}
                      onClick={() => window.open(project.websiteURL, "_blank")}
                    >
                      View Site
                    </Button>
                  )}
                  <IconButton
                    size="large"
                    sx={{ right: !project.websiteURL && "12.5px" }}
                    onClick={() => window.open(project.githubURL, "_blank")}
                  >
                    <GitHubIcon fontSize="inherit" sx={{ color: "black" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box flex="1" display="grid" sx={{ placeItems: "center" }}>
                <img
                  loading="lazy"
                  src={project.desktopImgSrc}
                  alt={project.name}
                  width="100%"
                  style={{
                    boxShadow: theme.shadows[10],
                  }}
                />
              </Box>
            </Box>
          </AnimateOnScroll>
        );
      })}
    </Box>
  );
};

export default Projects;
