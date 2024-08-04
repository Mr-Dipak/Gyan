// authService.js

import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const authService = {
  signup: async ({ email, password, name }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, { email, password, name });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
    console.log(API_URL);
   
  },

  login: async ({ email, password }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/currentUser`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`);
    } catch (error) {
      throw error.response.data.message;
    }
  }
};

export default authService;
