import React, { useState } from "react";
import TransferForm from "./TransferForm";
import HistoryTab from "./HistoryTab";
import DashboardTab from "./DashboardTab";
import SavingTab from "./SavingTab";

const WalletTab = ({ activeTab, setActiveTabs }) => {
  const [activeOptions, setActiveOptions] = useState(0);

  return (
    <>
      <div>
        <div className="flex relative bg-white p-4 justify-around max-w-screen-lg mx-auto">
          <button
            className={`flex flex-col rounded-full items-center py-2 px-4 w-1/2 shadow-md mx-2 ${
              activeTab === 0
                ? "text-white bg-colorPalette2"
                : "text-black bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTabs(0)}
          >
            <h2
              className={`text-xl mt-1 ${
                activeTab === 0 ? "text-white" : "text-black"
              }`}
            >
              Transactions
            </h2>
          </button>
          <button
            className={`flex flex-col rounded-full items-center py-2 px-4 w-1/2 mx-2 shadow-md ${
              activeTab === 1
                ? "text-white bg-colorPalette2"
                : "text-black bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTabs(1)}
          >
            <h2
              className={`text-xl mt-1 ${
                activeTab === 1 ? "text-white" : "text-black"
              }`}
            >
              Piggy bank
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
      {activeTab === 0 && activeOptions === 2 && <HistoryTab />}
      {activeTab === 1 && <SavingTab />}
    </>
  );
};

export default WalletTab;
