import request from "./request";

const getUserInfo = () => {
  return request("/user/me", {
    method: "GET",
  });
};

export { getUserInfo };
