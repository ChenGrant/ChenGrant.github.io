import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef();

  const section = {
    opacity: 0,
    transform: "translateX(20vh)",
    visibility: "hidden",
    transition: "opacity 0.6s ease-out, transform 1.2s ease-out",
    willChange: "opacity, visibility",
  };

  const sectionIsVisible = {
    transition: "opacity 0.6s ease-out, transform 1.2s ease-out",
    willChange: "opacity, visibility",
    opacity: 1,
    transform: "none",
    visibility: "visible",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(ref.current);
    const refCurrentCopy = ref.current;
    return () => observer.unobserve(refCurrentCopy);
  }, []);

  return (
    <Box style={isVisible ? sectionIsVisible : section} ref={ref}>
      {children}
    </Box>
  );
};

export default FadeInSection;
