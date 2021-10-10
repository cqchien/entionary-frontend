import request from "./request";

const registerUser = (params) => {
  return request("/auth/register", {
    method: "POST",
    data: params,
  });
};

const loginWithGoogle = (params) => {
  return request("/auth/login-gg", {
    method: "POST",
    data: params,
  });
};

const loginWithFacebook = (params) => {
  return request("/auth/login-fb", {
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

const refreshToken = (params) => {
  return request("/auth/refresh-token", {
    method: "POST",
    data: params,
  });
};

export {
  registerUser,
  loginWithFacebook,
  loginWithGoogle,
  loginWithEmail,
  refreshToken,
};
