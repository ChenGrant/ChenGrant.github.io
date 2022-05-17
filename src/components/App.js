import { Box, Slide } from "@mui/material";
import React, { useEffect } from "react";
import useWindowDimensions from "./customHooks/useWindowDimensions";
import { useTheme } from "@mui/styles";
import LargeNavBar from "./navigationBar/large/LargeNavBar";
import SmallNavBar from "./navigationBar/small/SmallNavBar";

const placeholderFunction = () => console.log("placeholder");
const headers = [
  ["HOME", placeholderFunction],
  ["SKILLS", placeholderFunction],
  ["EXPERIENCES", placeholderFunction],
  ["PROJECTS", placeholderFunction],
  ["EDUCATION", placeholderFunction],
  ["CONTACT", placeholderFunction],
];

const App = () => {
  const { width } = useWindowDimensions();

  const theme = useTheme();
  useEffect(() => {
    console.log(theme.breakpoints.values);
  }, [theme.breakpoints.values]);

  console.log(width);

  return (
    <Box>
      {width > theme.breakpoints.values.md ? (
        <LargeNavBar headers={headers} />
      ) : (
        <SmallNavBar headers={headers} />
      )}

      <Box
        height={"100vh"}
        sx={{
          backgroundImage:
            "url(https://micael-portfolio.netlify.app/static/media/bgIMG.c39101e520e2997fc6d4.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <ul>
        <li>Make the blue circle have an animation, pop up</li>
      </ul>
      <Box height="100vh" bgcolor="primary.main" />
    </Box>
  );
};

export default App;
