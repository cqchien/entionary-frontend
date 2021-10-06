const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("entionaryToken"));
  return token?.access.token;
};

const setToken = (token) => {
  localStorage.setItem("entionaryToken", JSON.stringify(token));
};

module.exports = {
  getAccessToken,
  setToken,
};
