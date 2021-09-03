import request from "../utils/request";

const registerUser = async (params) => {
  const a = await request("/auth/register", {
    method: "POST",
    data: params,
  });
  console.log(a)
};

export { registerUser };
