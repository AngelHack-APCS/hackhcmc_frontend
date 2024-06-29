import React, { useState } from "react";
import WalletHeader from "../components/Wallet/WalletHeader";
import wallet from "../assets/wallet.png";
import TransactionList from "../components/WalletParent/TransactionList";
import TransactionDetail from "../components/WalletParent/TransactionDetail";
import BottomParentNavigation from "../components/BottomParentNavigation";

const WalletParentScreen = () => {
  const [isTransOpen, setIsTransOpen] = useState(false);
  const [selectedTran, setSelectedTran] = useState(null);
  const [selectedTab, setSelectedTab] = useState("history");

  const handleTransactionClick = (tran) => {
    setSelectedTran(tran);
    setIsTransOpen(true);
  };

  const handleTransClose = () => {
    setIsTransOpen(false);
    setSelectedTran(null);
  };

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <WalletHeader />
      <div className="pt-20 pb-12">
        <div className="flex justify-center items-center">
          <img src={wallet} className="h-32" />
        </div>
      </div>

      <div className="flex justify-left space-x-4 my-4 flex-shrink-0">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === "history"
              ? "bg-mainColor text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedTab("history")}
        >
          History
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedTab === "pending"
              ? "bg-mainColor text-black"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setSelectedTab("pending")}
        >
          Pending
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        <TransactionList
          selectedTab={selectedTab}
          onTransactionClick={handleTransactionClick}
        />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-500 transform ${
          isTransOpen ? "translate-y-0" : "translate-y-[300%]"
        }`}
        style={{ zIndex: 10 }}
      >
        <TransactionDetail tran={selectedTran} onClose={handleTransClose} />
      </div>

      <div className="flex-shrink-0">
        <BottomParentNavigation />
      </div>
    </div>
  );
};

export default WalletParentScreen;
