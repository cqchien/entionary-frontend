import request from "../utils/request";

const registerUser = (params) => {
  return request("/auth/register", {
    method: "POST",
    data: params,
  });
};

const loginWithSocialNetwork = (params) => {
  return request("/auth/login-gg", {
    method: "POST",
    data: params,
  });
};

const loginWithEmail = (params) => {
  return request("/auth/login", {
    method: "POST",
    data: params,
  });
};

export { registerUser, loginWithSocialNetwork, loginWithEmail };
