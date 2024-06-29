import { useState } from 'react';
import React from 'react';
import ChildrenList from '../components/ParentScreen/ChildrenList'; // Adjust the path according to your file structure
import TaskManagement from '../components/ParentScreen/TaskManager'; // Adjust the path according to your file structure

import './ParentScreen.css';

const ParentScreen = () => {
    const [selectedChild, setSelectedChild] = useState(null);
  
    const childrenData = [
        {
          childID: 0,
          name: 'Andy',
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&',
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

    const detailedTasks = [
        {
            childID: 0,
            name: 'Andy',
            unfinishedTasks: [
                { taskID: 0, date: "24/6/2024", task: "Folding clothes", coins: 30, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d73b85412e3a0d0057a1fc619dfed2dd2cfb9ddb5475c35506ce4cc0e313f5a?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Achieving good grade", coins: 400, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bbd74c81c08d0a73718af7e28a0ffabcb24a949b7ae2b0ed497a3258a231dee?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Running 1km", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3af2947296bc36a75641963a4a4a84843807bb92780c5da6b43009bbb240d57?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Folding clothes", coins: 30, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d73b85412e3a0d0057a1fc619dfed2dd2cfb9ddb5475c35506ce4cc0e313f5a?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Achieving good grade", coins: 400, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bbd74c81c08d0a73718af7e28a0ffabcb24a949b7ae2b0ed497a3258a231dee?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Running 1km", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3af2947296bc36a75641963a4a4a84843807bb92780c5da6b43009bbb240d57?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
            ],
            finishedTasks: [
                { taskID: 0, date: '24/6/2024', task: 'Running 1km', coins: 20, imageUrl: "" },
            ],
            waitingTasks: [
                { taskID: 0, date: '24/6/2024', task: 'Achieving good grade', coins: 400, imageUrl: "" },
                { taskID: 0, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
            ],
        },
        {
            childID: 1,
            name: 'Anna',
            unfinishedTasks: [
                { taskID: 0, date: "24/6/2024", task: "Folding clothes", coins: 30, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d73b85412e3a0d0057a1fc619dfed2dd2cfb9ddb5475c35506ce4cc0e313f5a?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Achieving good grade", coins: 400, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bbd74c81c08d0a73718af7e28a0ffabcb24a949b7ae2b0ed497a3258a231dee?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Running 1km", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3af2947296bc36a75641963a4a4a84843807bb92780c5da6b43009bbb240d57?apiKey=8b7bde825caa4a699878600964889e8b&" },
                { taskID: 0, date: "24/6/2024", task: "Taking care brothers", coins: 20, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a9bcfa78b9f6569fcb7064515f2fe73ccda660cab806e36def462aee95e8c10?apiKey=8b7bde825caa4a699878600964889e8b&" },
            ],
            finishedTasks: [
                { taskID: 0, date: '24/6/2024', task: 'Running 1km', coins: 20, imageUrl: "" },
            ],
            waitingTasks: [
                { taskID: 0, date: '24/6/2024', task: 'Achieving good grade', coins: 400, imageUrl: "" },
            ],
        },
    ];
    
    const showTaskManager = (child) => {
      setSelectedChild(child);
    };
  
    return (
        <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">Welcome back, Jessica!</h1>
                <h2 className="text-2xl font-bold mb-4">Your lovely children</h2>
                <div className="relative-container">
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
                        />
                        </div>
                    )}
                </div>  
            </div>
        </div>
        </div>
    );
};

export default ParentScreen;
