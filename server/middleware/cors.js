// middleware/cors.js

import cors from 'cors';


const corsOptions = {
  origin: true,
  credentials: true
};

export default cors(corsOptions);
