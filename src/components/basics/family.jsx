import React, { Children, cloneElement } from "react";
import "./family-member";

const Family = (props) => {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

export default Family;
