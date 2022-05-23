import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { randomColor } from "randomcolor";
import { v4 as uuidv4 } from "uuid";
import FadeInSection from "../shared/FadeInSection";

const experiencesList = [
  {
    companyName: "Spotwork",
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGTMZAxPsexxw/company-logo_200_200/0/1648653697422?e=1661385600&v=beta&t=jsA_ulxI_lCkstV3Z7v8908vEhd8zg5n-w91iMCijmk",
    role: "Full Stack Developer Intern",
    timePeriod: "May 2022 - August 2022",
    location: "Toronto, Canada",
  },
  {
    companyName: "Jin kuai zi",
    logo: "https://i.ibb.co/L86HLG4/logo.png",
    role: "Full Stack Developer Freelancer",
    timePeriod: "May 2022 - August 2022",
    location: "Richmond Hill, Canada",
  },
  {
    companyName: "Code Ninjas",
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGTMZAxPsexxw/company-logo_200_200/0/1648653697422?e=1661385600&v=beta&t=jsA_ulxI_lCkstV3Z7v8908vEhd8zg5n-w91iMCijmk",
    role: "Lead Coding Instructor",
    timePeriod: "May 2022 - August 2022",
    location: "Toronto, Canada",
  },
];

class Experiences {
  constructor(experiences) {
    this.experiences = experiences;
  }

  isNotFirstItem(index) {
    return index !== 0;
  }

  isNotLastItem(index) {
    return index !== this.experiences.length - 1;
  }
}

const Experience = () => {
  const experiences = new Experiences(experiencesList);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      bgcolor="primary.main"
    >
      <Typography variant="h1">experiences</Typography>
      <Box>
        {experiences.experiences.map((experience, index) => {
          return (
            <Box display="flex" flexDirection="row" key={uuidv4()}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="20px"
              >
                <Box
                  width="5px"
                  flex={2}
                  bgcolor={experiences.isNotFirstItem(index) && "tertiary.main"}
                  mb={experiences.isNotFirstItem(index) && 2}
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
                  bgcolor={experiences.isNotLastItem(index) && "tertiary.main"}
                  mt={experiences.isNotLastItem(index) && 2}
                  borderRadius="5px 5px 0px 0px"
                />
              </Box>
              <FadeInSection>
                <Box py={5} pl={3}>
                  <Typography variant="h4">{experience.companyName}</Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {experience.role}
                  </Typography>
                  <Typography>{experience.timePeriod}</Typography>
                  <Typography>{experience.location}</Typography>
                </Box>
              </FadeInSection>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Experience;
