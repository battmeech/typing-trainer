import { useEffect, useState } from "react";

export const useTimer = (seconds: number, onCompleteCallback: () => void) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) {
      onCompleteCallback();
      return;
    }

    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }, [timeLeft]);

  return timeLeft;
};
