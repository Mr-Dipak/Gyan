import React, { useState } from 'react';
import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL
export function NewsLetter() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace with your API endpoint
      const response = await axios.post(`${API_URL}/api/subscribe`, { email });
      
      if (response.status === 200) {
        setSuccessMessage('Subscription successful!');
        setEmail(''); // Clear the input field
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setErrorMessage('Failed to subscribe. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <h3 className="mb-4 text-lg font-semibold text-gray-900">Subscribe to our Newsletter</h3> */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
      {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
      {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
    </div>
  );
}
