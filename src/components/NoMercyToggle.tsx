import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import { GiAngelOutfit } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions } from "../ducks/game";

export const NoMercyToggle = () => {
  const { noMercy } = useGame();
  const dispatch = useDispatch();

  return (
    <VStack w="full">
      <Text>No mercy mode</Text>
      <Button
        w="50%"
        rightIcon={noMercy ? <FaSkullCrossbones /> : <GiAngelOutfit />}
        colorScheme={noMercy ? "red" : "green"}
        onClick={() => dispatch(gameActions.toggleNoMercy())}
      >
        {noMercy ? "On" : "Off"}
      </Button>

      <Text color="grey" fontSize="xs">
        In no mercy mode, any mistakes will reset the current word.
      </Text>
    </VStack>
  );
};
