import { configureStore } from "@reduxjs/toolkit";
import { Game, gameReducer } from "./game";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useGame = (): Game =>
  useSelector<RootState, Game>((state) => state.game);
