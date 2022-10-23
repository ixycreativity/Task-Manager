import React from "react";
import Badge from "../badge/Badge";
import "./TaskFilter.css";

const FilterItem = (props) => {
  return (
    <div
      onClick={props.onStatusClick}
      className={`filter-item-container ${props.active && "active"}`}
    >
      <p className={`filter-option ${props.active && "active"}`}>
        {props.label}
      </p>
      <Badge isLabel={props.count} color="black" />
    </div>
  );
};

export default FilterItem;
