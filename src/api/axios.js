import axios from "axios";

const axiosIntance = axios.create({
  baseURL: process.env.API_URL,
});

axiosIntance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosIntance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      // do something
    }
    return Promise.reject(error);
  },
);

export default axiosIntance;
