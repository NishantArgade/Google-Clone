import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./googleSlice";

const store = configureStore({
  reducer: {
    google: googleReducer,
  },
});

export default store;
