import { Box } from "@mui/system";
import React from "react";
import NavBarItem from "./NavBarItem";
import { v4 as uuidv4 } from "uuid";

const NavBar = () => {
  const placeholderFunction = () => console.log("placeholder");

  const headers = [
    ["HOME", placeholderFunction],
    ["SKILLS", placeholderFunction],
    ["EXPERIENCES", placeholderFunction],
    ["PROJECTS", placeholderFunction],
    ["EDUCATION", placeholderFunction],
    ["CONTACT", placeholderFunction],
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="70px"
      px={2}
      bgcolor="primary.main"
    >
      <NavBarItem visibility="hidden">RESUME</NavBarItem>
      <Box display="flex" justifyContent={"center"}>
        {headers.map((header) => {
          const [headerLabel, headerNavigation] = header;
          return (
            <NavBarItem key={uuidv4()} onClick={headerNavigation}>
              {headerLabel}
            </NavBarItem>
          );
        })}
      </Box>
      <NavBarItem>RESUME</NavBarItem>
    </Box>
  );
};

export default NavBar;
