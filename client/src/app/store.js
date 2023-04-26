import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import dataReducer from "../features/dataSlice";
import navReducer from "../features/navSlice";
import searchReducer from "../features/searchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
    nav: navReducer,
    search: searchReducer,
  },
});
export default store;
