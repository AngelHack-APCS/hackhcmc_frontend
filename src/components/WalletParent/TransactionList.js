import React from "react";
import Transaction from "./Transaction"; // Make sure the path to the Transaction component is correct

const historyTransactions = [
  // Add some sample transactions data here
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
    date: "2024-06-29",
    name: "Transaction 1",
    type: "plus",
    points: 100,
    tran_code: "T1",
    amount: 100,
    content: "Payment received",
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
    date: "2024-06-28",
    name: "Transaction 2",
    type: "minus",
    points: 50,
    tran_code: "T2",
    amount: 50,
    content: "Payment sent",
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
    date: "2024-06-28",
    name: "Transaction 2",
    type: "minus",
    points: 50,
    tran_code: "T2",
    amount: 50,
    content: "Payment sent",
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
    date: "2024-06-28",
    name: "Transaction 2",
    type: "minus",
    points: 50,
    tran_code: "T2",
    amount: 50,
    content: "Payment sent",
  },
  {
    id: 5,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
    date: "2024-06-28",
    name: "Transaction 2",
    type: "minus",
    points: 50,
    tran_code: "T2",
    amount: 50,
    content: "Payment sent",
  },
];

const pendingTransactions = [
    // Add some sample transactions data here
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
      date: "2024-06-29",
      name: "Transaction 1",
      type: "minus",
      points: 100,
      tran_code: "T1",
      amount: 100,
      content: "Payment received",
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
      date: "2024-06-28",
      name: "Transaction 2",
      type: "plus",
      points: 50,
      tran_code: "T2",
      amount: 50,
      content: "Payment sent",
    },
    {
        id: 3,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
        date: "2024-06-29",
        name: "Transaction 1",
        type: "minus",
        points: 100,
        tran_code: "T1",
        amount: 100,
        content: "Payment received",
      },
      {
        id: 4,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
        date: "2024-06-28",
        name: "Transaction 2",
        type: "plus",
        points: 50,
        tran_code: "T2",
        amount: 50,
        content: "Payment sent",
      },
      {
        id: 5,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
        date: "2024-06-28",
        name: "Transaction 2",
        type: "plus",
        points: 50,
        tran_code: "T2",
        amount: 50,
        content: "Payment sent",
      },
      {
        id: 6,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&",
        date: "2024-06-28",
        name: "Transaction 2",
        type: "plus",
        points: 50,
        tran_code: "T2",
        amount: 50,
        content: "Payment sent",
      },
  ];


const TransactionList = ({selectedTab, onTransactionClick }) => {
    const transactions = selectedTab === "history" ? historyTransactions : pendingTransactions;

  return (
    <div className="overflow-y-auto max-h-[450px]">
      {transactions.map((trans) => (
        <div key={trans.id} onClick={() => onTransactionClick(trans)}>
          <Transaction trans={trans} />
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
