import { createSlice } from "@reduxjs/toolkit";
import { GLOBAL_REDUCER } from "../constants";

const initialState={
    token:""
}
export const globalSlice=createSlice({
    name:GLOBAL_REDUCER,
    initialState:initialState,
    reducers:{
        updateToken:(state,{payload})=>{
            state.token=payload
        }
    }
})
export const {updateToken}=globalSlice.actions
export default globalSlice.reducer