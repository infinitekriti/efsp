import { createSlice } from "@reduxjs/toolkit";
import { REPORTS_REDUCER } from "../constants";

const initialState = {
  listingInformation: {
    phase: "",
    affiliation: "",
    target: "",
    funded: false,
    includeContactAddress: false,
    list: "",
  },
};
export const reportsSlice = createSlice({
  name: REPORTS_REDUCER,
  initialState: initialState,
  reducers: {
    updateFormData: (state, { payload: { payload, name } }) => {
      state[name] = payload;
    },
    clearFormData: (state, { payload: { name } }) => {
      state[name] = initialState[name];
    },
  },
});
export const { updateFormData, clearFormData } = reportsSlice.actions;
export default reportsSlice.reducer;
