import API from "../utils/api.utils";
import { GET_TEST } from "./constants.api";

export const getTestData = async () => {
  try {
    const response =await API.get(`${GET_TEST}`);
    return response;
  } catch (error) {
    throw error;
  }
};
