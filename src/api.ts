import axios from 'axios';

const API_KEY = '569e83c6035cd6cb2e5ea4a8439c28a4';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default axiosInstance;

