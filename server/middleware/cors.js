// middleware/cors.js

import cors from 'cors';

// Set up CORS middleware
const corsOptions = {
  origin: true, 
  credentials: true 
};

export default cors(corsOptions);
