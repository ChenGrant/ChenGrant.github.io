import { Button, Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { CustomSettingsContext } from "./../context/CustomSettings";
import useDelay from "../customHooks/useDelay";
import useScreenSize from "../customHooks/useScreenSize";
import { keyframes } from "@emotion/react";
import InternalLink from "../shared/InternalLink";
import { useTheme } from "@mui/styles";
import AnimateOnScroll from "../shared/AnimateOnScroll";

const Hero = () => {
  const { desktop, tablet, phone } = useScreenSize();
  const theme = useTheme();
  const {
    heroPadding,
    background,
    hero,
    heroTypographyDelay,
    heroFadeDuration,
    heroButtonDelay,
  } = useContext(CustomSettingsContext);

  let heroTypographyIsReady = useDelay(heroTypographyDelay);
  let heroButtonIsReady = useDelay(heroButtonDelay);

  if (phone) {
    heroTypographyIsReady = true;
    heroButtonIsReady = true;
  }

  const reveal = keyframes({
    from: { transform: "translate3d(-40px, 0px, 0px)" },
    to: { transform: "none" },
  });

  const [backgroundImage, setBackgroundImage] = useState('') 

  return (
    <Box
      height={`calc(100vh - 2 * ${heroPadding})`}
      py={heroPadding}
      px="5vw"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      display="flex"
      flexDirection={desktop ? "row" : "column"}
      justifyContent={"center"}
      alignItems={(tablet || phone) && "center"}
      gap={desktop ? "5vw" : "min(100px, 10vh)"}
      bgcolor={theme.palette.primary.main}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems={desktop ? "space-between" : "center"}
      >
        <Fade in={heroTypographyIsReady} timeout={phone ? 0 : heroFadeDuration}>
          <Box
            sx={{
              animation: !phone && `${reveal} 1s ease ${heroTypographyDelay}s`,
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
        <InternalLink link="#contact">
          <Fade in={heroButtonIsReady} timeout={phone ? 0 : heroFadeDuration}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "max-content",
                p: "15px",
                borderRadius: "10px",
                animation: !phone && `${reveal} 1s ease ${heroButtonDelay}s`,
              }}
            >
              Let's get in touch
            </Button>
          </Fade>
        </InternalLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={tablet || phone ? "50%" : "auto"}
      >
        <AnimateOnScroll
          animation="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in"
        >
          <img
            alt="hero"
            src={hero}
            onLoad={()=> backgroundImage === '' && setBackgroundImage(background) }
            height={desktop ? "50%" : tablet ? "100%" : "auto"}
            width={phone ? "90%" : "auto"}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </AnimateOnScroll>
      </Box>
    </Box>
  );
};

export default Hero;
