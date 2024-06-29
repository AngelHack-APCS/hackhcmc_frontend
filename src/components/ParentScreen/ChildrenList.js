import React from 'react';
import ChildCard from './ChildCard';

function ChildrenList({ childrenData, showTaskManager }) {
  return (
    <div className="space-y-4">
      {childrenData.map((child, index) => (
        <ChildCard 
            key={index} 
            {...child} 
            onClickTask={() => showTaskManager(child.childID)} />
      ))}
    </div>
  );
}

export default ChildrenList;