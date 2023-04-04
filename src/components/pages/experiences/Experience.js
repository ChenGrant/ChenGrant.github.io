import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import AnimateOnScroll from "../../shared/AnimateOnScroll";

const experiencesList = [
  {
    companyName: "University Health Network",
    role: "Web Developer",
    timePeriod: "February 2023 - April 2023",
    techStack: [
      "Bootstrap",
      "jQuery",
      "dotCMS",
      "Apache Velocity",
      "GitLab",
      "Asana",
    ],
  },
  {
    companyName: "Spotwork",
    role: "Full Stack Web Developer",
    timePeriod: "May 2022 - August 2022",
    techStack: [
      "React.js",
      "Node.js",
      "Firebase",
      "Redux",
      "Material UI",
      "Formik",
      "Figma",
    ],
  },
  {
    companyName: "1915 Lan Zhou Ramen",
    role: "Full Stack Web Developer",
    timePeriod: "June 2021 - August 2021",
    techStack: ["Django", "jQuery", "Sass", "MySQL", "Heroku"],
  },
  {
    companyName: "Code Ninjas",
    role: "Lead Coding Instructor",
    timePeriod: "June 2020 - August 2020",
  },
];

const Experience = () => {
  const isNotFirstItem = (index) => index !== 0;
  const isNotLastItem = (index) => index !== experiencesList.length - 1;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      bgcolor="primary.main"
      id="experiences"
    >
      <Typography variant="h1">experiences</Typography>
      <Box p={1}>
        {experiencesList.map((experience, index) => {
          return (
            <Box display="flex" flexDirection="row" key={uuidv4()}>
              <Box display="flex" flexDirection="column" width="20px">
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={isNotFirstItem(index) && "tertiary.main"}
                  mb={isNotFirstItem(index) && 2}
                  borderRadius="0px 0px 5px 5px "
                />
                <Box
                  height="10px"
                  width="10px"
                  borderRadius="100%"
                  bgcolor="secondary.main"
                />
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={isNotLastItem(index) && "tertiary.main"}
                  mt={isNotLastItem(index) && 2}
                  borderRadius="5px 5px 0px 0px"
                />
              </Box>
              <AnimateOnScroll animation="fade-left">
                <Box py={5} pl={3}>
                  <Typography variant="h4" color="secondary.main">
                    {experience.companyName}
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {experience.role}
                  </Typography>
                  {experience.techStack && (
                    <Box maxWidth="350px" mb={1.5}>
                      {experience.techStack.map((technology, index) => (
                        <React.Fragment key={uuidv4()}>
                          {index !== 0 && (
                            <Typography display="inline">, </Typography>
                          )}
                          <Typography display="inline" noWrap>
                            {technology}
                          </Typography>
                        </React.Fragment>
                      ))}
                    </Box>
                  )}
                  <Typography>{experience.timePeriod}</Typography>
                </Box>
              </AnimateOnScroll>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Experience;
