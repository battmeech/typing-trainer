import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { gameActions, State, Variation } from "../ducks/game";
import { NoMercyToggle } from "./NoMercyToggle";

export const Start = () => {
  const dispatch = useDispatch();

  const singleWordMode = () => {
    dispatch(gameActions.setState(State.COUNTDOWN));
    dispatch(gameActions.setVariation(Variation.SINGLE_WORD));
  };

  const paragraphMode = () => {
    dispatch(gameActions.setState(State.COUNTDOWN));
    dispatch(gameActions.setVariation(Variation.PARAGRAPH));
  };

  const timeBombMode = () => {
    dispatch(gameActions.setState(State.COUNTDOWN));
    dispatch(gameActions.setVariation(Variation.TIME_BOMB));
  };

  return (
    <VStack w={{ base: "100%", lg: "50%" }} spacing="10">
      <VStack w="full" spacing="5">
        <Heading size="sm">
          Type out as many words as possible within the time given.
        </Heading>
        <HStack w="full">
          <Button colorScheme="yellow" w="50%" onClick={singleWordMode}>
            Single word mode
          </Button>

          <Button colorScheme="yellow" w="50%" onClick={paragraphMode}>
            Paragraph mode
          </Button>
        </HStack>
      </VStack>

      <VStack w="full" spacing="5">
        <Heading size="sm">
          Play against the clock while earning time for typing out words.
        </Heading>
        <Button colorScheme="yellow" w="50%" onClick={timeBombMode}>
          Time Bomb mode
        </Button>
      </VStack>

      <NoMercyToggle />
    </VStack>
  );
};
