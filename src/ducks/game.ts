import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum State {
  NOT_STARTED,
  COUNTDOWN,
  IN_PROGRESS,
  FINISHED,
}

export type Game = {
  state: State;
  wordCount: number;
  words: string[];
};

const initialState: Game = {
  state: State.NOT_STARTED,
  wordCount: 0,
  words: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setState(state, action: PayloadAction<State>) {
      state.state = action.payload;
    },
    completeWord(state, action: PayloadAction<string>) {
      state.words.push(action.payload);
      state.wordCount += 1;
    },
    restart(state) {
      state.state = State.NOT_STARTED;
      state.wordCount = 0;
      state.words = [];
    },
  },
});

export const gameActions = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
