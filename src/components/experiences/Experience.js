import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CustomSettingsContext } from "../../context/CustomSettings";
import FadeInSection from "../shared/FadeInSection";

const Experience = () => {
  const { experiences } = useContext(CustomSettingsContext);
  const isNotFirstItem = (index) => index !== 0;
  const isNotLastItem = (index) => index !== experiences.length - 1;

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
        {experiences.map((experience, index) => {
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
              <FadeInSection>
                <Box py={5} pl={3}>
                  <Typography variant="h4" color="secondary.main">
                    {experience.companyName}
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>
                    {experience.role}
                  </Typography>
                  {experience.techStack && (
                    <Box>
                      {experience.techStack.map((technology, index) => (
                        <React.Fragment key={uuidv4()}>
                          {index !== 0 && (
                            <Typography display="inline">, </Typography>
                          )}
                          <Typography display="inline">{technology}</Typography>
                        </React.Fragment>
                      ))}
                    </Box>
                  )}
                  <Typography>{experience.timePeriod}</Typography>
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
