import React from 'react';

function TaskItem({ name, coins }) {
  return (
    <li className="flex justify-between items-center">
      <span>{name}</span>
      {coins !== null ? (
        <span className="text-yellow-500">{coins} 🪙</span>
      ) : (
        <span className="text-gray-400">⏳</span>
      )}
    </li>
  );
}

export default TaskItem;