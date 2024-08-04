import postService from '../services/postServices.js';
import s3 from '../config/awsConfig.js';
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { config } from '../config/config.js';

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await postService.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postService.getPostById(id);
      res.json(post);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, description, author, category } = req.body;
      const file = req.file;

      if (!file) {
        throw new Error('File is required');
      }

      // Generate a unique filename for the image
      const key = `posts/${uuidv4()}_${file.originalname}`;

      // Upload the image to S3
      const uploadParams = {
        Bucket: "gp.bucket",
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      await s3.send(new PutObjectCommand(uploadParams));

      const imageUrl = `https://${"gp.bucket"}.s3.${config.region}.amazonaws.com/${key}`;

      const post = await postService.createPost({ title, description, author, category, imageUrl });
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, author, category } = req.body;
      const post = await postService.updatePost(id, { title, description, author, category });
      res.json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await postService.deletePost(id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

export default postController;
