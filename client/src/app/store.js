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

// store -> 여기에 우리가 관리할 전역 상태를 다 넣는다.
// 제일 최상위 컴포넌트에서 -> app -> provider
// 상태를 만들면 된다.
// 리덕스 툴킷은 -> 상태랑 상태 변경 함수 이거를 같이 묶어서 슬라이스를 만든다.
