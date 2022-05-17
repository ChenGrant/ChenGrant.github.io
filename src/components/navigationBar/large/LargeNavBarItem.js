import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const LargeNavBarItem = ({ children, ...rest }) => {
  const [navBarItemIsHovered, setNavBarItemIsHovered] = useState(false);
  const hoverDotHeight = 7;
  const distanceBetweenHoverDotAndHeader = 5;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Slide direction="down" in={navBarItemIsHovered}>
        <Box
          visibility={navBarItemIsHovered ? "visible" : "hidden"}
          height={hoverDotHeight}
          width={hoverDotHeight}
          bgcolor="secondary.main"
          borderRadius={100}
        />
      </Slide>
      <Typography
        sx={{ "&:hover": { cursor: "pointer" } }}
        px={1.5}
        pb={hoverDotHeight + distanceBetweenHoverDotAndHeader + "px"}
        pt={distanceBetweenHoverDotAndHeader + "px"}
        fontWeight={500}
        fontSize={15}
        color="primary.veryDark"
        textAlign="center"
        onMouseEnter={() => setNavBarItemIsHovered(true)}
        onMouseLeave={() => setNavBarItemIsHovered(false)}
        {...rest}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default LargeNavBarItem;
