import express from 'express';
import newsLetterController from '../controllers/newsLetterController.js';


const router = express.Router();

router.post('/', newsLetterController.subscribe); 

export { router as newsLetterRouter };
