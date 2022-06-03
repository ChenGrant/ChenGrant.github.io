import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import SkillItem from "./SkillItem";
import { v4 as uuidv4 } from "uuid";
import useScreenSize from "../customHooks/useScreenSize";
import FadeInSection from "../shared/FadeInSection";
import { CustomSettingsContext } from "./../context/CustomSettings";

const Skills = () => {
  const {skills} = useContext(CustomSettingsContext)
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
            <Box
              display="flex"
              flexDirection={desktop ? "row" : "column"}
              alignItems="center"
              my={3}
              gap={desktop && "50px"}
              key={uuidv4()}
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

              <FadeInSection >
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
              </FadeInSection>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
