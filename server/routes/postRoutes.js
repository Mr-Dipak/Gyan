import express from 'express';
import postController from '../controllers/postController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', upload.single('image'), postController.createPost);
router.put('/:id', upload.single('image'), postController.updatePost);
router.delete('/:id', postController.deletePost);

export { router as postRouter };
