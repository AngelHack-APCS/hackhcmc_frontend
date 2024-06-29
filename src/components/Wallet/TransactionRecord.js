import React from "react";
import { DollarSign, Home } from "lucide-react";

const TransactionRecord = ({ date, type, name, amount }) => {
  const isPositive = amount > 0;

  return (
    <button className="w-full bg-gray-100 p-4 rounded-lg flex items-center justify-between hover:bg-gray-200 transition-colors">
      <div className="flex items-center space-x-4">
        {type === "Transfer" ? (
          <Home className="text-blue-500" size={24} />
        ) : (
          <DollarSign className="text-green-500" size={24} />
        )}
        <div className="flex flex-col items-start">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="font-medium">
            {type}: {name}
          </span>
        </div>
      </div>
      <span
        className={`font-bold ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? "+" : "-"}${Math.abs(amount)}
      </span>
    </button>
  );
};

export default TransactionRecord;
