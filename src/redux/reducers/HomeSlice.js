import { createSlice } from "@reduxjs/toolkit";
import { HOME_REDUCER } from "../constants";

const initialState = {
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
  EmployerId: {
    lroEni: "",
    lroSubOrdinateEin: "",
    lroeinextention: "",
  },
  addressInformation: {
    lroAddress1: "",
    lroAddress2: "",
    lroAddress3: "",
    lroZip: "",
    lroCity: "",
    lroState: "",
    lroExt: "",
    lroPhoneNumber: "",
    lroFaxNumber: "+1",
    lroUID: "+1",
  },
};
export const homeSlice = createSlice({
  name: HOME_REDUCER,
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
export const { updateName, updateFormData, clearFormData } = homeSlice.actions;
export default homeSlice.reducer;
