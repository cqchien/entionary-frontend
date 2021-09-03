import axios from "axios";
import { getAccessToken } from "./authority";

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.LOCAL_BASE_API_URL
      : process.env.PRO_BASE_API_URL,
  withCredentials: true,
});

// Add a request interceptor
request.interceptors.request.use((url, options) => {
  const authority = getAccessToken();
  return {
    url,
    options: {
      ...options,
      headers: {
        Authorization: (authority && `Bearer ${authority}`) || undefined,
        "Content-Type": "application/json",
      },
    },
  };
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;
