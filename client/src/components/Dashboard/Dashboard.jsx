import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import CreatePost from '../CreatePost/CreatePost';
import CreateNewCause from '../CreateCause/CreateNewCause';

function Dashboard({ onCreate }) {
  const [showAllPosts, setShowAllPosts] = useState(true); 
  const [showCreatePost, setShowCreatePost] = useState(false); 
  const [showCreateCause, setShowCreateCause] = useState(false); 

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar 
        setShowAllPosts={setShowAllPosts} 
        setShowCreatePost={setShowCreatePost}
        setShowCreateCause={setShowCreateCause}
      />

      {/* Main content area */}
      <div className="ml-64 p-4">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">
            {showAllPosts ? 'All Posts' : showCreatePost ? 'Create New Post' : 'Create New Cause'}
          </h1>
        </header>
        {/* Main content */}
        <div className="bg-white rounded shadow p-6">
          {showAllPosts ? (
            <div>
              {/* Placeholder for displaying posts */}
              <div className="mb-4">
                {/* Post item */}
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-xl font-semibold">Post Title</h2>
                  <p className="text-gray-600">Post description goes here.</p>
                </div>
                {/* Add more post items as needed */}
              </div>
            </div>
          ) : showCreatePost ? (
            <CreatePost />
          ) : (
            <CreateNewCause />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
