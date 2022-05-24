import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import FadeInSection from "../shared/FadeInSection";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTheme } from "@mui/styles";
import useScreenSize from "../customHooks/useScreenSize";

const projects = [
  {
    name: "Chatify",
    description:
      "Chatify is a web messaging app that allows for instant messaging, sharing of photos, videos, and other files for group chats.",
    techStack: ["React.js", "Firebase", "ChatEngine.io REST API", "Heroku"],
    websiteURL: "https://chatify-reactjs.herokuapp.com/",
    githubURL: "https://github.com/ChenGrant/Chatify-Public",
    desktopImgSrc:
      "https://raw.githubusercontent.com/ChenGrant/Chatify-Public/2bfaaf7f78d4795033a2a7b89b74d634202e0333/about/gif.gif",
  },
  {
    name: "Graphing Calculator",
    description:
      "This project consists of a scientific calculator, statistics calculator, graphing and calculus calculator, and trigonometry visualizer.",
    techStack: ["Java"],
    githubURL: "https://github.com/ChenGrant/Math-Graphing-Calculator",
    desktopImgSrc:
      "http://grantchen.me/resources/gifs/math_graphing_calculator.gif",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "This project visualizes selection, insertion, bubble, and merge sort and displays their respective best, average, and worst time complexity.",
    techStack: ["Java"],
    githubURL: "https://github.com/ChenGrant/Sorting-Algorithm-Visualizer",
    desktopImgSrc:
      "http://grantchen.me/resources/gifs/sorting_algorithm_visualizer.gif",
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
    >
      <Typography variant="h1">projects</Typography>
      {projects.map((project, index) => {
        return (
          <FadeInSection
            direction={index % 2 === 1 && "left"}
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
                        borderRadius: "10px",
                        fontSize: "16px",
                        marginRight: "15px",
                      }}
                    >
                      View Site
                    </Button>
                  )}

                  <IconButton
                    size="large"
                    sx={{ right: !project.websiteURL && "12.5px" }}
                  >
                    <GitHubIcon fontSize="inherit" sx={{ color: "black" }} />
                  </IconButton>
                  {/* <IconButton size="large">
                    <YouTubeIcon fontSize="inherit" />
                  </IconButton> */}
                </Box>
              </Box>
              <Box flex="1" display="grid" sx={{ placeItems: "center" }}>
                <img
                  src={project.desktopImgSrc}
                  alt={project.name}
                  width="100%"
                  style={{
                    boxShadow: theme.shadows[4],
                  }}
                />
              </Box>
            </Box>
          </FadeInSection>
        );
      })}
    </Box>
  );
};

export default Projects;
