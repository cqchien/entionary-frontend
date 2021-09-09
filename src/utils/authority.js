const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

module.exports = {
  getAccessToken,
};
