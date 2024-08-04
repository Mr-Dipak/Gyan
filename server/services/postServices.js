import Post from '../models/Post.js';


const postService = {
  getAllPosts: async () => {
    try {
      const posts = await Post.findAll();
      return posts;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getPostById: async (id) => {
    try {
      const post = await Post.findByPk(id);
      if (!post) throw new Error('Post not found');
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  createPost: async ({ title, description, author, category, imageUrl }) => {
    try {
      const post = await Post.create({ title, description, author, category, imageUrl });
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updatePost: async (id, { title, description, author, category }) => {
    try {
      const post = await Post.findByPk(id);
      if (!post) throw new Error('Post not found');
      await post.update({ title, description, author, category });
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deletePost: async (id) => {
    try {
      const post = await Post.findByPk(id);
      if (!post) throw new Error('Post not found');
      await post.destroy();
      return { message: 'Post deleted' };
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default postService;
