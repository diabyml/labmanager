import React from "react";
import "./styles.scss";

// import ButtonIcon from "../button-icon/index";

// import { MdClose } from "react-icons/md";

function CustomDialog({ children, onClose }) {
  return (
    <div className="flex items-center justify-center overlay bg--overlay">
      <div className="content component bg--white shadow-lg border-gray">
        <div className="close-container">
          {/* <ButtonIcon variant={"accent"} Icon={MdClose} onClick={onClose} /> */}
        </div>
        {children}
      </div>
    </div>
  );
}

export default CustomDialog;
