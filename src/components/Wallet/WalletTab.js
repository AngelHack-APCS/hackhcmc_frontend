import React, { useState } from 'react';

const WalletTab = ({ activeTab, setActiveTabs }) => {
    const [parentTab, setParentTab] = useState(0);
  const handleClick = (tabIndex) => {
    setActiveTabs(tabIndex);
  };

  return (
    <div>
    <div className="relative w-full bg-white p-4 flex justify-around max-w-screen-lg mx-auto">
      <button
        className={`flex flex-col items-center ${parentTab === 0  ? "text-colorPalette2" : "text-black"}`}
      >
        <h2 onClick={() => {setParentTab(0)}} className="text-xl mt-1">Transactions</h2>
      </button>
      <button
        className={`flex flex-col items-center ${parentTab === 1  ? "text-colorPalette2" : "text-black"}`}
      >
        <h2 onClick={() => {setParentTab(1)}} className="text-xl mt-1">Savings</h2>
      </button>
    </div>
    <div className="flex space-x-2 mt-2">
        <span onClick={() => parentTab === 1 ? handleClick(2) : handleClick(0)} className={`p-1 rounded-full ${activeTab === 0 || activeTab === 2 ? "bg-colorPalette2 text-white" : "bg-colorPalette1 text-black"}`}>New</span>
        <span onClick={() => parentTab === 1 ? handleClick(3) : handleClick(1)} className={`p-1 rounded-full ${activeTab === 1 || activeTab === 3 ? "bg-colorPalette2 text-white" : "bg-colorPalette1 text-black"}`}>History</span>
    </div>
    </div>
  );
};

export default WalletTab;
