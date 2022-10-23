import React, { useState } from "react";

const BadgeOption = (props) => {
  const [isLabel, setIsLabel] = useState(props.status);

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
