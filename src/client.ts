import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? 'http://localhost:80/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`,
  },
});

export default client;
