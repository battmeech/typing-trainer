import { Button, Heading, VStack } from "@chakra-ui/react";
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

  return (
    <VStack spacing="10">
      <Heading>
        Type out as many words as possible within the time given.
      </Heading>
      <Button colorScheme="yellow" w="50%" onClick={singleWordMode}>
        Single word mode
      </Button>

      <Button colorScheme="yellow" w="50%" onClick={paragraphMode}>
        Paragraph mode
      </Button>

      <NoMercyToggle />
    </VStack>
  );
};
