import { Box } from "@mui/system";

const AnimateOnScroll = ({ animation, children, ...rest }) => {
  return (
    <Box data-aos={animation} width="100%" {...rest}>
      {children}
    </Box>
  );
};

export default AnimateOnScroll;
