import { createAsyncThunk } from "@reduxjs/toolkit";
import { ON_SUBMIT_DATA } from "../constants";
import { onSubmitData } from "../../apiServices/home.api";

export const onSubmitDataAsync = createAsyncThunk(
  ON_SUBMIT_DATA,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      //start loading //dispatch(startLoadingAction(true))
      const res = await onSubmitData(data);
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
