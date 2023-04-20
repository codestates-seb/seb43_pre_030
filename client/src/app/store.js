import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import dataReducer from "../features/dataSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
});
export default store;
