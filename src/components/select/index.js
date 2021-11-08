import React from "react";

function Select({ label, options, handler, ...rest }) {
  return (
    <div className="flex flex-column">
      <span className="form-label mb-sm">{label}</span>
      <select className="form-control" onChange={handler} {...rest}>
        {options.map(({ id, value, text }) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
