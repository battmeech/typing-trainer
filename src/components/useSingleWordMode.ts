/* eslint-disable react-hooks/exhaustive-deps */
import randomWords from "random-words";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions } from "../ducks/game";

export const useSingleWordMode = () => {
  const { noMercy } = useGame();
  const [word, setWord] = useState(randomWords());
  const [nextWord, setNextWord] = useState(randomWords());
  const [wordAsArray, setWordAsArray] = useState(word.split(""));
  const dispatch = useDispatch();

  const compareWord = (key: string) => {
    if (key === " ") return;
    if (key === wordAsArray[0]) {
      const newArray = [...wordAsArray];
      newArray.shift();
      setWordAsArray(newArray);
    } else {
      dispatch(gameActions.mistake());
      if (noMercy) setWordAsArray(word.split(""));
    }
  };

  useEffect(() => {
    if (wordAsArray.length === 0) {
      dispatch(gameActions.completeWord(word));
      setWord(nextWord);
      setWordAsArray(nextWord.split(""));
      setNextWord(randomWords());
    }
  }, [wordAsArray]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => compareWord(event.key);
    window.addEventListener("keypress", eventListener);

    return () => window.removeEventListener("keypress", eventListener);
  }, [compareWord]);

  return { word, nextWord, wordAsArray };
};
