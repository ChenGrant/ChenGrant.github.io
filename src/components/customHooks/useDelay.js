import { useEffect, useState } from "react";

const useDelay = (delayTime) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsReady(true), delayTime * 1000);
  }, [delayTime]);
  return isReady;
};

export default useDelay;
