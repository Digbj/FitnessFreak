import React, { useState } from "react";
import Login from "./Login";
import Register from "./Registration";
const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50 p-4">
      <div className="bg-[#eefeff] rounded-2xl shadow-2xl w-full max-w-md md:mx-4 my-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 text-xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors hover:cursor-pointer hover:text-red-500"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </h2>

          {/* Tabs */}
          <div className="flex mb-6 relative bg-gray-100 rounded-lg p-1">
            <button
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 hover:cursor-pointer  ${
                activeTab === "login"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 hover:cursor-pointer ${
                activeTab === "register"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {activeTab === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};
export default AuthModal;