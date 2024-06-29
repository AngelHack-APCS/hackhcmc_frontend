import React from 'react';
import TaskItem from './TaskItem';

function TaskCounter({ count }) {
  if (count === 0) return null;

  return (
    <div className="justify-center items-center px-2.5 text-sm font-medium leading-5 text-white bg-red-400 rounded-3xl h-[27px] w-[27px]">
      {count}
    </div>
  );
}

function TaskList({ tasks, waitingTasks }) {
  return (
    <div>
      <div className='flex gap-5 justify-between whitespace-nowrap'>
        <h3 className="font-semibold mb-2">Tasks</h3>
        <TaskCounter count={waitingTasks} />
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;