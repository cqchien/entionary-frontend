import request from "../utils/request";

const getUserInfo = () => {
  return request("/user/me", {
    method: "GET",
  });
};

export { getUserInfo };
