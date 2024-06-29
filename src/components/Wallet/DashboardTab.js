import React from "react";
import SpendingManagementPieChart from "./SpendingManagement";

const DashboardTab = () => {
  return (
    <div>
      <SpendingManagementPieChart />

      <div className="flex justify-around">
        <span className="font-bold text-green-500">Earnings: 2069</span>
        <span className="font-bold text-red-400">Spending: 2033</span>
      </div>
    </div>
  );
};

export default DashboardTab;
