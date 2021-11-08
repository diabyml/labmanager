import React from "react";

function ButtonIcon({ Icon, variant, ...rest }) {
  return (
    <button className={`btn btn--${variant}`} {...rest}>
      <Icon className="icon" />
    </button>
  );
}

export default ButtonIcon;
