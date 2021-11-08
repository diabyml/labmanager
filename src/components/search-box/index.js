import React from "react";

import { FaSearch } from "react-icons/fa";

import "./style.scss";

function SearchBox({ handler, ...rest }) {
  return (
    <div className="search-box">
      <FaSearch className="search-box__search-icon" />
      <input
        className="form-control"
        type="search"
        {...rest}
        onChange={handler}
      />
    </div>
  );
}

export default SearchBox;
