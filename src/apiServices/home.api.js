import API from "../utils/api.utils";
import { GET_AFFILIATION, GET_STATE, SUBMIT_LRO } from "./constants.api";

export const onSubmitData = async (data) => {
  try {
    const response = await API.post(`${SUBMIT_LRO}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
export const onAffiliationData = async () => {
  try {
    const response = await API.get(`${GET_AFFILIATION}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const onStateData = async () => {
  try {
    const response = await API.get(`${GET_STATE}`);
    return response;
  } catch (error) {
    throw error;
  }
};
