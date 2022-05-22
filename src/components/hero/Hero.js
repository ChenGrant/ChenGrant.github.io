import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import bubblesImgSrc from "../../assets/images/bubbles.png";
import heroImgSrc from "../../assets/images/hero.png";
import JSLogoImgSrc from "../../assets/images/JSLogo.png";
import { CustomSettingsContext } from "../../context/CustomSettings";
import useScreenSize from "../customHooks/useScreenSize";

const Hero = () => {
  const { desktop, tablet, phone } = useScreenSize();
  const customSettings = useContext(CustomSettingsContext);

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
        <Typography
          variant="h1"
          fontWeight="bold"
          gutterBottom
          textAlign={(tablet || phone) && "center"}
        >
          Hey, I'm{" "}
          <Typography
            variant="h1"
            component="span"
            fontWeight="bold"
            color="secondary"
          >
            Grant
          </Typography>
          .
        </Typography>
        <Typography
          variant="h1"
          textAlign={(tablet || phone) && "center"}
          fontWeight="bold"
          gutterBottom
        >
          I'm a full stack developer.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "max-content",
            p: "20px",
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
        height={tablet || phone ? "50%" : null}
      >
        <img
          alt="hero"
          src={desktop ? heroImgSrc : tablet ? JSLogoImgSrc : heroImgSrc}
          height={desktop ? "50%" : "275px"}
        />
      </Box>
    </Box>
  );
};

export default Hero;
