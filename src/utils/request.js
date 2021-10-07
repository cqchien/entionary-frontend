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

    if (
      config.url !== "/auth/login" &&
      response.status === 401 &&
      !config.__isRetryRequest
    ) {
      try {
        const localRefreshToken = getRefreshToken();

        const apiRes = await refreshToken({ refreshToken: localRefreshToken });
        console.log(apiRes);
        const { access } = apiRes.data.token;
        updateAccessToken(access);
        config.__isRetryRequest = true;

        return request(config);
      } catch (error) {
        const payloadFail = {
          message: response?.data?.message,
          type: "error",
        };
        store.dispatch(setMessage(payloadFail));
        return;
      }
    }
    // handle error
    let message;
    switch (error.response.data.statusCode) {
      case 401:
        message = "Login Fail";
        break;
      case 403:
        message = "You Do Not Permission";
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
    store.dispatch(setMessage(payloadFail));
    return;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  }
);

export default request;
