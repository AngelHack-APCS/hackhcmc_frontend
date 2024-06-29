import React from "react";
import TransactionRecord from "./TransactionRecord";

const HistoryTab = () => {
  //   transaction_list = {};

  return (
    <div className="flex flex-col overflow-y-auto max-height-10 mt-4">
      <TransactionRecord
        date="24/6/2024"
        type="Transfer"
        name="Jessica"
        amount={40}
      />
      <TransactionRecord
        date="24/6/2024"
        type="Transfer"
        name="Robert"
        amount={-30}
      />
      <TransactionRecord
        date="24/6/2024"
        type="Chores"
        name="Washing Dish"
        amount={30}
      />
    </div>
  );
};

export default HistoryTab;
