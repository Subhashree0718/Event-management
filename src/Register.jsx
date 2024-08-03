import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password and Confirm Password should need to be same');
      return;
    }
    setError('');
    console.log('Form submitted');
    navigate('/login');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-black bg-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-black bg-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-black bg-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>
          {error && (
            <div className="mb-6 text-red-600 text-sm font-medium">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
