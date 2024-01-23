import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeSlice";
import GlobalReducer from "./reducers/GlobalSlice";
import TestReducer from "./reducers/TestSlice";
import ReportsReducer from "./reducers/ReportsSlice";
const rootReducer = combineReducers({
  HomeReducer,
  GlobalReducer,
  TestReducer,
  ReportsReducer,
});
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
