import axios from "axios";
import { getAuthToken } from ".";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    // const authToken = getAuthToken() || "ZWZzcGFkbWluOkFseXhAMjAyMyE=";
    const authToken = btoa("efspadmin:Alyx@2023!");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-width, Content-Type, Accept";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default API;
