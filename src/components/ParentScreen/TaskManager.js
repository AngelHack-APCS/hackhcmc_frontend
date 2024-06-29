import { useEffect, useState } from 'react';
import React from 'react';
import { X, Search, Radio, BookOpen } from 'lucide-react';
import { SwipeableList, SwipeableListItem, TrailingActions, SwipeAction, LeadingActions } from 'react-swipeable-list';
import BottomManager from './BottomManager';
import RewardComponent from './RewardComponent';
import InfoComponent from './InfoComponent';
import AddComponent from './AddComponent';
import 'react-swipeable-list/dist/styles.css';
import './TaskManager.css';

const TaskItem = ({ taskID, date, task, coins, imageUrl }) => (
  <div className="flex justify-between items-start py-2 pr-4 pl-4 mt-2 max-w-full rounded-xl bg-slate-100 w-full md:w-[432px] flex-wrap md:flex-nowrap">
    <div className="flex gap-3.5 flex-grow">
      <img loading="lazy" src={imageUrl} alt="" className="shrink-0 w-8 aspect-[1]" />
      <div className="flex flex-col my-auto">
        <time className="text-xs font-light text-zinc-600">{date}</time>
        <h3 className="mt-0.8 text-lg font-semibold text-black">{task}</h3>
      </div>
    </div>
    <div className="flex my-auto text-base text-yellow-500 whitespace-nowrap flex-grow-0">
      <span className="my-auto">{coins} 🪙</span>
    </div>
  </div>
);

const TaskList = ({ tasks, trailingAction, leadingAction, onTrailing, onLeading }) => (
  <div className="mt-2 task-list-container">
    <SwipeableList>
      {tasks.map((task, index) => (
        <SwipeableListItem
          key={index}
          trailingActions={trailingAction(task.taskID, onTrailing)}
          leadingActions={leadingAction(task.taskID, onLeading)}
        >
          <TaskItem {...task} />
        </SwipeableListItem>
      ))}
    </SwipeableList>
  </div>
);

const ChildProfile = ({ name, points }) => (
  <div className="flex items-center font-bold justify-between mb-4">
    <div className="flex items-center">
      <span className="text-2xl">{name}</span>
    </div>
    <div className="flex items-center">
      <span className="text-yellow-500 mr-1">{points} 🪙</span>
      {/* <span className="text-yellow-500">●</span> */}
    </div>
  </div>
);

