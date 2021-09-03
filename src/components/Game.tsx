import { Text } from "@chakra-ui/react";
import React from "react";
import { State, useGame } from "../ducks";
import { InitialCountdown } from "./InitialCountdown";
import { Play } from "./Play";
import { Start } from "./Start";
import { Summary } from "./Summary";

export const Game = () => {
  const { state } = useGame();

  switch (state) {
    case State.NOT_STARTED:
      return <Start />;
    case State.COUNTDOWN:
      return <InitialCountdown />;
    case State.IN_PROGRESS:
      return <Play />;
    case State.FINISHED:
      return <Summary />;
    default:
      return <Text>State: {state}</Text>;
  }
};
