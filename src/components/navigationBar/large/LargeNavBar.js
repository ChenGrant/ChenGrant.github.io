import { Box } from "@mui/system";
import React from "react";
import LargeNavBarItem from "./LargeNavBarItem";
import { v4 as uuidv4 } from "uuid";
import { Slide } from "@mui/material";
import useDelay from "../../customHooks/useDelay";

const LargeNavBar = ({ headers }) => {
  const navBarIsVisible = useDelay(1000);
  return (
    <Slide direction="left" in={navBarIsVisible} timeout = {300}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="80px"
        bgcolor="transparent"
        position="fixed"
        sx={{ backdropFilter: "blur(10px)" }}
        width="100%"
      >
        <LargeNavBarItem px={5} visibility="hidden">
          RESUME
        </LargeNavBarItem>
        <Box display="flex" justifyContent={"center"}>
          {headers.map((header) => {
            const [headerLabel, headerNavigation] = header;
            return (
              <LargeNavBarItem key={uuidv4()} onClick={headerNavigation}>
                {headerLabel}
              </LargeNavBarItem>
            );
          })}
        </Box>
        <LargeNavBarItem px={5}>RESUME</LargeNavBarItem>
      </Box>
    </Slide>
  );
};

export default LargeNavBar;
