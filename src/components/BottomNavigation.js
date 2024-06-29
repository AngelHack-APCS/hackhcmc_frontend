import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-around max-w-screen-lg mx-auto border-t border-gray-200">
      <button
        className={`flex flex-col items-center ${
          isActive("/") ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-xs mt-1">Home</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          isActive("/shop") ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => navigate("/shop")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-xs mt-1">Shop</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
