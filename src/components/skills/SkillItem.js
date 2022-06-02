import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CustomSettingsContext } from "./../context/CustomSettings";
import useScreenSize from "../customHooks/useScreenSize";

const SkillItem = ({ name, src }) => {
  const { tablet, phone } = useScreenSize();
  const customSettings = useContext(CustomSettingsContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width = '110px'
      mb={(tablet || phone) && "20px"}
    >
      <Box
        width={customSettings.skillItemCircleHeight}
        height={customSettings.skillItemCircleHeight}
        display="grid"
        sx={{ placeItems: "center" }}
        bgcolor="primary.main"
        borderRadius="100%"
        boxShadow={3}
      >
        <img
          src={src}
          alt={name}
          width={customSettings.skillItemIconHeight}
          height={customSettings.skillItemIconHeight}
        />
      </Box>
      <Typography pt="5px">{name}</Typography>
    </Box>
  );
};

export default SkillItem;
