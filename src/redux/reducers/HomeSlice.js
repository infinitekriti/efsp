import { createSlice } from "@reduxjs/toolkit";
import { HOME_REDUCER } from "../constants";
import { getHomeDataAsync } from "../actions/HomeActions";

const initialState={
    name:"",
    data:{},
    error:""
}
export const homeSlice=createSlice({
    name:HOME_REDUCER,
    initialState:initialState,
    reducers:{
        updateName:(state,{payload})=>{
            state.name=payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomeDataAsync.fulfilled,(state,{payload})=>{
            state.data=payload
        })
        .addCase(getHomeDataAsync.rejected,(state,{payload})=>{
            state.error=payload
        })
        //.addCase(getNewHomeData.fulfilled,(state,{payload})=>{})
    }
})
export const {updateName}=homeSlice.actions
export default homeSlice.reducer