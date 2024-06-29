import React, { useState } from 'react';

const TransferForm = () => {
  const [bankId, setBankId] = useState('');
  const [money, setMoney] = useState('');
  const [note, setNote] = useState('');

  const onSubmit = (e) => {}


  return (
    <div>
      <form onSubmit={onSubmit} className="p-4 mb-20">
        <h1 className="text-2xl text-center font-semibold mb-10">Transfer Money</h1>
        <input
          type="text"
          placeholder="Bank ID"
          name="bankId"
          value={bankId}
          onChange={(e) => setBankId(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="number"
          placeholder="Amount"
          name="money"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="text"
          placeholder="Note"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default TransferForm;
