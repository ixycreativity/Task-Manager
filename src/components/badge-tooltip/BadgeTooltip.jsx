import React, { useState } from "react";
import { useEffect } from "react";
import "./BadgeTooltip.css";

const BadgeTooltip = (props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const closeTooltip = () => {
    setIsTooltipOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsTooltipOpen(props.isTooltipOpen);
  }, [props.isTooltipOpen]);

  return (
    <div className={`${isTooltipOpen ? "badge-tooltip" : "tooltip-hidden"}`}>
      <div className="badge grey badge-in-tooltip" onClick={closeTooltip}>
        <p>Todo</p>
      </div>
      <div className="badge blue badge-in-tooltip" onClick={closeTooltip}>
        <p>In Progress</p>
      </div>
      <div className="badge green badge-in-tooltip" onClick={closeTooltip}>
        <p>Completed</p>
      </div>
      <div className="badge orange badge-in-tooltip" onClick={closeTooltip}>
        <p>Pending</p>
      </div>
    </div>
  );
};

export default BadgeTooltip;
