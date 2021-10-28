import axios from "axios";
import queryString from "query-string";
import { refreshToken } from "./account";

// Khong nen dispatch action o day vi khi call api trong createAsyncThunk thi data tra ve khong duoc store nhan vi reducer ma slice tra ve la undefined

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
    const originalConfig = error.config;

    if (originalConfig.url !== "/auth/login" && error.response.status === 401) {
      try {
        const localRefreshToken = getRefreshToken();
        if (!localRefreshToken) {
          throw error;
        }
        const apiRes = await refreshToken({
          refreshToken: localRefreshToken,
        });

        const { accessToken } = apiRes.data;
        updateAccessToken(accessToken);

        return request(originalConfig);
      } catch (error) {
        // return store.dispatch(setMessage(payloadFail));
        const payloadFail = {
          message: error?.response?.data.message,
          type: "error",
        };
        return payloadFail;
      }
    }

    // handle error
    let message;
    switch (error.response.data.statusCode) {
      case 401:
        message = "Email Or Password Incorrect";
        break;
      case 403:
        message = "You Need Permission To Use Features!";
        break;
      case 404:
        message = "Service Not Found";
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
    // neu dispatch action trong nay se gay reducer call api trong createAsyncThunk tra ve undefined khi goi rong store
    // return store.dispatch(setMessage(payloadFail));
    return payloadFail;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  }
);

export default request;
