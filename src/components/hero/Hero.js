import { Box } from "@mui/system";
import React from "react";
import bubbles from '../../assets/images/bubbles.png'

const Hero = () => {
  return (
    <Box
      height={"100vh"}
      sx={{
        backgroundImage: `url(${bubbles})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Hero;
