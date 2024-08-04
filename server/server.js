import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import corsMiddleware from './middleware/cors.js';
import { router as authRoutes } from './routes/authRoutes.js';
import { postRouter } from './routes/postRoutes.js';
import { newsLetterRouter } from './routes/newsLetter.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(corsMiddleware); // Use the CORS middleware

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/posts', postRouter); // Post routes
app.use('/api/subscribe', newsLetterRouter); // NewsLetter routes

// Database synchronization
sequelize.sync().then(() => {
  console.log('Database synced successfully');
}).catch(err => {
  console.error('Unable to sync database:', err);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for serverless deployment
export default app;
