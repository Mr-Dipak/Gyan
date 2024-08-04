import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const causeService = {
  getAllCauses: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/causes`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  createCause: async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/api/causes`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  getCauseById: async (causeId) => {
    try {
      const response = await axios.get(`${API_URL}/api/causes/${causeId}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  updateCause: async (causeId, causeData) => {
    try {
      const response = await axios.put(`${API_URL}/api/causes/${causeId}`, causeData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  deleteCause: async (causeId) => {
    try {
      await axios.delete(`${API_URL}/api/causes/${causeId}`);
    } catch (error) {
      throw error.response.data.message;
    }
  }
};

export default causeService;
