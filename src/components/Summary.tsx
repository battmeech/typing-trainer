import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions } from "../ducks/game";

export const Summary = () => {
  const { wordCount, words, mistakes } = useGame();
  const dispatch = useDispatch();

  return (
    <VStack>
      <Text>Words complete: {wordCount}</Text>
      <Text>Mistakes: {mistakes}</Text>
      <Text>You typed...</Text>
      <Text>{words.join(", ")}</Text>
      <Button
        colorScheme="yellow"
        onClick={() => dispatch(gameActions.restart())}
      >
        Restart
      </Button>
    </VStack>
  );
};
