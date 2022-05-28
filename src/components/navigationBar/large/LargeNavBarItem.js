import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import InternalLink from "../../shared/InternalLink";

const LargeNavBarItem = ({ children, link = "", ...rest }) => {
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
          bgcolor="tertiary.main"
          borderRadius="100%"
        />
      </Slide>

      <InternalLink link={link}>
        <Typography
          sx={{ "&:hover": { cursor: "pointer" } }}
          px={1.5}
          pb={`${hoverDotHeight + distanceBetweenHoverDotAndHeader}px`}
          pt={`${distanceBetweenHoverDotAndHeader}px`}
          fontWeight="bold"
          color="secondary"
          textAlign="center"
          onMouseEnter={() => setNavBarItemIsHovered(true)}
          onMouseLeave={() => setNavBarItemIsHovered(false)}
          {...rest}
        >
          {children}
        </Typography>
      </InternalLink>
    </Box>
  );
};

export default LargeNavBarItem;
