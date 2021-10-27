import request from "./request";

const getUserInfo = () => {
  return request("/user/me", {
    method: "GET",
  });
};

const sendVerifyCode = (params) => {
  console.log(params)
  return request("/user/send-code", {
    method: "PATCH",
    data: params,
  });
};

export { getUserInfo, sendVerifyCode };
