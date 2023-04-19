import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addData(state, action) {
      return [...state, { ...action.payload }];
    },
    updateData(state, action) {
      const ind = state.findIndex(a => a.id === action.payload.id);

      return [...state.slice(0, ind), action.payload, ...state.slice(ind + 1)];
    },
    removeData(state, action) {
      return state.filter(a => a.id !== action.payload.id);
    },
    setData(_, action) {
      return action.payload;
    },
  },
});

export const { addData, updateData, removeData, setData } = dataSlice.actions;
export default dataSlice.reducer;
