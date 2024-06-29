import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  WalletIcon,
  HomeIcon,
  ShoppingCartIcon,
  SettingsIcon,
  Home,
} from "lucide-react";

const BottomManager = ({ setTaskManager, currentTaskManager }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-around max-w-screen-lg mx-auto border-t border-gray-200">
      <button
        className={`flex flex-col items-center ${
          currentTaskManager === "Tasks" ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => setTaskManager("Tasks")}
      >
        <Home />
        <span className="text-xs mt-1">Tasks</span>
      </button>

      <button
        className={`flex flex-col items-center ${
          currentTaskManager === "Reward" ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => setTaskManager("Reward")}
      >
        <WalletIcon />
        <span className="text-xs mt-1">Reward</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          currentTaskManager === "Info" ? "text-blue-500" : "text-gray-500"
        }`}
        onClick={() => setTaskManager("Info")}
      >
        <WalletIcon />
        <span className="text-xs mt-1">Info</span>
      </button>
    </div>
  );
};

export default BottomManager;
