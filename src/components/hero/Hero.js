import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bubbles from "../../assets/images/bubbles.png";
import hero from "../../assets/images/hero.png";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useTheme } from "@mui/styles";

const Hero = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const largeScreen = width > theme.breakpoints.values.md;
  const smallScreen = width > theme.breakpoints.values.sm;
  //const extraSmallScreen = width > theme.breakpoints.values.xs;

  //console.log(largeScreen, smallScreen, extraSmallScreen, theme.breakpoints.values.xs)

  const largeFontSize = "56px";
  const smallFontSize = "40px";
  const extraSmallFontSize = '30px';
  return (
    <Box
      height={largeScreen ? "calc(100vh - 2 * 80px)" : "calc(100vh - 2 * 70px)"}
      py={largeScreen ? "80px" : "70px"}
      px="5vw"
      sx={{
        backgroundImage: `url(${bubbles})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      display="flex"
      flexDirection={largeScreen ? "row" : "column"}
      justifyContent={"center"}
      alignItems={!largeScreen && "center"}
      gap={largeScreen ? "5vw" : "min(100px, 10vh)"}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        //bgcolor="green"
        alignItems={largeScreen ? "space-between" : "center"}
      >
        <Typography
          variant="h1"
          component = 'div'
          fontWeight={700}
          fontSize={largeScreen ? largeFontSize : smallScreen ? smallFontSize : extraSmallFontSize}
          gutterBottom
          textAlign={!largeScreen && "center"}
        >
          Hey, I'm{" "}
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize={largeScreen ? largeFontSize : smallScreen ? smallFontSize : extraSmallFontSize}
            color="secondary.main"
            display="inline"
          >
            Grant
          </Typography>
          .
        </Typography>
        <Typography
          variant="h1"
          textAlign={!largeScreen && "center"}
          fontWeight={700}
          fontSize={largeScreen ? largeFontSize : smallScreen ? smallFontSize : extraSmallFontSize}
          gutterBottom
        >
          I'm a full stack developer.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "max-content",
            p: '20px',
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          Let's get in touch
        </Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        //bgcolor="red"
        height={!largeScreen ? "50%" : null}
      >
        <img alt = 'hero' src={hero} height={largeScreen ? "50%" : '275px'} />
      </Box>
    </Box>
  );
};

export default Hero;
