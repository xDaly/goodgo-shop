import { createSlice } from "@reduxjs/toolkit";
import type {  PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IUserState } from "./store.state";
import { IUser } from "../models/user.model";

// Define the initial state using that type
const initialState: IUserState = {
  loggedUser: {
    id: "",
    username: "",
    role: "",
    activated: false,
    profil_id: "",
    nom: "",
    prenom: "",
    email: "",
    phone: 0,
    address: "",
    shop_name: "", 
    logo: "",
    couverture: "",
  },
  access_token: "",
  refresh_token: "",
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, data: PayloadAction<IUser>) => {
      return {
        ...state,
        loggedUser : data.payload
      };
    },
    addAccessToken: (state, data: PayloadAction<string>) => {
      return {
        ...state,
        access_token: data.payload,
      };
    },
  },
});

export const { addUserData, addAccessToken } = UserReducer.actions;

export const selectUser = (state: RootState) => state.user.loggedUser;
export const selectAccessToken = (state: RootState) => state.user.access_token;

export default UserReducer.reducer;
