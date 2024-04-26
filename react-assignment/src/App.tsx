import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MultiStepForm from './Components/Form/MultiStepForm';
import HomePage from './Components/HomePage';
import LoginPage from './Components/Auth/Login';
import RegisterPage from './Components/Auth/Register';
import UserProfile from './Components/Auth/UserProfile';

const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

const App = () => {
  return (
    <Router>
<nav className="bg-gray-800 py-4">
  <ul className="flex justify-center space-x-4">
    <li>
      <Link to="/" className="text-white hover:text-gray-300">Home</Link>
    </li>
    <li>
      <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
    </li>
    <li>
      <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
    </li>
    <li>
      <Link to="/profile" className="text-white hover:text-gray-300">User Profile</Link>
    </li>
    <li>
      <Link to="/multistep" className="text-white hover:text-gray-300">Multi-Step Form</Link>
    </li>
  </ul>
</nav>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/multistep" element={<MultiStepForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
