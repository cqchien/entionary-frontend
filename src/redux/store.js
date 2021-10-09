import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/message.reducer";
import userReducer from "./reducers/user.reducer";
// Về cú pháp thì không khác voi createStore() trong redux?
// Tuy nhiên thay vì chỉ khởi tạo một store đơn thuần, configureStore sẽ mặc định thiết lập cho phép sử dụng redux devtool để debug và theo dõi quá trình cập nhật state cũng như thiết lập sẵn một số middleware.

const store = configureStore({
  // A single reducer function that will be used as the root reducer, or an
  // object of slice reducers that will be passed to `combineReducers()`.
  reducer: {
    message: messageReducer,
    user: userReducer,
  },
});

export default store;
