import React, { useState } from "react";
import ChildrenHomeProductList from "../components/ChildrenScreen/ChildrenHomeProductList";
import TaskList from "../components/ChildrenScreen/ChildrenTaskList";
import BottomNavigation from "../components/BottomNavigation";
import ChatbotButton from "../components/ChildrenScreen/ChatbotButton";
import coin from "../assets/coin.png";

const ChildrenHomeScreen = () => {
  const [showFinishedTasks, setShowFinishedTasks] = useState(true);

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">Welcome back, Andy!</h1>
        <div className="bg-mainColor text-white px-3 py-1 rounded-full">
          <div className="flex items-center">
            <span className="text-lg font-semibold">1024</span>
            <img src={coin} alt="Coin Icon" className="h-6 w-6 ml-1" />
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-4">
        Try your best to achieve your goals
      </h2>

      <div className="flex-shrink-0">
        <ChildrenHomeProductList />
      </div>

      <div className="flex justify-left space-x-4 my-4 flex-shrink-0">
        <button
          className={`px-4 py-2 rounded-full ${
            !showFinishedTasks ? "bg-mainColor text-black" : "bg-gray-200"
          }`}
          onClick={() => setShowFinishedTasks(false)}
        >
          Unfinished
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            showFinishedTasks ? "bg-mainColor text-black" : "bg-gray-200"
          }`}
          onClick={() => setShowFinishedTasks(true)}
        >
          Finished
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        {showFinishedTasks ? (
          <TaskList type="finished" />
        ) : (
          <TaskList type="unfinished" />
        )}
      </div>

      <div className="flex-shrink-0">
        <BottomNavigation isMain={true} />
      </div>

      <ChatbotButton />
    </div>
  );
};

export default ChildrenHomeScreen;
