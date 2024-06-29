import React from 'react';
import TaskList from './TaskList';

import login from '../../assets/login.png';

const ChildCard = ({ childID, name, imageUrl, tasks, balance, waitingTasks, onClickTask }) => (
  <section className="flex gap-5 items-start px-5 pt-5 pb-1.5 mt-7 text-black rounded-3xl bg-slate-100">
    <div className="flex flex-col items-center text-3xl font-bold whitespace-nowrap">
      <img 
        loading="lazy" 
        src={login} 
        onClick={() => console.log("login")}
        alt="" 
        className="self-start w-8 aspect-square" />
      <img loading="lazy" src={imageUrl} alt={`${name}'s avatar`} className="mt-10 aspect-square w-[104px]" />
      <div className="mt-10">{name}</div>
    </div>
    <div className="shrink-0 self-stretch my-auto w-px bg-black border border-black border-solid h-[267px]" />
    <div className="flex flex-col mt-3.5 text-base w-full">
      <div className="task-list w-full justify-end"
            onClick={() => onClickTask(name)}
            role='button'
            tabIndex={0}>
        <TaskList tasks={tasks} waitingTasks={waitingTasks} />
      </div>
      <div className="flex gap-2 items-start px-px mt-36 font-semibold whitespace-nowrap w-full justify-between">
        <div className="flex flex-col">
          <div className="shrink-0 self-end h-px bg-black border border-black border-solid w-[120px]" />
          <div className="mt-3">Balance</div>
        </div>
        <div className="mt-3.5">{balance} 🪙</div>
      </div>
    </div>
  </section>
);

export default ChildCard;