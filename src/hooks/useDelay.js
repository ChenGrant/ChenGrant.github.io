import { useEffect, useState } from "react";

const millisecondsPerSecond = 1000;

const secondsToMilliseconds = (seconds) => seconds * millisecondsPerSecond;

const useDelay = (delayInSeconds) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsReady(true), secondsToMilliseconds(delayInSeconds));
  }, [delayInSeconds]);

  return isReady;
};

export default useDelay;
