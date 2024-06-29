import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  WalletIcon,
  HomeIcon,
  ShoppingCartIcon,
  SettingsIcon,
} from "lucide-react";

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
        onClick={() => navigate("/shop")}
      >
        <HomeIcon />
        <span className="text-xs mt-1">Home</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          isActive("/wallet") ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => navigate("/wallet")}
      >
        <WalletIcon />
        <span className="text-xs mt-1">Wallet</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          isActive("/") ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => navigate("/shop")}
      >
        <WalletIcon />
      </button>

      <button
        className={`flex flex-col items-center ${
          isActive("/shop") ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => navigate("/shop")}
      >
        <ShoppingCartIcon />
        <span className="text-xs mt-1">Shop</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          isActive("/settings") ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => navigate("/settings")}
      >
        <SettingsIcon />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
