import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { gameActions, State } from "../ducks/game";

export const Start = () => {
  const dispatch = useDispatch();
  return (
    <Button
      colorScheme="yellow"
      onClick={() => dispatch(gameActions.setState(State.COUNTDOWN))}
    >
      Play
    </Button>
  );
};
