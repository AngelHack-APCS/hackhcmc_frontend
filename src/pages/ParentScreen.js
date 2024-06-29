import { useState, useEffect } from 'react';
import React from 'react';
import ChildrenList from '../components/ParentScreen/ChildrenList'; // Adjust the path according to your file structure
import TaskManagement from '../components/ParentScreen/TaskManager'; // Adjust the path according to your file structure

import son from '../assets/son.png';
import chore from '../assets/typeTask/chore.png';
import exercise from '../assets/typeTask/exercise.png';
import studying from '../assets/typeTask/studying.png';
import caring from '../assets/typeTask/caring.png';

import './ParentScreen.css';
import BottomParentNavigation from '../components/BottomParentNavigation';

var childrenData = [
    {
      childID: 0,
      name: 'Andy',
      imageUrl: son,
      tasks: [
        { name: 'Wash blankets', coins: null },
        { name: 'Running', coins: 20 },
      ],
      balance: 20,
      waitingTasks: 2,
    },
    {
      childID: 1,
      name: 'Anna',
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/16ed3458c3e5e370a068f07e05a79e661b0c30525f436e0dee94f280f4f275dd?apiKey=8b7bde825caa4a699878600964889e8b&",
      tasks: [
        { name: 'Folding clothes', coins: null },
        { name: 'Wash dishes', coins: 20 },
        { name: 'Running', coins: 50 },
      ],
      balance: 70,
      waitingTasks: 0,
    },
];

