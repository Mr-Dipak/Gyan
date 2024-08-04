// services/newsletterService.js
import Newsletter from '../models/newsLetter.js'

const newsletterService = {
  subscribe: async (email) => {

    const existingSubscription = await Newsletter.findOne({ where: { email } });
    if (existingSubscription) {
      throw new Error('Email is already subscribed');
    }


    const newSubscription = await Newsletter.create({ email });
    return newSubscription;
  }
};

export default newsletterService;
