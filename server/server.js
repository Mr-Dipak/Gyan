// server.js

import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import corsMiddleware from './middleware/cors.js';
import { router as authRoutes } from './routes/authRoutes.js';
import { postRouter } from './routes/postRoutes.js'; 
import { newsLetterRouter } from './routes/newsLetter.js';
import { initiateTransaction } from './paytmIntegration.js'; // Import the initiateTransaction function

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(corsMiddleware); // Use the CORS middleware

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/posts', postRouter); // Post routes
app.use('/api/subscribe', newsLetterRouter); // NewsLetter routes

// Endpoint for initiating Paytm transaction
app.post('/api/paytm/initiate-transaction', async (req, res) => {
  const { orderId, amount, callbackUrl } = req.body;

  try {
    const response = await initiateTransaction(orderId, amount, callbackUrl);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Database synchronization
sequelize.sync().then(() => {
  console.log('Database synced successfully');
}).catch(err => {
  console.error('Unable to sync database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
