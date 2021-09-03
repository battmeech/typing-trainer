import { useEffect, useState } from "react";

export const useTimer = (seconds: number, onCompleteCallback: () => void) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) {
      onCompleteCallback();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onCompleteCallback]);

  return timeLeft;
};
