import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions } from "../ducks/game";

export const NoMercyToggle = () => {
  const { noMercy } = useGame();
  const dispatch = useDispatch();

  const buttonText = noMercy ? "Normal mode" : "No mercy mode";
  const helpText = noMercy
    ? "In normal mode, there's no punishment for making a mistake (but will still be counted)."
    : "In no mercy mode, any mistakes will reset the current word.";

  return (
    <VStack>
      <Button
        colorScheme={noMercy ? "green" : "red"}
        onClick={() => dispatch(gameActions.toggleNoMercy())}
      >
        {buttonText}
      </Button>

      <Text color="grey" fontSize="xs">
        {helpText}
      </Text>
    </VStack>
  );
};
