import axios from "axios";
import queryString from "query-string";
import { refreshToken } from "../apis/account";
import { setMessage } from "../redux/reducers/message.reducer";
import store from "../redux/store";
import {
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
} from "./authority";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
request.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    config.headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
  },
  async function (error) {
    const { config, response } = error;
    config.retry = false;
    if (config.url !== "/auth/login") {
      if (response.status === 401 && !config.retry) {
        config.retry = true;

        try {
          const localRefreshToken = getRefreshToken();

          const apiRes = await refreshToken({
            refreshToken: localRefreshToken,
          });

          const { access } = apiRes.data.accessToken;
          updateAccessToken(access);

          return request(config);
        } catch (error) {
          const payloadFail = {
            message: response?.data?.message,
            type: "error",
          };
          return store.dispatch(setMessage(payloadFail));
        }
      }
    }

    // handle error
    let message;
    switch (error.response.data.statusCode) {
      case 401:
        message = "Login Fail";
        break;
      case 403:
        message = "You Need Permission To Use All Feature!";
        break;
      case 404:
        message = "Not Found";
        break;
      case 500:
        message = "Server Error";
        break;
      default:
        message = " Error, Please try again!";
        break;
    }
    const payloadFail = {
      message,
      type: "error",
    };
    return store.dispatch(setMessage(payloadFail));

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  }
);

export default request;
