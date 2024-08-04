import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import postService from '../../api/postService';
import { useSelector } from 'react-redux';

const CreatePostForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const userData = useSelector((state) => state.auth.userData);

  const submitHandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('author', userData.name);
      formData.append('category', data.category);
      formData.append('image', data.image[0]); // Assuming only one file is selected

      await postService.createPost(formData);
      reset();
      setSuccessMessage('Post created successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error creating post:', error);
      // You can handle errors here, e.g., set an error state to display to the user
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input type="text" id="title" {...register('title', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {errors.title && <span className="text-red-500">Title is required</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea id="description" {...register('description', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        {errors.description && <span className="text-red-500">Description is required</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
        <select id="category" {...register('category', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select a category</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="General">General</option>
          <option value="Tech">Tech</option>
          <option value="Campaign">Campaign</option>
       
        </select>
        {errors.category && <span className="text-red-500">Category is required</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
        <input type="file" id="image" {...register('image', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {errors.image && <span className="text-red-500">Image is required</span>}
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
