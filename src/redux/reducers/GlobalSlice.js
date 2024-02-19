import { createSlice } from "@reduxjs/toolkit";
import { GLOBAL_REDUCER } from "../constants";

const initialState = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMsg: "",
  errorMsg: "",
};
export const globalSlice = createSlice({
  name: GLOBAL_REDUCER,
  initialState: initialState,
  reducers: {
    updateToken: (state, { payload }) => {
      state.token = payload;
    },
    startLoading: (state, { payload }) => {
      state.isLoading = true;
    },
    stopLoading: (state, { payload }) => {
      state.isLoading = false;
    },
    onSuccess: (state, { payload }) => {
      state.isSuccess = true;
      state.successMsg = typeof payload === "string" ? payload : "";
    },
    onError: (state, { payload }) => {
      state.isError = true;
      state.errorMsg = typeof payload === "string" ? payload : "";
    },
    onHideErrorAndSuccess: (state, { payload }) => {
      state.isError = false;
      state.errorMsg = "";
      state.isSuccess = false;
      state.successMsg = "";
    },
  },
});

export const {
  updateToken,
  onHideErrorAndSuccess,
  onError,
  stopLoading,
  startLoading,
  onSuccess,
} = globalSlice.actions;
export default globalSlice.reducer;
