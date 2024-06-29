import { useState } from "react";
import React from "react";

import chore from "../../assets/typeTask/chore.png";
import exercise from "../../assets/typeTask/exercise.png";
import studying from "../../assets/typeTask/studying.png";
import caring from "../../assets/typeTask/caring.png";

const InputField = ({ label, icon, children }) => (
  <div className="flex gap-4 px-4 py-2 text-base bg-white rounded-2xl border border-solid border-neutral-200">
    <div className="flex-1 text-ellipsis">{label}</div>
    {children}
    {icon && <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />}
  </div>
);

function CreateTaskForm({ childID, addTask }) {
  const [taskType, setTaskType] = useState("");
  const [taskName, setTaskName] = useState("");
  const [reward, setReward] = useState("");
  const [isChanged, setIsChanged] = useState("0");

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
    <main className="flex flex-col self-center mt-8 mb-32 w-full leading-[150%] max-w-[394px]">
      <h1 className="self-center text-3xl font-semibold text-black">Create task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-20 text-lg text-zinc-500">
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
        {/* <div className="justify-center px-4 py-2 mt-12 bg-white rounded-2xl border border-solid border-neutral-200 text-ellipsis">
          <label htmlFor="taskName" className="sr-only">Task's name</label>
          <input
            id="taskName"
            type="text"
            placeholder="Task's name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full bg-transparent"
          />
        </div> */}

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
          className="self-end mt-10 px-8 py-5 bg-teal-400 rounded-3xl text-white text-lg"
        >
          Create
        </button>
      </form>
    </main>
  );
}

const AddComponent = ({ childID, addTask }) => {
  return (
    <CreateTaskForm childID={childID} addTask={addTask} />
  );
}

export default AddComponent;