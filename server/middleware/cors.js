// middleware/cors.js

import cors from 'cors';

// Set up CORS middleware
const corsOptions = {
  origin: 'http://localhost:5173' // Update this with your frontend origin
};

export default cors(corsOptions);
