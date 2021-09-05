import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";

export const Summary = () => {
  const { wordCount, mistakes } = useGame();
  const dispatch = useDispatch();

  const playAgain = () => {
    dispatch(gameActions.restart());
    dispatch(gameActions.setState(State.COUNTDOWN));
  };

  const changeMode = () => {
    dispatch(gameActions.restart());
    dispatch(gameActions.setState(State.NOT_STARTED));
  };

  return (
    <VStack w="full" spacing="5">
      <Text>Words complete: {wordCount}</Text>
      <Text>Mistakes: {mistakes}</Text>

      <Button colorScheme="yellow" w="50%" onClick={playAgain}>
        Play again
      </Button>

      <Button colorScheme="yellow" w="50%" onClick={changeMode}>
        Change mode
      </Button>
    </VStack>
  );
};
