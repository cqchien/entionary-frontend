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
    coin: 0,
    numberOfStars: 0,
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
      const { name, email, avatar, coin, numberOfStars } = action.payload;
      if (!email) {
        return { ...state, loading: false, isLogin: false };
      }
      return {
        loading: false,
        isLogin: true,
        name,
        email,
        avatar,
        coin,
        numberOfStars,
      };
    },
  },
});

const { reducer } = userReducer;
export default reducer;
