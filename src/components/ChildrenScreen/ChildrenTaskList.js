import React from "react";
import {
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  SwipeAction,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import houseIcon from "../../assets/house.png";
import exerciseIcon from "../../assets/exercise.png";
import studyingIcon from "../../assets/studying.png";
import ChildrenTask from "./ChildrenTask";

const TaskList = ({ type }) => {
  const tasks =
    type === "finished"
      ? [
          {
            id: 1,
            name: "Completed Task 1",
            icon: houseIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 2,
            name: "Completed Task 2",
            icon: exerciseIcon,
            date: "24/6/2024",
            points: 400,
          },
          {
            id: 3,
            name: "Completed Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
        ]
      : [
          {
            id: 1,
            name: "Unfinished Task 1",
            icon: exerciseIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 2,
            name: "Unfinished Task 2",
            icon: houseIcon,
            date: "24/6/2024",
            points: 400,
          },
          {
            id: 3,
            name: "Unfinished Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 4,
            name: "Unfinished Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 5,
            name: "Unfinished Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 6,
            name: "Unfinished Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 7,
            name: "Unfinished Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
          {
            id: 8,
            name: "Unfinished Task 3",
            icon: studyingIcon,
            date: "24/6/2024",
            points: 20,
          },
        ];

  const handleFinish = (taskId) => {
    console.log(`Task ${taskId} finished!`);
    // Add your logic to handle finishing the task here
  };

  const trailingActions = (taskId) => (
    <TrailingActions>
      <SwipeAction
        onClick={() => handleFinish(taskId)}
        className="flex items-center justify-end bg-mainColor text-white px-4 py-2 rounded-lg shadow-md"
      >
        Finish
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className="overflow-y-auto mb-20">
      <SwipeableList>
        {tasks.map((task) => (
          <SwipeableListItem
            key={task.id}
            trailingActions={trailingActions(task.id)}
          >
            <ChildrenTask task={task} />
          </SwipeableListItem>
        ))}
      </SwipeableList>
    </div>
  );
};

export default TaskList;
