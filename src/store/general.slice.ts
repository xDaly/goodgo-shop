import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IGeneralState } from "./store.state";

// Define the initial state using that type
const initialState: IGeneralState = {
  sideBarOpened: false,
};

const GeneralReducer = createSlice({
  name: "general",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarOpened = !state.sideBarOpened
    },
  },
});

export const { toggleSideBar } = GeneralReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSideBarToggle = (state: RootState) => state.general.sideBarOpened

export default GeneralReducer.reducer;
