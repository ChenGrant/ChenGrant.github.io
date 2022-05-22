import { Button, Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import bubblesImgSrc from "../../assets/images/bubbles.png";
import heroImgSrc from "../../assets/images/hero.png";
import { CustomSettingsContext } from "../../context/CustomSettings";
import useDelay from "../customHooks/useDelay";
import useScreenSize from "../customHooks/useScreenSize";
import { keyframes } from "@mui/system";

const Hero = () => {
  const { desktop, tablet, phone } = useScreenSize();
  const customSettings = useContext(CustomSettingsContext);

  const reveal = keyframes` 
    from {transform: translate3d(-40px, 0px, 0px)} 
    to {transform: none}`;

  return (
    <Box
      height={`calc(100vh - 2 * ${customSettings.heroPadding})`}
      py={customSettings.heroPadding}
      px="5vw"
      sx={{
        backgroundImage: `url(${bubblesImgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      display="flex"
      flexDirection={desktop ? "row" : "column"}
      justifyContent={"center"}
      alignItems={(tablet || phone) && "center"}
      gap={desktop ? "5vw" : "min(100px, 10vh)"}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems={desktop ? "space-between" : "center"}
      >
        <Fade
          in={useDelay(customSettings.heroTypographyDelay)}
          timeout={customSettings.heroFadeDuration}
        >
          <Box
            sx={{
              animation: `${reveal} 1s ease ${customSettings.heroTypographyDelay}s`,
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              textAlign={(tablet || phone) && "center"}
            >
              Hey, I'm{" "}
              <Typography variant="h1" component="span" color="secondary">
                Grant
              </Typography>
              .
            </Typography>
            <Typography
              variant="h1"
              textAlign={(tablet || phone) && "center"}
              gutterBottom
            >
              I'm a full stack developer.
            </Typography>
          </Box>
        </Fade>
        <Fade
          in={useDelay(customSettings.heroButtonDelay)}
          timeout={customSettings.heroFadeDuration}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "max-content",
              p: "20px",
              borderRadius: "10px",
              animation: `${reveal} 1s ease ${customSettings.heroButtonDelay}s`,
            }}
          >
            Let's get in touch
          </Button>
        </Fade>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={tablet || phone ? "50%" : "auto"}
      >
        <img
          alt="hero"
          src={heroImgSrc}
          height={desktop ? "50%" : tablet ? "100%" : "auto"}
          width={phone ? "90%" : "auto"}
        />
      </Box>
    </Box>
  );
};

export default Hero;
