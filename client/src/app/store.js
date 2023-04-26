import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import dataReducer from "../features/dataSlice";
import navReducer from "../features/navSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
    nav: navReducer,
  },
});
export default store;
