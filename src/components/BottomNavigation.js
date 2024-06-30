import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  WalletIcon,
  HomeIcon,
  ShoppingCartIcon,
  SettingsIcon,
  Home,
} from "lucide-react";

const BottomNavigation = ({ isMain }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-around max-w-screen-lg mx-auto border-t border-gray-200">
      <button
        className={`flex flex-col items-center ${
          isActive("/") ? "text-colorPalette3" : "text-gray-500"
        }`}
        onClick={() => navigate("/child")}
      >
        <Home />
        <span className="text-xs mt-1">Home</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          isActive("/wallet") ? "text-colorPalette3" : "text-gray-500"
        }`}
        onClick={() => navigate("/wallet")}
      >
        <WalletIcon />
        <span className="text-xs mt-1">Wallet</span>
      </button>
      {isMain && (
        <button
          className={`flex flex-col items-center ${
            isActive("/") ? "text-colorPalette3" : "text-gray-500"
          }`}
        ></button>
      )}

      <button
        className={`flex flex-col items-center ${
          isActive("/shop") ? "text-colorPalette3" : "text-gray-500"
        }`}
        onClick={() => navigate("/shop")}
      >
        <ShoppingCartIcon />
        <span className="text-xs mt-1">Shop</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          isActive("/settings") ? "text-colorPalette3" : "text-gray-500"
        }`}
        onClick={() => navigate("/child")}
      >
        <SettingsIcon />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
