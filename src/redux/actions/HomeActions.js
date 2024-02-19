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
import {
  onError,
  onSuccess,
  startLoading,
  stopLoading,
} from "../reducers/GlobalSlice";

export const onSubmitDataAsync = createAsyncThunk(
  ON_SUBMIT_DATA,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const res = await onSubmitData(data);
      if (!res.ok) {
        dispatch(onError(`HTTP error! Status: ${res.status}`));
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      dispatch(onSuccess("Successfully Submited Data... "));
      return res;
    } catch (err) {
      dispatch(onError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(stopLoading());
    }
  }
);
export const onAffiliationDataAsync = createAsyncThunk(
  ON_GET_AFFILIATION_DATA,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const res = await onAffiliationData();
      console.log("res", res);
      if (!res.statusText === "OK") {
        dispatch(onError(`HTTP error! Status: ${res.status}`));
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res?.data;
    } catch (err) {
      dispatch(onError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(stopLoading());
    }
  }
);
export const onStatesDataAsync = createAsyncThunk(
  ON_GET_STATE_DATA,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const res = await onStateData();
      if (!res.statusText === "OK") {
        dispatch(onError(`HTTP error! Status: ${res.status}`));
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
      dispatch(onError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(stopLoading());
    }
  }
);
