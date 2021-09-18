import request from "../utils/request";

const registerUser = async (params) => {
  return request("/auth/register", {
    method: "POST",
    data: params,
  });
};

const loginWithSocialNetwork = async (params) => {
  return request("/auth/login-gg", {
    method: "POST",
    data: params,
  });
};

export { registerUser, loginWithSocialNetwork };
