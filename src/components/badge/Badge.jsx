import React, { useState, useEffect } from "react";
import BadgeTooltip from "../badge-tooltip/BadgeTooltip";
import "./Badge.css";

const BADGE_COLORS = ["grey", "blue", "orange", "green", "black"];

const Badge = (props) => {
  const { label, isTooltipOpen, setIsTooltipOpen, isLabel, setIsLabel } = props;
  const [isBadgeStyle, setIsBadgeStyle] = useState();

  const openTooltip = () => {
    setIsTooltipOpen(true);
  };

  const getBadgeStyle = (label) => {
    switch (label) {
      case "Todo":
        return "gri";
      case "In Progress":
        return "albastru";
      case "Completed":
        return "verde";
      case "Pending":
        return "portocaliu";
      default:
        return "grey";
    }
  };

  const handleChangeLabel = (theLabel) => {
    setIsLabel(theLabel);
    setIsBadgeStyle(getBadgeStyle(theLabel));
    console.log("Should update to this label: ", theLabel);
  };

  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };

  useEffect(() => {
    console.log("now: ", isLabel);
  }, [isLabel]);

  const badgeColor = BADGE_COLORS.includes(props.color) ? props.color : "grey";
  return (
    <>
      <div
        className={`badge ${badgeColor} ${isBadgeStyle}`}
        onClick={openTooltip}
      >
        <p>{isLabel}</p>
      </div>
      <BadgeTooltip
        isTooltipOpen={isTooltipOpen}
        onClose={closeTooltip}
        changeTheLabel={handleChangeLabel}
      />
    </>
  );
};

export default Badge;
