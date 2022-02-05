import { default as Axios } from 'axios';

const API_URL = process.env.REACT_APP_API_URL as string;

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use((response) => {
  return response.data;
});
