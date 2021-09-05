import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { gameActions, State } from "../ducks/game";

export const SomethingWrong = () => {
  const dispatch = useDispatch();

  const restart = () => {
    dispatch(gameActions.restart());
    dispatch(gameActions.setState(State.NOT_STARTED));
  };

  return (
    <VStack>
      <Text>Something has gone wrong...</Text>

      <Button colorScheme="yellow" onClick={restart}>
        Restart
      </Button>
    </VStack>
  );
};
