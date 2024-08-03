import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [isUser, setIsUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsUser(!isUser);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add logic to verify OTP here
    navigate('/login');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto p-8">
        <div className="flex justify-center mb-4">
          <button
            className={`w-1/2 py-4 text-center rounded-lg border-2 border-blue-500 ${isUser ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
            onClick={() => setIsUser(true)}
          >
            User Login
          </button>
          <button
            className={`w-1/2 py-4 text-center rounded-lg border-2 border-blue-500 ${!isUser ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
            onClick={() => setIsUser(false)}
          >
            Creator Login
          </button>
        </div>
        
        <div>
          {forgotPassword ? (
            otpSent ? (
              <form onSubmit={handleOtpSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                    OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    placeholder="Enter OTP"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleForgotPassword}>
                <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white  leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )
          ) : (
            <form>
              <h2 className="text-2xl font-bold mb-6 text-center">{isUser ? 'User Login' : 'Creator Login'}</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
    id="password"
    type={showPassword ? "text" : "password"}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
    placeholder="Enter your password"
  />
  <button
    type="button"
    onClick={togglePasswordVisibility}
    className="absolute inset-y-0 right-0 px-3  mt-6 text-gray-600 bg-transparent border-none outline-none focus:outline-none"
  >
    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
  </button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                >
                  {isUser ? 'Login' : 'Sign In'}
                </button>
                <Link
                  to="#"
                  onClick={() => setForgotPassword(true)}
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 flex items-center justify-center mb-3"
                >
                  <i className="fab fa-google mr-2"></i>
                  {isUser ? 'Login with Google' : 'Sign in with Google'}
                </button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 flex items-center justify-center"
                >
                  <i className="fab fa-facebook-f mr-2"></i>
                  {isUser ? 'Login with Facebook' : 'Sign in with Facebook'}
                </button>
              </div>
              <div className="text-center">
                <Link
                  to="/register"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  New user? Register
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
