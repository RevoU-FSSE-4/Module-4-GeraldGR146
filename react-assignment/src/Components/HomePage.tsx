import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="text-lg">Welcome to our website!</p>
      <p className="text-lg">Please <Link to="/login" className="text-blue-500 hover:text-blue-700">login</Link> or <Link to="/register" className="text-blue-500 hover:text-blue-700">register</Link> to get started.</p>
    </div>
  );
};

export default HomePage;

