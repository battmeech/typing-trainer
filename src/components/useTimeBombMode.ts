/* eslint-disable react-hooks/exhaustive-deps */
import randomWords from "random-words";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { useTimer } from "./useTimer";

const timeElapsedMap = [
  { timeElapsed: 30, additionalTime: 0.3 },
  { timeElapsed: 25, additionalTime: 0.4 },
  { timeElapsed: 20, additionalTime: 0.6 },
  { timeElapsed: 15, additionalTime: 0.7 },
  { timeElapsed: 10, additionalTime: 0.9 },
  { timeElapsed: 5, additionalTime: 1 },
  { timeElapsed: 0, additionalTime: 1.5 },
];

export const useTimeBombMode = () => {
  const dispatch = useDispatch();
  const { noMercy } = useGame();

  const [word, setWord] = useState(randomWords());
  const [nextWord, setNextWord] = useState(randomWords());
  const [wordAsArray, setWordAsArray] = useState(word.split(""));
  const [characterIndex, setCharacterIndex] = useState(0);

  const { timeRemaining, addBonusTime, elapsedTime } = useTimer(10, () =>
    dispatch(gameActions.setState(State.FINISHED))
  );

  const compareWord = (key: string) => {
    if (key === " ") return;
    if (key === wordAsArray[0]) {
      const newArray = [...wordAsArray];
      newArray.shift();
      setWordAsArray(newArray);
      setCharacterIndex(Number(characterIndex + 1));
    } else {
      dispatch(gameActions.mistake());
      if (noMercy) {
        setWordAsArray(word.split(""));
        setCharacterIndex(0);
      }
    }
  };

  const calculateBonusTime = (): number =>
    timeElapsedMap.find((it) => elapsedTime >= it.timeElapsed)
      ?.additionalTime || 0;

  useEffect(() => {
    if (wordAsArray.length === 0) {
      dispatch(gameActions.completeWord(word));
      setWord(nextWord);
      setWordAsArray(nextWord.split(""));
      setNextWord(randomWords());
      setCharacterIndex(0);
      addBonusTime(calculateBonusTime());
    }
  }, [wordAsArray]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => compareWord(event.key);
    window.addEventListener("keypress", eventListener);

    return () => window.removeEventListener("keypress", eventListener);
  }, [compareWord]);

  return { word, nextWord, characterIndex, timeRemaining, elapsedTime };
};
