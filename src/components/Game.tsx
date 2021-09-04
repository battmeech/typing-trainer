import { Text } from "@chakra-ui/react";
import React from "react";
import { State, useGame } from "../ducks";
import { Variation } from "../ducks/game";
import { InitialCountdown } from "./InitialCountdown";
import { SingleWord } from "./SingleWord";
import { Start } from "./Start";
import { Summary } from "./Summary";

export const Game = () => {
  const { state, variation } = useGame();

  switch (state) {
    case State.NOT_STARTED:
      return <Start />;
    case State.COUNTDOWN:
      return <InitialCountdown />;
    case State.IN_PROGRESS:
      if (variation === Variation.SINGLE_WORD) return <SingleWord />;
      else return <Text>State: {state}</Text>;
    case State.FINISHED:
      return <Summary />;
    default:
      return <Text>State: {state}</Text>;
  }
};
