import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie"; // Import js-cookie

import Transaction from "./Transaction"; // Adjust path as per your project structure

const tempData = [
  {
      "transaction_id": 1,
      "image_url": null,
      "date": "01/01/2024",
      "amount": "150",
      "direction": "plus",
      "type": "transfer",
      "status": "completed",
      "content": "Transfer to account"
  },
  {
      "transaction_id": 2,
      "image_url": null,
      "date": "01/02/2024",
      "amount": "120",
      "direction": "plus",
      "type": "reward",
      "status": "completed",
      "content": "Reward for good behavior"
  },
  {
      "transaction_id": 3,
      "image_url": "//www.mykingdom.com.vn/cdn/shop/products/71806_1.jpg?v=1707217656",
      "date": "01/03/2024",
      "amount": "180",
      "direction": "minus",
      "type": "order",
      "status": "pending",
      "content": "Order item 1"
  },
  {
      "transaction_id": 4,
      "image_url": null,
      "date": "01/04/2024",
      "amount": "130",
      "direction": "minus",
      "type": "transfer",
      "status": "completed",
      "content": "Transfer to another account"
  }
];

const TransactionList = ({ selectedTab, onTransactionClick }) => {
  const [completedTransactions, setCompletedTransactions] = useState([]);
  const [pendingTransactions, setPendingTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
      //   // Set the parent_id cookie using js-cookie
      //   Cookie.set("parent_id", "1");

      //   // Axios request to fetch transactions
      //   const response = await axios.get('http://localhost:5000/parent_wallet/transactions', {
      //     withCredentials: true, // Ensure credentials are sent with the request
      //   });
      //   const fetchedTransactions = response.data;

        // Separate completed and pending transactions
        const completed = tempData.filter(trans => trans.status === 'completed');
        const pending = tempData.filter(trans => trans.status === 'pending');


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
