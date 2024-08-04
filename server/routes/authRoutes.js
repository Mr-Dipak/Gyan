// routes/authRoutes.js
import express from 'express';

import {authController} from '../controllers/authController.js'

const router = express.Router();

router.post('/signup', authController.signup);  // Route for user registration
router.post('/login', authController.login);    // Route for user login
router.get('/currentUser', authController.getCurrentUser); // Route for retrieving current user information
router.post('/logout', authController.logout); // Route for user logout


export {router};
