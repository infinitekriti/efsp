import { createSlice } from "@reduxjs/toolkit";
import {  TEST_REDUCER } from "../constants";
import { getTestDataAsync } from "../actions/TestAction";

const initialState={
    name:"",
    data:{},
    error:"",
}

export const homeSlice=createSlice({
    name:TEST_REDUCER,
    initialState:initialState,
    reducers:{
        updateName:(state,{payload})=>{
            state.name=payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getTestDataAsync.fulfilled,(state,{payload})=>{
            state.data=payload
        })
        .addCase(getTestDataAsync.rejected,(state,{payload})=>{
            state.error=payload
        })
        //.addCase(getNewHomeData.fulfilled,(state,{payload})=>{})
    }
})
export const {updateName}=homeSlice.actions
export default homeSlice.reducer