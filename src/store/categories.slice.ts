import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ICategoryState } from "./store.state";
import { ICategory } from "../models/category.model";

// Define the initial state using that type
const initialState: ICategoryState = {
  categories: [],
};

 const CategorieReducer = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { addCategories } = CategorieReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.categories;

export default CategorieReducer.reducer;
