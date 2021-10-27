import request from "./request";

const getUserInfo = () => {
  return request("/user/me", {
    method: "GET",
  });
};

const sendVerifyCode = (params) => {
  return request("/user/send-code", {
    method: "PATCH",
    data: params,
  });
};

const resetPassword = (params) => {
  return request("/user/reset-password", {
    method: "PATCH",
    data: params,
  });
};

export { getUserInfo, sendVerifyCode, resetPassword };
