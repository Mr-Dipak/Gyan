import authService from '../services/authServices.js'
const authController = {
  signup: async (req, res) => {
    try {
      const { email, password, name } = req.body;
      const user = await authService.signup({ email, password, name });
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await authService.login({ email, password });
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getCurrentUser: async (req, res) => {
    try {
      const user = await authService.getCurrentUser(req); // Pass req object here
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  logout: async (req, res) => {
    try {
      await authService.logout();
      res.sendStatus(200);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export {authController}
