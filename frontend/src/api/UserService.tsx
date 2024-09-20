import axios from "axios";
import { updateUserInfoRequest, UserProfileToken } from "../Models/User";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5001/api/";

export const getUserListPagingAPI = async (pageIndex: number, pageSize: number, keyword?: string) => {
  try {
    var endpoint = ""
    if(keyword){
      endpoint  = `Users/paging?Keyword=${keyword}PageIndex=${pageIndex}&PageSize=${pageSize}`;
    }
    else{
      endpoint = `Users/paging?PageIndex=${pageIndex}&PageSize=${pageSize}`
    }
    
    const data = await axios.get<UserProfileToken>(api + endpoint);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUserInfo = async (id: string, request: updateUserInfoRequest) => {
  try {
    const data = await axios.put<UserProfileToken>(api + "Users/" + id, {
      firstName: request.firstName,
      lastName: request.lastName,
      phoneNumber: request.phoneNumber,
      email: request.email,
      dob: request.dob,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
}; 

export const updateUserPhotoUrl = async (id: string, photoUrl: string) => {
  try {
    const data = await axios.put<UserProfileToken>(api + "Users/photo-url" + id, {
      photoUrl
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

