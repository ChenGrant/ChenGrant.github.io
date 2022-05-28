import React from "react";
import useScreenSize from "../customHooks/useScreenSize";
import LargeNavBar from "../navigationBar/large/LargeNavBar";
import SmallNavBar from "../navigationBar/small/SmallNavBar";

const navBarItems = [
  {
    label: "HOME",
    link: "#",
  },
  {
    label: "SKILLS",
    link: "#skills",
  },
  {
    label: "EXPERIENCES",
    link: "#experiences",
  },
  {
    label: "PROJECTS",
    link: "#projects",
  },
  {
    label: "CONTACT",
    link: "#contact",
  },
];

const NavBar = () => {
  const { desktop, tablet, phone } = useScreenSize();
  if (desktop) return <LargeNavBar navBarItems={navBarItems} />;
  if (tablet || phone) return <SmallNavBar navBarItems={navBarItems} />;
  return null;
};

export default NavBar;
