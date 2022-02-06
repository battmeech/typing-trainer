/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useTimer = (seconds: number, onCompleteCallback: () => void) => {
  const [timeRemaining, setTimeRemaining] = useState(seconds * 10);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [addedTime, setAddedTime] = useState(0);
  const [timeEarned, setTimeEarned] = useState(0);

  const addBonusTime = (bonusTime: number) => {
    setAddedTime(addedTime + bonusTime * 10);
    setTimeEarned(timeEarned + bonusTime);
  };

  const reduceTime = () => {
    if (timeRemaining) setTimeRemaining((currentValue) => currentValue - 1);
    else if (addedTime) setAddedTime((currentValue) => currentValue - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      reduceTime();
      setElapsedTime(elapsedTime + 1);
    }, 100);
  }, [elapsedTime]);

  useEffect(() => {
    if (!timeRemaining && !addedTime) {
      onCompleteCallback();
    }
  }, [timeRemaining, addedTime]);

  return {
    timeRemaining: (timeRemaining + addedTime) / 10,
    addBonusTime,
    elapsedTime: elapsedTime / 10,
    timeEarned,
  };
};
