import { Box, chakra, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { CurrentWord } from "./CurrentWord";
import { Timer } from "./Timer";
import { useParagraphMode } from "./useParagraphMode";

export const Paragraph = () => {
  const { words, wordIndex, characterIndex, timeRemaining } =
    useParagraphMode();

  return (
    <VStack>
      <Timer timeLeft={timeRemaining} />

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

      <Input autoFocus display="none" />
    </VStack>
  );
};
