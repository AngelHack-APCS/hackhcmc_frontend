import React, { useState, useEffect } from "react";
import { DollarSign } from "lucide-react";
import happyCapa from "../../assets/HappyCapy.png";

const SavingTab = () => {
  const [savingsData, setSavingsData] = useState([]);

  useEffect(() => {
    const sampleData = [
      { month: "January", savingAmount: 1000 },
      { month: "February", savingAmount: 1200 },
      { month: "March", savingAmount: 800 },
      { month: "April", savingAmount: 1500 },
      { month: "May", savingAmount: 1300 },
      { month: "June", savingAmount: 1100 },
      { month: "July", savingAmount: 900 },
      { month: "August", savingAmount: 1400 },
      { month: "September", savingAmount: 1600 },
      { month: "October", savingAmount: 1150 },
      { month: "November", savingAmount: 1250 },
      { month: "December", savingAmount: 1350 },
    ];
    setSavingsData(sampleData);
  }, []);
  // Calculate max value with additional margin
  const maxAmount = Math.max(...savingsData.map((data) => data.savingAmount));
  const yAxisMax = Math.ceil(maxAmount * 1.2); // Adjust multiplier for desired margin

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="text-4xl font-bold text-green-500 mb-2">520</div>
      <div className="flex items-center text-2xl font-semibold text-green-500 mb-4">
        <span>+50</span>
        <DollarSign className="w-6 h-6 ml-1" />
      </div>
      <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={happyCapa}
          alt="Cute hamster character"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SavingTab;
