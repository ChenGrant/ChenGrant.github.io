import { Box } from "@mui/system";
import useScreenSize from "../customHooks/useScreenSize";

const AnimateOnScroll = ({ animation, children, ...rest }) => {
  const { phone } = useScreenSize();
  if (phone)
    return (
      <Box width="100%" {...rest}>
        {children}
      </Box>
    );

  return (
    <Box data-aos={animation} width="100%" {...rest} >
      {children}
    </Box>
  );
};

export default AnimateOnScroll;
