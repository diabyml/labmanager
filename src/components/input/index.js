import React from "react";

import "./style.scss";

function Input({ label, labelFor, handler, ...rest }) {
  return (
    <div className="flex flex-column">
      <label htmlFor={labelFor} className="form-label mb-sm">
        {label}
      </label>
      <input
        className="form-control"
        id={labelFor}
        onChange={handler}
        {...rest}
      />
    </div>
  );
}

export default Input;
