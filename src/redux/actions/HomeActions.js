import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_HOME_DATA } from "../constants";
import {  getTestData } from "../../apiServices/test.api";

export const getHomeDataAsync = createAsyncThunk(
  GET_HOME_DATA,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      //start loading //dispatch(startLoadingAction(true))
      const res = await getTestData();
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res;
    } catch (err) {
      //stop loading //dispatch(startLoadingAction(false))
      return rejectWithValue(err.message);
    } finally {
      //stop loading //dispatch(startLoadingAction(false))
    }
  }
);
