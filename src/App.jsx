<<<<<<< HEAD
import React, { useState, createContext } from "react";
=======
import React, { useState, useEffect, createContext } from "react";
>>>>>>> update-filter-with-badge-change
import TaskViewer from "./components/task-viewer/TaskViewer";
import "./App.css";

const data = [
  {
    id: "T-1",
    name: "Create a Design System for Enum Workspace.",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-2",
    name: "12 Create a Design System for Enum Workspace.",
    status: "In Progress",
    dueDate: new Date(2022, 7, 24),
  },
  {
    id: "T-3",
    name: "13 Create a Design System for Enum Workspace.",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-4",
    name: "14 Create a Design System for Enum Workspace.",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-5",
    name: "15 Create a Design System for Enum Workspace.",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-6",
    name: "Create a Design System for Enum Workspace.",
    status: "Pending",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-7",
    name: "16 Create a Design System for Enum Workspace.",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
];

export const TodoContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: `T-${prevState.length + 1}`,
      },
    ]);
  };

  const removeItem = (removableId) => {
    console.log("id to b removed as in App: ", removableId);
    const shorterList = taskList.filter((item) => item.id !== removableId);
    console.log(shorterList);
    setTaskList(shorterList);
  };

  const moveItem = (movableId, movableStatus) => {
    const changedList = taskList.filter((item) => item.id === movableId);
    const itemToMove = {
      key: movableId,
      id: movableId,
      name: changedList[0].name,
      dueDate: changedList[0].dueDate,
      taskDetails: changedList[0].taskDetails,
      status: movableStatus,
    };

    console.log("movableStatus", movableStatus);

    setTaskList((prevState) => [
      ...prevState,
      {
        ...itemToMove,
      },
    ]);
  };

  const orderList = (list) => {
    setTaskList(list);
    console.log("orderedList: ", taskList);
  };

  const handleTaskChange = (changedTask) => {
    removeItem(changedTask.changedId);
    moveItem(changedTask.changedId, changedTask.changedStatus);
    console.log("task id in app: ", changedTask);
    //orderList(taskList);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <TodoContext.Provider value={taskList}>
<<<<<<< HEAD
          <TaskViewer onNewTaskAdd={onNewTaskAdd} taskList={taskList} />
=======
          <TaskViewer
            onNewTaskAdd={onNewTaskAdd}
            taskList={taskList}
            onLabelChange={handleTaskChange}
          />
>>>>>>> update-filter-with-badge-change
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
