import axios from "axios";
import { SINGIN_API } from "../core/api.constants";
import { SigninReqDTO } from "../DTOs/requests/signin.dto";
import { SigninResDTO } from "../DTOs/responses/signin.res.dto";

export const signin = async (signinData: SigninReqDTO):Promise<SigninResDTO> => {
  try {
    const { data } = await axios.post(SINGIN_API, {
      username: signinData.username,
      password: signinData.password,
    });
    return data;
  } catch (error: any) {
    // alert(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};
