
import User from '../models/user.js';

const authService = {
  signup: async ({ email, password, name }) => {
    try {
      const user = await User.create({ email, password, name });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  login: async ({ email, password }) => {
    try {
      const user = await User.findOne({ where: { email, password } });
      if (!user) throw new Error('Invalid email or password');
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getCurrentUser: async (req) => {
    if (!req.user) throw new Error('User not authenticated');
    return req.user;
  },

  logout: async () => {
    // Logic to logout user
  }
};
export default authService;
