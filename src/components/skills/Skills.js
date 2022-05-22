import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SkillItem from "./SkillItem";
import { v4 as uuidv4 } from "uuid";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useTheme } from "@mui/styles";

const skills = {
  languages: {
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  frontend: {
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "Material UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    jQuery:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    Formik: "https://img.stackshare.io/service/8846/preview.png",
  },
  backend: {
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    Django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    Firebase:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
  },
  other: {
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Bitbucket:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Heroku:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

const Skills = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const largeScreen = width > theme.breakpoints.values.md;
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3} py={7}>
      <Typography variant="h1" gutterBottom>
        Skills
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap={"wrap"}
        justifyContent="center"
      >
        {Object.entries(skills).map((item) => {
          return (
            <Box
              display="flex"
              flexDirection={largeScreen ? "row" : "column"}
              alignItems="center"
              pt={largeScreen ? "0px" : "50px"}
              my={3}
              key={uuidv4()}
            >
              <Box
                display="flex"
                justifyContent={largeScreen ? "right" : "center"}
                alignItems="right"
                width={largeScreen && "200px"}
                pr={largeScreen ? "50px" : "0px"}
              >
                <Typography
                  color="secondary.main"
                  fontWeight="500"
                  fontSize={"30px"}
                  mb={largeScreen ? "0px" : "30px"}
                >
                  {item[0]}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap={"wrap"}
                justifyContent={largeScreen ? "left" : "center"}
              >
                {Object.entries(item[1]).map((technology) => {
                  return (
                    <SkillItem
                      key={uuidv4()}
                      name={technology[0]}
                      src={technology[1]}
                    />
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
