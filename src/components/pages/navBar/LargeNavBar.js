import { Box } from "@mui/system";
import React, { useContext } from "react";
import NavBarItem from "./NavBarItem";
import { v4 as uuidv4 } from "uuid";
import { StylingValuesContext } from "../../../contexts/StylingValues";
import { Grid } from "@mui/material";

const LargeNavBar = ({ navBarItems }) => {
  const { navBarHeight, navBarZIndex } = useContext(StylingValuesContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      height={navBarHeight}
      width="100vw"
      zIndex={navBarZIndex}
      sx={{ backdropFilter: "blur(10px)" }}
    >
      <Grid container>
        <Grid item xs />
        <Grid item xs>
          <Box display="flex" justifyContent="center">
            {navBarItems.map(({ label, link }) => (
              <NavBarItem key={uuidv4()} link={link}>
                {label}
              </NavBarItem>
            ))}
          </Box>
        </Grid>
        <Grid item xs>
          <Box display="flex" justifyContent="right" pr={5}>
            <NavBarItem resume>RESUME</NavBarItem>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LargeNavBar;
