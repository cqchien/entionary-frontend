const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("entionaryToken"));
  return token?.access.token;
};

const getRefreshToken = () => {
  const token = JSON.parse(localStorage.getItem("entionaryToken"));
  return token?.refresh.token;
};

const updateAccessToken = (token) => {
  const localToken = JSON.parse(localStorage.getItem("entionaryToken"));
  localToken.access.token = token;
  return localStorage.setItem("entionaryToken", JSON.stringify(localToken));
};

const setToken = (token) => {
  return localStorage.setItem("entionaryToken", JSON.stringify(token));
};

const removeToken = (token) => {
  return localStorage.removeItem("entionaryToken");
};

module.exports = {
  getAccessToken,
  setToken,
  removeToken,
  getRefreshToken,
  updateAccessToken,
};
