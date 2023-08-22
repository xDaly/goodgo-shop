import { ICategory } from "../models/category.model";
import { IUser } from "../models/user.model";

export interface ICategoryState {
  categories: ICategory[];
}

export interface IGeneralState {
  sideBarOpened: boolean;
}

export interface IUserState {
  loggedUser: IUser;
  access_token: string;
  refresh_token?: string;
}
