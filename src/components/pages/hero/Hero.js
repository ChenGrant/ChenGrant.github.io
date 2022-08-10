import { Button, Fade, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { StylingValuesContext } from "../../../contexts/StylingValues";
import useDelay from "../../../hooks/useDelay";
import useScreenSize from "../../../hooks/useScreenSize";
import { keyframes } from "@emotion/react";
import InternalLink from "../../shared/InternalLink";
import { useTheme } from "@mui/styles";
import AnimateOnScroll from "../../shared/AnimateOnScroll";

const heroImageSrc =
  "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/hero%2Fhero.png?alt=media&token=6f806aee-a1e1-4061-a0af-b42a18371b14";

const backgroundImageSrc =
  "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/background%2Fbackground.png?alt=media&token=8dc3c778-0e09-4653-8612-45ea605f294d";

const Hero = () => {
  const { desktop, tablet, phone } = useScreenSize();
  const theme = useTheme();
  const {
    heroPadding,
    heroTypographyDelay,
    heroFadeDuration,
    heroButtonDelay,
  } = useContext(StylingValuesContext);

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

  const [backgroundImage, setBackgroundImage] = useState("");

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
            src={heroImageSrc}
            onLoad={() =>
              backgroundImage === "" && setBackgroundImage(backgroundImageSrc)
            }
            height={phone ? "auto" : "400px"}
            width={phone ? "90%" : "474px"}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </AnimateOnScroll>
      </Box>
    </Box>
  );
};

export default Hero;
