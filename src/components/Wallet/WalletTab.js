import React, { useState } from "react";
import TransferForm from "./TransferForm";
import SavingTab from "./SavingTab";
import SpendingManagementPieChart from "./SpendingManagement";
import DashboardTab from "./DashboardTab";

const WalletTab = ({ activeTab, setActiveTabs }) => {
  const [activeOptions, setActiveOptions] = useState(0);

  return (
    <>
      <div>
        <div className="relative w-full bg-white p-4 flex justify-around max-w-screen-lg mx-auto">
          <button
            className={`flex flex-col items-center ${
              activeTab === 0 ? "text-colorPalette2" : "text-black"
            }`}
          >
            <h2
              onClick={() => {
                setActiveTabs(0);
              }}
              className="text-xl mt-1"
            >
              Transactions
            </h2>
          </button>
          <button
            className={`flex flex-col items-center ${
              activeTab === 1 ? "text-colorPalette2" : "text-black"
            }`}
          >
            <h2
              onClick={() => {
                setActiveTabs(1);
              }}
              className="text-xl mt-1"
            >
              Savings
            </h2>
          </button>
        </div>
        {activeTab === 0 && (
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => setActiveOptions(0)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeOptions === 0
                  ? "bg-mainColor text-white hover:bg-mainColor"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveOptions(1)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeOptions === 1
                  ? "bg-mainColor text-white hover:bg-mainColor"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              New
            </button>
            <button
              onClick={() => setActiveOptions(2)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                activeOptions === 2
                  ? "bg-mainColor text-white hover:bg-mainColor"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              History
            </button>
          </div>
        )}
      </div>
      {activeTab === 0 && activeOptions === 0 && <DashboardTab />}
      {activeTab === 0 && activeOptions === 1 && <TransferForm />}
      {activeTab === 0 && activeOptions === 2 && <SavingTab />}
    </>
  );
};

export default WalletTab;
