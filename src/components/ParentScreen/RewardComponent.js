import { useState } from "react";
import React from 'react';

const InputField = ({ placeholder, setValue }) => (
  <input
    className="justify-center mt-4 px-4 py-2 bg-white rounded-2xl border border-solid border-neutral-200 text-ellipsis"
    type="text"
    placeholder={placeholder}
    aria-label={placeholder}
    onChange={(e) => setValue(e.target.value)}
  />
);

function RewardComponent() {
  const [reason, setReason] = useState("");
  const [reward, setReward] = useState("");

  const handleCongrats = (e) => {
    e.preventDefault();
    console.log(`Reason: ${reason}`);
    console.log(`Reward: ${reward}`);
  }

  return (
    <main className="flex flex-col self-center px-5 mt-9 w-full leading-[150%] max-w-[414px]">
      <h1 className="self-center text-3xl font-semibold text-black">Reward</h1>
      <form onSubmit={handleCongrats} className="flex flex-col justify-center mt-20 text-lg text-zinc-500">
        <label htmlFor="reasonInput" className="sr-only">Reason</label>
        <InputField 
          placeholder="Reason" 
          id="reasonInput"
          setValue={setReason} />
        <label htmlFor="rewardInput" className="sr-only">Reward</label>
        <InputField 
          placeholder="Reward" 
          id="rewardInput"
          setValue={setReward} />
      <button type="submit" className="flex flex-col justify-center self-end mt-12 max-w-full text-lg text-white w-[119px] px-5 py-4 bg-teal-400 rounded-3xl">
        Congrats
      </button>
      </form>
    </main>
  );
}

export default RewardComponent;