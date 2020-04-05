import React from "react";
import "./style.scss";

const separator = (position, totalChildren, separator) => {
  return (
    <>
      {position < totalChildren - 1 ? (
        <div className="breadcrumb__separator">
          {separator ? separator : "/"}
        </div>
      ) : null}
    </>
  );
};

const Breadcrumb = {
  Items: (props) => {
    return (
      <a className="breadcrumb__item" href={props.link}>
        {props.name}
      </a>
    );
  },

  Breadcrumb: (props) => {
    return (
      <span style={{ display: "flex" }}>
        {props.children.map((child, i) => {
          return (
            <span style={{ display: "flex", "margin-left": "5px" }}>
              {child} {separator(i, props.children.length, props.separator)}
            </span>
          );
        })}
      </span>
    );
  },
};

export default Breadcrumb;
