const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("entionaryToken"));
  return token?.access.token;
};

const getRefreshToken = () => {
  const token = JSON.parse(localStorage.getItem("entionaryToken"));
  return token?.refresh.token;
};

const updateAccessToken = (token) => {
  const localToken = JSON.parse(
    localStorage.getItem("entionaryToken", JSON.stringify(token))
  );
  localToken.access.token = token;
  return localStorage.setItem("entionaryToken", JSON.stringify(localToken));
};

const setToken = (token) => {
  return localStorage.setItem("entionaryToken", JSON.stringify(token));
};

module.exports = {
  getAccessToken,
  setToken,
  getRefreshToken,
  updateAccessToken,
};
