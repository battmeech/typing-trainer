import { Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CurrentWord } from "./CurrentWord";
import { Timer } from "./Timer";
import { useTimeBombMode } from "./useTimeBombMode";

export const TimeBomb = () => {
  const {
    nextWord,
    word,
    characterIndex,
    timeRemaining,
    timeEarned,
    timePerWord,
  } = useTimeBombMode();

  return (
    <VStack>
      <Timer timeLeft={timeRemaining} showDecimal />
      <Text fontSize="xx-large" color="grey">
        Coming up: {nextWord}
      </Text>
      <Text fontSize="xxx-large">
        <CurrentWord word={word} characterIndex={characterIndex} />
      </Text>

      <Input autoFocus display="none" />

      <Text>Earn {timePerWord}s for each word</Text>
      <Text>You've earned {Math.round(timeEarned * 10) / 10} so far</Text>
    </VStack>
  );
};
