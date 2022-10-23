import React, { useState, useEffect } from "react";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";
import "./TaskCard.css";

function TaskCard(props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState();
  const [isLabel, setIsLabel] = useState(props.status);

  const getBadgeStyle = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      case "Pending":
        return "orange";
      default:
        return "grey";
    }
  };

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge
          label={props.status}
          color={getBadgeStyle()}
          isTooltipOpen={isTooltipOpen}
          setIsTooltipOpen={setIsTooltipOpen}
          status={props.status}
          isLabel={isLabel}
          setIsLabel={setIsLabel}
        />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
