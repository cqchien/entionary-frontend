import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../apis/user";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const apiRes = await getUserInfo();
  if (apiRes.data) {
    return apiRes.data.user;
  }
  return {};
});

const userReducer = createSlice({
  name: "user",

  initialState: {
    loading: false,
    isLogin: false,
    name: "",
    avatar: "",
    email: "",
  },

  reducers: {
    // standard reducer logic, with auto-generated action types per reduce
  },

  extraReducers: {
    [getUser.pending]: (state) => {
      return { ...state, loading: true };
    },
    [getUser.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});

const { reducer } = userReducer;
export default reducer;
