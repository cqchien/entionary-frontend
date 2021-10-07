import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../apis/user";

export const getUser = createAsyncThunk("user/getUserInfo", async () => {
  const user = await getUserInfo();
  console.log(user);
  return {};
});

const userReducer = createSlice({
  name: "user",

  initialState: {
    isLogin: false,
    name: "",
    avatar: "",
    email: "",
  },

  reducers: {
    // standard reducer logic, with auto-generated action types per reduce
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getUser.fulfilled, (state, action) => {
  //     console.log(action);
  //     return;
  //   });
  // },
});

const { reducer } = userReducer;
export default reducer;
