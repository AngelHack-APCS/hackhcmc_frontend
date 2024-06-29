import React from 'react';
import close from '../../assets/close.png';
import '../../css/Cart.css';

const TransactionDetail = ({ tran, onClose, onApprove, onDecline }) => {
  if (!tran) {
    return null; // Return null if tran is null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center">
      <div className="bg-gray-50 p-4 rounded-t-lg relative min-w-[420px] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="pl-2">
            <img src={close} className="h-5 w-5" alt="Close" />
          </button>
          <h1 className="text-2xl font-bold text-center flex-1">Transaction Detail</h1>
        </div>
        <div className="overflow-y-auto mb-8">
          <div className="bg-colorPalette1 p-4 rounded-lg mb-2 shadow-md">
            <div className="mb-4">
              <span className="font-semibold">Transaction Code: </span>{tran.tran_code}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Date: </span>{tran.date}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Amount: </span>{tran.amount}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Content: </span>{tran.content}
            </div>
          </div>
        </div>
        <div className="flex justify-around mb-4">
          <button
            onClick={onApprove}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Approve
          </button>
          <button
            onClick={onDecline}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Decline
          </button>
        </div>
        <div className='mb-20 pb-20'></div>
        <div className='mb-20 pb-20'></div>
      </div>
    </div>
  );
};

export default TransactionDetail;
