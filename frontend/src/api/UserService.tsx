import axios from "axios";
import { UserProfileToken } from "../Models/User";
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
