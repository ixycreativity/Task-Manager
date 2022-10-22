import React from "react";
import BadgeTooltip from "../badge-tooltip/BadgeTooltip";
import "./Badge.css";

const BADGE_COLORS = ["grey", "blue", "orange", "green"];

const Badge = (props) => {
  const { label, isTooltipOpen, setIsTooltipOpen } = props;

  const openTooltip = () => {
    setIsTooltipOpen(true);
  };

  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };

  const badgeColor = BADGE_COLORS.includes(props.color) ? props.color : "grey";
  return (
    <>
      <div className={`badge ${badgeColor}`} onClick={openTooltip}>
        <p>{label}</p>
      </div>
      <BadgeTooltip isTooltipOpen={isTooltipOpen} onClose={closeTooltip} />
    </>
  );
};

export default Badge;
