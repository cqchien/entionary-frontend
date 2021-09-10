import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/message.reducer";

export const store = configureStore({
  // A single reducer function that will be used as the root reducer, or an
  // object of slice reducers that will be passed to `combineReducers()`.
  reducer: {
    message: messageReducer,
  },
});