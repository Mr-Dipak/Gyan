// middleware/cors.js

import cors from 'cors';

// Define CORS options
const corsOptions = {
  origin: ['https://gyanprabhafoundation.vercel.app'], // Replace with your allowed origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

// Set up CORS middleware
export default cors(corsOptions);
