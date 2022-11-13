import React, { useContext, useEffect } from "react";
import FilterItem from "./FilterItem";
import { TodoContext } from "../../App";
import { StatusContext } from "../task-viewer/TaskViewer";
import "./TaskFilter.css";

const taskFilterItems = [
  "All Tasks",
  "Todo",
  "In Progress",
  "Pending",
  "Completed",
];

const TaskFilter = () => {
  const todoItems = useContext(TodoContext);
  const { selectedStatus, setSelectedStatus } = useContext(StatusContext);

  const getCountByStatus = (status) => {
    console.log("todoItems:", todoItems);
    return todoItems.filter((item) => {
      if (status === "All Tasks") {
        return true;
      }
      return item.status === status;
    }).length;
  };

  useEffect(
    (status) => {
      getCountByStatus(status);
      console.log("TODO:", todoItems);
    },
    [todoItems]
  );

  return (
    <div className="filter-container">
      {taskFilterItems.map((item, index) => (
        <FilterItem
          active={selectedStatus === item}
          key={item}
          label={item}
          count={getCountByStatus(item)}
          onStatusClick={() => {
            setSelectedStatus(item);
          }}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
