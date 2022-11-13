import React from "react";

const BadgeOption = (props) => {
  const onStatusChange = () => {
    props.onStatusClick();
    props.changeTheLabel(props.status);
  };

  return (
    <div
      className={`badge badge-in-tooltip ${props.color}`}
      onClick={onStatusChange}
    >
      <p>{props.status}</p>
    </div>
  );
};

export default BadgeOption;
