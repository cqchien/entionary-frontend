import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../../apis/user";
// type: (user/getUser): A string that will be used to generate additional Redux action type constants, representing the lifecycle of an async request:
// a type argument of 'users/getUser' will generate these action types:
// pending: 'users/requestStatus/pending'
// fulfilled: 'users/requestStatus/fulfilled'
// rejected: 'users/requestStatus/rejected'
export const getUser = createAsyncThunk("user/getUser", async () => {
  const userInfo = await getUserInfo();
  if (userInfo) {
    return userInfo.data.user;
  }
  return {};
});

const user = createSlice({
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

  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      console.log(action);
      return;
    },
  },
});

const { reducer } = user;
export default reducer;
