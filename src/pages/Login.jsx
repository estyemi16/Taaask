import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Handle login logic here
    console.log("Login attempt:", { email, password });
    navigate("/home");
  };

  return (
    <div className="w-full min-h-screen bg-primary-purple flex items-center justify-center p-4 sm:p-6">
      <div className="w-full md:w-[60%] lg:w-[40%] sm:w-[50%] rounded-3xl p-8 sm:p-10 bg-light-purple/70 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-secondary-purple text-sm sm:text-base">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white text-sm sm:text-base font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-4 py-3 sm:py-3 border-2 border-secondary-purple bg-primary-purple/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-white text-sm sm:text-base font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg px-4 py-3 sm:py-3 border-2 border-secondary-purple bg-primary-purple/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 sm:p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="#"
              className="text-secondary-purple text-xs sm:text-sm hover:underline transition-all duration-200"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-secondary-purple hover:bg-secondary-purple/80 transition-all duration-300 ease-in-out hover:cursor-pointer py-3 sm:py-4 font-semibold text-white text-base sm:text-lg hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-secondary-purple/30"></div>
          <span className="text-secondary-purple text-xs sm:text-sm">OR</span>
          <div className="flex-1 h-px bg-secondary-purple/30"></div>
        </div>

        {/* Signup Link */}
        <div className="text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-secondary-purple font-semibold hover:underline transition-all duration-200"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
