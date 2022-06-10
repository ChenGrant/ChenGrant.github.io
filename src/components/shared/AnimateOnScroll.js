import { Box } from "@mui/system";
import useScreenSize from "../customHooks/useScreenSize";

const AnimateOnScroll = ({ animation, children, ...rest }) => {
  const { phone } = useScreenSize();
  return (
    <Box data-aos={phone ? "fade-in" : animation} width="100%" {...rest}>
      {children}
    </Box>
  );
};

export default AnimateOnScroll;
