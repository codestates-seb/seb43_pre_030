import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import dataReducer from "../features/dataSlice";
import loginReducer from "../features/loginSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
    login: loginReducer,
  },
});
export default store;
