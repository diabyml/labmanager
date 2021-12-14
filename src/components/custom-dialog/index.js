import React from "react";
import "./styles.scss";

import ButtonIcon from "../button-icon/index";

import { MdClose } from "react-icons/md";

function CustomDialog({ children, onClose }) {
  return (
    <div className="overlay bg--overlay">
      <div className="content pt-xl px-md bg--white shadow-lg border-gray">
        <div className="close-container">
          <ButtonIcon variant={"accent"} Icon={MdClose} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default CustomDialog;
