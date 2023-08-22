import { IUser } from "../../models/user.model";

export interface SigninResDTO {
    data : {
        userData: IUser;
        token: string;
    }
}
