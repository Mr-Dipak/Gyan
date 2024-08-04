import axios from 'axios';

const API_URL = 'http://localhost:3000'; 
const postService = {
  getAllPosts: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  createPost: async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/api/posts`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct content type for FormData
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  getPostById: async (postId) => {
    try {
      const response = await axios.get(`${API_URL}/api/posts/${postId}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  updatePost: async (postId, postData) => {
    try {
      const response = await axios.put(`${API_URL}/api/posts/${postId}`, postData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  deletePost: async (postId) => {
    try {
      await axios.delete(`${API_URL}/api/posts/${postId}`);
    } catch (error) {
      throw error.response.data.message;
    }
  }
};

export default postService;
