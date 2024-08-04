import newsletterService from "../services/newsLetterServices.js";
const newsLetterController = {
    subscribe: async (req, res) => {
        try {
          const { email } = req.body;
          if (!email) {
            return res.status(400).json({ message: 'Email is required' });
          }
          const result = await newsletterService.subscribe(email);
          res.json({ message: 'Subscription successful!', result });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
    };
  
  export default newsLetterController;
  