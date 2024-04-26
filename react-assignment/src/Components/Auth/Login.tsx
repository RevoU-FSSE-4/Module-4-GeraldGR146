import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      };

      const response = await fetch('https://library-crud-sample.vercel.app/api/user/login', options);

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token);

      setAlert('Login successful');
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
      setAlert('Login failed');
    }
  };

  useEffect(() => {
    if (loggedIn) {
      window.location.href = '/profile';
    }
  }, [loggedIn]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
      {alert && <div className="mb-4 text-center text-red-600">{alert}</div>}
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded px-3 py-2" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      </form>
      <div className="flex justify-between">
        <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        <Link to="/profile" className="text-blue-500 hover:underline">User Profile</Link>
      </div>
    </div>
  );
};

export default Login;
