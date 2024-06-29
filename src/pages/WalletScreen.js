import React, { useState } from "react";
import AuthenLogo from "../components/Authen/AuthenLogo";
import WalletHeader from "../components/Wallet/WalletHeader";
import WalletTab from "../components/Wallet/WalletTab";
import BottomNavigation from "../components/BottomNavigation";

const WalletScreen = () => {
  const [activeTab, setActiveTabs] = useState(0);

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <WalletHeader />
      <div className="pt-8 pb-12">
        <AuthenLogo />
      </div>
      <WalletTab activeTab={activeTab} setActiveTabs={setActiveTabs} />
      <BottomNavigation isMain={false} />
    </div>
  );
};

export default WalletScreen;
