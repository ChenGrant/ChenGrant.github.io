import useWindowDimensions from "./useWindowDimensions";
import { useTheme } from "@mui/styles";

const useScreenSize = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  const screenSize = {
    desktop: false,
    tablet: false,
    phone: false,
  };

  if (width >= theme.breakpoints.values.md) {
    screenSize.desktop = true;
  } else if (width >= theme.breakpoints.values.sm) {
    screenSize.tablet = true;
  } else if (width >= theme.breakpoints.values.xs) {
    screenSize.phone = true;
  }

  return screenSize;
};

export default useScreenSize;
