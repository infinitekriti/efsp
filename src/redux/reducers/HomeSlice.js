import { createSlice } from "@reduxjs/toolkit";
import { HOME_REDUCER } from "../constants";
import { getHomeDataAsync } from "../actions/HomeActions";

const initialState = {
  name: "",
  data: {},
  error: "",
  AffiliationInfo: {
    lroAffiliation: "",
    lroTarget1: "",
    lroTarget2: "",
    lroTarget3: "",
  },
  bankDetails: {
    lroABANumber: "",
    lroAccountNumber: "",
    lroAccountType: "",
    lroBank: "",
    lroNameAsPerBank: "",
  },
};
export const homeSlice = createSlice({
  name: HOME_REDUCER,
  initialState: initialState,
  reducers: {
    updateName: (state, { payload }) => {
      state.name = payload;
    },
    updateFormData: (state, { payload: { payload, name } }) => {
      state[name] = payload;
    },
    clearFormData: (state, { payload: { name } }) => {
      state[name] = initialState[name];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomeDataAsync.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(getHomeDataAsync.rejected, (state, { payload }) => {
        state.error = payload;
      });
    //.addCase(getNewHomeData.fulfilled,(state,{payload})=>{})
  },
});
export const { updateName, updateFormData, clearFormData } = homeSlice.actions;
export default homeSlice.reducer;
