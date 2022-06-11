import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { StylingValuesContext } from "../../contexts/StylingValues";
import useScreenSize from "../../hooks/useScreenSize";

const getValueOfPixelString = (pixelString) => +pixelString.trim().slice(0, -2);

const InternalLink = ({ children, link = "" }) => {
  const { navBarHeight } = useContext(StylingValuesContext);
  const { desktop } = useScreenSize();

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = desktop ? -getValueOfPixelString(navBarHeight) : 0;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <HashLink
        to={link}
        style={{ textDecoration: "none" }}
        scroll={scrollWithOffset}
      >
        {children}
      </HashLink>
    </BrowserRouter>
  );
};

export default InternalLink;
