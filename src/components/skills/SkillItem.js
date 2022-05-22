import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useTheme } from "@mui/styles";

const SkillItem = ({ name, src }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const largeScreen = width > theme.breakpoints.values.md;
  const smallScreen = width > theme.breakpoints.values.sm;

  const iconHeight = '50%'
  const outlineHeight = '80px'
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={"15px"}
      mb={largeScreen ? "0px" : "20px"}
    >
      <Box
        width={outlineHeight}
        height={outlineHeight}
        display="grid"
        sx={{ placeItems: "center" }}
        bgcolor="primary.main"
        borderRadius="100%"
        boxShadow={3}
      >
        <img src={src} alt={name} width={iconHeight} height={iconHeight} />
      </Box>
      <Typography pt="5px">{name}</Typography>
    </Box>
  );
};

export default SkillItem;
