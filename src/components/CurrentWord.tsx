import React from "react";
import { chakra } from "@chakra-ui/react";

export const CurrentWord = ({
  word,
  characterIndex,
}: {
  word: string;
  characterIndex: number;
}) => (
  <>
    {word.split("").map((character, index) => (
      <chakra.span as={characterIndex > index ? "mark" : "span"}>
        {character}
      </chakra.span>
    ))}
  </>
);
