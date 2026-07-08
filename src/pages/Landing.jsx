import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-primary-purple flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Main Container */}
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-block">
            {/* <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Taskify
            </div> */}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Organize Your Tasks,{" "}
            <span className="text-secondary-purple">Master Your Day</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            A simple yet powerful task management application designed to help
            you stay productive and focused. Create, manage, and track your
            daily tasks with ease.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-light-purple/70 hover:bg-light-purple transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Add & Track Tasks
            </h3>
            <p className="text-gray-300 text-sm">
              Easily add tasks and track their completion status in real-time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-light-purple/70 hover:bg-light-purple transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Organize Efficiently
            </h3>
            <p className="text-gray-300 text-sm">
              View your tasks organized into pending and completed sections.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-light-purple/70 hover:bg-light-purple transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Stay Productive
            </h3>
            <p className="text-gray-300 text-sm">
              Manage your workflow seamlessly and boost your productivity today.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4 pt-6">
          <p className="text-gray-300 text-sm sm:text-base">
            Ready to organize your tasks?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Get Started Button */}
            <Link
              to="/signup"
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-secondary-purple hover:bg-secondary-purple/80 transition-all duration-300 font-semibold text-white text-base sm:text-lg hover:shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Sign In Button */}
            <Link
              to="/login"
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-secondary-purple hover:bg-secondary-purple/20 transition-all duration-300 font-semibold text-secondary-purple hover:text-white text-base sm:text-lg transform hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Footer Info */}
        <div className="pt-8 border-t border-secondary-purple/30">
          <p className="text-gray-400 text-xs sm:text-sm">
            No credit card required • Free forever • Easy to use
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
