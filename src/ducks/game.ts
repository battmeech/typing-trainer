import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum State {
  NOT_STARTED,
  COUNTDOWN,
  IN_PROGRESS,
  FINISHED,
}

export enum Variation {
  SINGLE_WORD,
  PARAGRAPH,
}

export type Game = {
  state: State;
  wordCount: number;
  words: string[];
  mistakes: number;
  variation: Variation;
  gameLength: number;
};

const initialState: Game = {
  state: State.NOT_STARTED,
  wordCount: 0,
  words: [],
  mistakes: 0,
  variation: Variation.SINGLE_WORD,
  gameLength: 60,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setState(state, action: PayloadAction<State>) {
      state.state = action.payload;
    },
    setVariation(state, action: PayloadAction<Variation>) {
      state.variation = action.payload;
    },
    completeWord(state, action: PayloadAction<string>) {
      state.words.push(action.payload);
      state.wordCount += 1;
    },
    mistake(state) {
      state.mistakes += 1;
    },
    restart(state) {
      state.state = State.NOT_STARTED;
      state.wordCount = 0;
      state.words = [];
      state.mistakes = 0;
    },
  },
});

export const gameActions = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
