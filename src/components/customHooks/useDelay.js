import { useEffect, useState } from "react";

const useDelay = (delay) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), delay);
  }, []);
  return ready;
};

export default useDelay;
