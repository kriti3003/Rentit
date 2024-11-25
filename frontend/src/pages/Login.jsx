import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = async(event) =>{
    event.preventDefault();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <form onSubmit = {onSubmitHandler} className="w-full max-w-sm bg-white rounded-md shadow-md p-8">
        {/* Header */}
        <h1 className="text-center text-2xl font-bold text-black-500 mb-6">{currentState.toUpperCase()}</h1>

        {/* Input Fields */}
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:baby-pink-400"
            placeholder="email"
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:baby-pink-400"
            placeholder="password"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-pink-200 hover:underline">
            forgot password?
          </a>
        </div>

        {/* Terms and Conditions */}
        <p className="text-xs text-gray-500 mt-4">
          By logging in, you agree to our{' '}
          <a href="#" className="text-pink-600 hover:underline">
            terms
          </a>
          ,{' '}
          <a href="#" className="text-pink-600 hover:underline">
            privacy policy
          </a>
          , and{' '}
          <a href="#" className="text-pink-600 hover:underline">
            rewards program terms
          </a>
          .
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 py-2 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-400 transition"
        >
          LOGIN
        </button>

        {/* Create Account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          don't have an account yet?{' '}
          <a href="#" className="text-pink-600 font-medium hover:underline">
            create account
          </a>
        </p>
      </form>
    </div>
    
    
  );
};

export default Login;


