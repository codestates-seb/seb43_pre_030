// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // action creator 로그인 비동기 요청
// const asyncLoginFetch = createAsyncThunk(
//     'loginSlice/asyncLoginFetch',
//     async(payload)=> {
//         const resp = await axios("http://localhost:3001/login", {
//             method: "post",
//             headers: {
//                 'Content-Type':'application/json',
//             },
//             data: payload
//         });
//     }
// )

// const loginSlice = createSlice({
//     name: "login",
//     initialState: {
//         value: 0,
//         status:""
//     },
//     extraReducers: (builder) => {
//         builder.addCase(asyncLoginFetch.pending, (state,action)=>{
//             state.status = 'Loading';
//           })
//           builder.addCase(asyncLoginFetch.fulfilled, (state,action)=>{
//             state.value = action.payload;
//             state.status = 'complete';
//           })
//           builder.addCase(asyncLoginFetch.rejected, (state,action)=>{
//             state.status = 'fail';
//           })
//     }
//   });

//   export const { addData, updateData, removeData, setData } = loginSlice.actions;
//   export default loginSlice.reducer;
