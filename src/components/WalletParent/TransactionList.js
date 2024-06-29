import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie"; // Import js-cookie

import Transaction from "./Transaction"; // Adjust path as per your project structure

const TransactionList = ({ selectedTab, onTransactionClick }) => {
  const [completedTransactions, setCompletedTransactions] = useState([]);
  const [pendingTransactions, setPendingTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Set the parent_id cookie using js-cookie
        Cookie.set("parent_id", "1");

        // Axios request to fetch transactions
        const response = await axios.get('http://localhost:5000/parent_wallet/transactions', {
          withCredentials: true, // Ensure credentials are sent with the request
        });
        const fetchedTransactions = response.data;

        // Separate completed and pending transactions
        const completed = fetchedTransactions.filter(trans => trans.status === 'completed');
        const pending = fetchedTransactions.filter(trans => trans.status === 'pending');


        setCompletedTransactions(completed);
        setPendingTransactions(pending);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        // Handle error states
      }
    };

    fetchTransactions();
  }, [selectedTab]); // Include any dependencies if needed

  return (
    <div className="overflow-y-auto max-h-[450px]">
      {selectedTab === "history" && completedTransactions.map((trans) => (
        <div key={trans.transaction_id} onClick={() => onTransactionClick(trans)}>
          <Transaction trans={trans} />
        </div>
      ))}
      {selectedTab === "pending" && pendingTransactions.map((trans) => (
        <div key={trans.transaction_id} onClick={() => onTransactionClick(trans)}>
          <Transaction trans={trans} />
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
