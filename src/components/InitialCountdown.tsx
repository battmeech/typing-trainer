import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { gameActions, State } from "../ducks/game";
import { useTimer } from "./useTimer";

export const InitialCountdown = () => {
  const dispatch = useDispatch();
  const time = useTimer(3, () =>
    dispatch(gameActions.setState(State.IN_PROGRESS))
  );

  return (
    <VStack>
      <Text>Get ready...</Text>
      <Text>{time}</Text>
    </VStack>
  );
};
