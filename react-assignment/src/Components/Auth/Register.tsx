import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false); // State to manage redirection

  useEffect(() => {
    if (redirectToLogin) {
      setTimeout(() => {
        window.location.href = "/login"; // Redirect after 2 seconds
      }, 2000);
    }
  }, [redirectToLogin]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { name, email, password } = formData;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            email: email,
            password: password 
        })
      };

      const response = await fetch('https://library-crud-sample.vercel.app/api/user/register', options);

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setAlert('Registration successful');
      setRedirectToLogin(true); // Set redirection flag to true

    } catch (error) {
      console.error('Error registering:', error);
      setAlert('Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      {alert && <div className="mb-4 text-center text-green-600">{alert}</div>}
      {!redirectToLogin ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </form>
      ) : (
        <div className="text-center">
          <p>Redirecting to login page...</p>
        </div>
      )}
      <div className="mt-4">
        <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
