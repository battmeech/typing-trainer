import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { useKeyboardListener } from "./useKeyboardListener";
import { useTimer } from "./useTimer";

export const Paragraph = () => {
  const dispatch = useDispatch();
  const { gameLength } = useGame();
  const time = useTimer(gameLength, () =>
    dispatch(gameActions.setState(State.FINISHED))
  );

  useKeyboardListener({});

  return (
    <VStack>
      <Text>PARAGRAPH {time}</Text>
    </VStack>
  );
};
