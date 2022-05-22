import React from "react";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useTheme } from "@mui/styles";
import LargeNavBar from "../navigationBar/large/LargeNavBar";
import SmallNavBar from "../navigationBar/small/SmallNavBar";

const NavBar = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  const placeholderFunction = () => console.log("placeholder");

  const navBarItems = [
    ["HOME", placeholderFunction],
    ["SKILLS", placeholderFunction],
    ["EXPERIENCES", placeholderFunction],
    ["PROJECTS", placeholderFunction],
    ["EDUCATION", placeholderFunction],
    ["CONTACT", placeholderFunction],
  ];

  return (
    <>
      {width > theme.breakpoints.values.md ? (
        <LargeNavBar navBarItems={navBarItems} />
      ) : (
        <SmallNavBar navBarItems={navBarItems} />
      )}
    </>
  );
};

export default NavBar;
