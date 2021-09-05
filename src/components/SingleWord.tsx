import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { Timer } from "./Timer";
import { useSingleWordMode } from "./useSingleWordMode";
import { useTimer } from "./useTimer";

export const SingleWord = () => {
  const dispatch = useDispatch();
  const { gameLength } = useGame();
  const time = useTimer(gameLength, () =>
    dispatch(gameActions.setState(State.FINISHED))
  );

  const { nextWord, word, wordAsArray } = useSingleWordMode();

  return (
    <VStack>
      <Timer timeLeft={time} />
      <Text fontSize="xx-large" color="grey">
        Coming up: {nextWord}
      </Text>
      <Text fontSize="xxx-large">{word}</Text>
      <Text fontSize="x-large">{wordAsArray.join("")}</Text>
    </VStack>
  );
};
