import React, { useState } from "react";
import SpendingManagementPieChart from "./SpendingManagement";

const DashboardTab = () => {
  const [tabSelected, setTabSelected] = useState(0);

  const tabs = [
    {
      name: "Earnings",
      color: "text-green-500",
      bgColor: "bg-green-100",
      value: 204,
    },
    {
      name: "Spending",
      color: "text-red-400",
      bgColor: "bg-red-100",
      value: 133,
    },
  ];

  return (
    <div>
      <SpendingManagementPieChart tabSelected={tabSelected} />

      <div className="flex justify-around mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`font-bold px-4 py-2 rounded-lg transition-colors duration-200 ${
              tabSelected === index ? tab.bgColor : ""
            } ${tab.color} hover:bg-gray-100`}
            onClick={() => setTabSelected(index)}
          >
            • <span className="text-black">{tab.name}:</span> {tab.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardTab;