var detailedTasks = [
    {
        childID: 0,
        name: 'Andy',
        unfinishedTasks: [
            { taskID: 0, date: "24/6/2024", task: "Folding clothes", coins: 30, imageUrl: chore },
            { taskID: 1, date: "24/6/2024", task: "Achieving good grade", coins: 400, imageUrl: studying },
            { taskID: 2, date: "24/6/2024", task: "Running 1km", coins: 20, imageUrl: exercise },
            { taskID: 3, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: caring },
            { taskID: 4, date: "24/6/2024", task: "Folding clothes", coins: 30, imageUrl: chore },
            { taskID: 5, date: "24/6/2024", task: "Achieving good grade", coins: 400, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bbd74c81c08d0a73718af7e28a0ffabcb24a949b7ae2b0ed497a3258a231dee?apiKey=8b7bde825caa4a699878600964889e8b&" },
            { taskID: 6, date: "24/6/2024", task: "Running 1km", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3af2947296bc36a75641963a4a4a84843807bb92780c5da6b43009bbb240d57?apiKey=8b7bde825caa4a699878600964889e8b&" },
            { taskID: 7, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
        ],
        finishedTasks: [
            { taskID: 8, date: '24/6/2024', task: 'Running 1km', coins: 20, imageUrl: "" },
        ],
        waitingTasks: [
            { taskID: 9, date: '24/6/2024', task: 'Achieving good grade', coins: 400, imageUrl: "" },
            { taskID: 10, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
        ],
    },
    {
        childID: 1,
        name: 'Anna',
        unfinishedTasks: [
            { taskID: 11, date: "24/6/2024", task: "Folding clothes", coins: 30, imageUrl: chore },
            { taskID: 12, date: "24/6/2024", task: "Achieving good grade", coins: 400, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bbd74c81c08d0a73718af7e28a0ffabcb24a949b7ae2b0ed497a3258a231dee?apiKey=8b7bde825caa4a699878600964889e8b&" },
            { taskID: 13, date: "24/6/2024", task: "Running 1km", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3af2947296bc36a75641963a4a4a84843807bb92780c5da6b43009bbb240d57?apiKey=8b7bde825caa4a699878600964889e8b&" },
            { taskID: 14, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
        ],
        finishedTasks: [
            { taskID: 15, date: '24/6/2024', task: 'Running 1km', coins: 20, imageUrl: "" },
        ],
        waitingTasks: [
            { taskID: 16, date: '24/6/2024', task: 'Achieving good grade', coins: 400, imageUrl: "" },
        ],
    },
];

function AddButton() {
    return (
      <button
        className="flex justify-center font-extrabold items-center rounded-full bg-teal-400 bg-opacity-50 h-[35px] w-[35px]"
        aria-label="Add"
      >
        +
      </button>
    );
}

const syncTasks = () => {
    // update tasks for childrenData by getting top 3 tasks from unfinishedTasks and top 3 tasks from finishedTasks
    // replace coins with null for unfinishedTasks
    // calculate balance by summing up coins from finishedTasks
    // update waitingTasks for childrenData by getting length of waitingTasks

    childrenData.forEach(child => {
        let detailedTask = detailedTasks.find(task => task.childID === child.childID);
        child.tasks = detailedTask.unfinishedTasks.slice(0, 3).map(task => ({ name: task.task, coins: null }));
        child.tasks = child.tasks.concat(detailedTask.finishedTasks.slice(0, 3).map(task => ({ name: task.task, coins: task.coins }))); 
        child.balance = detailedTask.finishedTasks.reduce((acc, task) => acc + task.coins, 0);
        child.waitingTasks = detailedTask.waitingTasks.length;
    });
}

const ParentScreen = () => {
    const [selectedChild, setSelectedChild] = useState(null);
    
    useEffect(() => {
        syncTasks();
    }); // Empty dependency array means this runs once on mount

    const removeTask = (childID, taskID) => {
        console.log(`Remove task ${taskID} from child ${childID}`);

        let child = detailedTasks.find(child => child.childID === childID);
        let taskIndex = child.unfinishedTasks.findIndex(task => task.taskID === taskID);

        if (taskIndex !== -1)
            child.unfinishedTasks.splice(taskIndex, 1);

        let taskIndex1 = child.finishedTasks.findIndex(task => task.taskID === taskID);  

        if (taskIndex1 !== -1)
            child.finishedTasks.splice(taskIndex1, 1);

        let taskIndex2 = child.waitingTasks.findIndex(task => task.taskID === taskID);

        if (taskIndex2 !== -1)
            child.waitingTasks.splice(taskIndex2, 1);

        syncTasks();
    }

    const approveWaitingTask = (childID, taskID) => {
        console.log(`Approve task ${taskID} from child ${childID}`);

        let child = detailedTasks.find(child => child.childID === childID);
        let taskIndex = child.waitingTasks.findIndex(task => task.taskID === taskID);
        let task = child.waitingTasks[taskIndex];
        child.waitingTasks.splice(taskIndex, 1);
        // push at top
        child.finishedTasks.unshift(task);

        syncTasks();
    }

    const addTask = (childID, date, task, coins, imageUrl) => {
        console.log(`Add task to child ${childID}`);

        let child = detailedTasks.find(child => child.childID === childID),
            // set timestamp as taskID
            taskID = Date.now();
        // push at top
        child.unfinishedTasks.unshift({ taskID, date, task, coins, imageUrl });

        syncTasks();
    }
    
    const showTaskManager = (child) => {
      setSelectedChild(child);
    };
  
    return (
        <div className="relative min-h-screen bg-gray-100 h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">Welcome back, Jessica!</h1>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Your lovely children</h2>
                    <AddButton />
                </div>
                <div className="relative-container" style={{ height: '720px', overflowY: 'auto'}}>
                    <ChildrenList
                        childrenData={childrenData}
                        showTaskManager={showTaskManager}
                        />
                    {selectedChild !== null && (
                        <div className='task-manager-container slide-up'>
                        <TaskManagement
                            {...detailedTasks.find(child => child.childID === selectedChild)}
                            balance={childrenData.find(child => child.childID === selectedChild).balance}
                            onClose={() => setSelectedChild(null)}
                            removeTask={removeTask}
                            approveWaitingTask={approveWaitingTask}
                            addTask={addTask}
                        />
                        </div>
                    )}
                </div>  
                <div className="flex-shrink-0">
                    <BottomParentNavigation className='bottom-nav' />
                </div>
            </div>
        </div>
        </div>
    );
};

export default ParentScreen;

