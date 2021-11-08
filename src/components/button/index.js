import React from "react";

function Button({ children, variant, size, isWide, disabled, ...rest }) {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${
        isWide && "btn--full-width"
      } ${disabled && "btn--disabled"} `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
