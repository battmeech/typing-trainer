import { Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { gameActions, State, Variation } from "../ducks/game";

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
      <Button colorScheme="yellow" onClick={singleWordMode}>
        Single word mode
      </Button>
      <VStack>
        <Button colorScheme="yellow" onClick={paragraphMode}>
          Paragraph mode
        </Button>
      </VStack>
    </VStack>
  );
};
