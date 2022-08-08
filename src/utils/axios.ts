/* -------------------------------- Libraries ------------------------------- */
import axios from 'axios';
import {BASE_URL, ACCESS_TOKEN} from 'react-native-dotenv';

const MainAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

MainAxios.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: ACCESS_TOKEN ? `SSO ${ACCESS_TOKEN}` : '',
      ...config.headers,
    };

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

MainAxios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error);

    return Promise.reject(
      error?.response?.data?.message ||
        error?.response?.statusText ||
        'Something went wrong',
    );
  },
);

export default MainAxios;
