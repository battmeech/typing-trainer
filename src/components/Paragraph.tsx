import { Box, chakra, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGame } from "../ducks";
import { gameActions, State } from "../ducks/game";
import { CurrentWord } from "./CurrentWord";
import { Timer } from "./Timer";
import { useParagraphMode } from "./useParagraphMode";
import { useTimer } from "./useTimer";

export const Paragraph = () => {
  const dispatch = useDispatch();
  const { gameLength } = useGame();
  const time = useTimer(gameLength, () =>
    dispatch(gameActions.setState(State.FINISHED))
  );

  const { words, wordIndex, characterIndex } = useParagraphMode();

  return (
    <VStack>
      <Timer timeLeft={time} />

      <Box w={{ base: "100%", lg: "75%" }}>
        {words.map((word, index) => (
          <chakra.span
            color={wordIndex === index ? "red" : ""}
            as={wordIndex > index ? "mark" : "span"}
          >
            {wordIndex === index ? (
              <CurrentWord word={word} characterIndex={characterIndex} />
            ) : (
              word
            )}{" "}
          </chakra.span>
        ))}
      </Box>
    </VStack>
  );
};
