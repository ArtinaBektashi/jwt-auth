import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7117/api',
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (username, password) => {
  try {
    const response = await api.post('/auth/register', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};