import React, { useState, useContext } from "react";
import { useEffect } from "react";
import BadgeOption from "./BadgeOption";
import { StatusContext } from "../task-viewer/TaskViewer";
import "./BadgeTooltip.css";

const BadgeTooltip = (props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  //const [isStatus, setIsStatus] = useState("");

  //const { selectedStatus, setSelectedStatus } = useContext(StatusContext);

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
      <BadgeOption
        color="grey"
        status="Todo"
        onStatusClick={() => {
          closeTooltip();
        }}
        changeTheLabel={props.changeTheLabel}
      />
      <BadgeOption
        color="blue"
        status="In Progress"
        onStatusClick={() => {
          closeTooltip();
        }}
        changeTheLabel={props.changeTheLabel}
      />
      <BadgeOption
        color="green"
        status="Completed"
        onStatusClick={() => {
          closeTooltip();
        }}
        changeTheLabel={props.changeTheLabel}
      />
      <BadgeOption
        color="orange"
        status="Pending"
        onStatusClick={() => {
          closeTooltip();
        }}
        changeTheLabel={props.changeTheLabel}
      />
    </div>
  );
};

export default BadgeTooltip;
