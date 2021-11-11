var axios = require("axios").default;

const searchWord = (params) => {
  var options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${params}`,
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };

  return axios.request(options);
};

export { searchWord };
