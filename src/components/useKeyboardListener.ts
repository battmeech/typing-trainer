/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../ducks/game";
import randomWords from "random-words";

type Input = {
  getNextWord?: () => string;
  initialWord?: string;
  initialNextWord?: string;
};

export const useKeyboardListener = ({
  getNextWord,
  initialWord,
  initialNextWord,
}: Input) => {
  const [word, setWord] = useState(initialWord || randomWords());
  const [nextWord, setNextWord] = useState(initialNextWord || randomWords());
  const [wordAsArray, setWordAsArray] = useState(word.split(""));
  const dispatch = useDispatch();

  const compareWord = (key: string) => {
    if (key === wordAsArray[0]) {
      const newArray = [...wordAsArray];
      newArray.shift();
      setWordAsArray(newArray);
    } else {
      dispatch(gameActions.mistake());
    }
  };

  useEffect(() => {
    if (wordAsArray.length === 0) {
      dispatch(gameActions.completeWord(word));
      setWord(nextWord);
      setWordAsArray(nextWord.split(""));
      setNextWord(getNextWord ? getNextWord() : randomWords());
    }
  }, [wordAsArray]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => compareWord(event.key);
    window.addEventListener("keypress", eventListener);

    return () => window.removeEventListener("keypress", eventListener);
  }, [compareWord]);

  return { word, nextWord, wordAsArray };
};
