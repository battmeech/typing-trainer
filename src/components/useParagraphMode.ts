/* eslint-disable react-hooks/exhaustive-deps */
import randomWords from "random-words";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { useTimer } from "./useTimer";

export const useParagraphMode = () => {
  const dispatch = useDispatch();
  const { noMercy, gameLength } = useGame();

  const [words] = useState(randomWords(150));
  const [wordIndex, setWordIndex] = useState(0);
  const [wordAsArray, setWordAsArray] = useState(words[wordIndex].split(""));
  const [characterIndex, setCharacterIndex] = useState(0);

  const { timeRemaining } = useTimer(gameLength, () =>
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
        setWordAsArray(words[wordIndex].split(""));
        setCharacterIndex(0);
      }
    }
  };

  useEffect(() => {
    if (wordAsArray.length === 0) {
      const newIndex = Number(wordIndex + 1);
      dispatch(gameActions.completeWord(words[wordIndex]));
      setWordAsArray(words[newIndex].split(""));
      setWordIndex(newIndex);
      setCharacterIndex(0);
    }
  }, [wordAsArray]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => compareWord(event.key);
    window.addEventListener("keypress", eventListener);

    return () => window.removeEventListener("keypress", eventListener);
  }, [compareWord]);

  return { words, characterIndex, wordIndex, timeRemaining };
};
