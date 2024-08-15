import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import AnimateOnScroll from "../../shared/AnimateOnScroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/styles";
import useScreenSize from "../../../hooks/useScreenSize";

const projects = [
  {
    name: "insight",
    description: "A CLI search engine to semantically search Python codebases.",
    techStack: [
      "Go",
      "Python",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "ChromaDB",
      "Docker",
      "gRPC",
      "Nginx",
      "Bash",
    ],
    websiteURL: "https://pypi.org/project/insight-cli/",
    githubURL: "https://github.com/grantchen2003/insight-cli",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/instapix-c6006.appspot.com/o/instapix-gif.gif?alt=media&token=6e4038dd-c66d-4d0a-a674-d56a26ab2fb9",
  },
  {
    name: "fitcountr",
    description: "Track your fitness and graphically visualize your progress.",
    techStack: [
      "Express.js",
      "MongoDB",
      "Firebase",
      "React.js",
      "Redux",
      "Material UI",
      "Formik",
    ],
    websiteURL: "https://www.fitcountr.com",
    githubURL: "https://github.com/ChenGrant/fitcountr",
    desktopImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/fitcountr-c2a46.appspot.com/o/fitcountr.gif?alt=media&token=ee5d315e-e07c-4d87-b7c2-44cf5eb3999a",
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
              flexDirection="column"
              width={desktop ? "1000px" : "min(500px, 90%)"}
              alignItems="center"
              gap={desktop ? "50px" : "30px"}
              mt="100px"
            >
              <Box
                flex="1"
                display="flex"
                flexDirection="column"
                gap="15px"
                alignItems="center"
                textAlign="center"
              >
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
            </Box>
          </AnimateOnScroll>
        );
      })}
    </Box>
  );
};

export default Projects;
