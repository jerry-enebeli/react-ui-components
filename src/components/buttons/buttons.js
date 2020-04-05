import React from "react";
import "./style.scss";

const Button = (props) => {
  let buttonType = "";

  switch (props.type) {
    case "primary":
      buttonType = "btn btn--primary";
      break;
    case "danger":
      buttonType = "btn btn--danger";
      break;
    case "dashed":
      buttonType = "btn btn--dashed";
      break;
    default:
      buttonType = "btn";
      break;
  }

  switch (props.shape) {
    case "round":
      buttonType = `${buttonType} btn--circle`;
      break;
    default:
      break;
  }

  return (
      <button className={buttonType}  {...props} type="button">{props.children}</button>
  );
};

export default Button;
