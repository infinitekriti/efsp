import API from "../utils/api.utils";
import { SUBMIT_LRO } from "./constants.api";

export const onSubmitData = async (data) => {
  try {
    const response = await API.post(`${SUBMIT_LRO}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
