/* eslint-disable react-hooks/exhaustive-deps */
import randomWords from "random-words";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../ducks/game";

export const useParagraphMode = () => {
  const [words] = useState(randomWords(150));
  const [wordIndex, setWordIndex] = useState(0);
  const [wordAsArray, setWordAsArray] = useState(words[wordIndex].split(""));
  const dispatch = useDispatch();

  const compareWord = (key: string) => {
    if (key === " ") return;
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
      const newIndex = Number(wordIndex + 1);
      dispatch(gameActions.completeWord(words[wordIndex]));
      setWordAsArray(words[newIndex].split(""));
      setWordIndex(newIndex);
    }
  }, [wordAsArray]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => compareWord(event.key);
    window.addEventListener("keypress", eventListener);

    return () => window.removeEventListener("keypress", eventListener);
  }, [compareWord]);

  return { words, wordAsArray, wordIndex };
};
