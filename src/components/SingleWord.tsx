import { Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CurrentWord } from "./CurrentWord";
import { Timer } from "./Timer";
import { useSingleWordMode } from "./useSingleWordMode";

export const SingleWord = () => {
  const { nextWord, word, characterIndex, time } = useSingleWordMode();

  return (
    <VStack>
      <Timer timeLeft={time} />
      <Text fontSize="xx-large" color="grey">
        Coming up: {nextWord}
      </Text>
      <Text fontSize="xxx-large">
        <CurrentWord word={word} characterIndex={characterIndex} />
      </Text>

      <Input autoFocus display="none" />
    </VStack>
  );
};
