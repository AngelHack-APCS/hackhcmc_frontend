import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  WalletIcon,
  HomeIcon,
  ShoppingCartIcon,
  SettingsIcon,
  Home,
} from "lucide-react";

const BottomParentNavigation = ({ isMain }) => {
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
        onClick={() => navigate("/parent")}
      >
        <Home />
        <span className="text-xs mt-1">Home</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          isActive("/wallet") ? "text-colorPalette3" : "text-gray-500"
        }`}
        onClick={() => navigate("/parent/wallet")}
      >
        <WalletIcon />
        <span className="text-xs mt-1">Wallet</span>
      </button>
    </div>
  );
};

export default BottomParentNavigation;
