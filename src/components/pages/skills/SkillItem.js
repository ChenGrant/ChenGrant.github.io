import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { StylingValuesContext } from "../../../contexts/StylingValues";
import useScreenSize from "../../../hooks/useScreenSize";

const SkillItem = ({ name, src }) => {
  const { tablet, phone } = useScreenSize();
  const {skillItemCircleHeight, skillItemIconHeight} = useContext(StylingValuesContext);
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="110px"
      mb={(tablet || phone) && "20px"}
    >
      <Box
        width={skillItemCircleHeight}
        height={skillItemCircleHeight}
        display="grid"
        sx={{ placeItems: "center" }}
        bgcolor="primary.main"
        borderRadius="100%"
        boxShadow={3}
      >
        <img
          src={src}
          alt={name}
          loading="lazy"
          width={skillItemIconHeight}
          height={skillItemIconHeight}
        />
      </Box>
      <Typography pt="5px">{name}</Typography>
    </Box>
  );
};

export default SkillItem;
