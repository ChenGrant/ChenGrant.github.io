import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SkillItem from "./SkillItem";
import { v4 as uuidv4 } from "uuid";
import useScreenSize from "../customHooks/useScreenSize";
import FadeInSection from "../shared/FadeInSection";

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

export const getSkillImgURL = (skillName) => {
  for (const skillGroup in skills) {
    if (skills[skillGroup][skillName]) return skills[skillGroup][skillName];
  }
};

const Skills = () => {
  const { desktop, tablet, phone } = useScreenSize();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      id="skills"
    >
      <Typography variant="h1">skills</Typography>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        mt={desktop ? 4 : 3}
      >
        {Object.entries(skills).map((technologyGroup) => {
          const [technologyGroupName, technologyGroupList] = technologyGroup;
          return (
            <FadeInSection key={uuidv4()}>
              <Box
                display="flex"
                flexDirection={desktop ? "row" : "column"}
                alignItems="center"
                my={3}
                gap={desktop && "50px"}
              >
                <Box
                  display="flex"
                  justifyContent={desktop ? "right" : "center"}
                  alignItems="right"
                  width={desktop && "200px"}
                >
                  <Typography
                    color="secondary.main"
                    variant="h4"
                    mb={(tablet || phone) && "30px"}
                  >
                    {technologyGroupName}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap={"wrap"}
                  justifyContent={desktop ? "left" : "center"}
                >
                  {Object.entries(technologyGroupList).map((technology) => {
                    const [technologyName, technologyImgSrc] = technology;
                    return (
                      <SkillItem
                        key={uuidv4()}
                        name={technologyName}
                        src={technologyImgSrc}
                      />
                    );
                  })}
                </Box>
              </Box>
            </FadeInSection>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
