import { useState } from "react";
import React from "react";

import chore from "../../assets/typeTask/chore.png";
import exercise from "../../assets/typeTask/exercise.png";
import studying from "../../assets/typeTask/studying.png";
import caring from "../../assets/typeTask/caring.png";
import { Sparkles } from "lucide-react";

const InputField = ({ label, icon, children }) => (
  <div className="flex gap-4 px-4 py-2 text-base bg-white rounded-2xl border border-solid border-neutral-200">
    <div className="flex-1 text-ellipsis">{label}</div>
    {children}
    {icon && <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />}
  </div>
);

const InputForm = ({handleSubmit, setTaskType, setTaskName, setReward, taskType, taskName, reward}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-5 text-lg text-zinc-500">
        <InputField label="Type of task">
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            className="flex-1 bg-transparent"
          >
            <option value="">Select type</option>
            <option value="Chore">Chore</option>
            <option value="Studying">Studying</option>
            <option value="Exercise">Exercise</option>
            <option value="Caring">Caring</option>
          </select>
        </InputField>

        <div className="mt-4 w-full">
          <InputField label={"Task's name"}>
            <input
              type="text"
              placeholder=""
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="flex-1 bg-transparent"
            />
          </InputField>
        </div>
        
        <div className="mt-4 w-full">
          <InputField label={"Set reward"}>
            <input
              type="text"
              placeholder=""
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              className="flex-1 bg-transparent"
            />
          </InputField>
        </div>
        <button
          type="submit"
          className="self-end mt-10 px-4 py-3 bg-teal-400 rounded-3xl text-white text-lg"
        >
          Create
        </button>
      </form>
  )
};

const SuggestionsComponent = ({}) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <h2 className="text-lg font-semibold text-black">Suggestion</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-1/2">

          <div className="flex gap-4">
            <img src={chore} alt="" className="w-12 aspect-square" />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Chore</span>
              <span className="text-sm">Wash the dishes</span>
            </div>
          </div>

          <div className="flex gap-4">
            <img src={exercise} alt="" className="w-12 aspect-square" />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Exercise</span>
              <span className="text-sm">Do 10 push-ups</span>
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-2 w-1/2">

          <div className="flex gap-4">
            <img src={studying} alt="" className="w-12 aspect-square" />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Studying</span>
              <span className="text-sm">Read 1 chapter</span>
            </div>
          </div>

          <div className="flex gap-4">
            <img src={caring} alt="" className="w-12 aspect-square" />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Caring</span>
              <span className="text-sm">Water the plants</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


function CreateTaskForm({ childID, addTask }) {
  const [taskType, setTaskType] = useState("");
  const [taskName, setTaskName] = useState("");
  const [reward, setReward] = useState("");
  const [isChanged, setIsChanged] = useState("0");
  const [isOpenedSuggestion, setIsOpenedSuggestion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ taskType, taskName, reward });

    let taskImg = "";
    switch (taskType) {
      case "Chore":
        taskImg = chore;
        break;
      case "Studying":
        taskImg = studying;
        break;
      case "Exercise":
        taskImg = exercise;
        break;
      case "Caring":
        taskImg = caring;
        break;
      default:
        taskImg = chore;
    }

    addTask(childID, new Date().toLocaleDateString("en-GB"), taskName, reward, taskImg);
    setTaskType("");
    setTaskName("");
    setReward("");
    setIsChanged(Date.now());

    console.log("Task added");
  };

  return (
    <main className="flex flex-col self-center mb-32 w-full leading-[150%] max-w-[394px]">
      <h1 className="self-center text-3xl font-semibold text-black">Create task</h1>
      <button
        className={"self-end mt-5 w-6 aspect-square"}
        onClick={() => setIsOpenedSuggestion(!isOpenedSuggestion)}
      >
        <Sparkles />
        {/* <span className="text-xs mt-1">Suggestion</span> */}
      </button>
      {isOpenedSuggestion ? (
        <SuggestionsComponent />
      ) : (
        <InputForm
          handleSubmit={handleSubmit}
          setTaskType={setTaskType}
          setTaskName={setTaskName}
          setReward={setReward}
          taskType={taskType}
          taskName={taskName}
          reward={reward}
        />
      )}
    </main>
  );
}

const AddComponent = ({ childID, addTask }) => {
  return (
    <CreateTaskForm childID={childID} addTask={addTask} />
  );
}

export default AddComponent;