import React from "react";
import { State, useGame } from "../ducks";
import { Variation } from "../ducks/game";
import { InitialCountdown } from "./InitialCountdown";
import { Paragraph } from "./Paragraph";
import { SingleWord } from "./SingleWord";
import { SomethingWrong } from "./SomethingWrong";
import { Start } from "./Start";
import { Summary } from "./Summary";
import { TimeBomb } from "./TimeBomb";

export const Game = () => {
  const { state, variation } = useGame();

  switch (state) {
    case State.NOT_STARTED:
      return <Start />;
    case State.COUNTDOWN:
      return <InitialCountdown />;
    case State.IN_PROGRESS:
      if (variation === Variation.SINGLE_WORD) return <SingleWord />;
      if (variation === Variation.PARAGRAPH) return <Paragraph />;
      else return <TimeBomb />;
    case State.FINISHED:
      return <Summary />;
    default:
      return <SomethingWrong />;
  }
};
