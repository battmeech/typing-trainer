import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { useSaveScore } from "./useSaveScore";

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

  const { name, saveScore, setName, ctaEnabled } = useSaveScore();

  return (
    <VStack w={{ base: "100%", lg: "75%" }} spacing="5">
      <Text>Words complete: {wordCount}</Text>
      <Text>Mistakes: {mistakes}</Text>

      <HStack w={{ base: "100%", lg: "75%" }}>
        <Button colorScheme="yellow" w="50%" onClick={playAgain}>
          Play again
        </Button>

        <Button colorScheme="yellow" w="50%" onClick={changeMode}>
          Change mode
        </Button>
      </HStack>

      <VStack w="50%">
        <Input
          disabled={!ctaEnabled}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>

        <Button
          w="100%"
          colorScheme="green"
          onClick={() => saveScore()}
          disabled={!ctaEnabled}
        >
          {ctaEnabled ? "Save your score" : "Score saved"}
        </Button>
      </VStack>
    </VStack>
  );
};
