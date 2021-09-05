import { Box, chakra, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { Timer } from "./Timer";
import { useParagraphMode } from "./useParagraphMode";
import { useTimer } from "./useTimer";

export const Paragraph = () => {
  const dispatch = useDispatch();
  const { gameLength } = useGame();
  const time = useTimer(gameLength, () =>
    dispatch(gameActions.setState(State.FINISHED))
  );

  const { wordAsArray, words, wordIndex } = useParagraphMode();

  return (
    <VStack>
      <Timer timeLeft={time} />

      <Box w={{ base: "100%", lg: "75%" }}>
        {words.map((word, index) => (
          <chakra.span color={wordIndex === index ? "red" : ""}>
            {word}{" "}
          </chakra.span>
        ))}
      </Box>

      <Text fontSize="x-large">{wordAsArray.join("")}</Text>
    </VStack>
  );
};
