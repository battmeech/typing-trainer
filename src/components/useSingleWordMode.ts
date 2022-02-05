/* eslint-disable react-hooks/exhaustive-deps */
import randomWords from "random-words";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { useTimer } from "./useTimer";

export const useSingleWordMode = () => {
  const dispatch = useDispatch();
  const { noMercy, gameLength } = useGame();

  const [word, setWord] = useState(randomWords());
  const [nextWord, setNextWord] = useState(randomWords());
  const [wordAsArray, setWordAsArray] = useState(word.split(""));
  const [characterIndex, setCharacterIndex] = useState(0);

  const time = useTimer(gameLength, () =>
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

  useEffect(() => {
    if (wordAsArray.length === 0) {
      dispatch(gameActions.completeWord(word));
      setWord(nextWord);
      setWordAsArray(nextWord.split(""));
      setNextWord(randomWords());
      setCharacterIndex(0);
    }
  }, [wordAsArray]);

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => compareWord(event.key);
    window.addEventListener("keypress", eventListener);

    return () => window.removeEventListener("keypress", eventListener);
  }, [compareWord]);

  return { word, nextWord, characterIndex, time };
};
