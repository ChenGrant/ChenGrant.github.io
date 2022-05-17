import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const NavBarItem = ({ children, ...rest }) => {
  const [navBarItemIsHovered, setNavBarItemIsHovered] = useState(false);
  const dotHeight = 7;
  const dotVerticalSpacing = 10 - dotHeight;
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
          height={dotHeight}
          width={dotHeight}
          bgcolor="secondary.main"
          borderRadius={100}
        />
      </Slide>
      <Typography
        sx={{ "&:hover": { cursor: "pointer" } }}
        px={2}
        pb={dotHeight + dotVerticalSpacing + "px"}
        pt={dotVerticalSpacing + "px"}
        fontWeight={500}
        color="primary.dark"
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

export default NavBarItem;
