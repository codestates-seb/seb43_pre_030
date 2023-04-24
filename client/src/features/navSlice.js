import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: false,
  reducers: {
    setNav(state) {
      return !state;
    },
  },
});

export const { setNav } = navSlice.actions;
export default navSlice.reducer;
