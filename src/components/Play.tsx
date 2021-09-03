import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { gameActions, State } from "../ducks/game";
import { useKeyboardListener } from "./useKeyboardListener";
import { useTimer } from "./useTimer";

export const Play = () => {
  const dispatch = useDispatch();
  const time = useTimer(60, () =>
    dispatch(gameActions.setState(State.FINISHED))
  );

  const { nextWord, word, wordAsArray } = useKeyboardListener();

  return (
    <VStack>
      <Text>Time left: {time}</Text>
      <Text fontSize="xxx-large">Current word: {word}</Text>
      <Text fontSize="xx-large">{wordAsArray.join("")}</Text>
      <Text fontSize="xxx-large">Next word: {nextWord}</Text>
    </VStack>
  );
};
