import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTestData } from "../../apiServices/test.api";
import { GET_TEST_DATA } from "../constants";

export const getTestDataAsync = createAsyncThunk(
  GET_TEST_DATA,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      //start loading //dispatch(startLoadingAction(true))
      const res = await getTestData(data);
      if (res.status !== 200) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.data;
    } catch (err) {
      //stop loading //dispatch(startLoadingAction(false))
      return rejectWithValue(err.message);
    } finally {
      //stop loading //dispatch(startLoadingAction(false))
    }
  }
);
