/* eslint-disable @typescript-eslint/no-empty-interface */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {}

// Define the initial state using that type
const initialState: IInitialState = {};

export const faqSlice = createSlice({
  name: "faq",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setFaq: (state, action: PayloadAction<any>) => {},
  },
});

export const { setFaq } = faqSlice.actions;

export default faqSlice.reducer;
