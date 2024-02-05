import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ON_GET_AFFILIATION_DATA,
  ON_GET_STATE_DATA,
  ON_SUBMIT_DATA,
} from "../constants";
import {
  onAffiliationData,
  onStateData,
  onSubmitData,
} from "../../apiServices/home.api";

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
export const onAffiliationDataAsync = createAsyncThunk(
  ON_GET_AFFILIATION_DATA,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      //start loading //dispatch(startLoadingAction(true))
      const res = await onAffiliationData();
      if (!res.statusText === "OK") {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res?.data;
    } catch (err) {
      //stop loading //dispatch(startLoadingAction(false))
      return rejectWithValue(err.message);
    } finally {
      //stop loading //dispatch(startLoadingAction(false))
    }
  }
);
export const onStatesDataAsync = createAsyncThunk(
  ON_GET_STATE_DATA,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      //start loading //dispatch(startLoadingAction(true))
      const res = await onStateData();
      console.log("onStatesDataAsync", res);
      if (!res.statusText === "OK") {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      if (res?.data?.length > 0) {
        return res?.data?.map((e) => ({
          ...e,
          name: e.statename,
          value: e.statecode,
        }));
      }
      return res?.data;
    } catch (err) {
      //stop loading //dispatch(startLoadingAction(false))
      return rejectWithValue(err.message);
    } finally {
      //stop loading //dispatch(startLoadingAction(false))
    }
  }
);
