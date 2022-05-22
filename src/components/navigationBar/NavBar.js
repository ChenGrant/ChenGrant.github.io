import React from "react";
import useScreenSize from "../customHooks/useScreenSize";
import LargeNavBar from "../navigationBar/large/LargeNavBar";
import SmallNavBar from "../navigationBar/small/SmallNavBar";

const NavBar = () => {
  const { desktop, tablet, phone } = useScreenSize();

  const navBarItems = [
    ["HOME", () => console.log("HOME")],
    ["SKILLS", () => console.log("SKILLS")],
    ["EXPERIENCES", () => console.log("EXPERIENCES")],
    ["PROJECTS", () => console.log("PROJECTS")],
    ["EDUCATION", () => console.log("EDUCATION")],
    ["CONTACT", () => console.log("CONTACT")],
  ];

  if (desktop) return <LargeNavBar navBarItems={navBarItems} />;
  if (tablet || phone) return <SmallNavBar navBarItems={navBarItems} />;
  return null;
};

export default NavBar;
