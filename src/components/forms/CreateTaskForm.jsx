import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./CreateTaskForm.css";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskName: "",
    dueDate: "",
    taskDetails: "",
    isValid: true,
  });

  useEffect(() => {
    if (taskName.length === 0) {
      setFormValidation((prevState) => ({
        ...prevState,
        taskName: "This field is Required!",
        isValid: false,
      }));
    } else {
      setFormValidation((prevState) => ({
        ...prevState,
        taskName: "",
        isValid: true,
      }));
    }
  }, [taskName]);

  useEffect(() => {
    if (dueDate.length === 0) {
      setFormValidation((prevState) => ({
        ...prevState,
        dueDate: "This field is Required!",
        isValid: false,
      }));
    } else {
      setFormValidation((prevState) => ({
        ...prevState,
        dueDate: "",
        isValid: true,
      }));
    }
  }, [dueDate]);

  useEffect(() => {
    if (taskDetails.length === 0) {
      setFormValidation((prevState) => ({
        ...prevState,
        taskDetails: "This field is Required!",
        isValid: false,
      }));
    } else {
      setFormValidation((prevState) => ({
        ...prevState,
        taskDetails: "",
        isValid: true,
      }));
    }
  }, [taskDetails]);

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const resetForm = () => {
    setTaskName("");
    setDueDate("");
    setTaskDetails("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      taskDetails: taskDetails,
      status: "Todo",
    };

    props.addNewTask(newTask);
    resetForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            value={taskName}
            name="taskName"
            onChange={handleNameChange}
            className={clsx("input-primary", {
              ["error"]: formValidation.taskName,
            })}
            type="text"
          />
          <p className="error-message">{formValidation.taskName}</p>
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            value={dueDate}
            name="dueDate"
            onChange={handleDateChange}
            className={clsx("input-primary", {
              ["error"]: formValidation.dueDate,
            })}
            type="date"
          />
          <p className="error-message">{formValidation.dueDate}</p>
        </div>

        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            value={taskDetails}
            name="taskDetails"
            onChange={handleDetailsChange}
            className={clsx("input-primary", {
              ["error"]: formValidation.taskDetails,
            })}
            cols="30"
            rows="10"
          ></textarea>
          <p className="error-message">{formValidation.taskDetails}</p>
        </div>

        <button
          disabled={!formValidation.isValid}
          className="button-primary"
          type="submit"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
