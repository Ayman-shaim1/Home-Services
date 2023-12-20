import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { toastReducer } from "./toast/toastReducers";

const reducer = combineReducers({
  toast: toastReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
