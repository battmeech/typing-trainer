import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { gameActions, State } from "../ducks/game";
import { useTimer } from "./useTimer";

export const InitialCountdown = () => {
  const dispatch = useDispatch();
  const { timeRemaining } = useTimer(3, () =>
    dispatch(gameActions.setState(State.IN_PROGRESS))
  );

  return (
    <VStack>
      <Text>Get ready...</Text>
      <Text>{Math.ceil(timeRemaining)}</Text>
    </VStack>
  );
};
