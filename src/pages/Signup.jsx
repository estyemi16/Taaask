import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    // Handle signup logic here
    console.log("Signup attempt:", { fullName, email, password });
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen bg-primary-purple flex items-center justify-center p-4 sm:p-6">
      <div className="w-full md:w-[60%] lg:w-[40%] sm:w-[50%] rounded-3xl p-8 sm:p-10 bg-light-purple/70 shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Create Account
          </h1>
          <p className="text-secondary-purple text-sm sm:text-base">
            Join us and get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Full Name Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-white text-sm sm:text-base font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 sm:py-3 border-2 border-secondary-purple bg-primary-purple/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 sm:py-3 border-2 border-secondary-purple bg-primary-purple/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-white text-sm sm:text-base font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 sm:py-3 border-2 border-secondary-purple bg-primary-purple/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent transition-all duration-200"
              placeholder="Confirm your password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 sm:p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-secondary-purple bg-primary-purple/50 cursor-pointer accent-secondary-purple"
            />
            <label
              htmlFor="terms"
              className="text-gray-300 text-xs sm:text-sm cursor-pointer"
            >
              I agree to the{" "}
              <Link to="#" className="text-secondary-purple hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-secondary-purple hover:bg-secondary-purple/80 transition-all duration-300 ease-in-out hover:cursor-pointer py-3 sm:py-4 font-semibold text-white text-base sm:text-lg hover:shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-secondary-purple/30"></div>
          <span className="text-secondary-purple text-xs sm:text-sm">OR</span>
          <div className="flex-1 h-px bg-secondary-purple/30"></div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-secondary-purple font-semibold hover:underline transition-all duration-200"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
