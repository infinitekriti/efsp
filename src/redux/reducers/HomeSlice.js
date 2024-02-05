import { createSlice } from "@reduxjs/toolkit";
import { HOME_REDUCER } from "../constants";
import {
  onAffiliationDataAsync,
  onStatesDataAsync,
  onSubmitDataAsync,
} from "../actions/HomeActions";

const initialState = {
  affiliations: [],
  states: [],
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
  lroRegisterDetails: {
    lroName: "",
    lroSalute: "Select",
    lroContact: "",
    lroEmail: "",
    lroPassword: "",
    lroCPassword: "",
  },
  error: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(onSubmitDataAsync.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(onSubmitDataAsync.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(onAffiliationDataAsync.fulfilled, (state, { payload }) => {
        state.affiliations = payload;
      })
      .addCase(onAffiliationDataAsync.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(onStatesDataAsync.fulfilled, (state, { payload }) => {
        state.states = payload;
      })
      .addCase(onStatesDataAsync.rejected, (state, { payload }) => {
        state.error = payload;
      });
    //.addCase(getNewHomeData.fulfilled,(state,{payload})=>{})
  },
});
export const { updateName, updateFormData, clearFormData } = homeSlice.actions;
export default homeSlice.reducer;