const TaskCategories = ({ waitingTasksLength, onCategoryChange, selectedCategory }) => (
  <div className="flex space-x-2 mb-4">
    <button 
      onClick={() => onCategoryChange('unfinished')} 
      className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'unfinished' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
        Unfinished
    </button>
    <button 
      onClick={() => onCategoryChange('finished')} 
      className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'finished' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
        Finished
    </button>
    <button 
      onClick={() => onCategoryChange('waiting')} 
      className={`px-3 py-1 rounded-full text-sm ${selectedCategory === 'waiting' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
      Waiting for approval <span className="text-red-500">{waitingTasksLength}</span>
    </button>
  </div>
);

const TaskManagement = ({ childID, name, unfinishedTasks, finishedTasks, waitingTasks, balance, onClose, removeTask, approveWaitingTask, addTask }) => {
  const [currentTaskType, setCurrentTaskType] = useState('unfinished'); // Default to 'unfinished'
  const [currentTaskManager, setCurrentTaskManager] = useState('Tasks');
  const [currentStatusChanged, setCurrentStatusChanged] = useState('0');
  
  let tasks = [
    { date: '24/6/2024', task: 'Folding clothes', points: 30 },
    { date: '24/6/2024', task: 'Achieving good grade', points: 400 },
    { date: '24/6/2024', task: 'Running 1km', points: 20 },
    { date: '24/6/2024', task: 'Taking care brothers', points: 20 },
    { date: '24/6/2024', task: 'Taking care brothers', points: 20, onDelete: true },
  ];

  const trailingDeleteActions = (taskId, onDeleteTask) => (
    <TrailingActions>
      <SwipeAction
        onClick={() => onDeleteTask(taskId)}
        className="mt-2 flex items-center justify-end bg-red-500 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  const trailingApproveActions = (taskId, onApproveTask) => (
    <TrailingActions>
      <SwipeAction
        onClick={() => onApproveTask(taskId)}
        className="mt-2 flex items-center justify-end bg-mainColor text-white px-4 py-2 rounded-lg shadow-md"
      >
        Approve
      </SwipeAction>
    </TrailingActions>
  );

  const leadingDenyActions = (taskId, onDenyTask) => (
    <LeadingActions>
      <SwipeAction
        onClick={() => onDenyTask(taskId)}
        className="mt-2 flex items-center justify-end bg-red-500 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Deny
      </SwipeAction>
    </LeadingActions>
  );

  const handleDeleteTask = (index) => {
    console.log(`Delete task at index ${index}`);

    removeTask(childID, index);
    // let taskIndex = unfinishedTasks.findIndex(task => task.taskID === index);
    // unfinishedTasks.splice(taskIndex, 1);

    setCurrentStatusChanged(Date.now());
    console.log(`After delete: ${JSON.stringify(unfinishedTasks)}`);
  };

  const handleApproveTask = (index) => {
    console.log(`Approve task at index ${index}`);

    approveWaitingTask(childID, index);

    setCurrentStatusChanged(Date.now());
  };

  const handleDenyTask = (index) => {
    console.log(`Deny task at index ${index}`);

    removeTask(childID, index);

    setCurrentStatusChanged(Date.now());
  };

  const MainTasksComponent = ({}) => {
    // const [isOpenedCreateTask, setIsOpenedCreateTask] = useState(false);

    return (
    <>
    <TaskCategories 
        waitingTasksLength={waitingTasks.length} 
        onCategoryChange={setCurrentTaskType}
        selectedCategory={currentTaskType}
         />
      {currentTaskType === 'unfinished' && (
        <TaskList
          tasks={unfinishedTasks}
          trailingAction={trailingDeleteActions}
          onTrailing={handleDeleteTask}
          leadingAction={() => null}
          onLeading={() => null}
        />
      )}
      {currentTaskType === 'finished' && (
        <TaskList 
          tasks={finishedTasks} 
          trailingAction={() => null}
          onTrailing={() => null}
          leadingAction={() => null}
          onLeading={() => null}          
        />
      )}
      {currentTaskType === 'waiting' && (
        <TaskList
          tasks={waitingTasks}
          trailingAction={trailingApproveActions}
          onTrailing={handleApproveTask}
          leadingAction={leadingDenyActions}
          onLeading={handleDenyTask}
        />
      )}
      {/* <div className="flex justify-center items-center w-full h-full">
        <button className="justify-center self-center mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg">
          Create tasks
        </button>
      </div> */}
    </>
    );
  }

  // Component switch based on currentTaskManager
  const renderComponent = () => {
    // console.log(`Current task manager: ${currentTaskManager}`)
    switch (currentTaskManager) {
      case 'Tasks':
        return <MainTasksComponent tasks={tasks} />;
      case 'Reward':
        return <RewardComponent balance={balance} />;
      case 'Info':
        return <InfoComponent childID={childID} name={name} />;
      case 'Add':
        return <AddComponent childID={childID} addTask={addTask} />;
      default:
        return <MainTasksComponent tasks={tasks} />;
    }
  };


  useEffect(() => {
    console.log(`Child data: 
      ${childID}, 
      ${name}, 
      ${JSON.stringify(unfinishedTasks)}, 
      ${JSON.stringify(finishedTasks)}, 
      ${JSON.stringify(waitingTasks)}
    `)
    tasks = [...unfinishedTasks];
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg" style={{ height: '690px' }}>
      <div className="flex items-center">
          <X 
              className="mr-2 mb-3" 
              size={20} 
              onClick={() => onClose()} />
          <h1 className="text-2xl font-bold mb-4">Your lovely children</h1>
      </div>
      <ChildProfile name={name} points={balance} />
      <div>
        {renderComponent()}
      </div>
      {/* <div className="absolute bottom-0 w-full justify-between">
        <nav className="flex gap-5 justify-between items-start mb-3">
          <button className="text-teal-500">
            <Radio size={24} />
            Home
          </button>
          <button>
            <Search size={24} />
            Reward
          </button>
          <button>
            <BookOpen size={24} />
            Info
          </button>
        </nav>
      </div> */}
      <BottomManager  
        setTaskManager={setCurrentTaskManager} 
        currentTaskManager={currentTaskManager}
      />
    </div>
  );
};

export default TaskManagement;